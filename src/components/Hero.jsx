import React from 'react'
import Title from './Title'
import Header from './Header'
import { RainbowButtonDemo } from './RainbowButton'
import { AnimatedShinyTextDemo } from './AnimatedShinyText'

const Hero = () => {
    return (
        <div className='h-screen bg-white dark:bg-black flex flex-col'>
            <Header />
            <main className='flex-grow flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8'>
                <AnimatedShinyTextDemo />
                <Title title="Seamless Crypto Payments for Web3" />
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl text-center">
                    Empower your Web3 journey with ZeroByte wallet. Secure, simple, and seamlessly integrated.
                </p>
                <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                    <div className="rounded-md shadow">
                       <RainbowButtonDemo text={"Launch into Web3"} />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Hero