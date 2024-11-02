import React from 'react'
import Header from './Header'
import { Footer } from './Footer'
import WalletComponent from './WalletComponent'
import Menus from './Menus'
import { Separator } from './ui/separator'

const Dashboard = () => {
    return (
        <div className='min-h-screen bg-white dark:bg-black flex flex-col'>
            <Header />
            <main className='flex lg:mx-24 md:mx-8 sm:mx-24 h-full gap-20 w-auto'>
                <Separator orientation="vertical" className="absolute hidden lg:block md:block lg:left-[300px] md:left-[240px]" />
                <Menus />
                <WalletComponent />
            </main>
            <Footer />
        </div>
    )
}

export default Dashboard