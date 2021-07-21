import { Box, HStack, Text, IconButton, Badge, VStack, Link } from "@chakra-ui/react"
import { useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

const ProjectsBox = () => {
    const [iosStatus, setiosStatus] = useState(false)
    const [reactStatus, setreactStatus] = useState(false)
    const [ppStatus, setppStatus] = useState(false)

    // Project Data
    const iOSApps = [{
        name: "Placeholder 1",
        language: "Swift",
        currentlyUpdated: false,
        lastUpdated: "",
        desc: "Placeholder",
        ghRepo: ""
    }]

    const reactApps = [{
        name: "Placeholder 2",
        language: "JavaScript",
        currentlyUpdated: true,
        lastUpdated: "",
        desc: "Placeholder",
        ghRepo: ""
    }]

    const ppApps = [{
        name: "Placeholder",
        language: "Python",
        currentlyUpdated: false,
        lastUpdated: "",
        desc: "Placeholder",
        ghRepo: ""
    }]
  
    return(
      <VStack spacing={5} alignItems="left">
        {/* iOS Box */}
        <Box borderRadius="md" border="1px grey solid">
          <Box ml={3} mr={3} my={4}>
            <HStack mb={2} spacing={5}>
                <Text fontSize="25px"><b>iOS Apps</b></Text>
                <IconButton colorScheme="teal" aria-label={iosStatus ? "Close" : "Open"} size="sm" icon={iosStatus ? <FaArrowUp /> : <FaArrowDown />} onClick={() => {iosStatus ? setiosStatus(false) : setiosStatus(true)}}/>
            </HStack>
            {iosStatus ?
                <Box>
                {iOSApps.map((Project) => (
                    <DataBox id={Project.name} Project={Project} />
                ))}
                </Box> 
                : <Text>Press the Button to Expand</Text>}
          </Box>
        </Box>
  
        {/* React Box */}
        <Box borderRadius="md" border="1px grey solid">
          <Box ml={3} mr={3} my={4}>
            <HStack mb={2} spacing={5}>
                <Text fontSize="25px"><b>React (Web) Apps</b></Text>
                <IconButton colorScheme="teal" aria-label={reactStatus ? "Close" : "Open"} size="sm" icon={reactStatus ? <FaArrowUp /> : <FaArrowDown />} onClick={() => {reactStatus ? setreactStatus(false) : setreactStatus(true)}}/>
            </HStack>
            {reactStatus ?
                <Box>
                {reactApps.map((Project) => (
                    <DataBox id={Project.name} Project={Project} />
                ))}
                </Box> 
                : <Text>Press the Button to Expand</Text>}
          </Box>
        </Box>
                
        {/* Personal Proj Box */}
        <Box borderRadius="md" border="1px grey solid">
          <Box ml={3} mr={3} my={4}>
            <HStack mb={2} spacing={5}>
                <Text fontSize="25px"><b>Personal Projects</b></Text>
                <IconButton colorScheme="teal" aria-label={ppStatus ? "Close" : "Open"} size="sm" icon={ppStatus ? <FaArrowUp /> : <FaArrowDown />} onClick={() => {ppStatus ? setppStatus(false) : setppStatus(true)}}/>
            </HStack>
            {ppStatus ?
                <Box>
                {ppApps.map((Project) => (
                    <DataBox id={Project.name} Project={Project} />
                ))}
                </Box> 
                : <Text>Press the Button to Expand</Text>}
          </Box>
        </Box>
      </VStack>
    )
}

const DataBox = ({Project}) => {    
    return(
        <VStack alignItems="left" spacing={2}>
            <Box>
                <HStack>
                    <Text fontSize="20px"><b>{Project.name}</b></Text>
                    {(Project.currentlyUpdated) ? <Badge colorScheme="green">Updated</Badge> : <Badge colorScheme="red">No longer updated</Badge>}
                </HStack>
                <Text><b>{Project.language}</b></Text>
            </Box>
            <Box>
                <Text>{Project.desc}</Text>
                <Link href={Project.ghRepo} isExternal color="teal.500">
                    GitHub Repository
                </Link>
            </Box>
        </VStack>
    )
}

export default ProjectsBox