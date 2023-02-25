import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="3x artisan homepage | triple artisan homepage" />
        <meta name="author" content="3x artisan | triple artisan" />
        <meta name="author" content="triple artisan" />
        <link rel="shortcut icon" href="/artisanlogo.ico" type="image/x-icon" />
        <meta name="twitter:title" content="3x artisan" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="3x artisan" />
        <meta name="twitter:creator" content="3x artisan" />
        <meta name="twitter:image" content="https://www.tripleartisan.com/shcard.png" />
        <meta property="og:site_name" content="triple artisan" />
        <meta name="og:title" content="triple artisan" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.tripleartisan.com/shcard.png" />
        <title>3x art - Homepage</title>
        <meta name="next-head-count" content="17" />
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={20}>

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
