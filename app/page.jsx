import React from 'react';
import Message from './components/Message';

const Page = () => {

  return (
    <div className='w-full h-screen bg-[#0a154b] flex justify-around items-center flex-col'>
      <div className='w-[70%] h-[50%] border rounded-xl flex justify-around items-center flex-col'>
        <textarea className='w-[70%] h-[20%] rounded p-2 resize-none' placeholder='Your Message' name="" id="" cols="30" rows="10"></textarea>
        <input className='w-[70%] h-[12%] rounded p-2' type="text" placeholder='email' />
        <button className='w-[70%] h-[12%] bg-[#08088e] rounded'>Send</button>
      </div>
      <div className='w-[95%] h-[300px] overflow-x-auto'>
        <div className='flex'>
          <Message />
          <Message />
          <Message />
          <Message />
        </div>
      </div>
    </div>
  );
};

  export default Page;
