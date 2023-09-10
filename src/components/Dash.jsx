import React from 'react'
import { Link } from 'react-router-dom'

const Dash = () => {
  return (
    <div className='lg:mb-[6%]'>
          <div className='lg:ml-[38%] lg:mt-[5.7%] ml-[1.3%] mt-[3%]'>
          </div>
 
 <div className='lg:ml-[42%] lg:mt-[2%] lg:-mb-[5%] ml-[20%] -mb-[20%] '>
 <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6 ">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full shadow-xl lg:-ml-14">
          <p className="text-base text-orange-500 font-semibold md:mt-3 md:ml-2">
         Hello Admin Here's your Dashboard
          </p>
        </div>
        </div>
         </div>

    <div >
         <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto ">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/3">
        <div class="h-full hover:bg-orange-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-2xl overflow-hidden text-center relative shadow-xl">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
          <h1 class="title-font sm:text-2xl text-xl font-medium text-orange-500  mb-3">Orders (Online)</h1>
            <Link to={'/order'} class="text-red-700 inline-flex items-center cursor-pointer" >Next 
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
      <div class="p-4 lg:w-1/3">
        <div class="h-full hover:bg-orange-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-2xl overflow-hidden text-center relative shadow-xl">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
          <h1 class="title-font sm:text-2xl text-xl font-medium text-orange-500  mb-3">Orders (Offline)</h1>
            <Link to={'/order'} class="text-red-700 inline-flex items-center cursor-pointer" >Next 
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
      <div class="p-4 lg:w-1/3">
        <div class="h-full hover:bg-orange-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-2xl overflow-hidden text-center relative shadow-xl">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
          <h1 class="title-font sm:text-2xl text-xl font-medium text-orange-500  mb-3">Feedback Detail</h1>
            <Link to={'/feedans'} class="text-red-700 inline-flex items-center cursor-pointer" >Next 
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
    </div>
  )
}

export default Dash