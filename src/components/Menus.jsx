import React from 'react'
import { ScrollArea } from './ui/scroll-area'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'

const Menus = () => {
    return (
        <div className="h-full hidden lg:flex md:flex ml-6 pt-4">
            <ScrollArea className="h-[90vh]">
                <div className='py-4'>
                    <div className='flex flex-col gap-4 text-black dark:text-white justify-center text-left'>
                        <h1 className='text-black dark:text-white opacity-30 px-4'>Explore</h1>
                        <Link to={"/wallet"}>
                            <Button variant="ghost" className="justify-start w-full">Wallet</Button>
                        </Link>
                        <Link to={"/transactions"}>
                            <Button variant="ghost" className="justify-start w-full">Transactions</Button>
                        </Link>
                        <Link to={"/analytics"}>
                            <Button variant="ghost" className="justify-start w-full">Analytics</Button>
                        </Link>
                        <Link to={"/settings"}>
                            <Button variant="ghost" className="justify-start w-full">Settings</Button>
                        </Link>
                        <Link to={"/developer"}>
                            <Button variant="ghost" className="justify-start w-full">Developer</Button>
                        </Link>
                        <Link to={"/help"}>
                            <Button variant="ghost" className="justify-start w-full">Help & Support</Button>
                        </Link>
                    </div>
                </div>
            </ScrollArea>
        </div>
    )
}

export default Menus