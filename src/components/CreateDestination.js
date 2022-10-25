import { useState } from "react";
import { createDestination } from "./helper/authcalls";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function CreateDestination(){
  const [dest,setDest]=useState({
    name:"",
    image:"",
    description:""
  })

  const handleChange = name => event => {
    setDest({ ...dest,[name]: event.target.value });
  };

  const {name,image,description}=dest;

  const onSubmit=(e)=>{
    e.preventDefault();
    console.log("dddddddddd",dest)
    createDestination(dest).then(()=>{
      console.log("Dest created")
      setDest({
        name:"",
        img:"",
        description:""
      })
    }).catch((err)=>{
      console.log("Error in creating desti")
    })
  }

    return (
        <>
        <div class="lg:w-1/2 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col ml-96 w-full mt-10 md:mt-0">
          <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Create Destination:</h2>
          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-gray-600">Destination Name:</label>
            <input onChange={handleChange("name")}  type="text"  id="name" name="name" value={name}  class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <div class="relative mb-4">
            <label for="img" class="leading-7 text-sm text-gray-600">Image Link:</label>
            <input onChange={handleChange("image")}  type="text"  id="image" name="image" value={image}   class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <div class="relative mb-4">
            <label for="description" class="leading-7 text-sm text-gray-600">descriptionription:</label>
            <input onChange={handleChange("description")}  type="text"  id="description" name="description" value={description}   class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <Popup trigger={          <button class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Create Destination</button>
} position="right center">
          <button class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
            Are you sure to Create Destination
            <button onClick={(e)=>{console.log("jkdsbfdn");onSubmit(e)}} class="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
            Yes
            </button>
            <button class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
            No
            </button>
            </button>
          </Popup>
          {/* <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p> */}
        </div>
        </>
    )
}

export default CreateDestination;