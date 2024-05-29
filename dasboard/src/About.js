import React from 'react'
import Nav, { Footer, Navig } from './Componemts'

const About = () => {
  return (
    <>
<div className='w-100% bg-slate-100'>
<div className='w-100%'>
        <Nav/>
     </div>
<div className='w-100%'>
    <Navig/>
</div>
<div className=' bg-slate-100 flex justify-around grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-44'>
<div className=' py-40'>
<div><h1 className='text-2xl mx-36 font-bold'>Best Shopping Website</h1></div>
<p className='mx-5 py-5 items-center font-extralight decoration-wavy'>An About Us page is an opportunity to introduce your company on your own terms. It’s where potential customers will go to find out why you’re passionate about your products – and why they should be, too.

A well-crafted About Us page is the key to building trust and loyalty with your customers.
We’ve already established that an About Us page should tell a story. And what drives a great story? Its characters! In other words, customers want to gain a sense of who you and your team members really are, so that they don’t feel like they’re buying from some faceless monolith. 

It’s a great idea to include a team photo or individual headshots on your About Us page, along with some background from each team member about what drew him or her to the company. But don’t get carried away with industry talk, either. If your head of 
sales is also an amateur baker, share that, too! Everyone has interests outside of work, and your customers will appreciate the splash of color.
 </p>
</div>
     
<div className='mx-16 items-center py-10'>
<img src={require('./image/h.jpg')} className='h-auto w-96 rounded-md'/>
</div>
</div>

<div className='max-w-[1320] px-5 grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 mt-4 gap-3'>


<div className="text-center shadow-md border-2  border-slate-300  item">
        <div className=" rounded mx-5 mt-5 ">
        <img src={require('./image/mobi.jpeg')}className="hover:scale-125 duration-1000 py-4" />       
    </div> 
         <h3 className="py-2 ">Mobiles</h3>
    </div>

    <div className="text-center shadow-md border-2  border-slate-300  item">
        <div className=" rounded mx-5 mt-5 ">
        <img src={require('./image/fashi.jpeg')}className="hover:scale-125 duration-1000 py-4 h-110" />       
    </div> 
         <h3 className="py-2 ">Fashons</h3>
    </div>

    <div className="text-center shadow-md border-2  border-slate-300  item">
        <div className=" rounded mx-5 mt-5 ">
        <img src={require('./image/mobi.jpeg')}className="hover:scale-125 duration-1000 py-4" />       
    </div> 
         <h3 className="py-2 ">Mobiles</h3>
    </div>

    <div className="text-center shadow-md border-2  border-slate-300  item">
        <div className=" rounded mx-5 mt-5 ">
        <img src={require('./image/mobi.jpeg')}className="hover:scale-125 duration-1000 py-4" />       
    </div> 
         <h3 className="py-2 ">Mobiles</h3>
    </div>

    <div className="text-center shadow-md border-2  border-slate-300  item">
        <div className=" rounded mx-5 mt-5 ">
        <img src={require('./image/mobi.jpeg')}className="hover:scale-125 duration-1000 py-4" />       
    </div> 
         <h3 className="py-2 ">Mobiles</h3>
    </div>

    <div className="text-center shadow-md border-2  border-slate-300  item">
        <div className=" rounded mx-5 mt-5 ">
        <img src={require('./image/mobi.jpeg')}className="hover:scale-125 duration-1000 py-4" />       
    </div> 
         <h3 className="py-2 ">Mobiles</h3>
    </div>

    

</div>

<div className='w-100%'>
    <Footer/>
</div>


</div>

    </>
  )
}

export default About
