import React from 'react'
import Employees from './components/EmployeeContainer'
import './App.css';
import Header from './components/Header'
import Search from './components/Search'



function App() {
  return (
    <div className = "app">
      <Header />
      <Search />
      <Employees />
    </div>

  );
}

export default App;
