import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import EmployeeList from "./employees.json";
import Jumbotron from './components/Jumbotron/Jumbotron';
import Table from './components/Table/Table'


function App() {
  return (
    <div className="App">
      <Jumbotron />
      <Search />
      <Table />
    </div>
  );
}

export default App;
