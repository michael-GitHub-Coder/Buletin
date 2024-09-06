import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import { VscGithubInverted } from "react-icons/vsc";
const Footer = () => {
    return (

        // <footer className='h-[20vh] bg-red-600 text-white'>
            <>
            <div className='flex flex-col justify-center bg-red-600 text-white h-[20vh] mt-10'>
                <div className='container mx-auto flex justify-center pt-10  gap-5 md:gap-7 text-2xl md:text-4xl'>
                    <FaFacebook />
                    <SlSocialInstagram />
                    <BsTwitterX />
                    <VscGithubInverted />
                </div>
                <div className='pt-5 flex justify-center'>
                    <h1 className='text-[16px] md:text-[20px] pb-px'>&copy; 2024 Buletin, All rights reserved.</h1>
                </div>
            </div> 
            
            </>
        // </footer>
    )
}

export default Footer