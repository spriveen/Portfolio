import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'

const article = () => {
  return (
  <>
     <Head>
        <title>Riveen Peanuka | Article Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main>
        <Layout className='pt-16'>
            <AnimatedText text="Words Can Change The World!" className='mb-16' />
        </Layout>
      </main>
  
  </>
  )
}

export default article