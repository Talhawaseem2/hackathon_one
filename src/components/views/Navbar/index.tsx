
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
            <Image src={Logo} alt='ecom' />
            <div className='hidden md:block'>
                <ul className='flex gap-x-6'>
                    <li><Link href={"/"}>Female</Link></li>
                    <li><Link href={"/"}>Male</Link></li>
                    <li><Link href={"/"}>Kids</Link></li>
                    <li><Link href={"/"}>All Products</Link></li>
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
                    <ShoppingCart size={20} />
                </div>
                {/* Mobile Nav */}
                <div className='md:hidden'>
                    <Sheet>
                        <SheetTrigger>
                            <Menu className='w-8 h-8' />
                        </SheetTrigger>
                        <SheetContent >
                            <ul className='flex flex-col gap-y-3 text-xl'>
                                <li className='text-center'><Link href={"/"}>Female</Link></li>
                                <li className='text-center'><Link href={"/"}>Male</Link></li>
                                <li className='text-center'><Link href={"/"}>Kids</Link></li>
                                <li className='text-center'><Link href={"/"}>All Products</Link></li>
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