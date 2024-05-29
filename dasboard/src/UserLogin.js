import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Nav from './Componemts'
import { useCookies } from 'react-cookie';
const UserLogin = () => {
  const[email,setemail]=useState();
  const[pass,setpass]=useState();
    const [cookie,setcookie,removecookie]=useCookies();
    const jump=useNavigate();
  const UserLogin = async () => {
    try {
      const re = await fetch("http://127.0.0.1:7000/UserLog", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          uemail:email,
          upassword:pass,
          
          
        }),
      });
  
      const data = await re.json();
      if(data.message==="Login Succesful"){
        setcookie("usercookie",email);
        // if cookies create then jump to product page of user
        jump("/subcat")

      }
      else{
        alert(data.message);
      }
     
    } catch (error) {
      console.error("Error during Login:", error);
    }
  };

  return (
    <>
    <div>
    <div className='w-100%'>
            <Nav/>
        </div>
    <div className='container-fluid sl bg-info '>
       
        <div className='row card-center'>
          <div className="card cardh mt-5">
            <div className="card-body">
             
                <span>UserEmail</span>
              <input type='text' onChange={(e)=>setemail(e.target.value)} placeholder='Username'className='form-control mb-3' />
              <span>Password</span>
              <input type='password'onChange={(e)=>setpass(e.target.value)} placeholder='Password' className='form-control mb-3' />
              <button type="button"  class="btn btn-primary btn-lg hr text-center mx-5 " onClick={UserLogin}>Login</button>
            </div>
            <p className='mt-2 text-center'><Link to="/Register" className='text-info'>Register </Link>Don't have an account? </p>

          </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default UserLogin
