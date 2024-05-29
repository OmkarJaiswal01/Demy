import React, { useEffect, useState } from 'react'
import SideNavbar from './SideNavbar'
import Modal from './modal'
import './Abc.css'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export default function Category() {
  const[cate,setcat]=useState("");
  const[edtcate,setedtcat]=useState("");
  const[cid,setcid]=useState("");
  
  const[data,setdata]=useState([]);
const[getdata,setgetdata]=useState([]);
const[pic,setpic]=useState("");
// const [cookie,setcookie,removecookie]=useCookies();
// const jump=useNavigate();
// const funlogout=()=>{
//   removecookie("mycookie");
//   jump("/Login");
// }
useEffect(()=>{
  loadrecord();
})

const SaveData = async () => {
  const fdata = new FormData();
  fdata.append("Category", cate);
  fdata.append("cpic", pic);
  const re = await fetch("http://127.0.0.1:7000/Category", {
    method: "POST",
    body: fdata
  });
  const data = await re.json();
  alert(data.message);
  loadrecord();
};



const loadrecord = async () => {
  const re = await fetch("http://127.0.0.1:7000/Category", {
    method: "GET",
    headers: { "content-type": "application/json" }
  });
  const getdata = await re.json();
  setgetdata(getdata);
};

const Deletedata = async (x) => {
  const re = await fetch("http://127.0.0.1:7000/Category", {
    method: "DELETE",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ sid: x })
  });
  const data = await re.json();
  alert(data.message);
  loadrecord();
};

const LoadSingleCat = async (x) => {
  const re = await fetch(`http://127.0.0.1:7000/Category/${x}`, {
    method: "GET",
    headers: { "content-type": "application/json" }
  });
  const getdata = await re.json();
  setedtcat(getdata.Category);
  setcid(x);
};

const UpdateCat = async () => {
  const re = await fetch("http://127.0.0.1:7000/Category", {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ p: cid, Category: edtcate })
  });
  const getdata = await re.json();
  alert(getdata.message);
  loadrecord();
};



  return (
    <>
        <div className='container-fluid  '>
          <div className='row head bg-blue-950'>
            <div className='col-sm-11 bg-blue-950' ></div>
            <div className='col-sm-1 bg-blue-950'>
          

             {/* Button trigger modal  */}
<button type="button"  class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModal " className='btn'>
 Category
</button>

 {/* Modal  */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className="my-0">
                  <label htmlFor="winterFashionInput" className="form-label">Category</label>
                  <input type="text" className="form-control" id="winterFashionInput" onChange={(e)=>setcat(e.target.value)}  />
                </div>
                <div className="my-0">
                  <label htmlFor="winterFashionInput" className="form-label">Image</label>
                  <input type="file" className="form-control" id="winterFashionInput" onChange={(e)=>setpic(e.target.files[0])}  />
                </div>     
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={SaveData}>Save Data</button>
      </div>
    </div>
  </div>
</div>



</div>
          </div>
          <div className='row '>
            <div className='col-sm-1 bg-blue-950 '> <SideNavbar/></div>
            <div className='col-sm-11'>
              <div className='container'>
                <table className='table table-bordered'>
                 <thead>
                  <tr>
                  <td className='text-center p-2'>Category Name</td>
                  <td className='text-center p-2'>PIC</td>
                  <td className='text-center p-2'>Action</td>
                  </tr>
                  </thead>
              <tbody>
                  {
                  getdata.map((e)=>{
                    return(
                      <>
                      <tr>
                        <td>{e.Category}</td>
                        <td><img style={{width:"80px",height:"100px"}} src={"http://127.0.0.1:7000/" + e.Pic} /></td>
                        
                        <td className='text-end'>
                        <button type="button" class="btn btn-primary" onClick={()=>{LoadSingleCat(e._id)}} data-bs-toggle="modal" data-bs-target="#exampleModals"> Edit</button>

                          {/* updateModal */}

                          <div class="modal fade" id="exampleModals" tabindex="-1" aria-labelledby="exampleModals" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModals">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className="my-0">
                  <label htmlFor="winterFashionInput" className="form-label text-center">Category Edit</label>
                  <input type="text" className="form-control" value={edtcate} onChange={(e)=>{setedtcat(e.target.value)}} id="winterFashionInputs"  />
                </div>
      
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={UpdateCat} class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

                        <button  className='btn btn-danger' onClick={(x)=>{Deletedata(e._id)}}>Delete</button></td> 
                      
                      </tr>
                      </>
                    )
                  })
                  }
                 </tbody>

                  <tr>
             </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
