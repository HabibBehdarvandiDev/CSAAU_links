import React from 'react'
import Image from 'next/image'
import logo from '@/public/images/logo_white.png'
import sun from '@/public/images/sun.svg'
import moon from '@/public/images/moon.svg'

const header = () => {
    return (
        <header className='flex justify-between align-middle bg-opacity-10 bg-blur-md bg-white shadow-sm p-4 my-2 mx-4 rounded-lg'>
            <div className='bg-opacity-5 bg-blur-md bg-white shadow-sm rounded-lg p-4 flex-1 flex align-middle justify-center'>
                <h3 className='text-white font-semibold text-center self-center'>Computer Association of Amirkabir Univercity</h3>
            </div>
            <Image src={logo} alt='link Icon' className='w-[125px] h-[125px] z-10' />
        </header>
    )
}

export default header