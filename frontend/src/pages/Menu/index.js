import React from 'react'
import './index.css'
// import PizzaCart from "./DisplayPizza"

function index() {

  return (
    <div className='text-white my-10 '>
      <h1 className='text-center font-bolder text-6xl my-5'>Menu</h1>

      <div class="grid lg:grid-cols-2 gap-20 lg:gap-52 mx-24  lg:mx-80 rounded overflow-hidden shadow-lg pb-20">
        <div className='border-2  border-white-500'>
          <img class="w-full" src="https://i.postimg.cc/QNnzrWN9/baked-chicken-wings-asian-style-tomatoes-sauce-plate.jpg" alt="Sunset in the mountains" />
          <div className='flex flex-col justify-between min-h-[30%] items-center'>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-center">Appetizer</div>
              <p class="text-white text-base">
                Choose your favourite Appetizer from the VEGAN HUB menu. Get fresh Appetizer with your choice   </p>
            </div>
            <div class="flex justify-center px-6 pt-4 pb-2">
              <a href='/appetizer' className=''><button class=" bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded ">
                View All
              </button></a>
            </div>

          </div>
        </div>
        <div className='border-2 border-white-500'>
          <img class="w-full" src="https://i.postimg.cc/kGyDBsDQ/7xm-xyz639511.webp" alt="Sunset in the mountains" />
          <div className='flex flex-col justify-between min-h-[30%] items-center'>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-center">Salad</div>
              <p class="text-white text-base">
                Choose your favourite Salad from the VEGAN HUB menu. Get fresh Salad with your choice</p>
            </div>
            <div class="flex justify-center px-6 pt-4 pb-2">
              <a href="/salad" className=''>   <button class=" bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded ">
                View All
              </button></a>
            </div>
          </div>
        </div>

      </div>

      {/* <PizzaCart /> */}


    </div>

  )
}

export default index