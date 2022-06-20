import {
    Box,
    Flex,
    HStack,
    Stack,
    Image,
    Button,
    useColorModeValue,
    useColorMode,
    useDisclosure,
    IconButton,
    Text
} from '@chakra-ui/react';

import {
    HamburgerIcon,
    CloseIcon,
    MoonIcon, 
    SunIcon,
} from '@chakra-ui/icons';

import styles from '../styles/Home.module.css'
import Link from 'next/link';
import ScrollIntoView from 'react-scroll-into-view'

const Pages = [{
  id: "Education",
  scrollId: "#education"
}, {
  id: "Leadership",
  scrollId: "#leadershipExp"
}, {
  id: "Projects",
  scrollId: "#projects"
}, {
  id: "Knowledge",
  scrollId: "#knowledgeandskills"
}, {
  id: "Achievements",
  scrollId: "#achievements"
}]

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={children.href} 
    passHref={(children.id === "Home") ? false : true}>
    {children.id}
  </Link>
);

export default function NavBar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return(
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} className={styles.navBar}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon width="16px" height="16px" /> : <HamburgerIcon width="18px" height="18px" />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            {colorMode === 'light' ? <Image src="/Name Logo.png" alt="Ethan Chew" width={200} borderRadius="md" onClick={(e) => {e.preventDefault; window.scroll({top: 0, left: 0,behavior: 'smooth'});}} style={{cursor:"pointer"}} /> : <Image src="/Name Logo L.png" alt="Ethan Chew" width={200} borderRadius="md" onClick={(e) => {e.preventDefault; window.scroll({top: 0, left: 0,behavior: 'smooth'});}} style={{cursor:"pointer"}} />}
            <HStack
              as={'nav'}
              spacing={6}
              display={{ base: 'none', md: 'flex' }}>
              {Pages.map((page) => (
                <ScrollIntoView key={page.id} selector={page.scrollId} smooth={true}>
                  <Text as='button' onClick={page.clickFunc}>
                    {page.id}
                  </Text>
                </ScrollIntoView>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Pages.map((page) => (
                <Text as='button' key={page.id} onClick={page.clickFunc}>
                  {page.id}
                </Text>
              ))}
            </Stack>
          </Box>
        ) : null}
    </Box>
    )
}