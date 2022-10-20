import { useEffect, useState } from "react";
import { getBookings } from "./helper/authcalls";
import Navbar from "./Navbar";
import Signin from "./Signin";

function Bookings(){

  const [id,setId]=useState(localStorage.getItem('id'))
  const [bookings,setBookings]=useState([])

  useEffect(()=>{
    getBookings(id).then(data=>{
      console.log(data);
      setBookings(data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])
    return (
      <>
      {(localStorage.getItem('token')!='undefined'||localStorage.getItem('token')!=null)?
        <div>
            <Navbar/>
            {bookings.length==0?
              <div>No Bookings were done with this account.</div>
            :<></>}
            {bookings.length!=0&&bookings.map((booking,index)=>{
              return (
                <div style={{border:'solid',margin:'2px'}}>
            <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="-my-8 divide-y-2 divide-gray-100">
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-700">Destination: {booking.destination}</span>
          <span class="mt-1 text-gray-500 text-sm">FROM: {booking.from}</span>
          <span class="mt-1 text-gray-500 text-sm">TO: {booking.to}</span>

        </div>
        <div class="md:flex-grow flex flex-col">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Hotel Name: {booking.hotel_name}</h2>
          <span class="mt-1 text-red-500 text-sm">Adult Count: {booking.adults_count}</span>
          <span class="mt-1 text-red-500 text-sm">Child Count: {booking.children_count}</span>
          <span class="mt-1 text-red-500 text-sm">Price: {booking.price}</span>

          <span style={{border:'solid'}} class="mt-1 text-gray-500 text-sm">Successfully Booked !</span>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
              )
})}
        </div>
        :<><Signin/></>}
        </>
    )
}

export default Bookings;