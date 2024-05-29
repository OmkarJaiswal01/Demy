import React, { useEffect } from 'react';
import SideNavbar from './SideNavbar';
import './Abc.css'
import Footer from './Footer';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
export default function Dashboard() {
  const [cookie,setcookie,removecookie]=useCookies();
  const jump=useNavigate();
  useEffect(()=>{
      if(cookie["mycookie"]==null){
        jump("/Login");
      }
  },[])
  return (
    <>
      <div className='container-fluid'>
     
        <div className='row'>
        <div className='col-sm-12 b text-light text-center head'><h2>User Dasboard</h2></div>
    

        </div>
        <div className='row '>
          <div className='col-sm-1 b'><SideNavbar /></div>
          <div className='col-sm-11  '>
            <div className='row mt-3 ml-5'>
              <div className='col-sm-3 b Con '> jkbbnkj</div>
              <div className='col-sm-3 bg-danger Con ml-5'>nkjn </div>
              <div className='col-sm-3 bg-primary Con ml-5'>njkj </div>
              <div className='col-sm-3 bg-info Con ml-5'>nj </div>
            </div>




          </div>
        </div>

<div className='row'>
  <div className='col-sm-12'> <Footer/></div>
</div>

      </div>
    </>
  );
}
