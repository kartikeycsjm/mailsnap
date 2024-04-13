import React from 'react'
const Header = () => {
    return (
        <div className='w-full h-[70px] flex justify-around items-center bg-[#17225b] text-[white]'>
            <h1 className='text-[22px] w-[30%] font-[cursive] flex justify-center text-[#e57343] items-center  sm:text-[28px] md:text-[38px]' >mailsnap</h1>
            <div className='w-[70%] flex justify-around items-center'>
                <input className=' w-[70%] text-black h-[31px]  bg- rounded-lg p-2 border-black sm:h-[32px] md:h-[36px]' type="search" placeholder='search email'/>
                <button className='w-[23%] h-[31px]  bg-[#08088e] rounded-xl sm:h-[32px] md:h-[36px]'>Search</button>
            </div>
        </div>
    )
}

export default Header