import React, { Component } from "react";
import EmployeeDetail from './EmployeeDetail'
import employees from '../employees.json'
import ListHeader from './ListHeader'
import Header from './Header'
import '../components/search.css'

class Employees extends Component {

    state = {
        employeesArr: employees,
        result: {},
        search: "",
        nameSort: false,
        deptSort: false,
        idSort: false,
        phoneSort: false,
        emailSort: false
    }

    sortName = () => {
        this.setState({ ...this.state, deptSort: false, idSort: false, phoneSort: false, emailSort: false })
        const newEmployeesArr = [...this.state.employeesArr]
        if (!this.state.nameSort) {
            const sortedArr = newEmployeesArr.sort((a, b) => a.name.localeCompare(b.name))
            this.setState({ ...this.state, employeesArr: sortedArr, nameSort: "ascending" });
        } else if (this.state.nameSort === "ascending") {
            const sortedArr = newEmployeesArr.sort((a, b) => a.name.localeCompare(b.name)).reverse()
            this.setState({ ...this.state, employeesArr: sortedArr, nameSort: "descending" });
        } else if (this.state.nameSort === "descending") {
            const sortedArr = newEmployeesArr.sort((a, b) => a.id - b.id)
            this.setState((s) => ({ ...s, employeesArr: sortedArr, nameSort: false }));
        }
    }

    sortDept = () => {
        this.setState({ ...this.state, nameSort: false, idSort: false, phoneSort: false, emailSort: false })
        const newEmployeesArr = [...this.state.employeesArr]
        if (!this.state.deptSort) {
            const sortedArr = newEmployeesArr.sort((a, b) => a.name.localeCompare(b.name))
            this.setState({ ...this.state, employeesArr: sortedArr, deptSort: "ascending" });
        } else if (this.state.deptSort === "ascending") {
            const sortedArr = newEmployeesArr.sort((a, b) => a.name.localeCompare(b.name)).reverse()
            this.setState({ ...this.state, employeesArr: sortedArr, deptSort: "descending" });
        } else if (this.state.deptSort === "descending") {
            const sortedArr = newEmployeesArr.sort((a, b) => a.id - b.id)
            this.setState((s) => ({ ...s, employeesArr: sortedArr, deptSort: false }));
        }
    }

    sortID = () => {
        this.setState({ ...this.state, nameSort: false, deptSort: false, phoneSort: false, emailSort: false })
        const newEmployeesArr = [...this.state.employeesArr]
        if (!this.state.idSort) {
            const sortedArr = newEmployeesArr.sort((a, b) => a.name.localeCompare(b.name))
            this.setState({ ...this.state, employeesArr: sortedArr, idSort: "ascending" });
        } else if (this.state.idSort === "ascending") {
            const sortedArr = newEmployeesArr.sort((a, b) => a.name.localeCompare(b.name)).reverse()
            this.setState({ ...this.state, employeesArr: sortedArr, idSort: "descending" });
        } else if (this.state.idSort === "descending") {
            const sortedArr = newEmployeesArr.sort((a, b) => a.id - b.id)
            this.setState((s) => ({ ...s, employeesArr: sortedArr, idSort: false }));
        }
    }

    sortPhone = () => {
        this.setState({ ...this.state, nameSort: false, deptSort: false, idSort: false, emailSort: false })
        const newEmployeesArr = [...this.state.employeesArr]
        if (!this.state.phoneSort) {
            const sortedArr = newEmployeesArr.sort((a, b) => a.name.localeCompare(b.name))
            this.setState({ ...this.state, employeesArr: sortedArr, phoneSort: "ascending" });
        } else if (this.state.phoneSort === "ascending") {
            const sortedArr = newEmployeesArr.sort((a, b) => a.name.localeCompare(b.name)).reverse()
            this.setState({ ...this.state, employeesArr: sortedArr, phoneSort: "descending" });
        } else if (this.state.phoneSort === "descending") {
            const sortedArr = newEmployeesArr.sort((a, b) => a.id - b.id)
            this.setState((s) => ({ ...s, employeesArr: sortedArr, phoneSort: false }));
        }
    }

    sortEmail = () => {
        this.setState({ ...this.state, nameSort: false, deptSort: false, idSort: false, phoneSort: false })
        const newEmployeesArr = [...this.state.employeesArr]
        if (!this.state.emailSort) {
            const sortedArr = newEmployeesArr.sort((a, b) => a.name.localeCompare(b.name))
            this.setState({ ...this.state, employeesArr: sortedArr, emailSort: "ascending" });
        } else if (this.state.emailSort === "ascending") {
            const sortedArr = newEmployeesArr.sort((a, b) => a.name.localeCompare(b.name)).reverse()
            this.setState({ ...this.state, employeesArr: sortedArr, emailSort: "descending" });
        } else if (this.state.emailSort === "descending") {
            const sortedArr = newEmployeesArr.sort((a, b) => a.id - b.id)
            this.setState((s) => ({ ...s, employeesArr: sortedArr, emailSort: false }));
        }
    }

    handleInputChange = event => {
        var value = event.target.value;
        this.setState({ search: value })
        var filter = employees.filter(employee => {
            var checkValues = Object.values(employee)
                .join("").toLowerCase()
            return checkValues.indexOf(value.toLowerCase()) !== -1
        })
        this.setState({ employeesArr: filter })
    };

    render() {
        return (
            <>
                <Header />
                <div className="container col-12 search" >
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name="search" value={this.state.search} onChange={this.handleInputChange} ></input>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.handleFormSubmit} >Search</button>
                    </form>
                </div>
                <ListHeader
                    sortName={this.sortName}
                    sortDept={this.sortDept}
                    sortID={this.sortID}
                    sortPhone={this.sortPhone}
                    sortEmail={this.sortEmail} />
                <div className="col-12 employee-container">
                    <div className="row">
                        <ul className="list-group col-12">
                            {this.state.employeesArr.map(employee => (
                                <EmployeeDetail
                                    key={employee.id}{...employee}
                                    searchEmployee={this.searchEmployee} />
                            ))}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default Employees