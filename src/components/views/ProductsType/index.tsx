import Image from "next/image";

const productsType = () => {
  return (
    <div className="py-16 px-2 space-y-5">
      {/* Heading */}
      <div className="text-center space-y-3">
        <p className="text-blue-500 text-sm font-semibold">PROMOTIONS</p>
        <h3 className="text-3xl text-gray-800 font-bold">
          Our Promotions Events
        </h3>
      </div>
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2 text-gray-800">
        {/* First Grid */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between col-span-1 md:col-span-2 bg-[#D6D6D8] px-12">
          <div className="max-w-[13rem] py-8">
            <h4 className="text-3xl font-extrabold">GET UP TO 60%</h4>
            <p className="text-xl">For the summer season</p>
          </div>
          <div className="w-72">
            <Image
              width={1000}
              height={1000}
              src={
                "/event1.webp"
              }
              alt={"sweatshirt"}
            />
          </div>
        </div>
        {/* Second Grid */}
        <div className="w-full row-span-1 md:row-span-2 flex flex-col items-center h-full bg-[#EFE1C7]">
          {/* Text */}
          <div className="p-4">
            <p>Flex Sweatshirt</p>
            <p className="text-lg">
              <del> $100.00 </del>
              &nbsp;&nbsp;&nbsp;
              <b>
                <ins>$75.00</ins>
              </b>
            </p>
          </div>
          <div className="w-64">
            <Image
              width={1000}
              height={1000}
              src={
                "/event2.webp"
              }
              alt={"flexshirt"}
            />
          </div>
        </div>
        {/* Third Grid */}
        <div className="w-full row-span-1 md:row-span-2 flex flex-col items-center h-full bg-[#D7D7D9]">
        <div className="p-4">
            <p>Flex Push Button Bomber</p>
            <p className="text-lg">
              <del> $225.00 </del>
              &nbsp;&nbsp;&nbsp;
              <b>
                <ins>$190.00</ins>
              </b>
            </p>
          </div>
          <div className="w-64">
            <Image
              width={1000}
              height={1000}
              src={
                "/event3.webp"
              }
              alt={"flexpushshirt"}
            />
          </div>
        </div>
        <div className=" py-9 text-white w-full col-auto md:col-span-2 bg-[#212121] flex flex-col justify-center items-center space-y-3">
          <h3 className="font-extrabold text-4xl">GET 30% Off</h3>
          <p className="">USE PROMO CODE</p>
          <button aria-label="Redirect user to dine Week End Sale"
          className="py-1 px-6 text-lg font-medium bg-[#474747] rounded-lg tracking-widest"
          >DINEWEEKENDSALE</button>
        </div>
      </div>
    </div>
  );
};

export default productsType;