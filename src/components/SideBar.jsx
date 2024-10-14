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
                            !isSignedIn && <div className='flex flex-col'>
                                <Link to="/how-it-works">
                                    <Button variant="ghost" size="sm" className="text-black dark:text-white w-full">
                                        How it Works
                                    </Button>
                                </Link>
                                <Link to="/docs">
                                    <Button variant="ghost" size="sm" className="text-black dark:text-white w-full">
                                        ZeroByte Docs
                                    </Button>
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