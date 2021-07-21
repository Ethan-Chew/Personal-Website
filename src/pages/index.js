import { Box, HStack, VStack, Text, Heading, AspectRatio, Badge, Divider } from "@chakra-ui/react"
import { useState, useEffect } from "react"

// Components
import Header from "../components/Header";
import ProjectsBox from "../components/ProjectsBox"

export default function Home() {
  useEffect(() => {
    document.title = "Ethan Chew";
  })

  // Data
  const Schools = [{
    name: "School of Science and Technology, Singapore",
    startYear: "2019",
    endYear: "2022",
    desc: "Placeholder"
  }, {
    name: "Swift Accelerator Program",
    startYear: "2021",
    endYear: "2022",
    desc: "Placeholder"
  }]

  const Jobs = [{
    title: "Vice President",
    location: "SST Inc.",
    startDate: "July 2021",
    endDate: "Current",
    desc: ""
  }, {
    title: "Chief Admin Officer",
    location: "SST Inc.",
    startDate: "June 2020",
    endDate: "July 2021",
    desc: ""
  }]

  const Framewords = [{
      name: "React",
      desc: ""
  }]

  return (
    <Box mx={20} ml={3} mr={3}>
      <VStack spacing={10} alignItems="left">
        <Header/>

        <VStack alignItems="left">
          <Heading mb={3}>Education</Heading>
          {Schools.map((school) => (
            <EducationBox key={school.name} school={school} />
          ))}
        </VStack>
        <Divider />
        <VStack alignItems="left">
          <Heading mb={3}>Work Experience</Heading>
          {Jobs.map((job) => (
            <ExpBox key={job.name} data={job} />
          ))}
        </VStack>
        <Divider />
        <VStack alignItems="left">
          <Heading mb={3}>Projects</Heading>
          <ProjectsBox />
        </VStack>
        <Divider />
        <VStack alignItems="left">
          <Heading mb={3}>Knowledge and Skills</Heading>
          
        </VStack>
      </VStack>
    </Box>
  )
}

const EducationBox = ({school}) => {
  return(
    <VStack alignItems="left">
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
  )
}

const ExpBox = ({data}) => {
  return(
    <VStack alignItems="left">
      <Text fontSize="20px"><b>{data.title} - {data.location}</b></Text>
      <AspectRatio ratio={6/1} maxW="190px">
        <Box p={2} borderRadius="md" bg="grey">
          <Text>{data.startDate} - {data.endDate === "Current" ? <b>Current</b> : data.endDate}</Text>
        </Box>
      </AspectRatio>
      <Text>{data.desc}</Text>
    </VStack>
  )
}