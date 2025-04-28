import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'

const Navbar = () => {
    return (
        <header className='w-full flex py-5 sm:px-10 px-5 items-center justify-between'>
            <nav className='flex w-full screen-max-width'>
                <div className='mx-5'>
                    <img src={appleImg} alt='Apple' width={14} height={18}/>
                </div>
                

                <div className='flex flex-1 max-sm:hidden w-full justify-center'>
                    {["Phones", "MacBooks", "Tablets", "Support"].map((item, index) => (
                        <div key={item} className='px-5 text-sm cursor-pointer text-gray hover:text-white font-bold transition-all'>{item}</div>
                    ))}
                </div>

                <div className='flex gap-7 max-sm:justify-end max-sm:w-full'>
                    <img src={searchImg} alt="Search" width={18} height={18} />
                    <img src={bagImg} alt="Bag" width={18} height={18} />
                </div>
            </nav>
        </header>
    )
}

export default Navbar