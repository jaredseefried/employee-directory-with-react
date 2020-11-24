import React, { Component } from 'react'
import '../components/search.css'
import employees from '../employees.json'


class Search extends Component {
    state = {
        result: [],
        search: ""
    }

    searchEmployee = (name) => {
        employees.search(name)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err))
    }
    
    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value,
        });
    };

    handleFormSubmit = e => {
        e.preventDefault()
        this.setState({
            search: ""
        })
    }

    render() {
        return (
            <div className="container col-12 search" >
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" handleInputChange={this.handleInputChange}></input>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" handleFormSubmit={this.handleFormSubmit}>Search</button>
                </form>
            </div>

        )
    }
}

export default Search