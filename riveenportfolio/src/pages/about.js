import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import profilePic from "../../public/images/profile/developer-pic-2.png";


const about = () => {
  return (
    <>
     <Head>
        <title>Riveen Peanuka | About Page</title>
        <meta name= "description" content="any description" />
     </Head>
     <main className='flex w-full flex-col items-cente justify-center'>
        <Layout className='pt-16'>
        <AnimatedText text="Passion Fuels Purpose!" className='mb-16' />
        <div className='grid w-full grid-cols-8 gap-16'>
        <div className='col-span-3 flex flex-col items-start  justify-start'>
            <h2 className='mb-4 text-lg font-bold  uppercase text-dark/75'>Biography</h2>
            Passion Fuels Purpose! 
         
         <p className='font-medium'>
         - Hi, I'm Riveen Peanuka, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
and user-centered digital experiences. With 4 years of experience in the field. I am always looking for 
new and innovative ways to bring my clients' visions to life.
         </p>

         <p className='font-medium'>
         - I believe that design is about more than just making things look pretty – it's about solving problems and 
         creating intuitive, enjoyable experiences for users.
         </p>

         <p className='my-4 font-medium'>
         - Whether I'm working on a website, mobile app, or 
other digital product, I bring my commitment to design excellence and user-centered thinking to 
every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
         </p>
       </div>

       <div>
        <Image src={profilePic}alt="Riveen Peanuka"className='w-full h-auto rounded-2xl'/>
       </div>

        </div>
        </Layout>
     </main>
    </>
  )
}

export default about