import React from "react";
import "../components/style.css"


function EmployeeDetail(props) {
    return (
        
        <li className="list-group-item">
            <div className="col-2">
                <img src={props.image} alt="employee" />
            </div>
            <div className="col-3 text">
                <h2 className="employee-name text-center">{props.name}</h2>
            </div>
            <div className="col-2 text">
                <p className="text-center">{props.department}</p>
            </div>
            <div className="col-3 text">
                <p className="text-center">{props.email}</p>
            </div>
            <div className="col-2 text">
                <p className="text-center">{props.phone}</p>
            </div>
        </li>
        

    )
}

export default EmployeeDetail