import React from 'react';
<<<<<<< HEAD
const Page = () => {
  return (
    <div className='w-full min-h-screen bg- flex justify-around items-center flex-col'>
=======
import Mail from './components/Mail';
const Page = () => {
  return (
    <div className='w-full min-h-screen bg-[#e4e1e1] flex justify-around items-center flex-col'>
>>>>>>> 530b04a991e782bf4096c4b7cc68801afd80aa79
      <div className='w-[70%] h-[320px] rounded-xl flex justify-center items-center flex-col'>
        <textarea className='w-[80%] h-[200px] rounded p-2 resize-none
        md:w-[400px] sm:w-[300px]
        ' placeholder='Your Message' name="" id="" cols="30" rows="10"></textarea>
        <input className='m-3 w-[80%] h-[40px] rounded p-2
        md:w-[400px] sm:w-[300px]
        ' type="text" placeholder='email' />
        <button className='w-[80%] h-[12%] border border-blue-700 text-blue-700 rounded
        md:w-[400px] sm:w-[300px]
        '>Send</button>
      </div>
      <div id='scrollable'>
        <div className="border flex justify-center items-center whitespace-no-wrap">
          <Mail emailid={'kartikeymgkp@gmail.com'} message={' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui harum, porro sequi neque culpa reiciendis totam iure ut excepturi quos unde alias eos consectetur cupiditate facilis ratione eaque dolore provident.'} />
          <Mail />
          <Mail />
          <Mail />
          <Mail />
          <Mail />
        </div>
      </div>
    </div>
  )
}

export default Page;
