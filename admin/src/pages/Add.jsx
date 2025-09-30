import React, { useState } from "react";
import Nav from "../component/nav";
import Sidebar from "../component/Sidebar";
import upload from '../assets/Gemini_Generated_Image_buqmx7buqmx7buqm.png'
function Add() {
  let [image1,setImage1] =  useState(false)
  let [image2,setImage2] =  useState(false)
  let [image3,setImage3] =  useState(false)
  let [image4,setImage4] =  useState(false)

  return (
    <div className="w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] overflow-x-hidden relative">
      <Nav />
      <Sidebar />

      <div
        className="w-[82%] h-[100%] flex top-[5%] items-center
justify-start overflow-x-hidden absolute right-0 "
      >
        <form
          action=""
          className="w-[100%] md:w-[90%] h-[100%] mt-
    [70px] flex flex-col gap-[30px] py-[60px] px-[30px] md:px-
    [60px]"
        >
          <div
            className="w-[400px] h-[50px]  text-[25px] md:text-
        [40px]  text-white"
          >
            Add Product Page
          </div>
    <p className='text-[20px] md:text-[25px] font-semibold'>
    Upload Images
    </p>
    
          <div className="w-[80%] flex flex-row items-center justify-start mt-[20px] gap-[20px]">
  <label htmlFor="image1" className="w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[#46d1f7]">
    <img
      src={!image1 ? upload : URL.createObjectURL(image1)}
      alt=""
      className="w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d] border-[2px]"
    />
    <input type="file" id="image1" hidden onChange={(e) => setImage1(e.target.files[0])} />
  </label>

  <label htmlFor="image2" className="w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[#46d1f7]">
    <img
      src={!image2 ? upload : URL.createObjectURL(image2)}
      alt=""
      className="w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d] border-[2px]"
    />
    <input type="file" id="image2" hidden onChange={(e) => setImage2(e.target.files[0])} />
  </label>

  <label htmlFor="image3" className="w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[#46d1f7]">
    <img
      src={!image3 ? upload : URL.createObjectURL(image3)}
      alt=""
      className="w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d] border-[2px]"
    />
    <input type="file" id="image3" hidden onChange={(e) => setImage3(e.target.files[0])} />
  </label>

  <label htmlFor="image4" className="w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[#46d1f7]">
    <img
      src={!image4 ? upload : URL.createObjectURL(image4)}
      alt=""
      className="w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d] border-[2px]"
    />
    <input type="file" id="image4" hidden onChange={(e) => setImage4(e.target.files[0])} />
  </label>
</div>

        </form>
      </div>
    </div>
  );
}

export default Add;
