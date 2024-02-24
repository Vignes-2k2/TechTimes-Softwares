import data from "../components/Content/Data/TableOfContent"
import {Link} from "react-scroll"

const TableOfContents = () => {
  return (
    <div className='w-full '>
       <h1 className="text-[32px] font-bold mt-[100px]">Table of Content</h1>
        <div className="flex flex-wrap gap-3 mt-10">
            {
                data.map((title,key)=>{
                  return (
                    <div key={key} className="p-3 px-8 rounded-lg bg-[#AF7EFF50] text-[12px] font-semibold hover:bg-[#AF7EFF] hover:text-white hover:scale-105 active:scale-100 duration-200 hover:drop-shadow-xl">
                      <Link activeClass="active" to={title.id} spy={true} smooth={true} offset={-50} duration={1000}>{title.title}</Link>
                    </div>
                  )
                })
            }
        </div>
    </div>
  )
}

export default TableOfContents