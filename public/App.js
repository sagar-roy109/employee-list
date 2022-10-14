function EmployeeTable(props) {
  let Rows = props.employees.map(employee => /*#__PURE__*/React.createElement(Row, {
    key: employee.id,
    employee: employee
  }));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("table", {
    className: "table table-dark mt-5"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "bg-info"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "First Name"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Last Name"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Age"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Date of Joining"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Title"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Department"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Employer Type"))), /*#__PURE__*/React.createElement("tbody", null, Rows)));
}

function Row(props) {
  let emp = props.employee;
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, emp.firstName), /*#__PURE__*/React.createElement("td", null, emp.lastName), /*#__PURE__*/React.createElement("td", null, emp.age), /*#__PURE__*/React.createElement("td", null, emp.dateOfJoining), /*#__PURE__*/React.createElement("td", null, emp.title), /*#__PURE__*/React.createElement("td", null, emp.department), /*#__PURE__*/React.createElement("td", null, emp.employeeType));
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
      employeeType: fdata.employeeType.value
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
    return /*#__PURE__*/React.createElement("form", {
      className: "mt-5",
      name: "addEmp",
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-1 d-flex justify-content-center"
    }, /*#__PURE__*/React.createElement("h5", null, "Enter Employee Details: ")), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-12 form-group"
    }, /*#__PURE__*/React.createElement("label", null, "First Name"), /*#__PURE__*/React.createElement("input", {
      required: true,
      type: "text",
      className: "form-control",
      name: "firstName",
      placeholder: "Enter employee first name"
    }), /*#__PURE__*/React.createElement("span", {
      className: "m-1 text-danger"
    }, this.props.firstNameError)), /*#__PURE__*/React.createElement("div", {
      className: "col-12 form-group"
    }, /*#__PURE__*/React.createElement("label", null, "Last Name"), /*#__PURE__*/React.createElement("input", {
      required: true,
      type: "text",
      className: "form-control",
      name: "lastName",
      placeholder: "Enter employee last name"
    }), /*#__PURE__*/React.createElement("span", {
      className: "m-1 text-danger"
    }, this.props.lastNameError))), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-12 form-group"
    }, /*#__PURE__*/React.createElement("label", null, "Age"), /*#__PURE__*/React.createElement("input", {
      required: true,
      type: "number",
      className: "form-control",
      name: "age",
      placeholder: "Enter employee age"
    }), /*#__PURE__*/React.createElement("span", {
      className: "m-1 text-danger"
    }, this.props.ageError)), /*#__PURE__*/React.createElement("div", {
      className: "col-12 form-group"
    }, /*#__PURE__*/React.createElement("label", null, "Date of Joining"), /*#__PURE__*/React.createElement("input", {
      type: "date",
      required: true,
      className: "form-control",
      name: "dateOfJoining"
    }), /*#__PURE__*/React.createElement("span", {
      className: "m-1 text-danger"
    }, this.props.dateOfJoiningError))), /*#__PURE__*/React.createElement("div", {
      className: "row mt-1"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-12 form-group"
    }, /*#__PURE__*/React.createElement("label", null, "Title"), /*#__PURE__*/React.createElement("select", {
      className: "form-control",
      name: "title",
      required: true
    }, /*#__PURE__*/React.createElement("option", null, "Select employee title"), /*#__PURE__*/React.createElement("option", {
      value: "Employee"
    }, "Employee"), /*#__PURE__*/React.createElement("option", {
      value: "Manager"
    }, "Manager"), /*#__PURE__*/React.createElement("option", {
      value: "Director"
    }, "Director"), /*#__PURE__*/React.createElement("option", {
      value: "VP"
    }, "VP"))), /*#__PURE__*/React.createElement("div", {
      className: "col form-group mt-3"
    }, /*#__PURE__*/React.createElement("label", null, "Department"), /*#__PURE__*/React.createElement("select", {
      className: "form-control",
      name: "department",
      required: true
    }, /*#__PURE__*/React.createElement("option", null, "Select employee department"), /*#__PURE__*/React.createElement("option", {
      value: "IT"
    }, "IT"), /*#__PURE__*/React.createElement("option", {
      value: "Marketing"
    }, "Marketing"), /*#__PURE__*/React.createElement("option", {
      value: "HR"
    }, "HR"), /*#__PURE__*/React.createElement("option", {
      value: "Engineering"
    }, "Engineering"))), /*#__PURE__*/React.createElement("div", {
      className: "col-12 form-group mt-3"
    }, /*#__PURE__*/React.createElement("label", null, "Employee Type"), /*#__PURE__*/React.createElement("select", {
      className: "form-control",
      name: "employeeType",
      required: true
    }, /*#__PURE__*/React.createElement("option", null, "Select employee type"), /*#__PURE__*/React.createElement("option", {
      value: "Full Time"
    }, "Full Time"), /*#__PURE__*/React.createElement("option", {
      value: "Part Time"
    }, "Part Time"), /*#__PURE__*/React.createElement("option", {
      value: "Contract"
    }, "Contract"), /*#__PURE__*/React.createElement("option", {
      value: "Seasonal"
    }, "Seasonal")))), /*#__PURE__*/React.createElement("div", {
      className: "p-1 mt-3"
    }, /*#__PURE__*/React.createElement("button", {
      type: "submit",
      className: "btn btn-primary btn-lg"
    }, "Add")));
  }

}

function EmployeeSearch() {
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "text-center"
  }, "Search Employee Name ")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Search employee"
  })));
}

function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "bg-dark p-2 text-center mt-5"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-white"
  }, "Developed By - Sagar Roy"));
}

class EmployeeDirectory extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      firstNameError: "",
      lastNameError: "",
      ageError: ""
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
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query
        })
      });
      return response.json();
    }

    const result = getEmployee("/graphql", query).then(result => {
      this.setState({
        employees: result.data.employeeList
      });
      return result.data.employeeList;
    });
  }

  validation(formData) {
    let error = false;

    if (formData.firstName.length < 3 || formData.firstName.length > 20) {
      error = true;
      this.setState({
        firstNameError: "Choose a first name between 3-20 characters"
      });
    }

    if (formData.lastName.length < 3 || formData.lastName.length > 20) {
      error = true;
      this.setState({
        lastNameError: "Choose a last name between 3-20 characters"
      });
    }

    if (formData.age < 20 || formData.age > 70) {
      error = true;
      this.setState({
        ageError: "Choose age between 20-70 years"
      });
    }

    if (!error) {
      this.setState({
        ageError: "",
        lastNameError: "",
        firstNameError: ""
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
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query,
        variables: {
          employee
        }
      })
    });
    this.loadData();
  }

  render() {
    const footerColor = "'background:#000; color:fff'";
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EmployeeSearch, null), /*#__PURE__*/React.createElement(EmployeeTable, {
      employees: this.state.employees
    }), /*#__PURE__*/React.createElement(EmployeeCreate, {
      firstNameError: this.state.firstNameError,
      lastNameError: this.state.lastNameError,
      ageError: this.state.ageError,
      validation: this.validation,
      employeeCreate: this.employeeCreate
    }), /*#__PURE__*/React.createElement(Footer, null));
  }

}

const element = /*#__PURE__*/React.createElement(EmployeeDirectory, null);
ReactDOM.render(element, document.getElementById("root"));