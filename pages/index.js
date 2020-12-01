import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Home Page</h1>
        <h2><Link href="/posts/first-post"><a>Go to post</a></Link></h2>
      </main>

    </Layout>
  )
}
