import React, { Component } from "react";
import EmployeeDetail from './EmployeeDetail'
// import axios from 'axios'
import employees from '../employees.json'


class Employees extends Component {

    state = {
        employees
    }

    render() {
        return (
            <div className="col-12 employee-container">
                <div className="row">
                    <ul className="list-group col-12">
                        {this.state.employees.map(employee => (
                            <EmployeeDetail
                                id={employee.id}
                                key={employee.id}
                                name={employee.name}
                                image={employee.image}
                                department={employee.department}
                                email={employee.email}
                                phone={employee.phone} />
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Employees