import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbNodeLat from '../public/images/links/NodeLatency.png'
import thumbTsTip from '../public/images/links/typescriptQuickTip.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://twitter.com/unique_gmail/status/1545702957936623616?s=20&t=OIsi2A0qKkk3IInlvhIBdQ"
            title="How to measure Nodejs latency"
            thumbnail={thumbNodeLat}
          />
          <GridItem
            href="https://twitter.com/unique_gmail/status/1545337098588172288?s=20&t=OIsi2A0qKkk3IInlvhIBdQ"
            title="Typescript hacks"
            thumbnail={thumbTsTip}
          />
        </SimpleGrid>
      </Section>

    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
