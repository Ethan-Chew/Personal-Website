import {
    Box,
    Heading,
    Text,
    VStack,
    HStack,
    IconButton,
    Divider,
    Container
  } from '@chakra-ui/react';
import { useRouter } from 'next/router'
import { FaDiscord, FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Header() {
  const router = useRouter()
  const links = {
    "Github": "https://go.ethanchew.me/github",
    "Discord": "https://go.ethanchew.me/discord",
    "LinkedIn": "https://go.ethanchew.me/linkedin",
    "Email": "mailto:ethanchewmh@gmail.com"
  }

  return (
    <Container maxW="container.lg" mt={5} mb={3}>
      <VStack alignItems="left" spacing={4}>
        <VStack alignItems="left">
          <Heading fontSize="50px">Ethan Chew</Heading>
          <Text fontSize="20px">Developer, Designer, Student</Text>
        </VStack>
        <Divider />
        <Text>A <b>{new Date().getFullYear() - 2006} year old</b> student studing <b>Computing+</b> at the <b>School of Science and Technology, Singapore</b>.</Text>
        <HStack alignItems="left">
          <IconButton icon={<FaGithub size={22} />} aria-label={"GitHub"}  onClick={() => router.push(links.Github)}/>
          <IconButton icon={<FaLinkedin size={22} />} aria-label={"LinkedIn"}  onClick={() => router.push(links.LinkedIn)}/>
          <IconButton icon={<FaDiscord size={22} />} aria-label={"Discord"}  onClick={() => router.push(links.Discord)}/>
          <IconButton icon={<MdEmail size={22} />} aria-label={"Mail"}  onClick={() => router.push(links.Email)}/>
        </HStack>
      </VStack>
    </Container>
  )
}