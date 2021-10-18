import '../styles/globals.css'
import { ChakraProvider, extendTheme, VStack } from "@chakra-ui/react"
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';

// All Pages
const theme = extendTheme({
    config: {
        useSystemColorMode: true,
        initialColorMode: "dark"
    }
});

function App({ Component, pageProps }) {
  return(
      <ChakraProvider theme={theme}>
        <NavBar />
        <VStack spacing={50}>
            <Component {...pageProps} />
            <Footer />
        </VStack>
      </ChakraProvider>
  )
}

export default App