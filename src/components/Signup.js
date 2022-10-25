import { useState } from 'react';
import Navbar from './Navbar'

import {signup} from './helper/authcalls'

function Signup(){

    const [user,setUser]=useState({
        username:"",
        email:"",
        password:"",
        error:""
    })
    const [msg,setMsg]=useState('')

    const {username,email,password}=user;

    const handleChange = username => event => {
        setUser({ ...user, error: false, [username]: event.target.value });
      };

    const onSubmit=(e)=>{
        e.preventDefault();
        if(username==""||email==""||password==""){
          setMsg("Details are missing....")
        }
        else{
        signup({username,email,password}).then(()=>{
          setMsg('signup successfull...')

        }).catch(err=>{
          setMsg('check your Backend...')
        })
      }
    }
    

    return (
        <>
        <Navbar/>
    <div style={{backgroundImage:`url("https://img.freepik.com/free-photo/landscape-shot-beautiful-cholatse-mountains-body-water-khumbu-nepal_181624-24825.jpg?w=1380&t=st=1665850739~exp=1665851339~hmac=38a69aefd35b0fd7b7f6c677620de4807d47443b261b8de7f7e6d6f34fc6d7a7")`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 class="title-font font-medium text-3xl text-white">Slow-carb next level shoindcgoitch ethical authentic, poko scenester</h1>
    </div>
    <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
      <div class="relative mb-4">
        <label for="full-username" class="leading-7 text-sm text-gray-600">Full userName</label>
        <input type="text" id="full-username" username="full-username" onChange={handleChange("username")} value={username} class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" username="email" onChange={handleChange("email")} value={email} class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
        <input type="password" id="password" username="password" onChange={handleChange("password")} value={password} class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button onClick={(e)=>{onSubmit(e)}} class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Signup</button>
      <label style={{color:'green',margin:'100'}}>{msg}</label>
    </div>
  </div>
</section>
</div>
</>
    )
}

export default Signup;