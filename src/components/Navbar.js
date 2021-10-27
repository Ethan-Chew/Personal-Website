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
    IconButton
} from '@chakra-ui/react';

import {
    HamburgerIcon,
    CloseIcon,
    MoonIcon, 
    SunIcon,
} from '@chakra-ui/icons';

import Link from 'next/link';

const Pages = [{
  id: "Home",
  href: "/"
}, {
  id: "Profile",
  href: "https://profile.ethanchew.com"
}, {
  id: "Blog",
  href: "https://blog.ethanchew.com"
}, {
  id: "Web Apps",
  href: "https://web-apps.ethanchew.com"
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
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            {colorMode === 'light' ? <Image src="/Name Logo.png" alt="Ethan Chew" width={200} borderRadius="md" /> : <Image src="/Name Logo L.png" alt="Ethan Chew" width={200} borderRadius="md" />}
            <HStack
              as={'nav'}
              spacing={6}
              display={{ base: 'none', md: 'flex' }}>
              {Pages.map((page) => (
                <NavLink key={page.id}>{page}</NavLink>
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
                <NavLink key={page.id}>{page}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
    </Box>
    )
}