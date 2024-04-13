'use client'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Liked from '@/public/like.png'
import unLiked from '@/public/unlike.png'
const Mail = ({emailid,message}) => {
    const [liked,setLiked]=useState(false)
    const like=()=>{
        setLiked(!liked)

    }
  return (
    <div className='rounded-lg min-w-[350px] min-h-[200px] m-3 h-[200px] bg-blue-100 flex justify-between items-center flex-col'>
        <h1 className=' font-bold'>Written to: {emailid}</h1>
        <p className='text-[#303030] p-2 text-justify'>{message}</p>
        <div id='' className='w-[100%] h-[40px] flex justify-around'>
            <Image id='like' src={liked?Liked:unLiked} className={`w-[30px] duration-700 ${liked&&'rotate-[360deg]'}`}
            onClick={like}
            >
            </Image>
        </div>
    </div>
  )
}

export default Mail