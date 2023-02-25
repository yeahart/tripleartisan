import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
  
const Work = () => (
  <Layout title="Mongodb file">
    <Container>
      <Title>
        File storage <Badge>2022</Badge>
      </Title>
      <P>
          A file storage that can handle file upload, delete, modification on cloud (Mongodb Atlas)
      </P>
      <P>
        <Link href="https://mongodb.com/" target="_blank">
          Mongodb <ExternalLinkIcon mx="2px" />
        </Link>
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            not visible
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            React.js / TypeScript / Tailwind / Mongoose / Mongodb / Nodejs / Express
          </span>
        </ListItem>
        <ListItem>
          <Meta>Demo</Meta>
          <span>
            not visible
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/MongooseNode.png" alt="Website" />

    </Container>
  </Layout>
)
  
export default Work
export { getServerSideProps } from '../../components/chakra'
