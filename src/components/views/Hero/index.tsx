
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import HeroImage from "/public/hero.webp"


const Hero = () => {
    const btnText = "Start \n Shopping";
    return (
        <div className='py-5 flex justify-between items-center px-2'>
            {/* Left Content */}
            <div className='flex-1 mt-8 space-y-10'>
                <Badge className='text-lg bg-blue-100 text-blue-600 px-4 py-2'>Sale 70%</Badge>
                <h1 className="text-4xl md:text-6xl text-gray-800 font-bold">
                    An Industrial Take on Streetwear
                </h1>
                <p className='text-gray-700'>
                    Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
                </p>
                <Button className='px-6 h-12 text-white text-lg bg-black mt-5  '>
                    <ShoppingCart className="mr-2 h-6 w-6" />
                    {btnText}
                </Button>
                <div className='flex gap-6 py-8'>
                    <div className='w-14 md:w-24'>
                     <Image width={100} height={100} src={'/Featured1.webp'} alt={'bazaar'} />
                     </div>
                     <div className='w-14 md:w-24'>
                     <Image width={100} height={100} src={'/Featured2.webp'} alt={'bustle'} />
                     </div>
                     <div className='w-14 md:w-24'>
                     <Image width={100} height={100} src={'/Featured3.webp'} alt={'versace'} />
                     </div>
                     <div className='w-14 md:w-24'>
                     <Image width={100} height={100} src={'/Featured4.webp'} alt={'instyle'} />
                     </div>
                </div>
            </div>

            {/* Right Image */}
            <div className='hidden md:flex bg-gray-200 rounded-full'>
                <Image src={HeroImage} alt='Hero image' />
            </div>
        </div>
    )
}

export default Hero