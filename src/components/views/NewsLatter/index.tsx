const Newslatter = () => {
    return (
      <div className="relative text-center space-y-4 h-[60vh] flex flex-col justify-center items-center text-gray-800">
        <h6 className="absolute lg:text-9xl text-7xl font-bold text-[#F2F3F7] text-center -z-50">Newsletter</h6>
        <h6 className="text-4xl md:text-4xl font-bold">Subscribe Our Newsletter</h6>
        <p className="max-w-[15rem] font-normal">Get the latest information and promo offers directly</p>
        <div className="flex gap-4 flex-wrap items-center justify-center">
          <input type="text" className="border border-gray-700 md:py-1 px-2 md:px-4 flex flex-grow w-80" placeholder="input email address" />
          <button className="flex gap-3 items-center rounded-sm text-lg ring-1 ring-slate-800 bg-gray-800 text-white font-semibold py-3 px-5">Get Started</button>
        </div>
        </div>
    )
  }
  
  export default Newslatter