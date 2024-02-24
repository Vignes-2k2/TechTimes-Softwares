import {Link} from "react-router-dom"
import NavBarResp from "./NavBarResp";
import TTLogo from "../assets/Logo/times.software-1.png"
import Open from "../assets/Images/Open.svg"
import Close from "../assets/Images/Close.svg"
import { useState } from "react"
const Navbar = () => {

  const [open, setOpen] = useState(false)

  const ToogleButton = () =>{
    setOpen(!open)
  }

  return (
    <>
    <div className="xl:w-[calc(100%-140px)] h-[60px] xl:h-[80px] flex justify-between items-center w-[calc(100%-50px)] md:w-[calc(100%-80px)]">
      <div className="xl:h-[75px] h-[48px]">
          <Link><img src={TTLogo} alt="" className="h-full object-fit"/></Link>
      </div>
      <div className="sm:flex px-10 py-[20px] hidden md:hidden xl:flex bg-[#00000015] items-center gap-14 rounded-full text-white font-semibold dropShadowCSS">
        <Link to="/"><p className="hover:text-[#7C35F1] hover:scale-110 duration-300 active:scale-[0.95]">Home</p></Link>
        <Link to="/about"><p className="hover:text-[#7C35F1] hover:scale-110 duration-300 active:scale-[0.95]">About Us</p></Link>
        <Link to="/services"><p className="hover:text-[#7C35F1] hover:scale-110 duration-300 active:scale-[0.95]">Services</p></Link>
        <Link to="/blog"><p className="hover:text-[#7C35F1] hover:scale-110 duration-300 active:scale-[0.95]">Blog</p></Link>
        <Link to="contact"><p className="hover:text-[#7C35F1] hover:scale-110 duration-300 active:scale-[0.95]">Contact Us</p></Link>
      </div>

      <div className="sm:hidden md:flex xl:hidden flex-col relative z-50">
        <img src={open ? Close : Open} alt="" className="scale-[1.4]" onClick={ToogleButton}/>
        
      </div>
      
    </div>
      <NavBarResp states = {open} statefn={setOpen}/>
    </>
  );
};

export default Navbar