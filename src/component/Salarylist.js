import React,{useEffect,useState} from "react";
import axios from "axios";

const SalaryList=()=>{
    const [salaryList,setSalaryList]=useState([]); 
    
    useEffect(()=>{
        loadSalaryList();
    },[])

    const loadSalaryList=async()=>{
    const result=await axios.get("http://localhost:9000/salaryCalc/salaryList");
    console.log(result.data);
    setSalaryList(result.data);
    }
    
    return(
		<div className="container">	
			<div className="py-4">		
			<table className="table border shadow">	 
			 <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">EmployeeId</th>
                    <th scope="col">Grade</th>
                    <th scope="col">Account Number</th>
                    <th scope="col">Gross Amount</th>
                </tr>
             </thead>
            <tbody>
                {
                salaryList.map((salary,index)=>{
                  return <tr  key={index}> 
                    <td>{salary.id}</td>                  
                    <td>{salary.empId}</td>
                    <td>{salary.grade}</td>
                    <td>{salary.accNumber}</td>
                    <td>{salary.grossAmount}</td>
                  </tr>  
                })
 
                }

            </tbody>
             </table>
			</div>
		</div>	
	
    );


}
export default SalaryList;