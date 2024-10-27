import React, { useRef } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import Link from 'next/link';
import articles1 from "../../public/images/articles/pagination component in reactjs.jpg";
import articles2 from "../../public/images/articles/create loading screen in react js.jpg";
import { motion, useMotionValue } from 'framer-motion';
import articles3 from "../../public/images/articles/create modal component in react using react portals.png";
import articles4 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import articles5 from "../../public/images/articles/smooth scrolling in reactjs.png";

const FramerImage = motion(Image);




const MovingImg = ({title,img,link}) =>{

   const x= useMotionValue(0);
   const y= useMotionValue(0);
   const imgRef = useRef(null);


   function handleMouse(event){
     imgRef.current.style.display ="inline-block";
     x.set(event.pageX);
     y.set(-10);
   }


   function handleMouseLeave(event){
    imgRef.current.style.display ="none";
     x.set(0);
     y.set(0);
  }
   


  return(
  <Link href={link} target="_blank"
  
  onMouseMove={handleMouse}
  onMouseLeave={handleMouse}
  
  
  
  >
  <h2 className="capitalize  text-x1 font-semibold hover:underline">
    {title}
    </h2>
    <FramerImage
    style={{x:x, y:y}}
    initial={{opacity:0}}
    whileInView={{opacity:1, transition:{duration:0.2}}}



     ref={imgRef} src={img} alt={title} className=" z-10 w-96 h-auto hidden absolute rounded-lg "/>
  </Link>
  )
}

const Article=({img,date,link,title}) => {
       return(
        <motionli
        initial={{y:200}}
        whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}} 
        viewport={{once: true}}
        className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center
        justify-between bg-light text-dark first:mt-0 border border-solid border-dark
        border-r-4 border-b-4  dark:border-light dark:bg-dark dark:text-light
        sm:flex-col
        "
        >
          <MovingImg title={title} img={img} link={link} />
          <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start">{date}</span>
        </motionli>
       )
}

 const FeaturedArticle = ({img,title,time,summary,link})=>{
  return(
    <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
     rounded-br-3xl
     '/> 
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto"
        whileHover={{scale:1.05}}
        transtition={{duration:0.2}}
        priority
               sizes="(max-width:768px) 100vw
               (ma px-width:1200px) 50vw
               50"
        
        />
         </Link>
      <Link href={link} target='_blank'>
      <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'>
        {title}
        </h2>
      </Link>
      <p className='text-sm mb-2'>{summary}</p>
      <span className='text-primary font-semibold dark:text-primaryDark'>{time}</span>
    </li>
  )
}

const articles = () => {
  return (
  <>
     <Head>
        <title>Riveen Peanuka | articles Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
        <Layout className='pt-16'>
            <AnimatedText text="Words Can Change The World!" className='mb-16
            lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl
            '/>
                <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
                    <FeaturedArticle
title="Build A Custom Pagination Component In Next JS From Scratch"
summary="learn how to create a custom pagination component in Next.js. We’ll focus on utilizing Next.js's file-based routing and API routes to manage data fetching and state management. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
time="9 min read"
link="/"
img={articles1}
                     />
                     <FeaturedArticle
title="Build A Custom Pagination Component In React JS From Scratch"
summary="Learn how to create a custom pagination component in ReactJS. This guide will emphasize managing state and props to control the pagination logic effectively"
time="9 min read"
link="/"
img={articles2}
                     />
                </ul>
                <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
            <ul>
               <Article
               title="The Story of Node JS"
               date="August 08 2024"
               link="/"
               img={articles3}
               />
               <Article
               title="Master the Basics: A Guide to Node.js Fundamentals"
               date="August 10 2024"
               link="/"
               img={articles4}
               />
               <Article
               title="Unlocking the Power of Next.js for Modern Web Development"
               date="August 06 2024"
               link="/"
               img={articles5}
               />
               <Article
               title="Optimizing Java Performance - A Detailed Exploration of Stack, Heap, Garbage Collection and Memory Addresses"
               date="July 24 2023"
               link="/"
               img={articles3}
               />
               <Article
               title="Java Essentials -: Building a Strong Foundation in Programming"
               date=" July 19 2024"
               link="/"
               img={articles3}
               />
               {/* <Article
               title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
               date="March 22 2023"
               link="/"
               img={articles3}
               />
               <Article
               title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
               date="March 22 2023"
               link="/"
               img={articles3}
               /> */}
            </ul>
        
        </Layout>
      </main>
  
  </>
  )
}

export default articles