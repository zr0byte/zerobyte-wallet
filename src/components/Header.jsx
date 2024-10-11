import React from 'react'
import Logo from './Logo'
import { Button } from './ui/button'
import { ModeToggle } from './mode-toggle'
import { Separator } from './ui/separator'

const Header = () => {
  const menus = ["Products", "Docs", "FAQs"]
  return (
    <>
    <header className="z-10 py-2 px-5 md:px-8 lg:mx-24 bg-white dark:bg-black">
      <div className='flex flex-row items-center justify-between'>

        <Logo position="top" />
        <nav className="flex items-center space-x-4">
          {menus.map((item, index) => (
            <Button key={index} variant="ghost" className="text-black dark:text-white">{item}</Button>
          ))}
          <ModeToggle />
        </nav>
      </div>
    </header>
    <Separator />
    </>
  )
}

export default Header