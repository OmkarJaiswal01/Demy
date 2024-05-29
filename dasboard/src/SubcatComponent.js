import React, { useEffect, useState } from 'react'
import { Footer, Navig, SideNavSubCat } from './Componemts'
import { useNavigate, useParams } from 'react-router-dom'
import {useSelector} from 'react-redux'
import Nav from './Componemts'
import { Button } from 'react-bootstrap'
import { useCookies } from 'react-cookie'
function SubcatComponent() {
  const [pdata, setPdata] = useState([]);
  const {id}=useParams();
  const mdata=useSelector((state)=>state.fun1);
  const [cookie,setcookie,removecookie]=useCookies();
  const jump=useNavigate();
const[productid,setproductid]=useState();
  useEffect(()=>{
    setPdata(mdata);
  },[mdata])

  const addcart= async(x,y)=>{
     if(cookie["usercookie"])
     {
        //if cookies is create then go on save product in cart
        try {
          const re = await fetch("http://127.0.0.1:7000/Cart", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({ ProductId: x, _idCart:y, Email: cookie["usercookie"],Qty: parseInt("1") })
          });
      
          if (!re.ok) {
              throw new Error(`Server returned status: ${re.status}`);
          }
      
          const getdata = await re.json();
          alert(getdata.message);
      } catch (error) {
          console.error("Error:", error.message);
          // Handle the error as needed
      }

     }
     else{
      //if cookie is not create then jump to login
      jump("/UserLogin");

     }
  }

  return (
    <>
    <div className='w-full bg-white sticky-top'>
    <Nav/>
    </div>
    <div className="container-fluid bg-white">
    <div className='row bg-white'>
<div className='col-2 mt-2'>
  
  <SideNavSubCat cid={id}  />
  </div>
<div className='col-10 '>

  <div className="w-100% mx-auto grid lg:grid-cols-4  md:grid-cols-3 mt-3 gap-3 bg-white">
  {
  pdata.map((e)=>{
    return(

<div className='w-full flex items-center '>

<div className=' text-center shadow-lg border-1 border-white my-2 items-center  m-2'>
  <div className='rounded overflow-hidden flex justify-center'>
    <img className="hover:scale-125 duration-1000 m-2 rounded" style={{ width: "170px", height: "200px" }} src={"http://127.0.0.1:7000/" + e.Pic} alt="Card image" />
  </div>
  <h1 className='py-1 text-lg font-bold'>{e.ProductName}</h1>
  <p className='text-slate-700 text-sm'>{e.Des}</p>
  <div className='flex justify-center items-center text-center py-1 gap-2 mt-2'>
  <p className='flex justify-start '>{<del>{e.Offer}</del>}</p>
    <p className="py-1 font-bold"><i className="fa fa-inr font-bold">{e.Price}</i></p><br/>
    
   

    <button type="button" class="focus:outline-none text-white  bg-yellow-500 hover:bg-yellow-200 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-2 py-1 me-2 mb-2 px-2 dark:focus:ring-yellow-900" onClick={()=>{addcart(e._id,e._idCart)} }>
      Add</button><br/>
    
  </div>
</div>

</div>
    )
  })
 }
 </div>
</div>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default SubcatComponent
