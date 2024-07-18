import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Image from 'next/image'
import Link from 'next/link'


 const FeaturedArticle = ({img,title,time,summary,link})=>{
  return(
    <li>
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <Link href={link} target='_blank'>
      <h2 className='capitalize text-2xl font-bold my-2'>{title}</h2>
      </Link>
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
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
        <Layout className='pt-16'>
            <AnimatedText text="Words Can Change The World!" className='mb-16' />
                <ul className='grid grid-cols-2 gap-10'>
                    <li>Featured articles-1</li>
                    <li>Featured articles-2</li>
                </ul>
        </Layout>
      </main>
  
  </>
  )
}

export default articles