import { menus } from "./menus"
import { Burger } from '@mantine/core';
import { useState } from "react"
import { Link } from "react-scroll";

function Menu() {
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';

  return (
    <section className="mx-auto container p-3">

      <div className="flex justify-between items-center pt-4 ">
    
            <img className="w-10 bg-none" src="https://cdn1.vectorstock.com/i/thumb-large/23/40/acp-triangle-letter-logo-design-with-triangle-vector-39642340.jpg" alt="" />

            <div onClick={() => setOpened(!opened)} className="cursor-pointer md:hidden z-20 fixed right-5 top-6">
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              title={title}
              color="#fff" 
            />
            </div>
            <ul
            className={`md:flex text-xl bg-[#ffffff14] 
            md:static fixed top-0 right-0 md:h-auto h-screen backdrop-blur-lg
            md:pl-10 pr-32 md:pr-0 z-10 ${!opened ? 
            'right-[-100%]' : 'right-0'} duration-500 ease-linear`}>
              
              {menus?.map((links, index) => (
                <li className="mt-10 md:mt-0 mx-5 hover-[underline-pb-2] transition-all link link-underline link-underline-black">
                  <a className="inline-block md:py-5 py-3" key={index} href={links.url}>{links.title}</a>
                </li>
              ))}
              </ul>
        </div>
    </section>
  )
}

export default Menu