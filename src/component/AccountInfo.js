import React,{useState,useRef} from "react";
import Swal from "sweetalert2";
import axios from "axios";
const AccountInfo=()=>{
   const[data,setData]=useState({ 
    accType:'',
    accName:'',
    branchName:'',
    accNumber:'',
    currBal:''
   });
   const[result,setResult]=useState({
    success:'',
    errorMsg:'',
    content:''
});
   const aType=useRef("");
   const acname=useRef("");;
   const brname=useRef("");;
   const anumber=useRef("");;
   const cbal=useRef("");;
  const handleSubmit=(event)=>{
      event.preventDefault();
      if(data.accNumber==''|| data.accName){
        console.log("Account Number should not be blank");
    }
    const result=axios.post("http://localhost:9000/tran/saveTran",data)
        .then((result)=>{
            console.log(result.data.success);            
              Swal.fire(result.data.success);  
           }).catch((err) => {
            console.log(err)
        }) 
    
      aType.current.value="";
      acname.current.value="";
      brname.current.value="";
      anumber.current.value="";
      cbal.current.value="";
  } 
  const handleOnchange=(event)=>{
    setData({
        ...data,
        [event.target.name]:event.target.value
    });
  }  
      
    return(
        <div className="container d-flex justify-content-center">
        <form className="ui form" onSubmit={handleSubmit}>
         <div className="col-md-20">
             <label>Account Type</label>
             <input className="form-control" ref={aType} type="text" name="accType" value={data.accType} onChange={handleOnchange} />
         </div>
         <div className="col-md-20">
             <label>Account Name</label>
             <input className="form-control" ref={acname} type="text" name="accName" value={data.accName} onChange={handleOnchange}/>
         </div>
         <div className="col-md-20">
             <label>Branch Name</label>
             <input className="form-control" ref={brname} type="text" name="branchName" value={data.branchName} onChange={handleOnchange}/>
         </div>
         <div className="col-md-20">
             <label>Account Number</label>
             <input  className="form-control" ref={anumber} type="text" name="accNumber" value={data.accNumber} onChange={handleOnchange}/>
         </div>
         <div className="col-md-20">
             <label>Transaction Amount</label>
             <input className="form-control" ref={cbal} type="text" name="currBal" value={data.currBal} onChange={handleOnchange}/>
         </div>
         <div className="form-button mt-3">
          <button id="submit" type="submit" onClick={handleSubmit} class="btn btn-primary">Add</button>
      </div>
          
         </form> 
     </div>
    );
}

export default AccountInfo;  