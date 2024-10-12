import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { useUser } from '@clerk/clerk-react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Button } from './ui/button'
import icon from "../assets/logos/dark.png"

const WalletCard = () => {
    const { user } = useUser()
    console.log(user);
    const dummyBalance = 20
    const btns = ["Send", "Add Funds", "Withdraw", "Swap"]
    return (
        <div className='lg:w-[60vw] w-full px-4 h-screen'>
            <Card>
                <CardHeader>
                    <CardTitle className="text-black dark:text-white">
                        <div className='flex gap-5 items-center'>
                            <div>
                                <Avatar className="h-20 w-20">
                                    <AvatarImage src={user?.imageUrl} alt={user?.firstName} />
                                    <AvatarFallback>{icon}</AvatarFallback>
                                </Avatar>
                            </div>
                            <div>
                                <h1 className='lg:text-4xl text-3xl'>{"Welcome, " + user?.firstName + "!"}</h1>
                            </div>
                        </div>
                    </CardTitle>
                    <CardDescription className="pt-5">Your Account Assets.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className='flex flex-row items-end gap-3'>
                        <h1 className='text-7xl font-extrabold'>{"$" + dummyBalance}</h1>
                        <span className='text-3xl font-bold text-neutral-600 dark:text-neutral-400'>USD</span>
                    </div>
                    <div className='flex gap-4 pt-6 justify-between py-4 px-1'>
                        {btns.map((btn, index) => (
                            <Button key={index} variant="outline" size="lg" className="w-72 text-md">{btn}</Button>
                        )
                        )}
                    </div>
                </CardContent>
                {/* Showing random data for now */}
                <CardFooter className="w-full px-6">
                    <Tabs defaultValue="token" className="w-full">
                        <TabsList className="w-full grid grid-cols-3 h-auto">
                            <TabsTrigger value="token" className="w-full h-10">Token</TabsTrigger>
                            <TabsTrigger value="nft" className="w-full h-10">NFT</TabsTrigger>
                            <TabsTrigger value="activity" className="w-full h-10">Activity</TabsTrigger>
                        </TabsList>
                        <TabsContent value="token" className="p-4 text-center">
                            Nothing to show
                        </TabsContent>
                        <TabsContent value="nft" className="p-4 text-center">
                        Nothing to show
                        </TabsContent>
                        <TabsContent value="activity" className="p-4 text-center">
                        Nothing to show
                        </TabsContent>
                    </Tabs>
                </CardFooter>
            </Card>
        </div>
    )
}

export default WalletCard