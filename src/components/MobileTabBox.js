import { Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Text, 
    VStack, 
    HStack, 
    Container, 
    Link, 
    Stack, 
    useSafeLayoutEffect,
    useColorMode
} from '@chakra-ui/react'
import { MdDateRange } from 'react-icons/md'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import { onSnapshot, collection, orderBy } from "firebase/firestore";
import db from '../pages/api/firebase'
import { useRouter } from 'next/router';

const MTabBox = () => {
    // Tools
    const devTools = [["GitHub", "Version Control", "https://img.shields.io/badge/--2a2a3a?style=flat-square&logo=github"], ["Xcode", "iOS Development", "https://img.shields.io/badge/--2a2a3a?style=flat-square&logo=xcode"], ["Visual Studio Code", "General/Web Development", "https://img.shields.io/badge/--2a2a3a?style=flat-square&logo=visual-studio-code"], ["Visual Studio", "C#", "https://img.shields.io/badge/--2a2a3a?style=flat-square&logo=visual-studio"] , ["IntelliJ/PyCharm", "General/Web Development"]]
    const designTools = [["Figma", "UI/UX Design", "https://img.shields.io/badge/--2a2a3a?style=flat-square&logo=figma"], ["Adobe XD", "UI/UX Design", "https://img.shields.io/badge/--2a2a3a?style=flat-square&logo=adobexd"]]
    const postProductionTools = [["Davinci Resolve", "Video Editing"], ["iMovie", "Video Editing"]]

    return(
        <Container maxW={'4xl'} className={styles.mobileBox}> 
            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">
                                <b>Languages/Frameworks</b>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel>
                        <Box>
                            <VStack spacing={8} alignItems="left">
                                <VStack spacing={4} alignItems="left">
                                    <VStack alignItems="left">
                                        <Text fontSize="20px"><b>JavaScript and React</b></Text>
                                        <Text>
                                            As of now, more than half the projects I have worked on are developed with JavaScript. Personally, I feel that JavaScript is a pretty versatile language, allowing you to create many things with it. Some projects I have completed with JavaScript includes this website and my space launch tracker. I also use React, which is a JavaScript library for building User Interfaces. All of my newer websites are created with React as a User Interface Framework as it is easier than using pure HTML, JavaScript and CSS.
                                        </Text>
                                    </VStack>

                                    <VStack alignItems="left">
                                        <Text fontSize="20px"><b>Swift</b></Text>
                                        <Text>
                                            Swift is a language used to develop iOS, iPadOS, tvOS, MacOS and tvOS. Swift is the first actual programming language that I learnt. One of the most notable apps I have created with Swift is ArrivalSG, a transport app that allows users to view the bus arrival times, the MRT Map and Train Disruptions if any.
                                        </Text>
                                    </VStack>
                                </VStack>

                                <VStack alignItems="left">
                                    <Text><b>Other Languages</b></Text>
                                    <HStack spacing={4} alignItems='left'>
                                        <Text>Python</Text>
                                        <Text>C++</Text>
                                        <Text>HTML</Text>
                                        <Text>CSS</Text>
                                    </HStack>
                                </VStack>
                            </VStack>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">
                                <b>Tools</b>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel>
                        <Box>
                        <VStack spacing={5} alignItems="left">
                                <VStack alignItems="left">
                                    <Text fontSize="20px"><b>Developer Tools</b></Text>
                                    <VStack alignItems="left" spacing={1}>
                                        {devTools.map((data) => (
                                            <ToolBox key={data[0]} data={data} />
                                        ))}
                                    </VStack>
                                </VStack>

                                <VStack alignItems="left">
                                    <Text fontSize="20px"><b>Design Tools</b></Text>
                                    <VStack alignItems="left" spacing={1}>
                                        {designTools.map((data) => (
                                            <ToolBox key={data[0]} data={data} />
                                        ))}
                                    </VStack>
                                </VStack>

                                <VStack alignItems="left">
                                    <Text fontSize="20px"><b>Post-Production</b></Text>
                                    <VStack alignItems="left" spacing={1}>
                                        {postProductionTools.map((data) => (
                                            <ToolBox key={data[0]} data={data} />
                                        ))}
                                    </VStack>
                                </VStack>
                            </VStack>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">
                                <b>School Projects</b>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel>
                        <VStack spacing={5} alignItems="left">
                            <VStack spacing={5} alignItems="left">
                                <VStack alignItems="left" spacing={2}>
                                    <VStack alignItems="left">
                                        <Text fontSize="18px"><b>2021 Additional Mathematics Performance Task</b></Text>
                                        <Text>In this Performance Task, we researched and created a online model and report of a proposed shelter that we can build for our school.</Text>
                                    </VStack>
                                    <VStack alignItems="left" spacing={0}>
                                        <Link href="https://drive.google.com/file/d/1LH2iEPa-2XNDk0QW81trw9R8KNDeUD8m/view?usp=sharing" isExternal color="teal.500">Viewing Link (Individual)</Link>
                                        <Link href="https://drive.google.com/file/d/1Zs2RoHpGhmhWXBafdbUDfbY_sKVZWYdn/view?usp=sharing" isExternal color="teal.500">Viewing Link (Group)</Link>
                                    </VStack>
                                </VStack>
                                <VStack alignItems="left" spacing={2}>
                                    <VStack alignItems="left">
                                        <Text fontSize="18px"><b>2020 Chinese Performance Task</b></Text>
                                        <Text>In this Performance Task, we created a video showing the journey that we experienced when going to Gardens by the Bay in Singapore.</Text>
                                    </VStack>
                                    <Link href="" isExternal color="teal.500">Viewing Link (Coming Soon)</Link>
                                </VStack>
                                <VStack alignItems="left" spacing={2}>
                                    <VStack alignItems="left">
                                        <Text fontSize="18px"><b>2020 History Performance Task</b></Text>
                                        <Text>In this Performance Task, we researched and created a documentary about Lee Kong Chian, a Chinese businessman and philanthropist.</Text>
                                    </VStack>
                                    <Link href="" isExternal color="teal.500">Viewing Link (Coming Soon)</Link>
                                </VStack>
                                <VStack alignItems="left" spacing={2}>
                                    <VStack alignItems="left">
                                        <Text fontSize="18px"><b>2020 Physics Performance Task</b></Text>
                                        <Text>In this Performance Task, I researched and made an online prototype of a simple burglar alarm with the Arduino Uno.</Text>
                                    </VStack>
                                    <Link href="" isExternal color="teal.500">Viewing Link (Coming Soon)</Link>
                                </VStack>
                            </VStack>
                        </VStack>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Container>
    )
}

const Boxx = (data) => {
    const { colorMode } = useColorMode()
    const router = useRouter()

    return (
        <>
            {data.data.link === undefined ? 
            <Box alignItems="left" bg={colorMode === "light" ? "#F6F8FF" :"#252a35"} borderRadius="lg" boxShadow="md">
                <VStack alignItems="left" spacing={2} ml={4} mr={3} my={4}>
                    <Text fontSize="18px"><b>{data.data.name}</b></Text>
                    <Text>{data.data.desc}</Text>
                    <HStack>
                        <MdDateRange />
                        <Text>{data.data.date}</Text>
                    </HStack>
                </VStack>
            </Box> :
            <Box alignItems="left" borderRadius="lg" boxShadow="md" bg={colorMode === "light" ? "#F6F8FF" :"#252a35"} _hover={colorMode === "light" ? { bg: '#ebedf0' } : { bg: '#1f2533' }} onClick={() => router.push(data.data.link)}>
                <VStack alignItems="left" spacing={2} ml={4} mr={3} my={4}>
                    <Text fontSize="18px"><b>{data.data.name}</b></Text>
                    <Text>{data.data.desc}</Text>
                    <HStack>
                        <MdDateRange />
                        <Text>{data.data.date}</Text>
                    </HStack>
                </VStack>
            </Box>
            }
        </>
    )
}

const ToolBox = (data) => {
    const { colorMode } = useColorMode()

    return (
        <Box alignItems="left" bg={colorMode === "light" ? "#F6F8FF" :"#252a35"} borderRadius="lg" boxShadow="md">
            <VStack alignItems="left" spacing={1} ml={4} mr={2} my={3}>
                <Text fontSize="18px"><b>{data.data[0]}</b></Text>
                <Text>{data.data[1]}</Text>
            </VStack>
        </Box>
    )
}

export default MTabBox