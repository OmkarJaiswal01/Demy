import React, { useEffect, useState } from 'react'
import SideNavbar from './SideNavbar'
import { json, useSearchParams } from 'react-router-dom';

export default function SubCategory() {
  const [cdata,setcdata]=useState([]);//Catagory data desplay of Satae
  const [cid,setcid]=useState();// category Id find of Satae
  const[subcat,setsubcat]=useState();
  const[getSubCatData,setgetSubCatData]=useState([]);
  const[deleteid,setdeleteid]=useState();
  useEffect(()=>{
    loadcat();
    getData();
  },[])
  const loadcat=async()=>{
    const re=await fetch("http://127.0.0.1:7000/Category",{  //here get data of cayegory
      method: "GET",
      headers:{"content-type": "application/json"}
    });
    const getdata=await re.json();
    setcdata(getdata);
  }

const SubCatPost=async()=>{
  const re=await fetch("http://127.0.0.1:7000/SubCategory",{  // here post the Category Id and SubCategory Data
    method: "POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({CatId:cid,SubCategory:subcat})
  });
  const getdata=await re.json();
  alert(getdata.message)
  loadcat();
  getData();
}

const getData=async()=>{
  const re=await fetch("http://127.0.0.1:7000/SubCategory",{
    method:"GET",
    headers:{"content-type":"application/json"},
  });
  const getData=await re.json();
  setgetSubCatData(getData);

}

const Deletedata =async(x)=>{
  const re=await fetch("http://127.0.0.1:7000/SubCategory",{
    method:"DELETE",
    headers:{"content-type":"Application/json"},
    body:JSON.stringify({sid:x})
  });
  const data=await re.json();
    alert(data.message);
    getData();
}


  return (
    <>
   
    {/* <div className='row'>
<div className='col-sm-10 b'></div>

<div className='col-sm-1'>njknjndfk</div>




    </div> */}
    <div className='container-fluid'>
        <div className='row head'>
        <div className='col-sm-11 bg-blue-950 '></div>
        <div className='col-sm-1 head bg-blue-950'><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal " className='btn c'>
            Add Data</button>
            

 {/* Modal  */}
 <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">SubCategory</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className="my-0">
     <label htmlFor="winterFashionInput" className="form-label">Category</label>
                  
                  <br/>
                  <div class="input-group">
    <select className="form-control"onChange={(e)=>{setcid(e.target.value)}}>
      <option>-Select Category-</option>
      {
       cdata.map((e)=>{
        return(
          <option value={e._id} selected>{e.Category}</option>
        )
       })
      }
    </select>
 </div>

        </div>      
            <div className="my-0">
                  <label htmlFor="winterFashionInput" className="form-label">SubCategory</label>
                  <input type="text" className="form-control"  onChange={(e)=>{setsubcat(e.target.value)}} />
                </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={SubCatPost}>Save Data</button>
      </div>
    </div>
  </div>
</div>


            </div>
        </div>

<div className='row'>
    <div className='col-sm-1 bg-blue-950'> <SideNavbar/></div>
    <div className='col-sm-11'>
    <div className='container'>
                <table className='table table-bordered'>
                 <thead>
                  <tr>
                  <td className='text-center p-2'>SubCategory Name</td>
                  <td className='text-center p-2'>Action</td>
                  </tr>
                  </thead>
                  {
                    getSubCatData.map((e)=>{
                      return(
                        <tr>
                          <td>{e.SubCategory}</td>
                          <td> <button className='px-4 rounded-md bg-slate-700'>Edit</button>
                           <button className='mx-3' type="button" class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModals" onClick={(x)=>{Deletedata(e._id)}}> Delete</button></td>
                        </tr>
                      )
                    })
                  }
              <tbody>
                 
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
