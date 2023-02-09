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
    useColorMode
} from '@chakra-ui/react'
import { MdDateRange } from 'react-icons/md'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';

const MTabBox = () => {
    // Tools
    const devTools = [["GitHub", "Version Control", "devicon-github-plain"], ["Xcode", "iOS Development", "devicon-xcode-plain"], ["Visual Studio Code", "General/Web Development", "devicon-vscode-plain"], ["IntelliJ/PyCharm", "General/Web Development", "devicon-jetbrains-plain"]]
    const designTools = [["Figma", "UI/UX Design", "devicon-figma-plain"], ["Adobe XD", "UI/UX Design", "devicon-xd-plain"]]
    const postProductionTools = [["Davinci Resolve", "Video Editing"], ["iMovie", "Video Editing"]]

    // Icon Style
    const iconStyle = {
        fill: "thistle",
        height: "100%"
    }

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
                                        <HStack spacing={4}>
                                            <Text fontSize="20px"><b>Swift</b></Text>
                                            <HStack>
                                                <i fontSize="20px" className="devicon-swift-plain"></i>
                                            </HStack>
                                        </HStack>
                                        <Text>
                                            Swift is a language used to develop iOS, iPadOS, tvOS, MacOS and tvOS. Swift is one of the first language I&apos;ve actually learnt! One of the most notable apps I have created with Swift is ArrivalSG, a transport app that allows users to view the bus arrival times, the MRT Map and Train Disruptions if any. Of course, I have also created other apps! You can check it out!
                                        </Text>
                                    </VStack>
                                    <VStack alignItems="left">
                                        <HStack spacing={4}>
                                            <Text fontSize="20px"><b>JavaScript and React</b></Text>
                                            <HStack>
                                                <i fontSize="20px" className="devicon-javascript-plain"></i>
                                                <i fontSize="20px" className="devicon-react-original"></i>
                                                <i fontSize="20px" className="devicon-nextjs-original"></i>
                                            </HStack>
                                        </HStack>
                                        <Text>
                                            All of my newer websites are created with React and Next.js as a User Interface Framework as it is easier than using pure HTML, JavaScript and CSS.
                                        </Text>
                                        <Text>
                                            Personally, I feel that JavaScript is a pretty versatile language, allowing you to create many things with it. Some notable projects are this website and my <i className={styles.cursorGrab} onClick={() => {router.push("https://launches.ethanchew.com")}}>space launch tracker</i>!
                                        </Text>
                                    </VStack>
                                </VStack>

                                <VStack alignItems="left">
                                    <Text><b>Other Languages</b></Text>
                                    <HStack spacing={4} alignItems='left'>
                                        <Text>Python</Text>
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
                {/* <AccordionItem>
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
                </AccordionItem> */}
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
            <HStack spacing={4} ml={4} mr={2} my={3}> 
                {data.data[2] !== "" ? <i fontSize="100px" className={`${data.data[2]} ${styles.toolIcon}`}></i> : <></>}
                <VStack spacing={0} alignItems="left">
                    <Text fontSize="18px"><b>{data.data[0]}</b></Text>
                    <Text>{data.data[1]}</Text>
                </VStack>
            </HStack>
        </Box>
    )
}

export default MTabBox