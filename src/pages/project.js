
import { GithubIcon } from '@/components/Icon'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'
import project2 from '../../public/images/projects/1.jpg'
import project3 from '../../public/images/projects/3.jpg'
import project4 from '../../public/images/projects/2.jpg'
import project5 from '../../public/images/projects/4.jpg'
import project6 from '../../public/images/projects/6.jpg'
import project7 from '../../public/images/projects/5.jpg'
import project8 from '../../public/images/projects/2.jpg'
import project9 from '../../public/images/projects/7.jpg'


import { motion } from 'framer-motion'
import AnimatedText from '@/components/AnimatedText'

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='w-full flex items-center justify-between relative rounded-br-2xl
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>

<div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
        rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
      <Link href={link} target="_blank"
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
      >
        <FramerImage src={img} alt={title} className='w-full h-auto' 
        whileHover={{scale:1.05}}
        transition={{duration: 0.2}}
        priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px)50vw, 50vw"/>
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target="_blank" className='w-10'><GithubIcon /></Link>
          <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light
        p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>Visit the Project</Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
        rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
      <Link href={link} target="_blank"
        className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <FramerImage src={img} alt={title} className='w-full h-auto' 
        whileHover={{scale:1.05}}
        transition={{duration: 0.2}}/>
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
        </Link>

        <div className='w-full mt-2 flex items-center justify-between'>
          <Link href={link} target="_blank" className=' text-lg font-semibold underline md:text-base'>Visit</Link>
          <Link href={github} target="_blank" className='w-8 md:w-6'><GithubIcon /></Link>
        </div>
      </div>
    </article>
  )
}

const project = () => {
  return (
    <>
      <Head>
        <title>Riveen | Project Page</title>
        <meta name="description" content="any description" />
      </Head>
      
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text="Creativity Outshines Knowledge!"
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />

          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 '>
            <div className='col-span-12'>
              <FeaturedProject

                title="Gym Nest Application"
                img={project1}
                summary="Gym Nest is a dynamic, user-friendly website for fitness enthusiasts
                 designed using HTML, CSS, and JavaScript. It offers an engaging interface, helping users explore workouts,
                 fitness plans and gym facilities seamlessly"
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project

                title="Cab Hub"
                img={project3}
                summary="Cab Hub is a sleek, responsive cab service website built with Next.js, Tailwind CSS, and TypeScript. It offers a smooth, user-friendly interface for quick bookings and reliable transport options ensuring seamless navigation and efficiency"
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project

                title="Burger Shop"
                img={project2}
                summary="Burger Shop is a modern responsive website crafted with Next.js, Tailwind CSS, and TypeScript. It features an intuitive interface for browsing the menu
                 placing orders and discovering delicious options delivering a seamless user experience."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>

            <div className='col-span-6 sm:col-span-12'>
              <FeaturedProject

                title="Fashion Web Site"
                img={project8}
                summary="I created a vibrant fashion website using HTML, CSS, and JavaScript, showcasing trendy outfits
                 and accessories. The site features an interactive gallery, user-friendly navigation and responsive 
                design for an enhanced shopping experience"
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project

                title="LMS "
                img={project5}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project

                title="Online E-Channeling System"
                img={project6}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
           It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
         local currency."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>

            <div className='col-span-6 sm:col-span-12'>
              <Project

                title="Coffee Shop"
                img={project7}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
           It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
         local currency."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            
            <div className='col-span-6 sm:col-span-12'>
              <Project

                title="Digital News"
                img={project9}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
           It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
         local currency."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default project
