import React from 'react'
import '../components/search.css'


function Search() {
    return (
        <div className="container col-12 search">
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>

    )
}

export default Search