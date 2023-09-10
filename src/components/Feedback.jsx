import React from 'react'
import img from '../img/c2.png'
import PhoneInput from 'react-phone-input-2'
import { useState } from "react";
import { addDoc, collection } from 'firebase/firestore';
import {db} from './../firebase.config'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
const Feedback = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };
 
 
 
  const [userData,setUserData]=useState({
    name:"",
    mobile:"",
    message:"",
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
      const{ name,mobile,message}=userData;
    console.log(typeof mobile)
  
    if(mobile.length >9 && mobile.length < 11){
    if(name && mobile && message){
  
      console.log()
    try {
      const docRef = await addDoc(collection(db,"FeedBackDetails"), {
        name: userData.name,
        mobile: userData.mobile,
        message: userData.message    
      });
      if(docRef){
        setUserData({
          name:"",
          mobile:"",
          message:"",
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
    <div>
    <div>
    <section class="text-gray-600 body-font relative lg:-mt-[6%] -mt-[20%]">
  <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <img src={img} className='absolute inset-0'/>
      <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div class="lg:w-1/2 px-6">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p class="mt-1">20, seconds from highway, opp. Ramleela maidan, Halduchaur, Uttarakhand 263139</p>
        </div>
        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a class="text-indigo-500 leading-relaxed">niveshgupta05</a>
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p class="leading-relaxed">+91 78271 57687</p>
        </div>
      </div>
    </div>
    <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 lg:p-5 p-5">
      <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p class="leading-relaxed mb-5 text-gray-600">Thank you Foodies for visiting us your presence encouraged us alot Kindly provide us your valuable Feedback</p>
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={userData.name} onChange={postUserData}/>
      </div>
      <div class="p-2 w-[100%]">
          <div class="relative">
           {/* */} <label for="email" class="leading-7 text-sm text-gray-600 -ml-[2%]">Mobile</label>
            <input type="number" id="mobile" name="mobile" value={userData.mobile} onChange={postUserData} class="w-[105%] bg-white  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out -ml-[2%]"/>
          </div>
        </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" value={userData.message} onChange={postUserData}></textarea>
      </div>
      <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"onClick={submitData}>Submit</button>
      
    </div>
  </div>
</section>

    </div>
    </div>
  )
}

export default Feedback