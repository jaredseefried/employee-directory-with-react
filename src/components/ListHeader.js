import React from 'react'
import '../../src/components/listHeader.css'

function ListHeader() {
    return (
        <div className="row col-12 list-header">
            <ul className="list-group list-group-header">
                <li className="list-group-header col-12">
                    <div className="col-2">
                        <h2 className="list-heading">Image</h2>
                    </div>
                    <div className="col-3">
                        <h2 className="text-center list-heading">Name</h2>
                    </div>
                    <div className="col-2">
                        <h2 className="text-center list-heading">Department</h2>
                    </div>
                    <div className="col-3">
                        <h2 className="text-center list-heading">Email</h2>
                    </div>
                    <div className="col-2">
                        <h2 className="text-center list-heading">Phone</h2>
                    </div>
                </li>
            </ul>
        </div >
    )
}

export default ListHeader