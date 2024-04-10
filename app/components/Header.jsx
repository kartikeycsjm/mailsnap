import React from 'react'

const Header = () => {
    return (
        <div className='w-full h-[70px] flex justify-around items-center bg-[#0b1234] text-[white]'>
            <h1 className='text-[26px] w-[30%] font-[cursive] flex justify-center text-[#e57343]' >mailsnap</h1>
            <div className='w-[65%] flex justify-around'>
                <input className='w-[70%] h-[36px] bg- rounded-lg p-2 border-black' type="search" placeholder='search email' />
                <button className='w-[25%] h-[36px] bg-[#08088e] rounded-xl'>Search</button>
            </div>
        </div>
    )
}

export default Header