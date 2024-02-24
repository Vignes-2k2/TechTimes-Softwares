const CardBottom = () => {
  return (
    <div className="w-full flex items-center justify-center py-6 ">
      <div className="lg:w-[calc(100%-80px)] md:w-[calc(100%-50px)] xl:w-[calc(100%-140px)] w-full bg-[#7C35F1] rounded-[20px] p-10 xl:py-[117px] flex flex-col justify-center items-center">
        <p className="flex justify-center text-[25px] xl:text-[40px] font-bold text-white">Are You Ready For</p>
        <p className="flex justify-center text-[25px] xl:text-[64px] xl:w-[60%] font-bold text-center text-white mt-6 xl:mt-14">We’re ready to start your project</p>
        <button className="w-[50%] xl:w-[25%] xl:text-[32px] text-white font-bold py-4 px-6 bg-[#F13E3E] bg-opacity-[0.71] mt-10 xl:mt-20 rounded-full drop-shadow-2xl hover:bg-opacity-80">Start Now</button>
      </div>      
    </div>
  )
}

export default CardBottom