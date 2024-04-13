import React from 'react';

const Page = () => {
  return (
    <div className='w-full min-h-screen bg-[#0a154b] flex justify-around items-center flex-col'>
      <div className='w-[70%] h-[320px] rounded-xl flex justify-center items-center flex-col'>
        <textarea className='w-[80%] h-[200px] rounded p-2 resize-none' placeholder='Your Message' name="" id="" cols="30" rows="10"></textarea>
        <input className='m-3 w-[80%] h-[40px] rounded p-2' type="text" placeholder='email' />
        <button className='w-[80%] h-[12%] bg-[#08088e] rounded'>Send</button>
      </div>
      <div id='scrollable'>
        <div className="flex whitespace-no-wrap">
          <div className="d"></div>
          <div className="d"></div>
          <div className="d"></div>
          <div className="d"></div>
          <div className="d"></div>
          <div className="d"></div>
          <div className="d"></div>
          <div className="d"></div>
          <div className="d"></div>
          <div className="d"></div>
          <div className="d"></div>
          <div className="d"></div>
        </div>
      </div>
    </div>
  )
}

export default Page;
