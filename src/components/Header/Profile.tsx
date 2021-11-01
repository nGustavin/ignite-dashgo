import {Flex, Box, Text, Avatar} from '@chakra-ui/react'

interface ProfileProps {

}

export const Profile: React.FC<ProfileProps> = ({}) => {
 return(
  <Flex
          align="center"
        >
          <Box mr="4" textAlign="right">
            <Text>Gustavo Fernandes</Text>
            <Text color="gray.300" fontSize="small">gusta@gmail.com</Text>
          </Box>

          <Avatar size="md" name="Gustavo Fernandes" src="https://github.com/ngustavin.png"/>
        </Flex>
 )
}