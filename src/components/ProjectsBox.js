import { Box, HStack, Text, IconButton, Badge, VStack, Link, Image, useColorMode } from "@chakra-ui/react"
import { useState, useEffect } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import styles from '../styles/Home.module.css'
import { onSnapshot, collection } from "firebase/firestore";
import db from '../pages/api/firebase'

const ProjectsBox = () => {
    const [iosStatus, setiosStatus] = useState(false)
    const [reactStatus, setreactStatus] = useState(false)
    const [ppStatus, setppStatus] = useState(false)
    const { colorMode } = useColorMode()

    // Project Data
    const [iOSApps, setiOSApps] = useState([])
    const [reactApps, setReactApps] = useState([])
    const [ppApps, setppApps] = useState([])

    useEffect(() => {
        console.log("Loading Projects...")

        onSnapshot(collection(db, "iOS"), (data) => {
            setiOSApps(data.docs.map((doc) => doc.data()))
        })

        onSnapshot(collection(db, "react"), (data) => {
            setReactApps(data.docs.map((doc) => doc.data()))
        })

        onSnapshot(collection(db, "pp"), (data) => {
            setppApps(data.docs.map((doc) => doc.data()))
        })
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