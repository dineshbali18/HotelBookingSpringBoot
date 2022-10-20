import { useState } from "react";
import { Link } from "react-router-dom";
import CreateDestination from "./CreateDestination";
import CreateHotel from "./CreateHotel";
import DeleteDestination from "./DeleteDestination";
import DeleteHotel from "./DeleteHotel";
import GetBookings from "./GetBookings";
import Navbar from "./Navbar";
import Signin from "./Signin";

function AdminDashboard(){
    const [displ,setDispl]=useState('')

    const onClickButton=(x)=>{
        setDispl(x);
    }
    return (
        <>
        {(localStorage.getItem('token')!='undefined'||localStorage.getItem('token')!=null)?<>
        <Navbar/>
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="text-center mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Welcome to Admin Dashboard</h1>
      <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Heyh!, Admin you have the below operations to Perform.</p>
    </div>
    <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-8">
    
        <div onClick={()=>{onClickButton("cd")}} class="p-2 sm:w-1/3 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">Create Destination</span>
        </div>
      </div>
      
      <div onClick={()=>{onClickButton("dd")}} class="p-2 sm:w-1/3 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">Delete Destination</span>
        </div>
      </div>
      
      
      <div onClick={()=>{onClickButton("ch")}} class="p-2 sm:w-1/3 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">Create Hotel</span>
        </div>
      </div>
      
      
      <div onClick={()=>{onClickButton("dh")}} class="p-2 sm:w-1/3 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">Delete Hotel</span>
        </div>
      </div>
      
      <div onClick={()=>{onClickButton("book")}} class="p-2 sm:w-1/3 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">Get Bookings</span>
        </div>
      </div>
      
      
    </div>


    {/* <button class="flex mx-auto mt-16 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Button</button> */}
        {displ=="cd"?<CreateDestination/>:<>
        {displ=="dd"?<DeleteDestination/>:<>
        {displ=="ch"?<CreateHotel/>:<>
        {displ=="dh"?<DeleteHotel/>:<>
        {displ=="book"?<GetBookings/>:<></>}
        </>}
        </>}
        </>}
        </>}

  </div>
</section>
</>:<><Signin/></>}
</>
    )
}

export default AdminDashboard;