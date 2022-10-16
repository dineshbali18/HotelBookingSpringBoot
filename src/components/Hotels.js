import Navbar from "./Navbar";
import {Link,useParams,useLocation} from 'react-router-dom'
import { useEffect, useState } from "react";
import {getHotelsByCity} from './helper/authcalls'

function Hotel(props){

  const {cityname}=useParams();
  // console.log(hotelname)

  const [hotels,setHotels]=useState([]);
  useEffect(()=>{
    getHotelsByCity({cityname}).then(data=>{
      console.log(data);
      const splittedArray = [];
  while (data.length > 0) {
    splittedArray.push(data.splice(0,3));  
  }
  // setDestinations(splittedArray);
      setHotels(splittedArray)
    }).catch((err)=>{
      console.log(err);
    })

  },[])
    return(
        <div>
            <Navbar/>
            <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
          {hotels.map((hotel,index)=>{
            return (          
              <>
              {hotel.map((hotelinside,index)=>{return (
          <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content"/>
          <h3 class="tracking-widest text-red-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
          <Link to={{pathname:'/hotel/description'
          }} state={{hotelObj:hotelinside}} class="text-red-500 inline-flex items-center mt-3">Book Hotel
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
        </div>
      </div>
      )})}
      </>
        )
      })}
      </div>
        </div>
    )
}

export default Hotel;