import Image from "next/image"


const Jewellery = () => {
  return (
    <div className="px-1 text-gray-700">
        {/* Top */}
        <div className="flex justify-start md:justify-end text-4xl md:text-5xl font-bold py-4">
            <h6 className="max-w-[40rem]">Unique and Authentic Vintage Designer Jewellery</h6>
            </div>


            {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between py-4 mt-2 gap-5">
            {/* Left */}

            <div className="relative basis-1/2 gap-6 lg:gap-10 grid grid-cols-2 grid-rows-2 ">
                <div className="absolute -z-50 text-[#EDEDEF] inset-0 ">
                    <h6 className="text-7xl md:text-7xl lg:text-[7.5rem] leading-[6rem] font-bold">Different from others</h6>
                </div>
                <div className="max-w-[13rem] space-y-3">
                    <h6 className="font-semibold text-xl">Using Good Quality Materials</h6>
                    <p className="text-lg leading-5">Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
                </div>
                <div>
                <div className="max-w-[13rem] space-y-3">
                    <h6 className="font-semibold text-xl">100% Handmade Products</h6>
                    <p className="text-lg leading-5">Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
                </div>
                </div>
                <div>
                <div className="max-w-[13rem] space-y-3">
                    <h6 className="font-semibold text-xl">Modern Fashion Design</h6>
                    <p className="text-lg leading-5">Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
                </div>
                </div>
                <div>
                <div className="max-w-[13rem] space-y-3">
                    <h6 className="font-semibold text-xl">Discount for Bulk Orders</h6>
                    <p className="text-lg leading-5">Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
                </div>
                </div>
            </div>



            {/* Right */}
            <div className="flex flex-col lg:flex-row basis-1/2">
                <div className="w-full px-4 lg:px-0 lg:w-80">
                    <Image width={1000} height={1000} src={"/feature.webp"} alt={"hoddie"} />
                </div>
                <div className="space-y-3 md:space-y-4 p-6">
                    <p style={{wordSpacing:"0.8rem"}} className="h-[87%]  lg:max-w-[15rem]">This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                    <button className="flex gap-3 items-center rounded-sm text-lg ring-1 ring-slate-800 bg-gray-800 text-white font-semibold py-3 px-5">See All Product</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Jewellery