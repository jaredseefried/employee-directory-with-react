import React from 'react'
import Employees from './components/EmployeeContainer'
import './App.css';
import Header from './components/Header'
import Search from './components/Search'



function App(props) {
  return (
    <div className = "app">
      <Header />
      <Search 
      value={props.search}
      />
      <Employees />
    </div>

  );
}

export default App;
