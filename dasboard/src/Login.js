import React, { useState } from 'react';
import './abc.css'; // Replace 'YourCSSFile.css' with the actual path to your CSS file
import { Link, useNavigate } from 'react-router-dom';
import Nav, { Footer, Navig } from './Componemts';
import { useCookies } from 'react-cookie';

function Login() {
  const [uname, setUname] = useState("");
  const [psw, setPsw] = useState("");
  const jump = useNavigate();
  const [cookie, setCookie, removeCookie] = useCookies();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://127.0.0.1:7000/adlogin", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ uname: uname, psw: psw })
      });
      
      const data = await response.json();
      
      if (data.msg === "Valid User") {
        setCookie("mycookie", uname);
        jump("/Dashboard");
      } else {
        alert(data.msg);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to fetch data. Please try again later.");
    }
  };

  return (
    <div className='w-100% bg-info'>
      <div>
        <Nav />
      </div>
      <div>
        <Navig />
      </div>
      <div className='container-fluid sl bg-info '>
        <div className='row card-center'>
          <div className="card cardh mt-5">
            <div className="card-body">
              <span>Username</span>
              <input type='text' placeholder='Username' onChange={(e) => setUname(e.target.value)} className='form-control mb-3' />
              <span>Password</span>
              <input type='password' placeholder='Password' onChange={(e) => setPsw(e.target.value)} className='form-control mb-3' />
              <button type="button" onClick={handleLogin} className="btn btn-primary btn-lg hr text-center mx-5">Login</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Login;
