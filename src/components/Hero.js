import React, { useState } from "react";
import "../styles/gallery.css";




function Hero(props) {

  const showButtonOne = () => {
    if(props.buttonOne){
      return(
        <div class="rounded-md shadow">
          <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
            buttonOne
          </a>
        </div>
      )
    } 
  }

  const showButtonTwo = () => {
    if(props.buttonTwo){
      return(
        <div class="rounded-md shadow">
          <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
            buttonTwo
          </a>
        </div>
      )
    } 
  }


  return (
    <div class="relative bg-white overflow-hidden shadow-md">
      <div class="flex max-w-7xl mx-auto">
        <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div class="sm:text-center lg:text-left">
              <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span class="block xl:inline">{props.title}</span><br></br>
                <span class="block text-indigo-600 xl:inline">{props.titleBlue}</span>
              </h1>
              <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {props.description}
              </p>
              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg: flex-1 lg:justify-start">
                {showButtonOne()}
                <div class="p-3" />
                {showButtonTwo()}
              </div>
            </div>
          </main>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={props.img} alt="" />
      </div>
    </div>
  )
}

export default Hero
