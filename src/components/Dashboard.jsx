import React from 'react'
import Header from './Header'
import WalletCard from './WalletCard'
import { Footer } from './Footer'

const Dashboard = () => {
    return (
        <div className='min-h-screen bg-white dark:bg-black flex flex-col'>
            <Header />
            <main className='h-full my-20 justify-center items-start flex'>
                <WalletCard />
            </main>
            <Footer />
        </div>
    )
}

export default Dashboard