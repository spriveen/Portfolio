import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import  {TwitterIcon, DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon } from './Icon'
import {motion} from "framer-motion";


const CustomLink =({href,title,className=""}) =>{
  const router = useRouter();
  console.log(router)
  return(
      <Link href ={href} className={`${className} relative group`}>
          {title}
          <span className={
            `h-[1px] inline-block  bg-dark
          absolute left-0 -bottom-0.5 
          group-hover:w-full transition-[width] ese duration-300
          ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
      </Link>
  )
}


const Navbar = () => {
  return (
    <header
      className='w-full px-32 py-8 font-medium flex items-center justify-between'  
    >
        <nav>
        <CustomLink href = "/" title="Home" className='mr-4'/>
        <CustomLink href = "/about" title="About" className='mr-4'/>
        <CustomLink href = "/project" title="Project" className='mr-4'/>
        <CustomLink href = "/articles" title="Article" className='ml-4'/>
            
        </nav>
        
        <nav className="flex items-center justify-center flex-wrap">
            <motion.a href="https://twitter.com" target={"_blank"}
            whileHover={{y:2}}
            whileTap={{scale:0.9}}
            className="w-6 mr-3"
            
          >
            
            <TwitterIcon/>
            </motion.a>

            <motion.a href="https://twitter.com" target={"_blank"}
            className="w-6 mx-3"
            whileHover={{y:2}}
            whileTap={{scale:0.9}}
            >
            <GithubIcon/>
            </motion.a>
            <motion.a href="https://twitter.com" target={"_blank"}className="w-6 mx-3"
            whileHover={{y:2}}
            whileTap={{scale:0.9}}
            >
            
            <LinkedInIcon/>
            </motion.a>
            <motion.a href="https://twitter.com" target={"_blank"}className="w-6 mx-3"
            whileHover={{y:2}}
            whileTap={{scale:0.9}}
            >
            
            <PinterestIcon/>
            </motion.a>
            
            <motion.a href="https://twitter.com" target={"_blank"}className="w-6 ml-3"
            whileHover={{y:2}}
            whileTap={{scale:0.9}}
            >
            <DribbbleIcon/></motion.a>
            {/* <Link href="/" target={"_blank"}>T</Link> */}
        </nav>

        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
          <Logo />
        </div>
    </header>
  )
}

export default Navbar
