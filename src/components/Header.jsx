import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { Button } from './ui/button'
import { ModeToggle } from './mode-toggle'
import { Separator } from './ui/separator'
import { SignedIn, SignedOut, UserButton, useAuth, useUser } from '@clerk/clerk-react'
import { Spinner } from './Spinner'
import { RainbowButtonDemo } from './RainbowButton'
import SideBar from './SideBar'
import CustomUserMenu from './CustomUserMenu'

const Header = () => {
  const menus = [
    { title: "Docs", link: "/docs" },
    { title: "How it Works", link: "/how-it-works" },
    { title: "FAQs", link: "/faqs" }
  ]
  const { isLoaded, isSignedIn } = useUser()
  const user = useUser()
  const auth = useAuth()
  const [isMobile, setIsMobile] = useState(false)
  console.log(user, auth);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!isLoaded) {
    return <Spinner />
  }

  const NavItems = () => (
    <>
      <SignedOut>
        {!isMobile && menus.map((item, index) => (
          <Link to={item.link} key={index}>
            <Button variant="ghost" size="sm" className="text-neutral-600 dark:text-neutral-400">
              {item.title}
            </Button>
          </Link>
        ))}
      </SignedOut>
      <SignedIn>
        <Button variant="ghost" size="icon">
          {/* <UserButton /> */}
          <CustomUserMenu />
        </Button>
      </SignedIn>
    </>
  )

  return (
    <>
      <header className="z-10 py-2 px-5 md:px-8 lg:px-24 backdrop-blur-md bg-background/80 sticky top-0">
        <div className='flex flex-row items-center justify-between'>
          <Logo position="top" />
          <div className='flex items-center space-x-4'>
            <NavItems />
            {!isSignedIn && <RainbowButtonDemo text={"Get Started"} />}
            {!isMobile && <ModeToggle />}
            {isMobile && (
              <>
                <SideBar />
              </>
            )}
          </div>
        </div>
      </header>
      <Separator className="fixed top-[80px] w-full" />
    </>
  )
}

export default Header