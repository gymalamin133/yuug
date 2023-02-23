
import imag1 from "../../images/alamin.jpg"
import { FiFacebook } from "react-icons/fi"
import { BsTwitter } from "react-icons/bs"
import { GrLinkedinOption } from "react-icons/gr"
import { BsGithub } from "react-icons/bs"
import { Typewriter } from 'react-simple-typewriter'
import { Link } from "react-router-dom"

function Header() {
  return (
    <div id="home" className='flex justify-center items-center flex-col mt-9
    space-y-10'>
      <div>
      <img className='  h-40  object-cover rounded-full w-40' src={imag1} alt="alamin" />
      </div>
      <div className="">
        <h1 className='text-3xl'>Hi, I am Al-Amin <br /> 
        i am a <Typewriter
        text-color="red"
        words={["Full Stack Developer", "Mobile Developer", "React Developer",]}
        loop={true}
        // typeSpeed={40}
        cursor
      />
        </h1>
      </div>
      <div className="flex gap-5">
        <div className='text-2xl cursor-pointer duration-200 rounded-full border-2  hover:border-[#F2C] p-2 hover:text-[#F2C]'> <a href="https://www.facebook.com/profile.php?id=100033104052749" target="_blank"><FiFacebook /></a>  </div>
        <div className='text-2xl cursor-pointer duration-200 rounded-full border-2 p-2 hover:border-[#F2C] hover:text-[#F2C]'> <a href="https://www.linkedin.com/in/al-amin-720235237/" target="_blank"> <BsTwitter /></a> </div>
        <div className='text-2xl cursor-pointer duration-200 rounded-full border-2 p-2 hover:border-[#F2C] hover:text-[#F2C]'> <a href="https://www.linkedin.com/in/al-amin-720235237/" target="_blank"><GrLinkedinOption /></a> </div>
        <div className='text-2xl cursor-pointer duration-200 rounded-full border-2 p-2 hover:border-[#F2C] hover:text-[#F2C]'> <a href="https://github.com/gymalamin133" target="_blank"><BsGithub /></a> </div>
      </div>
    </div>
  )
}

export default Header