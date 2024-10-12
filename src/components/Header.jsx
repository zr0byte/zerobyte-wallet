import React from 'react'
import Logo from './Logo'
import { Button } from './ui/button'
import { ModeToggle } from './mode-toggle'
import { Separator } from './ui/separator'
import { SignInButton, SignedIn, SignedOut, UserButton, useAuth, useUser } from '@clerk/clerk-react'
import { Spinner } from './Spinner'
import { RainbowButtonDemo } from './RainbowButton'

const Header = () => {
  const menus = [ "Docs","How It Works", "FAQs" ]
  const { isLoaded, isSignedIn, user } = useUser()
  if (!isLoaded) {
    return <Spinner />
  }
  return (
    <>
      <header className="z-10 py-2 px-5 md:px-8 lg:px-24  backdrop-blur-md bg-background/80 sticky top-0">
        <div className='flex flex-row items-center justify-between'>
          <Logo position="top" />
          <nav className="flex items-center space-x-4">
            {menus.map((item, index) => (
              !isSignedIn && <Button key={index} variant="ghost" className="text-black dark:text-white">{item}</Button>
            ))}
            {
              !isSignedIn ?
                <RainbowButtonDemo text={"Get Started"} />
                :
                <Button variant="ghost" size="icon">
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </Button>
            }
            <ModeToggle />
          </nav>
        </div>
      </header>
      <Separator className="fixed top-[80px]" />
    </>
  )
}

export default Header