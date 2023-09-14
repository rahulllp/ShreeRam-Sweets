import React from 'react'
import PhoneInput from "react-phone-input-2";
import { useState } from "react";
import { addDoc, collection } from 'firebase/firestore';
import {db} from './../firebase.config'

const Question2 = () => {
  const [userData,setUserData]=useState({
    name:"",
    mobile:"",
   })
   let name,value;
   function validation(e){
    let num = e.target.value;
    console.log(num)

   }
  
   const postUserData=(event)=>{
      name=event.target.name;
      value=event.target.value;
      setUserData({...userData,[name]:value});
   }
   //connect with firebase
   const submitData = async(event)=>{
      event.preventDefault();
      const{ name,mobile}=userData;
    console.log(typeof mobile)
  
   
    if(name && mobile){
  
      console.log()
    try {

      let a=localStorage.getItem("cartItems");
      const docRef = await addDoc(collection(db,"OfflineDetails"), {
        name: userData.name,
        mobile: userData.mobile,

        items:JSON.parse(a)
      });
  
  
      if(docRef){
        setUserData({
          name:"",
          mobile:"",
         
        })
        alert("Your Order is Confirmed, Thank You.")
       }else{
        alert("Please Enter All the Required Data");
       }
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
   }
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
            <input type="text" id="name" name="name" placeholder='Name' value={userData.name} onChange={postUserData} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-[100%]">
          <div class="relative">
           {/* */} <label for="email" class="leading-7 text-sm text-gray-600">Table Number</label>
            <input type="number" id="mobile" name="mobile" placeholder=' Table number' value={userData.mobile} onChange={postUserData} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
       
        <div class="p-2 w-full">
          <button class="flex mx-auto text-white lg:mb-[25%] mb-[44%] bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-800 rounded text-lg" onClick={submitData}>Order</button>
        </div>
      </div>
    </div>
  </div>
  
</section>
</form>

   </div>
  )
}

export default Question2