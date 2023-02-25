import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import LogoTop from './icons/LogoTop'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 100%;
  line-height: 20px;
  padding: 10px;
`

const Logo = () => {

  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <LogoTop width={30} height={30} />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            3x art
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
