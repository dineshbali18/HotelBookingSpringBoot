import { getAllBookings,getNameById } from "./helper/authcalls"

import { useEffect, useState } from "react";

function GetBookings(){
    const [bookings,setBookings]=useState([]);

    useEffect(()=>{
        getAllBookings().then(data=>{
            console.log(data)
            setBookings(data)
        }).catch(err=>{
            console.log(err);
        })
    },[])

// userid--email
    return (
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -mx-4 -my-8">
                {bookings.map((book,index)=>{
                    let month=book.from &&book.from.substring(5,7);
                    let year=book.from && book.from.substring(0,4);
                    let date=book.from && book.from.substring(8,10);
                    let month1=book.to &&book.to.substring(5,7);
                    let year1=book.to && book.to.substring(0,4);
                    let date1=book.to && book.to.substring(8,10);
                    return (
                        <div style={{border:'solid',margin:'10px'}} class="py-8 px-10 lg:w-1/0.1">
                <div class="h-full flex items-start">
                  <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                    <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">{date}/{month}</span>
                    <span class="font-medium text-lg text-gray-800 title-font leading-none">{year}</span>
                    
                  </div> 
                  <span> __</span>
                  <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                  <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">{date1}/{month1}</span>
                    <span class="font-medium text-lg text-gray-800 title-font leading-none">{year1}</span>
                  </div>
                  <div class="flex-grow pl-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">{book.destination}</h2>
                    <h1 class="title-font text-xl font-medium text-gray-900 mb-3">{book.hotel_name}</h1>
                    <p class="leading-relaxed mb-5">Adult Count:{book.adults_count}</p>
                    <p class="leading-relaxed mb-5">Child Count:{book.children_count}</p>
                    <p class="leading-relaxed mb-5">Price:{book.price}</p>
                    {/* <a class="inline-flex items-center"> */}
                      {/* <img alt="blog" src="https://dummyimage.com/103x103" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"/> */}
                      <span class="flex-grow flex flex-col">
                        <span class="title-font font-medium text-gray-900">U_id:{book.userId}</span>
                      </span>
                    {/* </a> */}
                  </div>
                </div>
              </div>
                    )
                })}
              
              </div>
              </div>
              </section>
    )
}

export default GetBookings;