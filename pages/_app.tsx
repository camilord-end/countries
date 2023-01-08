import '../styles/globals.css'
import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme
} from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useMemo, useState } from 'react'
import { ColorModeContext } from '../utils/ColorModeContext'

import type { AppProps } from 'next/app'
import { CssBaseline } from '@mui/material'

const App = ({ Component, pageProps }: AppProps) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light')
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    []
  )
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          // @ts-ignore
          mode
        }
      }),
    [mode]
  )
  return (
    <ColorModeContext.Provider value={colorMode}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </StyledEngineProvider>
    </ColorModeContext.Provider>
  )
}

export default App
