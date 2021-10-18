import {
    Box,
    Flex,
    HStack,
    Image,
    Button,
    useColorModeValue,
    useColorMode,
} from '@chakra-ui/react';

import {
    HamburgerIcon,
    CloseIcon,
    MoonIcon, 
    SunIcon,
} from '@chakra-ui/icons';

import { ReactNode } from 'react';

const Pages = [{
  id: "Home",
  href: "/"
}, {
  id: "Projects",
  href: "/Projects"
}]

export default function NavBar() {
    const { colorMode, toggleColorMode } = useColorMode();

    return(
      <>
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} boxShadow="md">
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            
            <HStack spacing={8} alignItems={'center'}>
                {colorMode === 'light' ? <Image src="/Name Logo.png" alt="Ethan Chew" width={200} borderRadius="md" /> : <Image src="/Name Logo L.png" alt="Ethan Chew" width={200} borderRadius="md" fallbackSrc="https://via.placeholder.com/100" />}
            </HStack>

            <Flex alignItems={'center'}>
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
            </Flex>
    
          </Flex>
        </Box>
      </>
    )
}