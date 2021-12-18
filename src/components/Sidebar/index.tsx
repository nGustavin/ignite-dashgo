import { Box, Icon, Link, Stack, Text } from '@chakra-ui/react'
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'
import { NavSection } from './NavSection'

export const Sidebar:React.FC = () => {
  return(
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection/>
        
      </Stack>
    </Box>
  )
}