import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { useUser } from '@clerk/clerk-react'
import { QrCode, Send, Wallet } from 'lucide-react'
import Title from './Title'

const WalletComponent = () => {
    const { user } = useUser()
    const WALLET_ADDRESS = "HHJCp7c3Rr3SkqLQagrSvVMSUGor4izqJ5UKVfi8kWZV"  // Just for now, make it dynamic later
    const tempMsg = "Your wallet address"
    const dummyBalance = 0.00
    const userFirstName = user?.firstName
    const btns = [
        {
            text: "Send",
            icon: Send
        },
        {
            text: "Receive",
            icon: QrCode
        },
        {
            text: "Withdraw",
            icon: Wallet
        }
    ]
    return (
        <>
            <div className='lg:w-[60vw] w-auto px-4 pt-4 h-screen'>
                {/* <Button className="mb-5 text-black dark:text-white" variant="outline">ZeroByte App</Button> */}
                <Title title={`${userFirstName}'s wallet`} extraClassName={"text-start"} />
                <Card>
                    <CardHeader>
                        {/* <CardTitle className="text-black dark:text-white">
                            <div className='flex gap-5 items-center'>
                                <div>
                                    <Avatar className="h-20 w-20">
                                        <AvatarImage src={user?.imageUrl} alt={user?.firstName} />
                                        {!(user?.imageUrl) && <AvatarImage src={icon} alt={"ZeroByte Logo"} />}
                                        <AvatarFallback>{user.firstName?.charAt(0)}{user.lastName?.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                </div>
                                <div className='flex items-center'>
                                    <h1 className='lg:text-4xl text-3xl'>{"Welcome, " + user?.firstName + "!"}</h1>
                                    
                                </div>
                            </div>
                        </CardTitle> */}
                        <CardDescription>Your Account</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className='flex justify-between items-end'>
                            <div className='flex flex-row items-end gap-3'>
                                <h1 className='text-7xl font-extrabold'>{"$" + dummyBalance}</h1>
                                <span className='text-3xl font-bold text-neutral-600 dark:text-neutral-400'>USD</span>
                            </div>
                            <div>
                                {/* <Button variant="ghost" className="text-neutral-600 dark:text-neutral-400">
                                    {WALLET_ADDRESS.slice(0, 6) + "....." + WALLET_ADDRESS.slice(-4)}
                                </Button> */}
                                <Button variant="ghost" className="text-neutral-600 dark:text-neutral-400">
                                    {tempMsg}
                                </Button>
                            </div>
                        </div>
                        <div className='flex gap-4 pt-6 lg:justify-between py-4 px-1 flex-wrap lg:flex-nowrap justify-center'>
                            {btns.map((btn, index) => (
                                <Button key={index} variant="outline" size="lg" className="lg:w-72 w-full text-md">
                                    {btn.icon && <btn.icon className="mr-2 h-4 w-4" />}
                                    {btn.text}
                                </Button>
                            )
                            )}
                        </div>
                        <CardDescription className="pt-5">Your Assests</CardDescription>
                    </CardContent>
                    {/* Showing random data for now */}
                    <CardFooter className="w-full px-6">
                        <Tabs defaultValue="token" className="w-full">
                            <TabsList className="w-full grid grid-cols-3 h-auto">
                                <TabsTrigger value="token" className="w-full h-10">Token</TabsTrigger>
                                <TabsTrigger value="nft" className="w-full h-10">NFT</TabsTrigger>
                                <TabsTrigger value="activity" className="w-full h-10">Activity</TabsTrigger>
                            </TabsList>
                            <TabsContent value="token" className="p-4 text-center opacity-30">
                                Nothing to show
                            </TabsContent>
                            <TabsContent value="nft" className="p-4 text-center opacity-30">
                                Nothing to show
                            </TabsContent>
                            <TabsContent value="activity" className="p-4 text-center opacity-30">
                                Nothing to show
                            </TabsContent>
                        </Tabs>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}

export default WalletComponent