import React, { useState } from 'react';

export default function Modal() {
  const [WinterFashion, setWinterFashion] = useState('');
  const [Electronics, setElectronics] = useState('');
  const [Clothing, setClothing] = useState('');
  const [MensWear, setMensWear] = useState('');
  const [Kidswear, setKidswear] = useState('');
  const [Gift, setGift] = useState('');
  const [Flowers, setFlowers] = useState('');
const[data,setdata]=useState([]);
  const SaveData = async () => {
    const re = await fetch("http://127.0.0.1:7000/Category", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        WinterFashion: WinterFashion,
        Electronics: Electronics,
        Clothing: Clothing,
        MensWear: MensWear,
        Kidswear: Kidswear,
        Gift: Gift,
        Flowers: Flowers,
      })
    });
    const data = await re.json();
    alert(data.message);
  }; 
  
  const loadrecord= async()=>{
    const re=await fetch("http://127.0.0.1:7000/Category",{
      method:"POST",
      headers:{"Content-Type": "application/json"}
    });
    const rdata = await re.json();
    setdata(rdata);
  }
  
  
  
  return (
    <div>
      <button type="button" className="btn btn-primary text-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Category
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="my-0">
                  <label htmlFor="winterFashionInput" className="form-label">Winter Fashion</label>
                  <input type="text" className="form-control" id="winterFashionInput" onChange={(e)=>setWinterFashion(e.target.value)}/>
                </div>
                <div className="my-0">
                  <label htmlFor="electronicsInput" className="form-label">Electronics</label>
                  <input type="text" className="form-control" id="electronicsInput" onChange={(e)=>setElectronics(e.target.value)} />
                </div>
                <div className="">
                  <label htmlFor="Clothing&AccessoriesInput" className="form-label">Clothing & Accessories</label>
                  <input type="text" className="form-control" id="electronicsInput"onChange={(e)=>setClothing(e.target.value)} />
                </div>
                <div className="">
                  <label htmlFor="electronicsInput" className="form-label">Mens Wear</label>
                  <input type="text" className="form-control" id="electronicsInput" onChange={(e)=>setMensWear(e.target.value)}/>
                </div>
                
                <div className="">
                  <label htmlFor="electronicsInput" className="form-label">Kids wear</label>
                  <input type="text" className="form-control" id="electronicsInput"onChange={(e)=>setKidswear(e.target.value)} />
                </div>
                <div className="">
                  <label htmlFor="electronicsInput" className="form-label">Gift CArds</label>
                  <input type="text" className="form-control" id="electronicsInput"onChange={(e)=>setGift(e.target.value)} />
                </div>
                <div className="">
                  <label htmlFor="electronicsInput" className="form-label">Flowers</label>
                  <input type="text" className="form-control" id="electronicsInput" onChange={(e)=>setFlowers(e.target.value)}/>
                </div>
                {/* Add similar input fields for other categories */}
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger text-dark" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-success text-dark" onClick={SaveData}>Save Data</button>
            </div>


            
          </div>
        </div>
      </div>
    </div>
  );
}
