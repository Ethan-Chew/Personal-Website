import { Box, HStack, VStack, Text, Heading, AspectRatio, Badge, Divider, Image, Container, Stack, Button, useColorMode } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { onSnapshot, collection } from "firebase/firestore";
import db from '../pages/api/firebase'
import { CloseIcon } from '@chakra-ui/icons';

// Components
import Header from "../components/Header";
import ProjectsBox from "../components/ProjectsBox"
import TabBox from "../components/TabBox";
import MTabBox from '../components/MobileTabBox'
import Achievements from '../components/Achievements'
import Experience from '../components/Experience'

export default function Home() {
  // Data Variables
  const [schools, setSchools] = useState([])
  const [roles, setRoles] = useState([])
  let tempSchools = []
  let tempRoles = []
  const months = ['Dec', 'Nov', 'Oct', 'Sep', 'Aug', 'July', 'June', 'May', 'Apr', 'Mar', 'Feb', 'Jan']
  const { colorMode } = useColorMode()
  const [showMobileAlert, editAlert] = useState(true)
  const descText = `Hi! I'm Ethan Chew, a ${new Date().getFullYear() - 2006}-year-old student from Singapore who will be studying Information Technology at Ngee Ann Polytechnic. In addition, I am an Intern at Tinkertanker, developing Swift and SwiftUI-related curriculum.`

  useEffect(() => {
    document.title = "Ethan Chew";

    onSnapshot(collection(db, "jobschools"), (data) => {
      let temp = data.docs.map((doc) => doc.data())
      
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].location == "") {
          tempSchools.push(temp[i])
        } else {
          tempRoles.push(temp[i])
        }
      }

      const sortDate = (valA, valB) => {
        // Check Date Format
        if (!isNaN(valA.startDate) || !isNaN(valA.startDate)) {
          // Just Year
          if (valA.startDate !== valB.startDate) {
            if (valA.startDate > valB.startDate) {
              return -1
            } else {
              return 1
            }
          } else {
            if (valA.endDate !== valB.endDate) {
              return valA.endDate - valB.endDate
            }
          }
        } else {
          if (valA.endDate === "Current") {
            return -1
          } else if (valB.endDate === "Current") {
            return 1
          } else {
            // Month Year
            const aMonth = valA.startDate.split(" ")[0]
            const bMonth = valB.startDate.split(" ")[0]
            return months.indexOf(aMonth) - months.indexOf(bMonth)
          }
        }
      }

      setSchools(tempSchools.sort(sortDate))
      setRoles(tempRoles.sort(sortDate))
      console.log(showMobileAlert)
    })
  }, [])

  return (    
    <Container maxW={'50rem'}>
      <Head>
        <title>Ethan Chew</title>
        <meta name="title" content="Ethan Chew"/>
        <meta name="description" content={descText} />

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.ethanchew.com"/>
        <meta property="og:title" content="Ethan Chew"/>
        <meta property="og:description" content={descText} />
        <meta property="og:image" content="https://assets.ethanchew.com/Social%20Media%20Img.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://www.ethanchew.com"/>
        <meta property="twitter:title" content="Ethan Chew"/>
        <meta property="twitter:description" content={descText} />
        <meta property="twitter:image" content="https://assets.ethanchew.com/Social%20Media%20Img.png"/>
      </Head>
      <Stack as={Box} spacing={10} alignItems="center">
        <Header />

        <Container maxW="container.lg" py={4} spacing={4} justify={{ base: 'center', md: 'space-between' }} align={{ base: 'center', md: 'center' }} id="education">
          <Box>
            <Heading mb={4}>Education</Heading>
            <Experience allData={schools} />
          </Box>
        </Container>

        <Divider />

        <Container maxW="container.lg" id="experience">
          <Box>
            <Heading mb={4}>Experience</Heading>
            <Experience allData={roles} />
          </Box>
        </Container>

        <Divider />

        <Container maxW="container.lg" id="projects">
          <Box>
            <Heading mb={1}>Projects</Heading>
            <Text mb={4}>Click on any box to go to the GitHub Repository!</Text>
            <ProjectsBox />
          </Box>
        </Container>

        <Divider />

        <Container maxW="container.lg" id="knowledgeandskills">
          <Box>
            <Heading mb={4}>Knowledge and Skills</Heading>
            <TabBox />
            <MTabBox />
          </Box>
        </Container>

        <Divider />

        <Container maxW="container.lg" id="achievements">
          <Box>
            <Heading mb={1}>Achievements</Heading>
            <Text mb={4}>Click on any box to view the relevant information (if available) for it!</Text>
            <Achievements /> 
          </Box>
        </Container>
        
        {/* Mobile Alert Box */}
        {showMobileAlert ? 
          <Box className={styles.alertBox} style={{backgroundColor: (colorMode === "light") ? "rgb(255,255,255)" : "rgb(26, 29, 39)"}}>
          <HStack spacing={5}>
            <Button onClick={() => editAlert(false)}>
              <CloseIcon />
            </Button>
            <Text>If there are any issues in formatting, please report it to my email. Thanks!</Text>
          </HStack>
        </Box>
      : <></>}

      </Stack>
    </Container>
  )
}

const EducationBox = ({school}) => {
  const { colorMode } = useColorMode();

  return(
    <>
      <VStack alignItems="left">
        {school.name === "School of Science and Technology, Singapore" ? <Image src="/sst.png" alt="School of Science and Technology, Singapore" height="90px" width="340px" borderRadius="md" fallbackSrc="https://via.placeholder.com/100" /> : null}
        {school.name === "Swift Accelerator Program" ? <Image src="sap.webp" alt="Swift Accelerator Program" height="90px" width="120px" borderRadius="md" fallbackSrc="https://via.placeholder.com/100" /> : null}
        <HStack>
          <Text fontSize="20px"><b>{school.name}</b></Text>
        </HStack>
        <AspectRatio ratio={4/1} maxW="110px">
          <Box p={2} borderRadius="md" bg={colorMode === "light" ? "#EDF2F7" : "grey"}>
            <Text>{school.startDate} - {school.endDate}</Text>
          </Box>
        </AspectRatio>
        <Text>{school.desc}</Text>
      </VStack>
    </>
  )
}