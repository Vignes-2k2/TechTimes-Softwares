import RecentPost from "./Data/RecentPost"
import Catagories from "./Data/Catagories"

const Right = () => {
  return (
    <div className="bg-white rounded-[30px] p-7 bg-opacity-65 dropShadowCSS">
        <button className="bg-[#7C35F1] text-white text-[16px] lg:text-[20px] font-bold w-full py-4 rounded-full mt-3">Recent</button>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-2 gap-5 justify-center items-center mt-10">
          {
            RecentPost.map((recentPost, key)=>{
              return(
                <div key={key} className="relative flex items-center justify-center onHoverDiv">
                  <img src={recentPost.img} alt={`Sample Image ${key+1}`} className="h-full onHoverImg object-contains" />
                  <p className="absolute center-div text-[18px] font-semibold onHoverText opacity-0">{recentPost.title}</p>
                </div>
              )
            })
          }
        </div>

        <div className="w-full">
          <button className="bg-[#7C35F1] text-white text-[16px] lg:text-[20px] font-bold w-full py-4 rounded-full mt-10">Catagories</button>
          <div className="w-full mt-5 px-8">
            <ul className="list-disc capitalize">
            {
              Catagories.map((cat,key)=>{
                return (
                  <li key={key} className="leading-8 text-[16px] lg:text-[18px]">
                    {cat}
                  </li>
                )
              })
            }
            </ul>
          </div>
        </div>
        
    </div>
  )
}

export default Right