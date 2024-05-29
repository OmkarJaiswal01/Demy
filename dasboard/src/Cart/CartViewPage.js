import React, { useEffect, useState } from 'react'
import Nav, { Navig } from '../Componemts'
import { Button } from 'antd'
import TextArea from 'antd/es/input/TextArea';

function CartViewPage() {

const[data,setData]=useState([]);
const[name,setname]=useState();
const[mob,setmob]=useState();
const[Address,setAddress]=useState();
const[pin,setpin]=useState();
const[addr,setaddr]=useState([]);
const [selectedAddress, setSelectedAddress] = useState(null);
const[name1,setname1]=useState();
const[address1,setaddress1]=useState();
const[mob1,setmob1]=useState();
const[pin1,setpin1]=useState();
const[total,settotal]=useState(0);
const[totalof,settotalof]=useState(0);
const[discount,setdiscount]=useState(0);
const[UpdateQty,setUpdateQty]=useState(1);
useEffect(()=>{
  cartData ();
  getAdd();
},[]);

const cartData = async () => {
  try {
    const response = await fetch("http://127.0.0.1:7000/Cart", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const productData = await response.json();
    var tot=0;
    var totof=0;
    var dis=0;
    for(var i=0;i<productData.length;i++){
      tot=tot+(parseInt(productData[i].Price.replace(",","")) * parseInt(productData[i].Qty));
      totof=totof+(parseInt(productData[i].offer.replace(",","")) * parseInt(productData[i].Qty)); 
    }
    settotal(tot);
    settotalof(totof);
    setdiscount(tot-totof);
  
    setData(productData);

    setname1(productData[0].name)
    setmob1(productData[0].mob)
    setaddress1(productData[0].address)
    setpin1(productData[0].pin)
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle error, e.g., set an error state
  }
};

const SaveData=async()=>{
const re=await fetch("http://127.0.0.1:7000/Uaddress",{
  method:"POST",
  headers:{ "Content-Type": "application/json" },
  body:JSON.stringify({Name:name,Mob:mob,Address:Address,Pin:pin})
})
const data=await re.json();
alert(data.message);

}

const getAdd=async()=>{
const re=await fetch("http://127.0.0.1:7000/Uaddress",{
  method:"GET",
  headers:{"content-type":"application/json"},
 
})
const data=await re.json();
setaddr(data)
}

// Function to update the selected address
const changeaddress = async(x,a,b,c,d) => {
  const re=await fetch("http://127.0.0.1:7000/Uaddress",{
  method:"PUT",
  headers:{"content-type":"application/json"},
 body:JSON.stringify({id:x})
})
const data=await re.json();
alert(data.message);
setname1(a);
setmob1(b);
setaddress1(c);
setpin1(d)
};

const increaseItem=async(x,qty)=>{
  
  const re=await fetch("http://127.0.0.1:7000/cart",{
    method:"PUT",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({id:x,Qty: (parseInt(qty)+1)})
    })
    const data=await re.json();
    alert(data.message);
    cartData ();
}

const decreaseItem=async(x,qty)=>{
  
const re=await fetch("http://127.0.0.1:7000/cart",{
  method:"PUT",
  headers:{"content-type":"application/json"},
  body:JSON.stringify({id:x,Qty: (parseInt(qty)-1)})

})
const data=await re.json();
alert(data.message)
cartData ();

}
return (
    <>
      <div className='w-100% sticky-top'>
<Nav/>
      </div>
      <div className='max-w-[1320px]  grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mx-auto'>
       <div className=''>
       <div className=' border rounded  col-span-1 flex  justify-between h-13  mt-3 '>
        <p className='justify-start text-center p-2 font-serif '>From Save Address</p>
         <div className='justify-end '><button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Enter Delivery Address</button></div>
         {/* modal of address */}
         <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Enter Address</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className="my-0">
                  <label htmlFor="winterFashionInput" className="form-label" >Full Name</label>
                  <input type="text" className="form-control" onChange={(e)=>setname(e.target.value)} />
                </div>
                <div className="my-0">
                  <label htmlFor="winterFashionInput" className="form-label">Mob No.</label>
                  <input type="Number" className="form-control" onChange={(e)=>setmob(e.target.value)} />
                </div>
                <div className="my-0">
                  <label htmlFor="winterFashionInput" className="form-label">Address</label>
                  <input type="text" className="form-control" onChange={(e)=>setAddress(e.target.value)}/>
                </div>
                <div className="row">
                <label htmlFor="winterFashionInput" className="form-label">Pin Code</label>
                  <div className='col-sm-10'>
                  <input type="number" className="form-control"onChange={(e)=>setpin(e.target.value)}  />
                  </div>
                </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={SaveData}>Save changes</button>
      </div>
    </div>
  </div>
</div>

        </div>
        <div className='border mt-5  p-2'>
        {
          data.map((x)=>{
return(
  
  <div className='w-auto col-span-1 shadow-sm mt-2 '>
  <div className='flex gap-4 mt-5'>
  
  <img src={"http://127.0.0.1:7000/" + x.Pic} className='hover:scale-125 duration-1000 p-3 rounded-lg' style={{width:"200px", height:"150px"}}/>
  
  <div className=''><p className=' hover:text-sky-600 font-semibold text-lg'>{x.Pname}</p>
  <p className='text-gray-700 '>{x.Des}</p>
  <div className='flex gap-2 mt-3'><p className=' text-base'><del>{x.offer}</del></p><p className='font-bolt text-lg font-bolt mb-2'>{x.Price}</p><p className='text-green-700 font-bold'>10% Off</p><p className='text-green-700 font-bold'>2 offers applied</p></div>
  </div>
  </div>
  <p className='text-center mr-28'>User Email: {x.Email}</p>
  <div className='flex text-center gap-1  mt-5 '>
      <button className=' border-full h-5 w-5 rounded text-center hover:text-sky-600 text-lg'
      onClick={()=>{increaseItem(x.cid, x.Qty)}}>+</button><p className='h-7 w-10 border box-border text-center text-lg'>{x.Qty}</p>
      <button  className=' border h-7 w-7 rounded  hover:text-red-500 text-2xl flex justify-center mb-8'
      onClick={() => decreaseItem(x.cid, x.Qty)}>-</button>
      
    <p className='mx-5 font-semibold hover:text-sky-600 '>SAVE FOR LATER</p> <p className='font-semibold hover:text-red-500 rounded-sm'>REMOVE</p>
  
  </div>
  
  
  </div>
  
  
)

          })
        }


<div className='mt-4 flex justify-end mb-5'>
      <Button className='bg-orange-400 justify-end hover:bg-slate-500 text-white font-semibold px-4'>PLACE ORDER</Button>
  </div>



</div>

       </div>

       

        <div className="relative max-h-[550px]  mx-28 text-center flex flex-col mt-3 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
  <div className="p-6 mx-5 ">
    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    <p>PRICE DETAILS</p>
    </h5>
   
    <div className='flex gap-5 m-3'> <p>Price</p><p>₹{totalof}</p></div>
            <div className='flex gap-5 m-3'><p>Discount</p><p>{discount}</p></div>
           <div className='flex gap-5 m-3'> <p>Delivery Charges</p><p>Free</p></div>
           <div className='flex gap-5 m-3'> <p>Total Amount</p><p>₹{total}</p></div>
            <p>You will save {discount} on this order</p>
  
    
  </div>

<div><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Select Address
</button>
{/* <!-- Modal --> */}
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel"className=" font-semibolt">Select Below Address</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <table className='table table-bordered'>
        {addr.map((x) => (
            <tr>
              <td>{x.Name},{x.Address},{x.Mob},{x.Pin}</td> 
              <td><button className="btn btn-info" onClick={()=>{changeaddress(x._id,x.Name,x.Address,x.Mob,x.Pin)}}>Select</button></td> 
          </tr>
          ))}
        </table>
          
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</div>
 
 {/* Display selected address data in another  place */}
 {
  <ul className='text-center mt-3 font-semibold border font-sans p-2'>
    <li>Name: {name1}</li>
    <li>Mob No: {mob1}</li>
    <li>Address: {address1}</li>
    <li>Pin Code: {pin1}</li>
  </ul>
 }

</div>





</div>   
    </>
  )
}

export default CartViewPage
