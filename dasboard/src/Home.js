import React, { useEffect, useState } from 'react';
import Nav, { Data, Footer, Header, Slider } from './Componemts';
import { Navig } from './Componemts';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function Home() {
  const [cdata, setCData] = useState([]);

  useEffect(() => {
    loadCat();
  }, []);

  const loadCat = async () => {
    try {
      const response = await fetch("http://127.0.0.1:7000/Category", {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setCData(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  return (
    <>
      <div className='w-full  sticky-top'>
        <Nav />
        <div className='w-full   '>
          <Navig />
        </div>
        <div className="w-full flex  bg-white grid lg:grid-cols-9 md:grid-cols-9 sm:grid-cols-9 flex mt-3 ">
          {cdata.map((x) => {
            return (
              <div className=' flex item-center mx-2' key={x._id}>
                <div className='text-center shadow-lg border-1 border-white my-2 items-center rounded-lg m-2'>
                  <Link to={"subcat/" + x._id}>
                    <div className=' bg-white items-center  '>
                      <div className="rounded overflow-hidden ">
                        <img src={"http://127.0.0.1:7000/" + x.Pic} className='hover:scale-125 duration-1000 p-3 rounded-lg' style={{ width: "200px", height: "150px" }} alt={x.Category} />
                      </div>
                      <p className='text-x px-3'>{x.Category}</p>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        {/* slider start */}
        <div className='w-100% px-4 mt-4 '>
          <Carousel>
            <Carousel.Item interval={1000}>
              <img src={require('./image/first.jpg')} className="d-block w-100" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img src={require('./image/second.jpg')} className="d-block w-100" alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={require('./image/third.jpg')} className="d-block w-100" alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
        {/* Best of Electronics */}
        <div className='w-100%'>
          <Data heading="Best of Electronics" pic={require('./image/power.png')} name1="Power Store" pr1="2,999"
            pic2={require('./image/camra.png')} name2="Top Camera" pr2="60,999" pic3={require('./image/chip.png')} name3="SD Card" pr3="399" pic4={require('./image/key.png')} name4="Keyboard0" pr4="599" pic5={require('./image/pandrive.png')} name5="Pandrive" pr5="399" pic6={require('./image/printer.png')} name6="Printer" pr6="49,999" />
        </div>
        {/* Beauty food and toys section */}
        <div className='w-100% mt-3'>
          <Data heading="Beauty,Food,Toys & more" pic={require('./image/tedy.png')} name1="Soft Toys" pr1="399"
            pic2={require('./image/bycicle.png')} name2="Electric Cycle" pr2="30,199" pic3={require('./image/mat.png')} name3="Mat"
            pr3="399" pic4={require('./image/dryfood.png')} name4="Dry Food" pr4="299" pic5={require('./image/pandrive.png')} name5="Pandrive" pr5="399" pic6={require('./image/printer.png')} name6="Printer" pr6="49,999" />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
