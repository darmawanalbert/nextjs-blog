import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

import { getSortedPostsData } from '../lib/posts'

import { GetStaticProps } from 'next'

export default function Home( { allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Home Page</h1>
        <h2><Link href="/posts/first-post"><a>Go to post</a></Link></h2>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </main>

    </Layout>
  )
}

// Static Generation with Data
export const getStaticProps: GetStaticProps = async context => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
