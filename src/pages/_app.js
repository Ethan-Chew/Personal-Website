import '../styles/globals.css'
import Head from 'next/head'
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
        <Head>
          <meta name="title" content="Ethan Chew" />
          <meta name="description" content="I'm Ethan Chew, a 16 year old, studying Computing in the School of Science and Technology, Singapore." />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.ethanchew.com/" />
          <meta property="og:title" content="Ethan Chew" />
          <meta property="og:description" content="I'm Ethan Chew, a 16 year old, studying Computing in the School of Science and Technology, Singapore." />
          <meta property="og:image" content="/Social%20Media%20Img.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.ethanchew.com/" />
          <meta property="twitter:title" content="Ethan Chew" />
          <meta property="twitter:description" content="I'm Ethan Chew, a 16 year old, studying Computing in the School of Science and Technology, Singapore." />
          <meta property="twitter:image" content="/Social%20Media%20Img.png" />
        </Head>
        <NavBar />
        <VStack spacing={50}>
            <Component {...pageProps} />
            <Footer />
        </VStack>
      </ChakraProvider>
  )
}

export default App