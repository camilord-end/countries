import Head from 'next/head'
import { useContext } from 'react'

import { IconButton } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

import { Inter } from '@next/font/google'
import { ColorModeContext } from '../utils/ColorModeContext'
import { SearchInput } from '../components/SearchInput'
import axios from 'axios'

const inter = Inter({
  subsets: ['latin']
})
// @ts-ignore
const Home = ({ data }) => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)
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
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color='inherit'
        >
          {theme.palette.mode === 'dark' ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
        <SearchInput data={data} />
      </main>
    </>
  )
}

export default Home

export const getStaticProps = async () => {
  const res = await axios.get('https://restcountries.com/v3.1/all')
  const data = res.data
  if (!res) {
    return {
      notFound: true
    }
  }
  return {
    props: { data }
  }
}
