import { useState } from "react";
import Gallery from "./Gallery";
import { addBooking } from "./helper/authcalls";
import Navbar from "./Navbar";
import {useLocation} from "react-router-dom"

function HotelDesc(props){

  const {hotelObj}=useLocation().state;

  const [adultCount,setAdultCount]=useState(0);
  const [childCount,setChildCount]=useState(0);
  // const [numberOfPeople,setPeople]=useState(0);
  // const [totalPrice,setTotalPrice]=useState(0);
  const [msgPay,setPay]=useState('');
  const [from,setFrom]=useState('')
  const [to,setTo]=useState('')
  const [userId,setUserId]=useState(localStorage.getItem('id'));
  const [hotelname,setHotelName]=useState(hotelObj.hotelname)
  const [hotel_destination,setHotelDestination]=useState(hotelObj.hotel_destination)
  const [msg,setMsg]=useState('')
  const [book,setBook]=useState(0);
  const [cardNum,setCard]=useState('')
  const [expiry,setEx]=useState('')
  const [c,setC]=useState('')




  // const {hotelname,hotel_destination}=hotelObj

  const incrementAdult=(e)=>{
    e.preventDefault();
    let x=adultCount;
    x++;
    setAdultCount(x);
  }
  const decrementAdult=(e)=>{
    e.preventDefault();
    let y=adultCount;
    if(y>0){
    y--;
    }
    setAdultCount(y);
  }
  const incrementChild=(e)=>{
    e.preventDefault();
    let x=childCount;
    x++;
    setChildCount(x);
  }
  const decrementChild=(e)=>{
    e.preventDefault();
    let y=childCount;
    if(y>0){
    y--;
    }
    setChildCount(y);
  }

  const fromDate=(e)=>{
    e.preventDefault();
    setFrom(e.target.value)
  }

  const toDate=(e)=>{
    e.preventDefault();
    setTo(e.target.value)

  }

  const onSubmit=(e)=>{
    e.preventDefault();
    let price=adultCount*(hotelObj.adultPrice)+childCount*(hotelObj.childPrice)
    let hotel_name=hotelObj.hotelname;
    let adults_count=adultCount;
    let children_count=childCount;
    let destination=hotelObj.hotel_destination;
    if(hotel_name==""||adults_count==0||price==0||destination==""||from==""||to==""){
      setMsg('Details not Satisfied..')
    }
    else{
      setBook(1);
      setMsg('')
  }

  }

  const onPay=(e)=>{
    e.preventDefault();
    if(c==''||expiry==''||cardNum==''){
      setPay('Check Payment Details')
    }
    else{

    let price=adultCount*(hotelObj.adultPrice)+childCount*(hotelObj.childPrice)
    let hotel_name=hotelObj.hotelname;
    let adults_count=adultCount;
    let children_count=childCount;
    let destination=hotelObj.hotel_destination;
    if(hotel_name==""||adults_count==0||price==0||destination==""||from==""||to==""){
      setMsg('Details not Satisfied.. ')
    }
    else{
    addBooking({hotel_name,adults_count,children_count,price,destination,userId,from,to})
    setMsg('Booking Done')
    setPay('Payment and Booking are Successfull')
    }
  }
  }
  



    return(
        <div>
            <Navbar/>
            <Gallery props={hotelObj.img}/>
            <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-0 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">HOTEL NAME</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">{hotelObj.hotelname}</h1>
        <div class="flex mb-4">
          <a class="flex-grow text-red-500 border-b-2 border-red-500 py-2 text-lg px-1">Description</a>
        </div>
        <p class="leading-relaxed mb-4">{hotelObj.hotel_description}.</p>
        <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500">Adult Price</span>
          <span class="ml-auto text-gray-900">{hotelObj.adultPrice}</span>
        </div>
        <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500">Child Price</span>
          <span class="ml-auto text-gray-900">{hotelObj.childPrice}</span>
        </div>
        <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500">Adult Count</span>
          <button onClick={(e)=>{incrementAdult(e)}} class="ml-96 rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <img src="https://icons-for-free.com/iconfiles/png/512/plus+icon-1320166903617346293.png"/>
          </button>
          <span style={{fontSize:'25px',marginLeft:'10px'}} class="ml-auto text-gray-900 ml-2">    {adultCount}  </span>
          <button onClick={(e)=>{decrementAdult(e)}} class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Nzzw8ZdHmIlMqzFFS4yjIAJqlqHWl_6tNXH4oZIk9w7QuL9d5epoj0t9p-StdE87NS8&usqp=CAU"/>
          </button>
        </div>
        <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500">Children Count</span>
          <button onClick={(e)=>{incrementChild(e)}} class="ml-96 rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <img src="https://icons-for-free.com/iconfiles/png/512/plus+icon-1320166903617346293.png"/>
          </button>
          <span style={{fontSize:'25px',marginLeft:'10px'}} class="ml-auto text-gray-900 ml-2">    {childCount}  </span>
          <button onClick={(e)=>{decrementChild(e)}} class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Nzzw8ZdHmIlMqzFFS4yjIAJqlqHWl_6tNXH4oZIk9w7QuL9d5epoj0t9p-StdE87NS8&usqp=CAU"/>
          </button>
        </div>
        <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500">Total Number of people</span>
          <span class="ml-auto text-gray-900">{adultCount+childCount}</span>
        </div>
        <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500">From</span>
          <span class="ml-auto text-gray-900">
            <input onChange={(e)=>{fromDate(e)}} type="date" required pattern="\d{4}-\d{2}-\d{2}"/>
          </span>
        </div>
        <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500">To</span>
          <span class="ml-auto text-gray-900">
          <input onChange={(e)=>{toDate(e)}} type="date" required pattern="\d{4}-\d{2}-\d{2}"/>
          </span>
        </div>
        <div class="flex border-t border-b mb-6 border-gray-200 py-2">
          <span class="text-gray-500">Total Price:</span>
        </div>
        <div class="flex">
          <span class="title-font font-medium text-2xl text-gray-900">Rs.{adultCount*(hotelObj.adultPrice)+childCount*(hotelObj.childPrice)}.00</span>
<button onClick={(e)=>{onSubmit(e)}} class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Book</button>
          <label>{msg}</label>
          <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={hotelObj.img[4]}/>
    </div>
  </div>
  {book==1?
          <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col m-96 w-full mt-10 md:mt-0">
          <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Payment:</h2>
          <div class="relative mb-4">
            <label for="cardnumber" class="leading-7 text-sm text-gray-600">CardNumber:</label>
            <input onChange={(e)=>{e.preventDefault();setCard(e.target.value)}} type="text" value={cardNum} id="cardnumber" name="cardnumber"   class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <div class="relative mb-4">
            <label for="expiry" class="leading-7 text-sm text-gray-600">expiry Date:</label>
            <input onChange={(e)=>{e.preventDefault();setEx(e.target.value)}} type="date" id="expiry" name="expiry" value={expiry}  class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <div class="relative mb-4">
            <label for="cvv" class="leading-7 text-sm text-gray-600">Cvv</label>
            <input onChange={(e)=>{e.preventDefault();setC(e.target.value)}} type="password" value={c} id="cvv" name="cvv"   class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <button onClick={(e)=>{e.preventDefault();onPay(e)}} class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Pay</button>
        {msgPay}
          {/* <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p> */}
        </div>:<></>}
</section>
        </div>
    )
}
export default HotelDesc;