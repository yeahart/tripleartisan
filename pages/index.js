import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoCodeOutline } from 'react-icons/io5'
import thumbNodeLat from '../public/images/links/NodeLatency.png'
import thumbTsTip from '../public/images/links/typescriptQuickTip.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an artisan of triple artisan
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Artisan
          </Heading>
          <p>Service from Artisans ( Devops / UI / Server / Malware )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/hello.jpeg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>I am an acting leader of triple artisan. I am a part time freelancer. I do android application development
        , web application development, malware scheme, server design, server optimization, devops. During my respite time, 
        I write technical articles on Twitter.{'  '}
          <NextLink href="https://twitter.com/unique_gmail/" passHref>
            <Link target="_blank">
              Twitter
            </Link>
          </NextLink>.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2018</BioYear>
          Join the 3x art ( শিল্পী )
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
            Our first big project brings success. After that, we take some more big projects. On this journey, artisans demonstrated their skills.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
            I became acting leader of the team
        </BioSection>
        <BioSection>
          <BioYear>present</BioYear>
            Additionally, I do freelancing
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Traveling, Art,{' '}
          <Link href="https://app.codesignal.com/profile/dotta_fnx" target="_blank">
            Code signal
          </Link>
          , Playing games,{' '}
          , Machine learning, Technical writing
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Find me on
        </Heading>
        <List>

          <ListItem>
            <Link href="https://twitter.com/unique_gmail/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                rafi_dev
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoCodeOutline />}
              >
                dotta_fnx
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://twitter.com/unique_gmail/status/1545702957936623616?s=20&t=OIsi2A0qKkk3IInlvhIBdQ"
            title="Node Performance"
            thumbnail={thumbNodeLat}
          >
            Node js latency
          </GridItem>
          <GridItem
            href="https://twitter.com/unique_gmail/status/1545337098588172288?s=20&t=OIsi2A0qKkk3IInlvhIBdQ"
            title="Typescript hacks"
            thumbnail={thumbTsTip}
          >
            Typescript quick tip
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
