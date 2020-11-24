import React, { Component } from "react";
import EmployeeDetail from './EmployeeDetail'
// import axios from 'axios'
import employees from '../employees.json'
import ListHeader from '../components/ListHeader'

class Employees extends Component {

    state = {
        employeesArr: employees
    }

    sortName = () => {
        const newEmployeesArr = this.state.employeesArr.slice(0)
        const sortedArr = newEmployeesArr.sort((a, b) => a.name.localeCompare(b.name))
        this.setState({ ...this.state, employeesArr: sortedArr });
    }

    sortDept = () => {
        const newEmployeesArr = this.state.employeesArr.slice(0)
        const sortedArr = newEmployeesArr.sort((a, b) => a.department.localeCompare(b.department))
        this.setState({ ...this.state, employeesArr: sortedArr });
    }

    sortID = () => {
        const newEmployeesArr = this.state.employeesArr.slice(0)
        const sortedArr = newEmployeesArr.sort((a, b) => a.id - b.id)
        this.setState({ ...this.state, employeesArr: sortedArr });
    }
    
    render() {
        return (
            <>
                <ListHeader
                    sortName={this.sortName}
                    sortDept={this.sortDept}
                    sortID={this.sortID} />
                <div className="col-12 employee-container">
                    <div className="row">
                        <ul className="list-group col-12">
                            {this.state.employeesArr.map(employee => (
                                <EmployeeDetail
                                    key={employee.id}{...employee} />
                            ))}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default Employees