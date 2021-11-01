import {Text} from '@chakra-ui/react'

interface LogoProps {

}

export const Logo: React.FC<LogoProps> = ({}) => {
 return(
  <Text
  fontSize="3xl"
  fontWeight="bold"
  letterSpacing="tight"
  w="64"
>
  Dashgo
  <Text as="span" ml="1"color="pink.500">.</Text>
</Text>
 )
}