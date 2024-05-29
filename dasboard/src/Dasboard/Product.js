import React, { useEffect, useState } from 'react'
import SideNavbar from './SideNavbar'

export default function() {
  const [cdata,setcdata]=useState([]);
  const[catid,setcatid]=useState();
  const[subcatdata,getsubcatdata]=useState([]);
  const[subcatid,setsubcatid]=useState();
  const[pname,setpname]=useState();
  const[price,setprice]=useState();
  const[offerp,setofferp]=useState();
  const[pic,setpic]=useState();
  const[des,setdes]=useState();
  const[getdata,setgetdata]=useState([]);
 
 const [gender, setGender] = useState('');
  
  useEffect(()=>{
loadcat();
getData();
  },[])
  

  const loadcat = async () => {
    const re = await fetch("http://127.0.0.1:7000/Category", {
      method: "GET",
      headers: { "content-type": "application/json" }
    });
    const data = await re.json();
    setcdata(data);
  };

  
  const SubCatLoad = async (x) => {
    const re = await fetch("http://127.0.0.1:7000/SubCatByCat", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ catid: x.target.value })
    });
    const data = await re.json();
    getsubcatdata(data);
  };

  console.log(getsubcatdata,"bjrebhhjhvfNM")


 

  const dataSave = async () => {
    const frm = new FormData();
    frm.append("SubCatId", subcatid);
    frm.append("PName", pname);
    frm.append("Price", price);
    frm.append("Offer", offerp);
    frm.append("Des", des);
    frm.append("fpic", pic);
    frm.append("Gender", gender);

    const re = await fetch("http://127.0.0.1:7000/product", {
      method: "POST",
      body: frm
    });

    const data = await re.json();
    alert(data.message);
  };

  const getData = async () => {
    const re = await fetch("http://127.0.0.1:7000/product", {
      method: "GET",
      headers: { "content-type": "application/json" }
    });
    const data = await re.json();
    setgetdata(data);
  };

  
  
  
    // Event handler to update the selected gender
    const handleGenderChange = (event) => {
      setGender(event.target.value);
    };

  

  return (
    <>
    <div className='container-fluid'>
    <div className='row head'>
<div className='col-sm-11 bg-blue-950'></div>
<div className='col-sm-1 '><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal " className='btn c'>
            Add Data</button>

            {/* modal */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h6 class="modal-title" id="exampleModalLabel" className='text-bolt'>Product</h6>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
     
              
   <div class="input-group">
 </div>

         <div className="my-0">
                  <label htmlFor="winterFashionInput" className="form-label">Category</label>
                  <div class="input-group">
                    <select className='form-control' onChange={SubCatLoad}>
                      <option>--Select Category--</option>
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
                  <div className='input-group'>
                    <select  className='form-control' onChange={(e)=>setsubcatid(e.target.value)}>
                      <option>--Select SubCategory--</option>
                      {
                        subcatdata.map((e)=>{
                          return(
                            <option value={e._id} selected>{e.SubCategory}</option>
                          )
                        })
                      }
                    </select>
                  </div>
                </div>    
                <div className="my-0">
                  <label htmlFor="winterFashionInput" className="form-label">Product Name</label>
                  <input type="text" className="form-control" onChange={(e)=>setpname(e.target.value)}  />
                </div>
                <div className="my-0">
                  <label htmlFor="winterFashionInput" className="form-label">Price</label>
                  <input type="text" className="form-control" onChange={(e)=>setprice(e.target.value)} />
                </div>
                <div className="my-0">
                  <label htmlFor="winterFashionInput" className="form-label">Offer Price</label>
                  <input type="text" className="form-control" onChange={(e)=>setofferp(e.target.value)}  />
                </div>
                <div className="row">
                <label htmlFor="winterFashionInput" className="form-label">Pic</label>
                  <div className='col-sm-10'>
                  <input type="file" className="form-control"  onChange={(e)=>{setpic(e.target.files[0])}} />
                  </div>
                </div>
                <div className="my-0">
                  <label htmlFor="winterFashionInput" className="form-label">Description</label>
                  <textarea placeholder='Here fill Description' className='des' onChange={(e)=>setdes(e.target.value)}></textarea>
                </div>


                   {/* <div>
      <h2>Select Gender:</h2>
      <div>
        <label>
          <input
            type="radio"
            value="male"
            checked={gender === 'male'}
            onChange={handleGenderChange}
          />
          Male
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="female"
            checked={gender === 'female'}
            onChange={handleGenderChange}
          />
          Female
        </label>
      </div>
    
    </div> */}

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={dataSave} >Save Data</button>
      </div>
    </div>
  </div>
</div>


            </div>
        </div>
<div className='row'>
  <div className='col-sm-1 bg-blue-950'><SideNavbar/> </div>
  <div className='col-sm-11'>
    <div className='container'>
    <table className='table table-bordered'>
    <thead>
           <tr>
                  <td className='text-center p-2'>Product Name</td>
                  <td className='text-center p-2'>Product Price</td>
                  <td className='text-center p-2'>Product Offer</td>
                  <td className='text-center p-2'>Product Descreption</td>
                  <td className='text-center p-2'>Product Pitcher</td>
               
                  </tr>
                  </thead>
                <tbody>
                  {
                   getdata.map((e)=>{
                    return(
                      <>
                      <tr>
                        <td>{e.ProductName}</td>
                        <td>{e.Price}</td>
                        <td>{e.Offer}</td>
                        <td>{e.Des}</td>
                        <td><img style={{width:"80px", height:"100px"}} src={"http://127.0.0.1:7000/" + e.Pic} /></td>
                       
                      </tr>
                      </>
                    )
                   }) 

                  }

                  </tbody>
    </table>
    </div>
  </div>
</div>





    </div>
   
    
    </>
  )
}
