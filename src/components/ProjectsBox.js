import { Box, HStack, Text, IconButton, Badge, VStack, Link, Image, useColorMode } from "@chakra-ui/react"
import { useState, useEffect } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import styles from '../styles/Home.module.css'
// import { Client } from '@notionhq/client'

const ProjectsBox = () => {
    const [iosStatus, setiosStatus] = useState(false)
    const [reactStatus, setreactStatus] = useState(false)
    const [ppStatus, setppStatus] = useState(false)
    const { colorMode } = useColorMode()

    // Project Data
    const iOSApps = [{
        name: "Pocket Science",
        language: "Swift",
        currentlyUpdated: true,
        year: "2020-2021",
        ghRepo: "https://github.com/Newspace-Inc/Pocket-Science-iOS",
        pic: "Swift"
    }, {
        name: "Scout Attendance",
        language: "Swift",
        currentlyUpdated: false,
        year: "2021",
        ghRepo: "https://github.com/Ethan-Chew/ScoutsAttendance",
        pic: "Swift"
    }, {
        name: "Quake",
        language: "Swift",
        currentlyUpdated: false,
        year: "2020",
        ghRepo: "https://github.com/Ethan-Chew/Quake",
        pic: "Swift"
    }, {
        name: "Random Clicker",
        language: "Swift",
        currentlyUpdated: false,
        year: "2019",
        ghRepo: "https://github.com/Ethan-Chew/Random-Clicker",
        pic: "Swift"
    }]

    const reactApps = [{
        name: "SST Inc. Management Platform",
        language: "TypeScript, React",
        currentlyUpdated: true,
        year: "2021",
        ghRepo: "https://github.com/theboi/smp-sstinc-org",
        pic: "JS"
    }, {
        name: "Personal Website",
        language: "JavaScript, React",
        currentlyUpdated: true,
        year: "2021",
        ghRepo: "https://github.com/Ethan-Chew/Personal-Website/tree/React",
        pic: "JS"
    }, {
        name: "Web Apps",
        language: "JavaScript, React",
        currentlyUpdated: true,
        year: "2021",
        ghRepo: "https://github.com/Ethan-Chew/Web-Apps",
        pic: "JS"
    }]

    const ppApps = [{
        name: "Small Projects",
        language: "Python, C++",
        currentlyUpdated: false,
        year: "2020",
        ghRepo: "https://github.com/Ethan-Chew/Small-Projects",
        pic: "Others"
    }, {
        name: "Personal Website (Old)",
        language: "HTML, JavaScript, CSS",
        currentlyUpdated: false,
        year: "2020",
        ghRepo: "https://github.com/Ethan-Chew/Personal-Website/tree/master",
        pic: "HTML"
    }]

    useEffect(() => {
        console.log("Loading Projects...")
    }, [])
  
    return(
      <VStack spacing={5} alignItems="left">
        {/* iOS Box */}
        <Box borderRadius="md" border={colorMode === "light" ? "1px #EDF2F7 solid" : "1px grey solid"} boxShadow={colorMode === "light" ? "lg" : ""}>
          <Box ml={3} mr={3} my={4}>
            <HStack mb={2} spacing={5}>
                <Text fontSize="25px"><b>iOS Apps</b></Text>
                <IconButton colorScheme="teal" aria-label={iosStatus ? "Close" : "Open"} size="sm" icon={iosStatus ? <FaArrowUp /> : <FaArrowDown />} onClick={() => {iosStatus ? setiosStatus(false) : setiosStatus(true)}}/>
            </HStack>
            {iosStatus ?
                <VStack spacing={3} alignItems="left">
                {iOSApps.map((Project) => (
                    <DataBox key={Project.name} Project={Project} />
                ))}
                </VStack> 
                : <Text>Press the Button to Expand</Text>}
          </Box>
        </Box>
  
        {/* React Box */}
        <Box borderRadius="md" border={colorMode === "light" ? "1px #EDF2F7 solid" : "1px grey solid"} boxShadow={colorMode === "light" ? "lg" : ""}>
          <Box ml={3} mr={3} my={4}>
            <HStack mb={2} spacing={5}>
                <Text fontSize="25px"><b>React (Web) Apps</b></Text>
                <IconButton colorScheme="teal" aria-label={reactStatus ? "Close" : "Open"} size="sm" icon={reactStatus ? <FaArrowUp /> : <FaArrowDown />} onClick={() => {reactStatus ? setreactStatus(false) : setreactStatus(true)}}/>
            </HStack>
            {reactStatus ?
                <VStack spacing={3} alignItems="left">
                {reactApps.map((Project) => (
                    <DataBox key={Project.name} Project={Project} />
                ))}
                </VStack> 
                : <Text>Press the Button to Expand</Text>}
          </Box>
        </Box>
                
        {/* Personal Proj Box */}
        <Box borderRadius="md" border={colorMode === "light" ? "1px #EDF2F7 solid" : "1px grey solid"} boxShadow={colorMode === "light" ? "lg" : ""}>
          <Box ml={3} mr={3} my={4}>
            <HStack mb={2} spacing={5}>
                <Text fontSize="25px"><b>Personal Projects</b></Text>
                <IconButton colorScheme="teal" aria-label={ppStatus ? "Close" : "Open"} size="sm" icon={ppStatus ? <FaArrowUp /> : <FaArrowDown />} onClick={() => {ppStatus ? setppStatus(false) : setppStatus(true)}}/>
            </HStack>
            {ppStatus ?
                <VStack spacing={3} alignItems="left">
                {ppApps.map((Project) => (
                    <DataBox key={Project.name} Project={Project} />
                ))}
                </VStack> 
                : <Text>Press the Button to Expand</Text>}
          </Box>
        </Box>
      </VStack>
    )
}

const DataBox = ({Project}) => {    
    const { colorMode } = useColorMode()

    return(
        <Box borderRadius="lg" boxShadow="md" p="1" bg={colorMode === "light" ? "#F6F8FF" :"#252a35"}>
            <VStack alignItems="left" spacing={2} ml={2} mr={2} my={3}>
                <HStack spacing={4}>
                    <Box>
                        {Project.pic === "Swift" ? <Image className={styles.removeIcn} src="/Swift.png" alt="Swift" boxSize="100" borderRadius="md" fallbackSrc="https://via.placeholder.com/100"/> : null}
                        {Project.pic === "JS" ? <Image className={styles.removeIcn} src="/JavaScript.png" alt="JavaScript" boxSize="100" borderRadius="md" fallbackSrc="https://via.placeholder.com/100" /> : null}
                        {Project.pic === "Others" ? <Image className={styles.removeIcn} src="/Random Langs.png" alt="Others" boxSize="100" borderRadius="md" fallbackSrc="https://via.placeholder.com/100" /> : null}
                        {Project.pic === "HTML" ? <Image className={styles.removeIcn} src="/HTML.png" boxSize="100" alt="HTML" borderRadius="md" fallbackSrc="https://via.placeholder.com/100" /> : null}
                    </Box>
                    <Box>
                        <VStack alignItems="left" spacing={0}>
                            <Text><b>{Project.year}</b></Text>
                        <HStack>
                            <Text fontSize="22px"><b>{Project.name}</b></Text>
                            {(Project.currentlyUpdated) ? <Badge className={styles.removeIcn} colorScheme="green">Updated</Badge> : <Badge className={styles.removeIcn} colorScheme="red">No longer updated</Badge>}
                        </HStack>
                            <Text fontSize="17px">{Project.language}</Text>
                        </VStack>
                        <Link href={Project.ghRepo} isExternal color="teal.500">
                            GitHub Repository
                        </Link>
                    </Box>
                </HStack>
            </VStack>
        </Box>
    )
}

export default ProjectsBox