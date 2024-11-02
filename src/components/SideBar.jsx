import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import MenuBar from './MenuBar'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { useAuth } from '@clerk/clerk-react'
import { ModeToggle } from './mode-toggle'
import Logo from './Logo'

const SideBar = () => {
    const { isSignedIn } = useAuth()
    return (
        <Sheet>
            <SheetTrigger>
                <MenuBar />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        <div className='mt-5 flex flex-row justify-between items-center'>
                            <Logo />
                            <ModeToggle />
                        </div>
                    </SheetTitle>
                    <SheetDescription>
                        {
                            !isSignedIn ? <div className='flex flex-col gap-1'>
                                <Link to="/docs">
                                    <Button variant="ghost" size="sm" className="text-black dark:text-white w-full justify-start text-left">
                                        Docs
                                    </Button>
                                </Link>
                                <Link to="/how-it-works">
                                    <Button variant="ghost" size="sm" className="text-black dark:text-white w-full justify-start text-left">
                                        How it Works
                                    </Button>
                                </Link>
                                <Link to="/faqs">
                                    <Button variant="ghost" size="sm" className="text-black dark:text-white w-full justify-start text-left">
                                        FAQs
                                    </Button>
                                </Link>
                            </div>
                                :
                                <div className='flex flex-col gap-4 text-black dark:text-white justify-center text-left'>
                                    <h1 className='text-black dark:text-white opacity-30'>Explore</h1>
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
                        }
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default SideBar