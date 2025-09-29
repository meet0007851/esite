import React from 'react'
import back1 from '../assets/img1.png'
import back2 from '../assets/img2.png'
import back3 from '../assets/img3.png'
import back4 from '../assets/img4.png'
function BackGround({heroCount}) {
  if(heroCount === 0){
    return <img src={back1} lat="" className='w-[100%] h-[100%] float-left overflow-auto object-cover'/>
  }
  else if(heroCount === 1){
       return <img src={back2} lat="" className='w-[100%] h-[100%] float-left overflow-auto object-cover'/>

  }
   else if(heroCount === 2){
       return <img src={back3} lat="" className='w-[100%] h-[100%] float-left overflow-auto object-cover'/>

  }
    else if(heroCount === 3){
       return <img src={back4} lat="" className='w-[100%] h-[100%] float-left overflow-auto object-cover'/>

  } 
}

export default BackGround