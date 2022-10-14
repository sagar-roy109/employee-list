const express = require("express");
const {ApolloServer} = require("apollo-server-express");
const { GraphQLScalarType, Kind } = require("graphql");
const app = express();
require("./models/db");
const empModel = require("./models/employees");

const date = new GraphQLScalarType({
  name: "Date",
  description: "Date Custom Scalar Type",
	parseValue(value) {
    return new Date(value);
  },

  serialize(value) {
    return value.toLocaleDateString();
  },


});
const typeDefs = `
enum StatusType {
  Working
  Retired
}
input EmployeeInputs {
    firstName: String!
    lastName: String
    age: String
    dateOfJoining: Date
    title: String
    department: String
    employeeType: String
    currentStatus: StatusType = Working
}
scalar Date
type Employee {
    id: Int
    firstName: String
    lastName: String
    age: Int
    dateOfJoining: Date
    title: String
    department: String
    employeeType: String
    currentStatus: Boolean
},
type Query {
    employeeList: [Employee!]!
}
type Mutation {
    employeeCreate(employee: EmployeeInputs!): Employee!
}`;

const resolvers = {
  Date: date,
  Query: {
    employeeList,
  },
  Mutation: {
    employeeCreate,
  },
};
let employeesList = [];
async function employeeList() {
  await empModel.find({}).then((data) => {
    employeesList = data;
  });
  return employeesList;
}
async function employeeCreate(_, { employee }) {
  employee.id = employeesList.length + 1;
  employee.age = parseInt(employee.age);
  if(employee.currentStatus == "Working") employee.currentStatus = 1;
  await empModel.create(employee, function (err,data) {
    if(err){
      console.log(err);
    }
  });
  return employee;
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: (error) => {
    console.log(error);
    return error;
  },
});

app.use(express.static("public"));

server.start().then(() => {
  server.applyMiddleware({
    app,
    path: "/graphql",
    cors: true,
  });
});
app.listen(3000, function () {
  console.log("Server listening on Port 3000");
});
