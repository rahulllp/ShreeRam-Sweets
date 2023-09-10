import React from 'react'
import Delivery from "../img/delivery.png";
import {Link, useNavigate} from 'react-router-dom'
const Question = () => {
    const navigate= useNavigate()
    const Menupage=()=>{
     navigate('/')
    }

  return (
    <div>
        <div className='lg:ml-[38%] lg:mt-[5.7%] ml-[1.3%] mt-[3%]'>
          </div>
 
 <div className='lg:ml-[42%] lg:mt-[2%] lg:-mb-[5%] ml-[20%] -mb-[20%] '>
 <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6 ">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full shadow-xl">
          <p className="text-base text-orange-500 font-semibold md:mt-3 md:ml-5">
      How You Are Visiting Us?
          </p>
        </div>
        </div>
         </div>

    <div className="lg:ml-[23%]">
         <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto ">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/3">
        <div class="h-full hover:bg-orange-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-2xl overflow-hidden text-center relative shadow-xl">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
          <h1 class="title-font sm:text-2xl text-xl font-medium text-orange-500  mb-3">OFFLINE VISIT</h1>
          <p class="leading-relaxed mb-3 text-orange-500">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <Link to={'/menucard'} class="text-red-700 inline-flex items-center cursor-pointer" >Order Now
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
          <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">

            
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/3">
        <div class="h-full hover:bg-orange-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-2xl overflow-hidden text-center relative shadow-xl ">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
          <h1 class="title-font sm:text-2xl text-xl font-medium text-orange-500 mb-3">ONLINE ORDER</h1>
          <p class="leading-relaxed mb-3 text-orange-400">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <Link to={'/menucard'} class="text-red-700 inline-flex items-center cursor-pointer">Order Now
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
          <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            </span>
            <span class="text-gray-400 inline-flex items-center leading-none text-sm">

            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
    
    </div>
  )
}

export default Question