import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Abc.css'
import { useCookies } from 'react-cookie'
export default function SideNavbar() {
  const [cookie,setcookie,removecookie]=useCookies();
  const jump=useNavigate();
  const funlogout=()=>{
    removecookie("mycookie");
    jump("/Login");
  }
  return (

    <>
     <ul className=' bg-blue-950 font-semibol '>
      <li>
      <Link className="nav-link active text-light text-bolt  hover:bg-slate-800   " to="/">Home</Link>
      </li>
      <li><Link className='nav-link active text-light text-bolt mt-3' to="/Category">Category</Link> </li>
      <li><Link className='nav-link active text-light text-bolt mt-3' to="/SubCategory">SubCategory</Link> </li>
      <li><Link className='nav-link active text-light text-bolt mt-3' to="/Product">Product</Link> </li>
      <li className='text-light text-bolt mt-3' onClick={funlogout}>Logout</li>
     </ul>
    </>
  )
}
