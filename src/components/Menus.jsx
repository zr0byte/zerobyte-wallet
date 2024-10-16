import React from 'react'
import { ScrollArea } from './ui/scroll-area'
import { Button } from './ui/button'

const Menus = () => {
    return (
        <div className="h-full hidden lg:flex md:flex ml-6">
            <ScrollArea className="h-[90vh]">
                <div className='py-4'>
                    <div className='flex flex-col gap-4 text-black dark:text-white justify-center text-left'>
                        <h1 className='text-black dark:text-white opacity-30 px-4'>Explore</h1>
                        <Button variant="ghost" className="justify-start w-full">Dashboard</Button>
                        <Button variant="ghost" className="justify-start w-full">Wallet</Button>
                        <Button variant="ghost" className="justify-start w-full">Analytics</Button>
                        <Button variant="ghost" className="justify-start w-full">Settings</Button>
                        <Button variant="ghost" className="justify-start w-full">Developer</Button>
                        <Button variant="ghost" className="justify-start w-full">Help & Support</Button>
                    </div>
                </div>
            </ScrollArea>
        </div>
    )
}

export default Menus