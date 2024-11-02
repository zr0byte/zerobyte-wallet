import React from 'react'
import Header from './Header'
import { Separator } from './ui/separator'
import Menus from './Menus'
import { Footer } from './Footer'

const AnalyticsPage = () => {
  return (
    <div className='min-h-screen bg-white dark:bg-black flex flex-col'>
      <Header />
      <main className='flex lg:mx-24 md:mx-8 sm:mx-24 h-full gap-20 w-auto'>
        <Separator orientation="vertical" className="absolute h-[92vh] hidden lg:block md:block lg:left-[300px] md:left-[240px]" />
        <Menus />
        <div className='justify-start items-start my-4 px-4'>
          <h1 className='text-black dark:text-white text-2xl font-medium'>Coming soon</h1>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AnalyticsPage