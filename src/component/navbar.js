import { Link } from "react-router-dom";
const Navbar=()=>{
    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">Employee Salary Disbursment</a>
        
        <Link className="btn btn-outline-light" to="addEmployee">Add Employee</Link>
        <Link className="btn btn-outline-light" to="salaryCalc">Salary Calculate</Link>
        <Link className="btn btn-outline-light" to="AccountInfo">AccountInfo</Link>
        <Link className="btn btn-outline-light" to="salaryList">SalaryList</Link>
       </div>
      </nav> 
        
      </div>
    );   
};

export default Navbar;