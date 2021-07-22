import { Box, HStack, VStack, Text, Heading, AspectRatio, Badge, Divider, Image, Container } from "@chakra-ui/react"
import { useEffect } from "react"

// Components
import Header from "../components/Header";
import ProjectsBox from "../components/ProjectsBox"
import TabBox from "../components/TabBox";

export default function Home() {
  useEffect(() => {
    document.title = "Ethan Chew";
  })

  // Data
  const Schools = [{
    name: "School of Science and Technology, Singapore",
    startYear: "2019",
    endYear: "2022",
    desc: "At the School of Science and Technology, we can learn our normal academic subjects through applied learning. We are also able to choose an O-Level Applied Subject to allow us to further our understanding of a specific field. For myself, I chose Computing+ as my Applied Subject which allowed me to develop my Computational Thinking skills, and further my knowledge in Python."
  }, {
    name: "Swift Accelerator Program",
    startYear: "2021",
    endYear: "2022",
    desc: "The Swift Accelerator Program is a 9 months long program, by IMDA and Apple, which teaches students the fundementals of Swift, the language used to create iOS, WatchOS, MacOS and iPadOS apps."
  }]

  const Jobs = [{
    title: "Vice President",
    location: "SST Inc.",
    startDate: "July 2021",
    endDate: "Current",
    desc: "As the Vice President of SST Inc, I assisted the President in managing SST Inc, and took on projects like the SST Inc Management Platform"
  }, {
    title: "Chief Admin Officer",
    location: "SST Inc.",
    startDate: "June 2020",
    endDate: "July 2021",
    desc: "As the Chief Admin Officer of SST Inc, I assisted the President and Vice President in managing SST Inc and the ExCo. One project I have worked on during my time as Chief Admin Officer is the SST Inc Recuritment."
  }]

  return (
    <Box mx={20} ml={3} mr={3}>
      <VStack spacing={10} alignItems="center">
        <Header />

        <Container maxW="container.lg">
          <Heading mb={4}>Education</Heading>
          <VStack alignItems="left" spacing={5}>
            {Schools.map((school) => (
              <EducationBox key={school.name} school={school} />
            ))}
          </VStack>
        </Container>

        <Divider />

        <Container maxW="container.lg">
          <Heading mb={4}>Work Experience</Heading>
          <VStack spacing={3} alignItems="left">
            {Jobs.map((job) => (
              <ExpBox key={job.name} data={job} />
            ))}
          </VStack>
        </Container>

        <Divider />

        <Container maxW="container.lg">
          <Heading mb={4}>Projects</Heading>
          <ProjectsBox />
        </Container>

        <Divider />

        <Container maxW="container.lg">
          <Heading mb={4}>Knowledge and Skills</Heading>
          <TabBox />
        </Container>
      </VStack>
    </Box>
  )
}

const EducationBox = ({school}) => {
  const sst = require("../assets/img/sst.png")
  const sap = require("../assets/img/sap.webp")

  return(
    <Box>
      <VStack alignItems="left">
        {school.name === "School of Science and Technology, Singapore" ? <Image src={sst} boxSize="100" borderRadius="md" fallbackSrc="https://via.placeholder.com/100" /> : null}
        {school.name === "Swift Accelerator Program" ? <Image src={sap} boxSize="100" borderRadius="md" fallbackSrc="https://via.placeholder.com/100" /> : null}
        <HStack>
          <Text fontSize="20px"><b>{school.name}</b></Text>
          {school.endYear > "2021" ? <Badge colorScheme="green">Current</Badge> : null}
        </HStack>
        <AspectRatio ratio={4/1} maxW="110px">
          <Box p={2} borderRadius="md" bg="grey">
            <Text>{school.startYear} - {school.endYear}</Text>
          </Box>
        </AspectRatio>
        <Text>{school.desc}</Text>
      </VStack>
    </Box>
  )
}

const ExpBox = ({data}) => {
  const inc = require("../assets/img/sstinc.webp")

  return(
    <Box>
      <VStack alignItems="left">
        <Text fontSize="20px"><b>{data.title} - {data.location}</b></Text>
        <AspectRatio ratio={6/1} maxW="190px">
          <Box p={2} borderRadius="md" bg="grey">
            <Text>{data.startDate} - {data.endDate === "Current" ? <b>Current</b> : data.endDate}</Text>
          </Box>
        </AspectRatio>
        <Text>{data.desc}</Text>
      </VStack>
    </Box>
  )
}