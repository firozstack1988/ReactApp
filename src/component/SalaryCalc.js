import React,{useState,useRef} from "react";
import axios from "axios";
import Swal from "sweetalert2";
const SalaryCalc=()=>{
    const[data,setData]=useState({ 
        grade:'',
        basicSalary:''
        });
const bgrade=useRef("");
const bsal=useRef("");
  const handleOnchange=(event)=>{
            setData({
                ...data,
                [event.target.name]:event.target.value
            });
          }  
    const handleSubmit=(event)=>{
            event.preventDefault();
            axios.post("http://localhost:9000/salaryCalc/saveSalary",data)
            .then((response)=>{
             console.log(response);
             Swal.fire("Successfully inserted");
            }) 
        bgrade.current.value="";
        bsal.current.value="";
        } 
    return(
     <div className="container d-flex justify-content-center"> 
        <form className="ui form" onSubmit={handleSubmit}>
      <div className="col-md-20">
            <label>Employee Grade</label>
        <input className="form-control" ref={bgrade} type="text" name="grade" value={data.grade} onChange={handleOnchange}/>
        </div>
        <div className="col-md-20">
            <label>Basic Salary</label>
        <input className="form-control" type="text" ref={bsal} name="basicSalary" value={data.basicSalary} onChange={handleOnchange}/>
        </div>
        
        <div className="form-button mt-3">
          <button id="submit" type="submit" onClick={handleSubmit} class="btn btn-primary">Calculate Salary</button>
      </div>
        </form>
    </div>
    );
}

export default SalaryCalc;
