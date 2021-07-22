import '../styles/globals.css'
import { ChakraProvider, extendTheme, VStack } from "@chakra-ui/react"
import Footer from '../components/Footer';

// All Pages
const theme = extendTheme({
    config: {
        useSystemColorMode: false,
        initialColorMode: "dark"
    }
});

function App({ Component, pageProps }) {
  return(
      <ChakraProvider theme={theme}>
        <VStack spacing={50}>
            <Component {...pageProps} />
            <Footer />
        </VStack>
      </ChakraProvider>
  )
}

export default App