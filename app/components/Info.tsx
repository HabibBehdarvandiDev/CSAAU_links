'use client';
import React, { useEffect, useState } from 'react'
import { useQRCode } from 'next-qrcode';
import profile from '@/public/images/profile.jpg'
import NextImage from 'next/image'; // Renamed to NextImage to avoid conflict
import link_icon from '@/public/images/link_svg.svg'
import share_icon from '@/public/images/share.svg'
import blue_link from '@/public/images/blue_link.svg'
import telegram_logo from '@/public/images/Telegram.svg'
import { Button, message } from 'antd';

interface Info {
    title: string;
    url: string;
    description: string;
}

const telegram: Info = {
    title: "CSAAU Telegram",
    url: "tg://resolve?domain=amirkabir_association",
    description: "Computer Association"
}

const handleCopyUrl = () => {
    // Copy the URL to the clipboard
    navigator.clipboard.writeText(telegram.url);
    message.info("Link Copied!", 0.8)
};

const handleOpenTelegram = () => {
    // Open the Telegram app with the provided URL
    window.open(telegram.url, '_blank');
};


const Info = () => {

    const { Image } = useQRCode();

    const qrCode = Image<HTMLImageElement>({
        text: telegram.url,
        options: {
            errorCorrectionLevel: 'M',
            margin: 3,
            scale: 5,
            width: 300,
            color: {
                dark: '#0088CC',
                light: '#ff00d000',
            },
        },
    });

    return (
        <section className='h-screen w-screen relative'>
            <div className='flex flex-col justify-center align-middle self-center pt-28'>
                <div className='self-center z-10'>{qrCode}</div>
                <div className='py-3 mx-2 px-4 bg-white rounded-2xl flex justify-between shadow-sm bg-opacity-25 bg-blur-lg z-10'>
                    <div className='relative'>
                        <NextImage src={profile} alt="profile picture" className='rounded-full w-[70px] shadow-sm' />
                        <NextImage src={telegram_logo} alt="telegram_logo" className='rounded-full w-[25px] shadow-sm absolute bottom-0 right-0' />

                    </div>
                    <div className='flex flex-col justify-center align-middle'>
                        <h3 className='text-md font-medium text-white'>{telegram.title}</h3>
                        <p className='text-sm text-white'>{telegram.description}</p>
                    </div>
                    <div className='flex justify-center align-middle'>
                        <button
                            className='bg-blur-md bg-white shadow-sm bg-opacity-5 rounded-lg w-[50px] h-[50px] flex justify-center align-middle self-center mx-1'
                            onClick={handleCopyUrl}
                        >
                            <NextImage className='self-center shadow-sm' alt='share icon' src={blue_link} />
                        </button>
                        <button
                            className='bg-blur-md bg-white shadow-sm bg-opacity-5 rounded-lg w-[50px] h-[50px] flex justify-center align-middle self-center mx-1'
                            onClick={handleOpenTelegram}
                        >
                            <NextImage className='self-center' alt='share icon' src={share_icon} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info