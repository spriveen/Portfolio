import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base
    '>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear()}&copy; All Right Reserved.</span>
            <div className='flex items-center lg:py-2'>
            Develop by <span className='text-primary dark:text-primaryDark text-2xl px-1'>🦂</span> 
              &nbsp;<Link href="https://riveenpeanuka.com" className='underline
              underline-offset-2
              'target={"_blank"}> Riveen Peanuka</Link>
            </div>
            <Link href="https://riveenpeanuka.com" target="_blank">Wave</Link>
        </Layout>
    </footer>
  )
}

export default Footer