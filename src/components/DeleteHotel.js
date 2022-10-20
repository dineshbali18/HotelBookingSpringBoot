import {useEffect,useState} from 'react'
import {getHotelsByCity, getHotelsByCity2,deleteHotel} from './helper/authcalls'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function DeleteHotel(){
    const [hotels,setHotels]=useState([]);
    const [city,setCity]=useState('')

  const getData=(e)=>{
    e.preventDefault();
    console.log(city)
    getHotelsByCity2(city).then(data=>{
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
}

const deleteFrontHotel=(hotelid)=>{
  deleteHotel(hotelid)
}

    return (
        <>
        <div>
        <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 mt-4 text-gray-900">Delete Hotels</h1>
    </div>
        <div class="flex w-1/2 justify-center ml-96 items-end">
        <div class="relative mr-4 lg:w-full   md:w-full text-left">
          <label for="hero-field" class="leading-7 text-sm text-gray-600">Search Hotel By Destination</label>
          <input onChange={(e)=>{setCity(e.target.value)}} type="text" value={city} id="hero-field" name="hero-field" class="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-red-200 focus:bg-transparent border border-gray-300 focus:border-red-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button onClick={(e)=>{getData(e)}} class="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Search </button>
        </div>
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div style={{display:'flex',flexWrap:'wrap',marginLeft:'100px'}}>
    <div style={{display:'flex',flexWrap:'wrap',marginLeft:'100px'}}>
    {hotels.map((dest,index)=>{return(
      <>
      {dest.map((hotelinside,inde)=>{return(
    <div style={{border:'solid'}} class="flex flex-wrap m-2">
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-0 rounded-lg">
          <img alt="team" class="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-10" src={hotelinside.img[0]}/>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">{hotelinside.hotelname}</h2>
            {/* <p class="text-gray-500">{destinati.description}</p> */}
            <Popup trigger={          <button class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Delete</button>
} position="right center">
          <button class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
            Are you sure to Delete Hotel
            <button onClick={()=>{deleteFrontHotel(hotelinside._id)}} class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
            Yes
            </button>
            <button class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
            No
            </button>
            </button>
          </Popup>
      {/* <button onClick={()=>{deleteFrontHotel(hotelinside._id)}}  class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Delete</button> */}
          </div>
        </div>
      </div>
      </div>
      )})}
      </>
      )})}
      </div>
      </div>
      </div>
      </section>
      </div>
        </>
    )
}

export default DeleteHotel;