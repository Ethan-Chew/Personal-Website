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
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Header() {
  const router = useRouter()
  const links = require("../data/contactlinks")

  return (
    <Container maxW="container.lg" mt={5} mb={3}>
      <VStack alignItems="left" spacing={4}>
        <VStack alignItems="left">
          <Heading fontSize="50px">Ethan Chew</Heading>
          <Text fontSize="20px">Developer, Designer, Student</Text>
        </VStack>
        <Divider />
        <VStack spacing={5} alignItems="left">
          <Text>Hi! I'm Ethan Chew, a <b>{new Date().getFullYear() - 2006}-year-old student</b> from Singapore who will be <b>studying Information Technology at Ngee Ann Polytechnic</b>. In addition, I am an <b>Intern at Tinkertanker</b>, developing Swift and SwiftUI-related curriculum.</Text>
          <Text>I have a bunch of interests like aviation, science and photography to name a few. I only really started programming in 2020 <i>(Thats... {new Date().getFullYear() - 2020} years ago)</i> when I entered secondary school, so I am constantly learning, and have a looong way to go!</Text>
          <Text>I'm always happy to meet new people, you can contact me by pressing any of the buttons below!</Text>
        </VStack>
        <HStack alignItems="left">
          <IconButton icon={<FaGithub size={22} />} aria-label={"GitHub"}  onClick={() => router.push(links.Github)}/>
          <IconButton icon={<FaLinkedin size={22} />} aria-label={"LinkedIn"}  onClick={() => router.push(links.LinkedIn)}/>
          <IconButton icon={<MdEmail size={22} />} aria-label={"Mail"}  onClick={() => router.push(links.Email)}/>
        </HStack>
      </VStack>
    </Container>
  )
}