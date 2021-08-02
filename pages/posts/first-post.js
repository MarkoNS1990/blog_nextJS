import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'

function FirstPost() {
    return (
        <Layout>
         <Head>
        <title>First Post</title>
        </Head>
        <h1>
            First Post
        </h1>
        <h2>
        <Link href="/">
        <a>Back to home</a>
        
        </Link>
        </h2>
        <Image
            src="/images/profile.jpg" // Route of the image file
            height={300} // Desired size with correct aspect ratio
            width={300} // Desired size with correct aspect ratio
            alt="Your Name"
        />
      </Layout>
    )
}

export default FirstPost
