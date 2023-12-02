import React ,{useState,useRef}from "react";
import axios from "axios"
import Swal from "sweetalert2";
const EmployeeDetail=()=>{
    const cors=require("cors");
    const[empDetail,setEmpDetail]=useState({ 
    name:'',
    empId:'',
    grade:'',
    grossSalary:''
    });
    const[result,setResult]=useState({
        success:'',
        errorMsg:'',
        content:''
    });
   const uname=useRef("");
   const uempId=useRef("");
   const ugrade=useRef("");
   const gsalary=useRef("");

    const handleSubmit=(event)=>{
        event.preventDefault();
        const result=axios.post("http://localhost:9000/empDetail/saveEmpDetail",empDetail)
        .then((result)=>{
            console.log(result.data.success);            
              Swal.fire(result.data.success);  
           }).catch((err) => {
            console.log(err)
        }) 
        uname.current.value="";
        uempId.current.value="";
        ugrade.current.value="";
        gsalary.current.value="";
    } 
    const handleOnchange=(event)=>{
        setEmpDetail({
          ...empDetail,
          [event.target.name]:event.target.value
      });
    } 
    
    return(    
     
        <div className="container d-flex justify-content-center" >
        <form className="requires-validation" onSubmit={handleSubmit}>
        <div className="col-md-20">
            <label>Name</label>
      <input className="form-control" type="text" ref={uname} name="name" value={empDetail.name} onChange={handleOnchange}/>
        </div>
        <div className="col-md-20">
            <label>Employee Id</label>
            <input className="form-control" type="text" ref={uempId} name="empId" value={empDetail.empId} onChange={handleOnchange}/>
        </div>
        <div className="col-md-20">
            <label>Grade</label>
            <input className="form-control" type="text" ref={ugrade} name="grade" value={empDetail.grade} onChange={handleOnchange}/>
        </div>
        <div className="col-md-20">
            <label>Gross Salary</label>
            <input className="form-control" type="text" ref={gsalary} name="grossSalary" value={empDetail.grossSalary} onChange={handleOnchange}/>
        </div>
         
         <div className="form-button mt-3">
                                <button id="submit" type="submit" onClick={handleSubmit} class="btn btn-primary">Add</button>
                            </div>
        </form> 
        </div>
              
    );
}


export default EmployeeDetail;  