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
        <Text>A <b>{new Date().getFullYear() - 2006} year old</b> student studying <b>Computing+</b> at the <b>School of Science and Technology, Singapore</b>, who also has a passion in photography and aviation.</Text>
        <HStack alignItems="left">
          <IconButton icon={<FaGithub size={22} />} aria-label={"GitHub"}  onClick={() => router.push(links.Github)}/>
          <IconButton icon={<FaLinkedin size={22} />} aria-label={"LinkedIn"}  onClick={() => router.push(links.LinkedIn)}/>
          <IconButton icon={<MdEmail size={22} />} aria-label={"Mail"}  onClick={() => router.push(links.Email)}/>
        </HStack>
      </VStack>
    </Container>
  )
}