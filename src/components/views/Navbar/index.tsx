import Image from "next/image"
import Logo from "/public/Logo.webp"
import Link from 'next/link'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, Search, ShoppingCart } from 'lucide-react'



const navbar = () => {
    
    return (
        <div className="sticky top-0 backdrop-blur-lg bg-[#ffffffba] z-50">
        <div className='flex justify-between items-center py-6 wrapper'>
            <Link href={"/"}><Image src={Logo} alt='ecom' /></Link>
            <div className='hidden md:block'>
                <ul className='flex gap-x-6'>
                    <li><Link href={"/female/Female"}>Female</Link></li>
                    <li><Link href={"/male/Male"}>Male</Link></li>
                    <li><Link href={"/kids/"}>Kids</Link></li>
                    <li><Link href={"/products/"}>All Products</Link></li>
                </ul>
            </div>
            <div className='hidden md:block'>
            <div className='border flex items-center text-gray-600 px-3 rounded-md'>
                <Search />
                <input size={35} placeholder='Search' type='text' />
            </div>
            </div>
            <div className='flex gap-x-2'>
                {/* Cart */}
                <div className="flex-shrink-0 relative w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <Link href={"/cart/"}><ShoppingCart size={20}/></Link>
                </div>
                {/* Mobile Nav */}
                <div className='md:hidden'>
                    <Sheet>
                        <SheetTrigger>
                            <Menu className='w-8 h-8' />
                        </SheetTrigger>
                        <SheetContent >
                            <ul className='flex flex-col gap-y-3 text-xl'>
                                <li className='text-center'><Link href={"/female/Female"}>Female</Link></li>
                                <li className='text-center'><Link href={"/male/Male"}>Male</Link></li>
                                <li className='text-center'><Link href={"/kids/"}>Kids</Link></li>
                                <li className='text-center'><Link href={"/products/"}>All Products</Link></li>
                            </ul>
                        </SheetContent>
                    </Sheet>

                </div>
            </div>
        </div>
        </div>
    )
}

export default navbar