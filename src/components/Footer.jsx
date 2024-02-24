import TTLogo from "../assets/Logo/times.software-1.png"
import {Link} from "react-router-dom"
import FB from "../assets/Logo/Social/Facebook Logo.svg"
import Ins from "../assets/Logo/Social/Instagram Logo.svg"
import Linke from "../assets/Logo/Social/LinkedIn Logo.svg"


const Footer = () => {
  return (
    <div className="w-full pt-10 rounded-t-[20px] bg-[#000] bg-opacity-20 flex flex-col items-center justify-center">
        <div className="w-[calc(100%-50px)] grid grid-cols-1 lg:grid-cols-[2fr,2fr,1fr] lg:gap-10">
            <div className="w-full py-5"> 
                <img src={TTLogo} alt="" className="w-[40%] md:w-[20%] lg:w-[25%]"/>
                <p className="text-justify text-[16px] lg:text-[16px] indent-10 leading-7 lg:leading-10 text-white mt-5">A Times.software is a specialized company that helps businesses and organizations effectively promote their products, services, or brand online. With the ever-increasing reliance on the internet and digital technologies, these agencies play a crucial role in creating and implementing tailored marketing strategies to reach target audiences in the digital landscape.</p>
            </div>
            <div className="w-full py-5 flex flex-col">
                <div>
                    <p className="text-[20px] lg:text-[24px] font-bold">Quick Links</p>
                    <div className="w-[40%] h-[6px] bg-[#7C35F1] rounded-full mt-1 lg:mt-2"></div>
                    <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 mt-7 ">
                        <a href="/" className="text-white font-semibold hover:text-[#7C35F1]">Home</a>
                        <a href="/about" className="text-white font-semibold hover:text-[#7C35F1]">About Us</a>
                        <a href="/services" className="text-white font-semibold hover:text-[#7C35F1]">Services</a>
                        <a href="/blog" className="text-white font-semibold hover:text-[#7C35F1]">Blog</a>
                        <a href="/contact" className="text-white font-semibold hover:text-[#7C35F1]">Contact Us</a>
                    </div>
                </div>
                <div className="mt-10 lg:mt-20">
                    <p className="text-[20px] lg:text-[24px] font-bold">Contact</p>
                    <div className="w-[40%] h-[6px] bg-[#7C35F1] rounded-full mt-1 lg:mt-2"></div>
                    <div className="flex flex-col gap-3 lg:gap-6 mt-7 ">
                        <p className="text-white text-[15px] lg:w-[60%] ">Nischintapxur, Budge Budge, Kolkata - 700137, West Bengal, India</p>
                        <p className="text-white text-[15px] ">info@times.software</p>
                        <p className="text-white text-[15px] ">+91 95464 47439</p>
                    </div>
                </div>
            </div>
            <div className="w-full py-5 flex flex-col">
                <div>
                    <p className="text-[20px] lg:text-[24px] font-bold">Contact</p>
                    <div className="w-[40%] h-[6px] bg-[#7C35F1] rounded-full mt-1 lg:mt-2"></div>
                    <div className="flex gap-3 lg:gap-8 mt-5 items-center">
                        <a href="" className="hover:scale-110"><img src={FB} alt="" /></a>
                        <a href="" className="hover:scale-110"><img src={Ins} alt="" /></a>
                        <a href="" className="hover:scale-110"><img src={Linke} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full">
            <p className="text-[14px] text-white font-bold flex items-center justify-center pb-10 pt-5 lg:pt-10">© 2024 . All Rights Reserved Times.Software</p>
        </div>
    </div>
  )
}

export default Footer