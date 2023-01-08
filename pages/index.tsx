import Head from 'next/head'
import type { FC } from 'react'

import { Inter } from '@next/font/google'

const inter = Inter({
  subsets: ['latin']
})

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Countries DB</title>
        <meta
          name='description'
          content='CountriesDB is a page where you can find all the info about your desired country'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={inter.className}>
        <h1>Countries DB</h1>
        <p>somesomeomsosm</p>
      </main>
    </>
  )
}

export default Home
