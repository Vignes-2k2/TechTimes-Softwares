import {Link} from "react-router-dom"

const NavBarResp = (props) => {
  const closeNav = () => {
      props.statefn(!props.states);
      console.log(props.states)
  }
  return (
    <div className={props.states ? "flex flex-col gap-6 absolute w-[60%] md:w-[60%] duration-300 top-0 pt-[150px] right-[0px] p-10 text-white font-bold text-[20px] items-end bg-black bg-opacity-60 rounded-xl rounded-se-none transistion-fade-in" : "hidden opacity-0"}>
        <Link to="/"><p className="hover:text-[#7C35F1] hover:scale-110 duration-300 active:scale-[0.95] rounded-lg transistion-text-fade-nav delay-[100ms]" onClick={closeNav}>Home</p></Link>
        <Link to="/about"><p className="hover:text-[#7C35F1] hover:scale-110 duration-300 active:scale-[0.95] rounded-lg transistion-text-fade-nav delay-[200ms]" onClick={closeNav}>About Us</p></Link>
        <Link to="/services"><p className="hover:text-[#7C35F1] hover:scale-110 duration-300 active:scale-[0.95] rounded-lg transistion-text-fade-nav delay-[300ms]" onClick={closeNav}>Services</p></Link>
        <Link to="/blog"><p className="hover:text-[#7C35F1] hover:scale-110 duration-300 active:scale-[0.95] rounded-lg transistion-text-fade-nav dealy-[400ms]" onClick={closeNav}>Blog</p></Link>
        <Link to="contact"><p className="hover:text-[#7C35F1] hover:scale-110 duration-300 active:scale-[0.95] rounded-lg transistion-text-fade-nav delay-[500ms]" onClick={closeNav}>Contact Us</p></Link>
    </div>
  )
}

export default NavBarResp