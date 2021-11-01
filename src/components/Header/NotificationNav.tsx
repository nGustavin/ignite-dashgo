import {HStack, Icon} from '@chakra-ui/react'
import { RiNotification2Line, RiUserAddLine } from 'react-icons/ri'

interface NotificationProps {

}

export const Notification: React.FC<NotificationProps> = ({}) => {
 return(
  <HStack 
          spacing="8" 
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.400"
        >
          <Icon as={RiNotification2Line} />
          <Icon as={RiUserAddLine} />
        </HStack>
 )
}