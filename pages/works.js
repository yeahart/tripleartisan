import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import discordClone from "../public/images/works/discordClone.png"
import goCli from "../public/images/works/goCli.png"
import earthMarsAnim from "../public/images/works/earthmars.png"
import mongooseFileManagment from "../public/images/works/MongooseNode.png"
import leafColor from "../public/images/works/patar-rong.jpg"


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="" title="Go cli" thumbnail={goCli}>
            A user information collector
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id=""
            title="3d animation"
            thumbnail={earthMarsAnim}
          >
            Earth Mars Animation small project
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="" title="discord clone" thumbnail={discordClone}>
            Discord clone full-stack mern web app
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="mongoose" title="mongoose file manager" thumbnail={mongooseFileManagment}>
            Express and mongoose file management application
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="leafColor" title="afforestation agency" thumbnail={leafColor}>
            Afforestation agency in Bangladesh
          </WorkGridItem>
        </Section>
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
