import React from 'react'
import Header from './Header'
import Title from './Title'

const Docs = () => {
    return (
        <div className='h-screen bg-white dark:bg-black flex flex-col'>
            <Header />
            <main>
                <Title title={"How It Works"} extraClassName="pt-16" />
            </main>
        </div>
    )
}

export default Docs