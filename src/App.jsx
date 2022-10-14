function EmployeeTable(props) {
  let Rows = props.employees.map((employee) => (
    <Row key={employee.id} employee={employee} />
  ));
  return (
    <div>
      <table className="table table-dark mt-5">
        <thead className="bg-info">
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Age</th>
            <th scope="col">Date of Joining</th>
            <th scope="col">Title</th>
            <th scope="col">Department</th>
            <th scope="col">Employer Type</th>
          </tr>
        </thead>
        <tbody>{Rows}</tbody>
      </table>
    </div>
  );
}

function Row(props) {
  let emp = props.employee;
  return (
    <tr>
      <td>{emp.firstName}</td>
      <td>{emp.lastName}</td>
      <td>{emp.age}</td>
      <td>{emp.dateOfJoining}</td>
      <td>{emp.title}</td>
      <td>{emp.department}</td>
      <td>{emp.employeeType}</td>
    </tr>
  );
}

class EmployeeCreate extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    let fdata = document.forms.addEmp;
    let formData = {
      firstName: fdata.firstName.value,
      lastName: fdata.lastName.value,
      age: fdata.age.value,
      dateOfJoining: fdata.dateOfJoining.value,
      title: fdata.title.value,
      department: fdata.department.value,
      employeeType: fdata.employeeType.value,
    };
    this.props.validation(formData);
    fdata.firstName.value = "";
    fdata.lastName.value = "";
    fdata.age.value = "";
    fdata.dateOfJoining.value = "";
    fdata.title.value = "";
    fdata.department.value = "";
    fdata.employeeType.value = "";
  }
  render() {
    return (
      <form className="mt-5" name="addEmp" onSubmit={this.handleSubmit}>
        <div className="p-1 d-flex justify-content-center">
        <h5>Enter Employee Details: </h5>
        </div>
        <div className="row">
          <div className="col-12 form-group">
            <label>First Name</label>
            <input
              required
              type="text"
              className="form-control"
              name="firstName"
              placeholder="Enter employee first name"
            />
            <span className="m-1 text-danger">{this.props.firstNameError}</span>
          </div>
          <div className="col-12 form-group">
            <label>Last Name</label>
            <input
              required
              type="text"
              className="form-control"
              name="lastName"
              placeholder="Enter employee last name"
            />
            <span className="m-1 text-danger">{this.props.lastNameError}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-12 form-group">
            <label>Age</label>
            <input
              required
              type="number"
              className="form-control"
              name="age"
              placeholder="Enter employee age"
            />
            <span className="m-1 text-danger">{this.props.ageError}</span>
          </div>
          <div className="col-12 form-group">
            <label>Date of Joining</label>
            <input
              type="date"
              required
              className="form-control"
              name="dateOfJoining"
            />
            <span className="m-1 text-danger">
              {this.props.dateOfJoiningError}
            </span>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-12 form-group">
            <label>Title</label>
            <select className="form-control" name="title" required>
              <option>Select employee title</option>
              <option value="Employee">Employee</option>
              <option value="Manager">Manager</option>
              <option value="Director">Director</option>
              <option value="VP">VP</option>
            </select>
          </div>
          <div className="col form-group mt-3">
            <label>Department</label>
            <select className="form-control" name="department" required>
              <option>Select employee department</option>
              <option value="IT">IT</option>
              <option value="Marketing">Marketing</option>
              <option value="HR">HR</option>
              <option value="Engineering">Engineering</option>
            </select>
          </div>
          <div className="col-12 form-group mt-3">
            <label>Employee Type</label>
            <select className="form-control" name="employeeType" required>
              <option>Select employee type</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Contract">Contract</option>
              <option value="Seasonal">Seasonal</option>
            </select>
          </div>
        </div>
        <div className="p-1 mt-3">
        <button type="submit" className="btn btn-primary btn-lg">
          Add
        </button>
        </div>
      </form>
    );
  }
}

function EmployeeSearch() {
  return (
    <div className="container">
			<div>
				<h4 className="text-center">Search Employee Name </h4>
			</div>
			<div>
				<input type="text" placeholder="Search employee" />
			</div>
    </div>
  );
}

function Footer (){

	return(
		<footer className="bg-dark p-2 text-center mt-5">
		<p className="text-white">
Developed By - Sagar Roy
		</p>
		</footer>
	)
}
class EmployeeDirectory extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      firstNameError: "",
      lastNameError: "",
      ageError: "",
    };
    this.employeeCreate = this.employeeCreate.bind(this);
    this.validation = this.validation.bind(this);
  }
  componentDidMount() {
    this.loadData();
  }
  loadData() {
    const query = `query {
        employeeList {
          id
          firstName
          lastName
          age
          dateOfJoining
          title
          department
          employeeType
          currentStatus
        }
      }`;
    async function getEmployee(url = "", data = {}) {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
        }),
      });
      return response.json();
    }
    const result = getEmployee("/graphql", query).then((result) => {
      this.setState({
        employees: result.data.employeeList,
      });
      return result.data.employeeList;
    });
  }
  validation(formData) {
    let error = false;
    if (formData.firstName.length < 3 || formData.firstName.length > 20) {
      error = true;
      this.setState({
        firstNameError: "Choose a first name between 3-20 characters",
      });
    }
    if (formData.lastName.length < 3 || formData.lastName.length > 20) {
      error = true;
      this.setState({
        lastNameError: "Choose a last name between 3-20 characters",
      });
    }
    if (formData.age < 20 || formData.age > 70) {
      error = true;
      this.setState({
        ageError: "Choose age between 20-70 years",
      });
    }
    if (!error) {
      this.setState({
        ageError: "",
        lastNameError: "",
        firstNameError: "",
      });

      this.employeeCreate(formData);
    }
  }

  async employeeCreate(employee) {
    const query = `
              mutation employeeCreate($employee: EmployeeInputs!) {
                      employeeCreate(employee: $employee) {
                          firstName
                          lastName
                          age
                          dateOfJoining
                          title
                          department
                          employeeType
                      }
              }`;
    const response = await fetch("/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          employee,
        },
      }),
    });
      this.loadData();
  }

  render() {
		const footerColor = "'background:#000; color:fff'";
    return (

      <div>
        <EmployeeSearch />
        <EmployeeTable employees={this.state.employees} />
        <EmployeeCreate
          firstNameError={this.state.firstNameError}
          lastNameError={this.state.lastNameError}
          ageError={this.state.ageError}
          validation={this.validation}
          employeeCreate={this.employeeCreate}
        />
				<Footer />
      </div>
    );
  }
}

const element = <EmployeeDirectory />;
ReactDOM.render(element, document.getElementById("root"));
