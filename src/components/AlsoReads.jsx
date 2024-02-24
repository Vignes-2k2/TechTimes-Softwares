import Links from "../components/Content/Data/OtherLinks"


const AlsoReads = () => {
  return (
    <div className="w-full">
        <p className="font-semibold mb-5 mt-10">Also reads:</p>
        {
          Links.map((link,key)=>{
            return(
              <a key={key} className="text-[#6000FF98] underline block p-[5px] text-[14px] cursor-pointer hover:text-[#6000FF] duration-75 active:text-[13.9px]">{link}</a>
            )
          })
        }
    </div>
  )
}

export default AlsoReads
