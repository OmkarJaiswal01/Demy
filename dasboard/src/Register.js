import React, { useState } from 'react';
import './abc.css'
import { Link } from 'react-router-dom';
import Nav, { Footer, Navig } from './Componemts';
import { useNavigate } from 'react-router-dom';



function Register() {
  const[name,setname]=useState();
  const[email,setemail]=useState();
  const[mob,setmob]=useState();
  const[pass,setpass]=useState();
  const[repass,setrepass]=useState();
  const jump=useNavigate();


  const Reg = async () => {
    try {
      const re = await fetch("http://127.0.0.1:7000/UserReg", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          UName: name,
          UEmail: email,
          UMobile: mob,
          UPassword: pass,
          UCPassword: repass,
        }),
      });
  
      const data = await re.json();
      alert(data.message);
      jump("/UserLogin");
    } catch (error) {
      console.error("Error during registration:", error);
    }
  }; return (
    <>
<div className='w-100% bg-info'>
<div>
  <Nav/>
</div>

<div> 
  <Navig/>
</div>
 
      <div className='container-fluid bg-info '>
     
     <div className='row card-center'>
       <div className="card reg mt-5">
         <div className="card-body">
             <h1 className='text-center text-bolt text-2xl font-bold'>Register</h1>
         <span>Full Name</span>
           <input type='text' placeholder='First Name' onChange={(e)=>setname(e.target.value)} className='form-control mb-3'   />

           <span>Email</span>
           <input type='email' onChange={(e)=>setemail(e.target.value)}  placeholder='Enter Email'className='form-control mb-3' />

           <span>Mobile No.</span>
           <input type='Number' onChange={(e)=>setmob(e.target.value)} placeholder='Enter No.'className='form-control mb-3'/>
           
           <span>Password</span>
           <input type='password'onChange={(e)=>setpass(e.target.value)} placeholder='Password' className='form-control mb-3'/>

           <span>Confirm Password</span>
           <input  type='password' onChange={(e)=>setrepass(e.target.value)} placeholder='Confirm Password' className='form-control mb-3'  />
           <button type="button" class="btn btn-primary btn-lg hr text-center btn-center mx-5" onClick={Reg}>Register</button>

           <p className='text-info mx-2'><Link to="/UserLogin" >Already have account</Link></p>
         </div>
       </div>
     </div>
  
 </div>

<div className='pt-5'>
<Footer/>
</div>
 </div>
    </>
  )
}

export default Register




