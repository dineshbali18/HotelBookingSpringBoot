import { useEffect, useState } from "react";
import { deleteDestination, getdestinations,deleteDestinationback } from "./helper/authcalls";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
function DeleteDestination(){

    const [destinations,setDestinations]=useState([])

    const getdestination=()=>{
        getdestinations().then(data=>{
            // console.log(data);
            const splittedArray = [];
  while (data.length > 0) {
    splittedArray.push(data.splice(0,3));  
  }
  setDestinations(splittedArray);
  console.log(splittedArray)
        }).catch(err=>{console.log(err)})
    }

    useEffect(()=>{
        getdestination()
    },[destinations])

    const deleteFrontDeletion=(destid)=>{
      console.log(destid)
      deleteDestinationback(destid)
    }


    return (
        <>
         <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Delete Destinations</h1>
    </div>
    <div style={{display:'flex',flexWrap:'wrap',marginLeft:'100px'}}>
    {destinations.map((dest,index)=>{return(
      <>
      {dest.map((destinati,inde)=>{return(
    <div style={{border:'solid'}} class="flex flex-wrap m-2">
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-2 rounded-lg">
          <img alt="team" class="w-24 h-24 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-10" src={destinati.image}/>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">{destinati.name}</h2>
            {/* <p class="text-gray-500">{destinati.description}</p> */}
            <Popup trigger={          <button class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Delete</button>
} position="right center">
          <button class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
            Are you sure to Delete Destination
            <button onClick={()=>{deleteFrontDeletion(destinati.id)}}  class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
            Yes
            </button>
            <button class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
            No
            </button>
            </button>
          </Popup>
      {/* <button onClick={()=>{deleteFrontDeletion(destinati._id)}}  class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Delete</button> */}

          </div>
        </div>
      </div>
      </div>
      )})}
      </>
      )})}
      </div>
      </div>
      </section>
        </>
    )
}

export default DeleteDestination;