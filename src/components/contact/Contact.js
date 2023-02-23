import {MdOutlineCall}  from "react-icons/md"
import {AiOutlineMail}  from "react-icons/ai"

function Contact() {
  return (
    <div id="contact" className='md:flex mb-20 justify-between items-center p-3 mt-[10%]'>
        <div className="space-y-4 w-2/5">
            <h1 className='md:text-5xl text-3xl font-semibold mb-8 border-b-2 border-[#F2C] w-fit pb-1'>Contact Me</h1>
            <p className='text-gray-400 text-lg'>If you have any suggestion, project or even 
                you want to say“hello”, 
                please fill out the form below
                 and I will reply you 
                shortly.
            </p>
            <p className='text-xl'>Dhaka <br /> Bangladesh</p>
            <div className="flex items-center space-x-1 text-xl cursor-pointer hover:text-[#f2c]">
            <MdOutlineCall />
            <h1>+8801677349352</h1>
            </div>
            <div className="flex items-center space-x-2 text-xl cursor-pointer hover:text-[#f2c]">
                <AiOutlineMail />
                <h1 className="mb-6 md:mb-0">gymalamin@gmail.com</h1>
            </div>
        </div>
        <div className="space-y-4 w-5/12">
            <div className="">
            <input className='bg-[#0B1224] p-2 outline-1 w-48 h-10 focus:border-[#F2C] focus:outline-none border-2 placeholder-[#fff]'  
            type="text" 
            placeholder='Name...'
            />
            </div>
            <div className="">
            <input className='bg-[#0B1224] w-60 h-10 focus:outline-none border-2 placeholder-[#fff] text-white p-2 focus:border-[#F2C]' 
            type="text" 
            placeholder='Email...'
            />
            </div>
            <div className="">
            <textarea className='bg-[#0B1224] w-full h-32  focus:border-[#F2C]
            focus:outline-none border-2 placeholder-[#fff] p-2' 
            type="text" 
            placeholder='Message...' name="message" id="" cols="30" rows="10"></textarea>
            </div>
        </div>
    </div>
  )
}

export default Contact;