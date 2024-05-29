import React, { useEffect, useState } from "react";
import "./abc.css"
import { Form, InputGroup ,Carousel} from "react-bootstrap";
import { Flex, Row,Card,Col } from "antd";
import { IoCartOutline } from "react-icons/io5";
import { LuUserCircle2 } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import {Collapse, Dropdown, initTE,} from "tw-elements";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
initTE({ Collapse, Dropdown });


const Nav=()=>{

  const [isCollapsed, setIsCollapsed] = useState(true)


  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="relative flex w-full flex-nowrap items-center sticky-top justify-between bg-white py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-2 " data-te-navbar-ref>
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        
        {/* Hamburger button for mobile view */}
        <button
          className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button"
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
        >
          {/* Hamburger icon */}
          <span className="[&>svg]:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        {/* Collapsible navbar container */}
        <div className={`${isCollapsed ? 'hidden' : 'flex'} mt-2  flex-grow basis-[100%] items-center lg:mt-0 lg:flex lg:basis-auto`} id="navbarSupportedContent3" data-te-collapse-item>
          {/* Left links */}
          <ul className="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row gap-8 " data-te-navbar-nav-ref>
            {/* Home link */}
            <li className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
            </li>
            {/* About link */}
            <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1 text-white " data-te-nav-item-ref>
              <a className="p-0 text-white transition duration-200
               hover:text-slate-500 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none white:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-white/90
               dark:[&.active]:text-neutral-400" href="#" data-te-nav-link-ref><span className="hover:text-slate-300">
                 <img
           src={require('./image/fkheaderlogo_exploreplus-44005d.jpg')}
             style={{ height: '30px' }} 
             alt="TE Logo"
             loading="lazy"
           /></span></a>
            </li>

            <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1 text-white" data-te-nav-item-ref>
              <a className="p-0 text-white transition duration-200
               hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none white:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-white/90
               dark:[&.active]:text-neutral-400" href="#" data-te-nav-link-ref>
<div className="input-group custom-input ">
                   <InputGroup className="text-xl">
               <InputGroup.Text id="" className='inp-co text-xl ' ><CiSearch /></InputGroup.Text>
               <Form.Control placeholder="Search" className="inp-co max-w-[320px] " />
             </InputGroup>
                </div>

               </a>
            </li>
            {/* Contact link */}
            <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1" data-te-nav-item-ref>
              <a className="p-0 text-black transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400 " href="#"
               data-te-nav-link-ref>
                <li class="mb-4 lg:mb-0 lg:pr-4 mx-4" data-te-nav-item-ref>
        <div className="flex items-center">
    <div className="text-xl "><LuUserCircle2 /></div>
   {/* dropdown start */}

<Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-blue-900">
          Login
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link to="UserLogin"
                 
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm font-bold' )}  >
                  Login here
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Support
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  License
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>






   </div>
         </li>
                 </a>
            </li>
            {/* Custom Navbar link */}
            <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1" data-te-nav-item-ref>
              <Link className="p-0 text-black transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400" href="#" data-te-nav-link-ref>
              <div className="flex items-center">
 <div className="text-xl "><IoCartOutline /></div>
 <div className=""><Link to="/CartViewPage">Cart</Link></div>

 
 </div>
                
                </Link>
            </li>

            <li class="mb-4 lg:mb-0 lg:pr-2 mx-4" data-te-nav-item-ref>
        <div className="flex items-center">
   <div><img src={require('./image/Store-9eeae2.jpg')} className="h-5 "/></div>
   <p className="">Become Seller</p>
 </div>
         </li>  
         <li>
             <a
               class="block w-full whitespace-nowrap bg-transparent px-4  text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
               href="#"
               data-te-dropdown-item-ref
               >
                    <div className="flex items-end">
   <div><img src={require('./image/dot.png')}/></div>

 </div>
                 </a
             >
          </li>

          </ul>
        </div>
      </div>
    </nav>
  );





}



const Navig = () => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="relative flex w-full flex-nowrap items-center justify-between bg-black py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-2" data-te-navbar-ref>
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        
        {/* Hamburger button for mobile view */}
        <button
          className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button"
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
        >
          {/* Hamburger icon */}
          <span className="[&>svg]:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        {/* Collapsible navbar container */}
        <div className={`${isCollapsed ? 'hidden' : 'flex'} mt-2  flex-grow basis-[100%] items-center lg:mt-0 lg:flex lg:basis-auto`} id="navbarSupportedContent3" data-te-collapse-item>
          {/* Left links */}
          <ul className="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row gap-8 " data-te-navbar-nav-ref>
           
            <li className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
            </li>
            {/* Home Linking */}
            <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1 text-white" data-te-nav-item-ref>
              <Link to="/" className="p-0 text-white transition duration-200
               hover:text-slate-500 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none white:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-white/90
               dark:[&.active]:text-neutral-400" href="#" data-te-nav-link-ref><span className="hover:text-slate-300">
                Home</span></Link>
            </li>

            <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1 text-white" data-te-nav-item-ref>
              <Link to='/About' className="p-0 text-white transition duration-200
               hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none white:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-white/90
               dark:[&.active]:text-neutral-400" href="#" data-te-nav-link-ref>
                <span className="hover:text-slate-300"> About</span>
               </Link>
            </li>
            {/* Contact link */}
            <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1" data-te-nav-item-ref>
              <Link to="Contact" className="p-0 text-white transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400 " href="#"
               data-te-nav-link-ref>Contact</Link>
            </li>
            {/* Custom Navbar link */}
            <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1" data-te-nav-item-ref>
              <Link to="MyOrder" className="p-0 text-white transition duration-200 hover:text-neutral-700
               hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 
               motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                href="#" data-te-nav-link-ref>MyOrder</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};




const Header=()=>{
    return(
      <>
<div className="w-full mx-auto grid lg:grid-col-9 md:grid-cols-3 sm:grid-cols-3">
<div className=""><img src={require('./image/surf.jpg')}/></div>
</div>

    
      
      
      
      </>
    )
   }


const Slider=()=>{
  return(
<>

  <div className="row m-1 mt-3  ">
    


<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel text-info">
  <div class="carousel-indicators ">
    <button type="button" data-bs-target="#carouselExampleDark"className="bg-white"  data-bs-slide-to="0" class="active " aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark"className="bg-white"  data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark"className="bg-white" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
    <img src={require('./image/first.jpg')} class="d-block w-100" alt="..."/>
      
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={require('./image/second.jpg')} class="d-block w-100" alt="..."/>
      
    </div>
    <div class="carousel-item">
      <img src={require('./image/third.jpg')} class="d-block w-100" alt="..."/>
     
    </div>
   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden ">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon " aria-hidden="true"></span>
    <span class="visually-hidden ">Next</span>
  </button>
</div>
 

  </div>

</>
  )
}

const Data=(x)=>{
  return(
    <>
<div className="w-100%">
<div className='w-100% px-4'>
<div className='mt-5'>
<h1 className='text-2xl '>{x.heading}</h1>
</div>
<div className='flex'>
<Carousel >
<Carousel.Item interval={5000}>
  {/* firist */}
<div className='grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 mt-4 gap-3'>
<div className="text-center shadow-lg border-2  border-slate-300 ">
        <div className="  rounded mx-5 mt-3">
        <img src={x.pic}
        className="hover:scale-105 duration-1000 py-4" />  
    </div> 
         <h3 className="py-1 ">{x.name1}</h3>
         <p className="py-2 font-bold">From <i class="fa fa-inr font-bold">{x.pr1}</i></p>
    </div>

    <div className="text-center shadow-lg border-2  border-slate-300 ">
        <div className=" rounded mx-5 mt-4">
        <img src={x.pic2}
        className="hover:scale-105 duration-1000 py-4" />  
    </div> 
         <h3 className="py-1 ">{x.name2}</h3>
         <p className="py-2 font-bold">From <i class="fa fa-inr font-bold">{x.pr2}</i></p>
    </div>

    <div className="text-center shadow-lg border-2  border-slate-300 ">
        <div className=" rounded mx-5 mt-4">
        <img src={x.pic3}
        className="hover:scale-105 duration-1000 py-4" />  
    </div> 
         <h3 className="py-1 ">{x.name3}</h3>
         <p className="py-2 font-bold">From <i class="fa fa-inr font-bold">{x.pr3}</i></p>
    </div>

    <div className="text-center shadow-lg border-2  border-slate-300 ">
        <div className=" rounded mx-5 mt-5">
        <img src={x.pic4}
        className="hover:scale-105 duration-1000 py-4" />  
    </div> 
         <h3 className="py-1 ">{x.name4}</h3>
         <p className="py-1 font-bold">From <i class="fa fa-inr font-bold">{x.pr4}</i></p>
    </div>

    <div className="text-center shadow-lg border-2  border-slate-300 ">
        <div className=" rounded mx-5 mt-5">
        <img src={x.pic5}
        className="hover:scale-105 duration-1000 py-4" />  
    </div> 
         <h3 className="py-2 ">{x.name5}</h3>
         <p className="py-1 font-bold">From <i class="fa fa-inr font-bold">{x.pr5}</i></p>
    </div>


    <div className="text-center shadow-lg border-2  border-slate-300 ">
        <div className=" rounded mx-5 mt-5">
        <img src={x.pic6}
        className="hover:scale-105 duration-1000 py-4" />  
    </div> 
         <h3 className="py-1 ">{x.name6}</h3>
         <p className="py-2 font-bold">From <i class="fa fa-inr font-bold">{x.pr6}</i></p>
    </div>
</div>
</Carousel.Item >
  {/* second */}
<Carousel.Item interval={5000}>
  <div className='grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 mt-4 gap-3'>
  <div className="text-center shadow-lg border-2  border-slate-300 ">
        <div className=" rounded mx-5 mt-3">
        <img src={require('./image/power.png') }
        className="hover:scale-105 duration-1000 py-4" />  
    </div> 
         <h3 className="py-1 ">Power Store</h3>
         <p className="py-2 font-bold">From <i class="fa fa-inr font-bold">2,999</i></p>
    </div>

    <div className="text-center shadow-lg border-2  border-slate-300 ">
        <div className=" rounded mx-5 mt-4">
        <img src={require('./image/camra.png') }
        className="hover:scale-105 duration-1000 py-4" />  
    </div> 
         <h3 className="py-1 ">Top Camera</h3>
         <p className="py-2 font-bold">From <i class="fa fa-inr font-bold">60,999</i></p>
    </div>

    <div className="text-center shadow-lg border-2  border-slate-300 ">
        <div className=" rounded mx-5 mt-4">
        <img src={require('./image/chip.png') }
        className="hover:scale-105 duration-1000 py-4" />  
    </div> 
         <h3 className="py-1 ">SD Card</h3>
         <p className="py-2 font-bold">From <i class="fa fa-inr font-bold">499</i></p>
    </div>

    <div className="text-center shadow-lg border-2  border-slate-300 ">
        <div className=" rounded mx-5 mt-5">
        <img src={require('./image/key.png') }
        className="hover:scale-105 duration-1000 py-4" />  
    </div> 
         <h3 className="py-1 ">Keyboard</h3>
         <p className="py-1 font-bold">From <i class="fa fa-inr font-bold">599</i></p>
    </div>

    <div className="text-center shadow-lg border-2  border-slate-300 ">
        <div className=" rounded mx-5 mt-5">
        <img src={require('./image/pandrive.png') }
        className="hover:scale-105 duration-1000 py-4" />  
    </div> 
         <h3 className="py-2 ">Pandrive</h3>
         <p className="py-1 font-bold">From <i class="fa fa-inr font-bold">399</i></p>
    </div>


    <div className="text-center shadow-lg border-2  border-slate-300 ">
        <div className=" rounded mx-5 mt-5">
        <img src={require('./image/printer.png') }
        className="hover:scale-105 duration-1000 py-4" />  
    </div> 
         <h3 className="py-1 ">Printer</h3>
         <p className="py-2 font-bold">From <i class="fa fa-inr font-bold">49,999</i></p>
    </div>
</div>
</Carousel.Item>
{/* third */}
<Carousel.Item interval={5000}>
<div className='grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 mt-4 gap-3'>
<div className="text-center shadow-lg border-2  border-slate-300 ">
        <div className=" rounded mx-5 mt-3">
        <img src={require('./image/power.png') }
        className="hover:scale-105 duration-1000 py-4" />  
    </div> 
         <h3 className="py-1 ">Power Store</h3>
         <p className="py-2 font-bold">From <i class="fa fa-inr font-bold">2,999</i></p>
    </div>

    <div className="text-center shadow-lg border-2  border-slate-300 ">
        <div className=" rounded mx-5 mt-4">
        <img src={require('./image/camra.png') }
        className="hover:scale-105 duration-1000 py-4" />  
    </div> 
         <h3 className="py-1 ">Top Camera</h3>
         <p className="py-2 font-bold">From <i class="fa fa-inr font-bold">60,999</i></p>
    </div>

    <div className="text-center shadow-lg border-2  border-slate-300 ">
        <div className=" rounded mx-5 mt-4">
        <img src={require('./image/chip.png') }
        className="hover:scale-105 duration-1000 py-4" />  
    </div> 
         <h3 className="py-1 ">SD Card</h3>
         <p className="py-2 font-bold">From <i class="fa fa-inr font-bold">499</i></p>
    </div>

    <div className="text-center shadow-lg border-2  border-slate-300 ">
        <div className=" rounded mx-5 mt-5">
        <img src={require('./image/key.png') }
        className="hover:scale-105 duration-1000 py-4" />  
    </div> 
         <h3 className="py-1 ">Keyboard</h3>
         <p className="py-1 font-bold">From <i class="fa fa-inr font-bold">599</i></p>
    </div>

    <div className="text-center shadow-lg border-2  border-slate-300 ">
        <div className=" rounded mx-5 mt-5">
        <img src={require('./image/pandrive.png') }
        className="hover:scale-105 duration-1000 py-4" />  
    </div> 
         <h3 className="py-2 ">Pandrive</h3>
         <p className="py-1 font-bold">From <i class="fa fa-inr font-bold">399</i></p>
    </div>


    <div className="text-center shadow-lg border-2  border-slate-300 ">
        <div className=" rounded mx-5 mt-5">
        <img src={require('./image/printer.png') }
        className="hover:scale-105 duration-1000 py-4" />  
    </div> 
         <h3 className="py-1 ">Printer</h3>
         <p className="py-2 font-bold">From <i class="fa fa-inr font-bold">49,999</i></p>
    </div>
</div>
</Carousel.Item>

</Carousel>


</div>

  </div>


</div>

  


   
    </>
  )
}


const SideNavSubCat = (x ,props) => {
  const [sdata, setsdata] = useState([]);
  const [pdata,setpdata]=useState([]);
  const { cid, onDataFetched } = props;
  const [testdata,settestdata]=useState("ss");
  const dispatch=useDispatch();
  useEffect(() => {
    LoadCat(x.cid);
  }, []);

  const LoadCat = async (m) => {
    try {
      const re = await fetch("http://127.0.0.1:7000/SubCategory/" +m, {
        method: "GET",
        headers: { "content-type": "application/json" }
      });

      const getdata = await re.json();
      setsdata(getdata);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const showProduct=async(x)=>{
    const re=await fetch("http://127.0.0.1:7000/productbyscat",{
      method: "POST",
      headers:{"content-type": "application/json"},
      body:JSON.stringify({sid:x})
  })
  const data=await re.json();
  setpdata(data)
  dispatch({type: "e1", data:pdata})
}

  return (
    <>
      <div className="bg-white">
            <ul>
              {sdata.map((x) => (
              <li className="flex text-xl font-semibol my-2 bg-white-900 rounded hover:bg-slate-300  text-center flex justify-center">
                <span className="text-lg" onClick={()=>{ showProduct(x._id)}}>{x.SubCategory} </span>
               
              </li>
              ))}
            </ul>
         
        </div>

    </>
  );
};






const Footer=()=>{
  return(
    <>
    {/* <div className ="container-fluid  mt-5 bg-dark">
      <div className="container">
<div className="row fs-6">
  <div className="col-sm-2 text-light">
    <p>ABOUT</p>
    <div className="row">
      <div className="col-wm-2 text-light">Contact Us</div>
      <div className="col-wm-2 text-light">About Us</div>
      <div className="col-wm-2 text-light">Careers</div>
      <div className="col-wm-2 text-light">cleartrip</div>
    </div>
   
  </div>

  <div className="col-sm-2 text-light">
  <p>HELP</p>
    <div className="row">
      <div className="col-wm-2 text-light">Contact Us</div>
      <div className="col-wm-2 text-light">About Us</div>
      <div className="col-wm-2 text-light">Careers</div>
      <div className="col-wm-2 text-light">cleartrip</div>
    </div>
  </div>

  <div className="col-sm-2 text-light">
  <p>CONSUMER POLICY</p>
    <div className="row">
      <div className="col-wm-2 text-light">Contact Us</div>
      <div className="col-wm-2 text-light">About Us</div>
      <div className="col-wm-2 text-light">Careers</div>
      <div className="col-wm-2 text-light">cleartrip</div>
    </div>
  </div>


  <div className="col-sm-2 text-light">
  <p>SOCIAL</p>
    <div className="row">
      <div className="col-wm-2 text-light">Contact Us</div>
      <div className="col-wm-2 text-light">About Us</div>
      <div className="col-wm-2 text-light">Careers</div>
      <div className="col-wm-2 text-light">cleartrip</div>
    </div>
  </div>


  <div className="col-sm-2 text-light">
  <p>Mail Us:</p>
    <div className="row">
      <div className="col-wm-2 text-light">Contact Us</div>
      <div className="col-wm-2 text-light">About Us</div>
      <div className="col-wm-2 text-light">Careers</div>
      <div className="col-wm-2 text-light">cleartrip</div>
    </div>
  </div>

  <div className="col-sm-2 text-light">
  <p >Office Address</p>
    <div className="row">
      <div className="col-wm-2 text-light">Contact Us</div>
      <div className="col-wm-2 text-light">About Us</div>
      <div className="col-wm-2 text-light">Careers</div>
      <div className="col-wm-2 text-light">cleartrip</div>
    </div>
   

  </div>
</div>

      </div>
    </div> */}

<div className="w-100% bg-black grid lg:grid-cols-7 md:grid-cols-7 sm:grid-cols-1 flex mt-5 ">
<div className="item-center mx-2">
<div className="text-white  mt-2" ><h1>ABOUT</h1>
<div className="font-bold text-xs mt-3 my-1">Contact US</div>
<div className="font-bold text-xs my-1">Careers</div>
<div className="font-bold text-xs my-1">Flipcart Strories</div>
<div className="font-bold text-xs my-1">Press</div>
<div className="font-bold text-xs my-1">Flipcart Wholesale</div>
<div className="font-bold text-xs my-1">Cleartrip</div>
<div className="font-bold text-xs my-1 flex">Corporate Information</div>

</div>
</div>
<div className="item-center mx-2">
<div className="text-white  mt-2" ><h1>ABOUT</h1>
<div className="font-bold text-xs mt-3 my-1">Contact US</div>
<div className="font-bold text-xs my-1">Careers</div>
<div className="font-bold text-xs my-1">Flipcart Strories</div>
<div className="font-bold text-xs my-1">Press</div>
<div className="font-bold text-xs my-1">Flipcart Wholesale</div>
<div className="font-bold text-xs my-1">Cleartrip</div>
<div className="font-bold text-xs my-1 flex">Corporate Information</div>
</div>
</div>
<div className="item-center mx-2">
<div className="text-white  mt-2" ><h1>ABOUT</h1>
<div className="font-bold text-xs mt-3 my-1">Contact US</div>
<div className="font-bold text-xs my-1">Careers</div>
<div className="font-bold text-xs my-1">Flipcart Strories</div>
<div className="font-bold text-xs my-1">Press</div>
<div className="font-bold text-xs my-1">Flipcart Wholesale</div>
<div className="font-bold text-xs my-1">Cleartrip</div>
<div className="font-bold text-xs my-1 flex">Corporate Information</div>

</div>
</div>
<div className="item-center mx-2">
<div className="text-white  mt-2" ><h1>ABOUT</h1>
<div className="font-bold text-xs mt-3 my-1">Contact US</div>
<div className="font-bold text-xs my-1">Careers</div>
<div className="font-bold text-xs my-1">Flipcart Strories</div>
<div className="font-bold text-xs my-1">Press</div>
<div className="font-bold text-xs my-1">Flipcart Wholesale</div>
<div className="font-bold text-xs my-1">Cleartrip</div>
<div className="font-bold text-xs my-1 flex">Corporate Information</div>

</div>
</div>
<div className="item-center mx-2">
<div className="text-white  mt-2" ><h1>ABOUT</h1>
<div className="font-bold text-xs mt-3 my-1">Contact US</div>
<div className="font-bold text-xs my-1">Careers</div>
<div className="font-bold text-xs my-1">Flipcart Strories</div>
<div className="font-bold text-xs my-1">Press</div>
<div className="font-bold text-xs my-1">Flipcart Wholesale</div>
<div className="font-bold text-xs my-1">Cleartrip</div>
<div className="font-bold text-xs my-1 flex">Corporate Information</div>

</div>
</div>
<div className="item-center mx-4">
<div className="text-white  mt-2" ><h1>ABOUT</h1>
<div className="font-bold text-xs mt-3 my-1">Contact US</div>
<div className="font-bold text-xs my-1">Careers</div>
<div className="font-bold text-xs my-1">Flipcart Strories</div>
<div className="font-bold text-xs my-1">Press</div>
<div className="font-bold text-xs my-1">Flipcart Wholesale</div>
<div className="font-bold text-xs my-1">Cleartrip</div>
<div className="font-bold text-xs my-1 flex">Corporate Information</div>

</div>
</div>
<div className="item-center mx-5">
<div className="text-white  mt-2" ><h1>ABOUT</h1>
<div className="font-bold text-xs mt-3 my-1">Contact US</div>
<div className="font-bold text-xs my-1">Careers</div>
<div className="font-bold text-xs my-1">Flipcart Strories</div>
<div className="font-bold text-xs my-1">Press</div>
<div className="font-bold text-xs my-1">Flipcart Wholesale</div>
<div className="font-bold text-xs my-1">Cleartrip</div>
<div className="font-bold text-xs my-1 flex">Corporate Information</div>

</div>
</div>

</div>


    </>
  )
}





export default Nav;
export {Header,Slider,Data,Footer,Navig,SideNavSubCat};