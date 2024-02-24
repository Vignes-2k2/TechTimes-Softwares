import Left from "./Content/Left"
import Right from "./Content/Right"

const FlipkartClearenceSales = () => {
  return (
    <>
    <div className="lg:w-[calc(100%-80px)] md:w-[calc(100%-50px)] xl:w-[calc(100%-140px)] h-full xl:grid-cols-[2fr,1fr] grid grid-cols-1 gap-5 mt-[30px]">
        <Left/>
        <Right/>
    </div>
    
    </>
  )
}

export default FlipkartClearenceSales