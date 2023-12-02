import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import EmployeeDetail from './EmployeeDetail';
import Navbar from './navbar';
import AccountInfo from './AccountInfo';
import SalaryCalc from './SalaryCalc';
import SalaryList from './Salarylist'
function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes >
        
          <Route exact path="/salaryCalc" element={<SalaryCalc/>}/>
          <Route exact path="/addEmployee" element={<EmployeeDetail/>}/>
          <Route exact path="/accountInfo" element={<AccountInfo/>}/>
          <Route exact path="/salaryList" element={<SalaryList/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
