import {useState,useEffect} from 'react'
import { createHotel,getdestinations } from './helper/authcalls'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function CreateHotel(){

  const [destinations,setDestinations]=useState([])

  const getdestination=()=>{
      getdestinations().then(data=>{
        console.log("dddddddddddddddddddddddddddddddddddddddddddd",data);
          setDestinations(data);
      }).catch(err=>{console.log(err)})
  }

  useEffect(()=>{
      getdestination()
  },[])


  const [hotel,setHotel]=useState({
    hotelname:"",
  adultPrice:"",
  childPrice:"",
  img:[],
  hotel_destination:"",
  hotel_description:""
  })



  const [img1,setimg1]=useState('')
  const [img2,setimg2]=useState('')
  const [img3,setimg3]=useState('')
  const [img4,setimg4]=useState('')

const handleChange = name => event => {
    setHotel({ ...hotel,[name]: event.target.value });
  };

const {hotelname,adultPrice,childPrice,hotel_destination,hotel_description}=hotel;

  const onSubmit=(e)=>{
    e.preventDefault();
    hotel.img.push(img1);
    hotel.img.push(img2);
    hotel.img.push(img3);
    hotel.img.push(img4);
    createHotel(hotel).then(()=>{
      console.log("Hotel created")
      setHotel({
        hotelname:"",
      adultPrice:"",
      childPrice:"",
      img:[],
      hotel_destination:"",
      hotel_description:""
      })
      setimg1('');
      setimg2('');
      setimg3('');
      setimg4('');

    }).catch((err)=>{
      console.log("Hotel Not Created")
    })

  }


    return (
        <>
         <div class="lg:w-1/2 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col ml-96 w-full mt-10 md:mt-0">
          <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Create Hotel:</h2>
          <div class="relative mb-4">
            <label for="hotelname" class="leading-7 text-sm text-gray-600">Hotel Name:</label>
            <input onChange={handleChange("hotelname")}   type="text"  id="hotelname" name="hotelname" value={hotelname}   class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <div class="relative mb-4">
            <label for="adultPrice" class="leading-7 text-sm text-gray-600">Adult Price:</label>
            <input onChange={handleChange("adultPrice")}  type="text"  id="adultPrice" name="adultPrice" value={adultPrice}  class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <div class="relative mb-4">
            <label for="childPrice" class="leading-7 text-sm text-gray-600">Child Price:</label>
            <input onChange={handleChange("childPrice")} type="text"  id="childPrice" name="childPrice" value={childPrice}  class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          
          <div class="relative mb-4">
            <label for="hotel_description" class="leading-7 text-sm text-gray-600">Hotel Description:</label>
            <input onChange={handleChange("hotel_description")}  type="text"  id="hotel_description" name="hotel_description" value={hotel_description}   class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <div class="relative mb-4">
            <label for="hotel_destination" class="leading-7 text-sm text-gray-600">Select Destination Name:</label>
            <select style={{fontSize:'15px'}} onChange={handleChange("hotel_destination")} 
          class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          value={hotel_destination}>
              <option>Select</option>
            {destinations.map((cid, index) => {
              return(
              <option key={index} value={cid.name}>
                {cid.name}
              </option>
              )
      })}
                
            </select>
            {/* <input type="text"  id="hotel_destination" name="hotel_destination" value={hotel_destination}  class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/> */}
          </div>
          <div class="relative mb-4">
            <label for="img1" class="leading-7 text-sm text-gray-600">Image Link 1:</label>
            <input onChange={(e)=>{setimg1(e.target.value)}} type="text"  id="img1" name="img1" value={img1}   class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <div class="relative mb-4">
            <label for="img2" class="leading-7 text-sm text-gray-600">Image Link 2:</label>
            <input onChange={(e)=>{setimg2(e.target.value)}} type="text"  id="img2" name="img2" value={img2}   class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <div class="relative mb-4">
            <label for="img3" class="leading-7 text-sm text-gray-600">Image Link 3:</label>
            <input onChange={(e)=>{setimg3(e.target.value)}} type="text"  id="img3" name="img3" value={img3}   class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <div class="relative mb-4">
            <label for="img4" class="leading-7 text-sm text-gray-600">Image Link 4:</label>
            <input onChange={(e)=>{setimg4(e.target.value)}} type="text"  id="img4" name="img4" value={img4}   class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>

          <Popup trigger={          <button class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Create Hotel</button>
} position="right center">
          <button class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
            Are you sure to Create Hotel
            <button onClick={(e)=>{console.log("jkdsbfdn");onSubmit(e)}} class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
            Yes
            </button>
            <button class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
            No
            </button>
            </button>
          </Popup>


          {/* <button onClick={(e)=>{onSubmit(e)}}  class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"></button> */}
          {/* <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p> */}
        </div>
        </>
    )
}

export default CreateHotel;