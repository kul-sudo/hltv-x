import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import type { FC } from 'react'
import { ChakraProvider, Box } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import theme from '@/lib/theme'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Box px="10rem">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default App
