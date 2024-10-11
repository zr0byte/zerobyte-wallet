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
        <div className='lg:w-[60vw] w-full px-4 h-full'>
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
                        <h1 className='text-7xl font-bold'>{"$" + dummyBalance}</h1>
                        <span className='text-3xl font-bold text-neutral-600 dark:text-neutral-400'>USD</span>
                    </div>
                    <div className='flex gap-3 pt-6 justify-between p-4'>
                        {btns.map((btn, index) => (
                            <Button key={index} className="w-72 text-md">{btn}</Button>
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
                        <TabsContent value="token" className="p-4">
                            <h3 className="text-lg font-semibold mb-2">Token Information</h3>
                            <p>View your token balances and transactions here. You can also manage your token holdings and explore new tokens to add to your portfolio.</p>
                            <ul className="list-disc list-inside mt-2">
                                <li>Total Balance: 1,000 XYZ</li>
                                <li>Recent Transaction: Sent 50 XYZ to 0x1234...</li>
                                <li>Market Value: $5,000 USD</li>
                            </ul>
                        </TabsContent>
                        <TabsContent value="nft" className="p-4">
                            <h3 className="text-lg font-semibold mb-2">NFT Collection</h3>
                            <p>Explore and manage your NFT collection. View your owned NFTs, recent trades, and discover new digital artworks and collectibles.</p>
                            <ul className="list-disc list-inside mt-2">
                                <li>Total NFTs: 5</li>
                                <li>Recent Acquisition: CryptoPunk #1234</li>
                                <li>Estimated Collection Value: 10 ETH</li>
                            </ul>
                        </TabsContent>
                        <TabsContent value="activity" className="p-4">
                            <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
                            <p>Track your recent transactions and interactions on the blockchain. This includes token transfers, NFT trades, and smart contract interactions.</p>
                            <ul className="list-disc list-inside mt-2">
                                <li>10 min ago: Swapped 100 DAI for 0.05 ETH</li>
                                <li>2 hours ago: Minted new NFT from Collection XYZ</li>
                                <li>1 day ago: Staked 500 tokens in Farm ABC</li>
                            </ul>
                        </TabsContent>
                    </Tabs>
                </CardFooter>
            </Card>
        </div>
    )
}

export default WalletCard