import React from 'react'
import PhoneInput from "react-phone-input-2";
import { useState } from "react";
import { addDoc, collection } from 'firebase/firestore';
import {db} from './../firebase.config'

const OnlineOrder = () => {
  const [userData,setUserData]=useState({
    name:"",
    mobile:"",
    address:"",
   })
   let name,value;
   function validation(e){
    let num = e.target.value;
    console.log(num)
  
    if(num.length < 9 || num.length > 11){
      alert("The number is not correct")
    }else{
      postUserData(e)
    }
  
   }
  
   const postUserData=(event)=>{
      name=event.target.name;
      value=event.target.value;
      setUserData({...userData,[name]:value});
   }
   //connect with firebase
   const submitData = async(event)=>{
      event.preventDefault();
      const{ name,mobile,address}=userData;
    console.log(typeof mobile)
  
    if(mobile.length >9 && mobile.length < 11){
    if(name && mobile && address){
  
      console.log()
    try {
      const docRef = await addDoc(collection(db,"OrderDetails"), {
        name: userData.name,
        mobile: userData.mobile,
        address: userData.address    
      });
  
  
      if(docRef){
        setUserData({
          name:"",
          mobile:"",
          address:"",
        })
        alert("Data Stored Thank You.")
       }else{
        alert("Please Enter All the Required Data");
       }
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
   }}
  else{
    alert("The number is incorrect")
  }}

  return (
   <div >

<form method="POST">
<section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto  lg:mt-[0.009%] lg:-mb-[2.6%]  -mt-[20%]">
    <div class="flex flex-col text-center w-full">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Shree Ram Sweets & Fast Food Center</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Enter details to Complete Order</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-[100%]">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" value={userData.name} onChange={postUserData} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-[100%]">
          <div class="relative">
           {/* */} <label for="email" class="leading-7 text-sm text-gray-600">Mobile</label>
            <input type="number" id="mobile" name="mobile" value={userData.mobile} onChange={postUserData} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-600">Address</label>
            <textarea id="address" name="address" value={userData.address} onChange={postUserData} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>

        <div class="p-2 w-full">
          <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={submitData}>Submit</button>
        </div>
      </div>
    </div>
  </div>
  
</section>
</form>

   </div>
  )
}

export default OnlineOrder