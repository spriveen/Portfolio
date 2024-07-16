import Layout from '@/components/Layout'
import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'

const project = () => {
  return (
    <>
    <Head>
        <title>Riveen Peanuka | projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main>
        <Layout>
            <AnimatedText  text="Imagination Trumps Knowledge!" />
        </Layout>
      </main>
    
    </>
  )
}

export default project