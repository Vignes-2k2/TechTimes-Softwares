import Titleimg from "../../assets/Images/Title-Img.svg"
import TableOfContents from "../TableOfContents"
import AlsoReads from "../AlsoReads"
import FAQ from "../FAQ"
import content from "../Content/Data/content"
import JoinButton from "../Content/JoinButton"



const Left = () => {
  return (
    <div className="bg-white xl:rounded-[30px] rounded-[20px] md:rounded-[25px] xl:p-10 p-5 md:p-7 bg-opacity-65 flex flex-col items-center">
      <div>
        <img src={Titleimg} alt="" className="w-full"/>
        <p className="text-[16px] mt-9 leading-9 text-justify indent-[30px]">
            With the launch of the much anticipated Clearance Sale by e-commerce behemoth Flipkart, the online shopping scene is poised to undergo a seismic shift. Get ready for an unparalleled shopping experience where quality meets prices and every click results in amazing savings.
        </p>
      </div>
      <div>
        <TableOfContents/>
      </div>
      <div className="mt-10 ">
        {
          content.map((data, key)=>{
            return(
              <div key={key} className="flex flex-col w-full" id={data.id}>
                  <p className={data.titleState ? "text-[22px] md:text-[26px] lg:text-[32px] font-bold mt-10":"hidden"}>{data.title}</p>
                  <p className={data.passageState ? "text-[14px] md:text-[16px] lg:leading-10 leading-8 indent-10 mt-6 text-justify" : "hidden"}>{data.passage}</p>
                  <div className={data.joinState ? "w-full flex" :"hidden"}>
                    <JoinButton/>
                  </div>
                  <div className={data.imgState && "w-full flex items-center justify-center mt-10 mb-5"}>
                    {data.imgState &&  <img src={data.img} alt={`Image ${key}`} className="md:w-[80%] h-full rounded-2xl" />}
                  </div>
                  <div className={data.extraLinks ? "w-full gap-10": "hidden"}>
                    <AlsoReads/>
                  </div>
              </div>
            )
          })
        }
      </div>
      <FAQ/>
    </div>

     
  )
}

export default Left