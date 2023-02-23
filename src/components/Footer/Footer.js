import { FiFacebook } from "react-icons/fi"
import { BsTwitter } from "react-icons/bs"
import { GrLinkedinOption } from "react-icons/gr"
import { BsGithub } from "react-icons/bs"

function Footer() {
  return (
    <div className="flex container rounded h-56 justify-center bg-[#fff] items-center">
      <div className="">
      <h1 className="text-black justify-center font-semi-bold text-3xl flex">MD.AL-AMIN</h1>
      <p className="text-black justify-center font-semibold text-lg flex">Frontend Developer</p>
      <div className="flex gap-5 justify-center mt-4">
        <div className='text-2xl text-black cursor-pointer duration-200 rounded-full border-2  hover:border-[#F2C] p-2 hover:text-[#F2C]'> <FiFacebook /> </div>
        <div className='text-2xl text-black cursor-pointer duration-200 rounded-full border-2 p-2 hover:border-[#F2C] hover:text-[#F2C]'> <BsTwitter /> </div>
        <div className='text-2xl text-black cursor-pointer duration-200 rounded-full border-2 p-2 hover:border-[#F2C] hover:text-[#F2C]'> <GrLinkedinOption /> </div>
        <div className='text-2xl text-black cursor-pointer duration-200 rounded-full border-2 p-2 hover:border-[#F2C] hover:text-[#F2C]'> <BsGithub /> </div>
      </div>
      </div>
    </div>
  )
}

export default Footer