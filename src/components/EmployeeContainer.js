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
        this.setState({...this.state, deptSort: false, idSort: false, phoneSort: false, emailSort: false})
        const newEmployeesArr = [...this.state.employeesArr]
        if (!this.state.nameSort) {
            const sortedArr = newEmployeesArr.sort((a, b) => a.name.localeCompare(b.name))
            this.setState({ ...this.state, employeesArr: sortedArr, nameSort: "ascending" });
        } else if (this.state.nameSort === "ascending") {
            const sortedArr = newEmployeesArr.sort((a, b) => a.name.localeCompare(b.name)).reverse()
            this.setState({ ...this.state, employeesArr: sortedArr, nameSort: "descending" });
        } else if (this.state.nameSort === "descending") {
            const sortedArr = newEmployeesArr.sort((a, b) => a.id - b.id)
            this.setState({ ...this.state, employeesArr: sortedArr, nameSort: false });
        }
    }

    sortDept = () => {
        this.setState({...this.state, nameSort: false, idSort: false, phoneSort: false, emailSort: false})
        const newEmployeesArr = this.state.employeesArr.slice(0)
        const sortedArr = newEmployeesArr.sort((a, b) => a.department.localeCompare(b.department))
        this.setState((s) => ({ ...s, employeesArr: sortedArr }));
    }

    sortID = () => {
        const newEmployeesArr = this.state.employeesArr.slice(0)
        const sortedArr = newEmployeesArr.sort((a, b) => a.id - b.id)
        this.setState({ ...this.state, employeesArr: sortedArr });
    }

    searchEmployee = () => {
        let search = this.state.search
        const newEmployeesArr = this.state.employeesArr.slice(0)
        // const sortedArr = newEmployeesArr.filter(employee => employee.name === name)
        if (search.length >= 2) {
            const sortedEmployees = newEmployeesArr.filter(employee => {
                // console.log(employee.name.indexOf(search) > -1);
                return employee.name.includes(search)
            })
            this.setState({ ...this.state, employeesArr: sortedEmployees });
        }
    }

    handleInputChange = event => { 
        if (event.target.value.includes("b")) return;
        this.setState((s)=> ({...s, search: event.target.value}))
        // this.searchEmployee()
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployee(this.state.search);
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
                    sortID={this.sortID} />
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