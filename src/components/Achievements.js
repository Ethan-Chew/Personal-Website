import { Box ,Tabs , TabList, TabPanels, Tab, TabPanel, Text, VStack, HStack, Container, Link, useColorMode, Image } from '@chakra-ui/react'
import { MdDateRange } from 'react-icons/md'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import { onSnapshot, collection } from "firebase/firestore";
import db from '../pages/api/firebase'
import { useRouter } from 'next/router';

const Achievements = () => {
    // Firebase Data Handling
    const [certificates, setCertificates] = useState([])
    const [competitions, setCompetitions] = useState([])
    let tempCe = []
    let tempCo = []
    const months = ['Dec', 'Nov', 'Oct', 'Sep', 'Aug', 'July', 'June', 'May', 'Apr', 'Mar', 'Feb', 'Jan']

    // Variables
    const tags = [{"Colour": "green", "Field": "Programming"}, {"Colour": "yellow.500", "Field": "Science"}, {"Colour": "purple.500", "Field": "Taekwondo"}, {"Colour": "cyan.500", "Field": "Others"}]

    useEffect(() => {
        console.log("Loading Projects...")

        const sortDate = (valA, valB) => {
            const a = valA.date.split(" ")
            const b = valB.date.split(" ")
            if (a[1] !== b[1]) {
                return b[1] - a[1]
            } else {
                return months.indexOf(a[0]) - months.indexOf(b[0])
            }
        }

        onSnapshot(collection(db, "knowlegeandskills"), (data) => {
            let temp = data.docs.map((doc) => doc.data())

            for (let i = 0; i < temp.length; i++) {
                if (temp[i].type === "competitions") {
                    tempCo.push(temp[i])
                } else {
                    tempCe.push(temp[i])
                }
            }

            setCertificates(tempCe.sort(sortDate))
            setCompetitions(tempCo.sort(sortDate))
        })
    }, [])

    return (
        <VStack spacing={5} alignItems="left">
            <Box>
                <VStack spacing={5} alignItems="left">
                    <Text fontSize="25px"><b>Certificates</b></Text>
                    <VStack spacing={3} alignItems="left">
                        <Tabs variant='soft-rounded'>
                            <TabList>
                                {tags.map((tag) => (
                                    certificates.some(el => el.field === tag.Field) ? 
                                    <Tab key={tag.Field} _selected={{ color: 'white', bg: `${tag.Colour}` }}>{tag.Field}</Tab>
                                    : <></>
                                ))}
                            </TabList>
                            <TabPanels>
                                {tags.map((tag) => (
                                    certificates.some(el => el.field === tag.Field) ? 
                                    <TabPanel key={tag.Field}>
                                        <VStack spacing={3}>
                                            {certificates.map((certificate) => (
                                                (certificate.field == tag.Field) ? <Boxx key={certificate.name} data={certificate} /> : <></>
                                            ))}
                                        </VStack>
                                    </TabPanel>
                                    : <></>
                                ))}
                            </TabPanels>
                        </Tabs>
                    </VStack>
                    <Text fontSize="25px"><b>Competitions and Events</b></Text>
                    <VStack spacing={3} alignItems="left">
                    <Tabs variant='soft-rounded'>
                            <TabList>
                                {tags.map((tag) => (
                                    competitions.some(el => el.field === tag.Field) ? 
                                    <Tab key={tag.Field} _selected={{ color: 'white', bg: `${tag.Colour}` }}>{tag.Field}</Tab>
                                    : <></>
                                ))}
                            </TabList>
                            <TabPanels>
                                {tags.map((tag) => (
                                    competitions.some(el => el.field === tag.Field) ? 
                                    <TabPanel key={tag.Field}>
                                        <VStack spacing={3}>
                                            {competitions.map((competition) => (
                                                (competition.field == tag.Field) ? <Boxx key={competition.name} data={competition} /> : <></>
                                            ))}
                                        </VStack>
                                    </TabPanel>
                                    : <></>
                                ))}
                            </TabPanels>
                        </Tabs>
                    </VStack>
                </VStack>
            </Box>
        </VStack>
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
            <Box style={{cursor:"pointer"}} alignItems="left" borderRadius="lg" boxShadow="md" bg={colorMode === "light" ? "#F6F8FF" :"#252a35"} _hover={colorMode === "light" ? { bg: '#ebedf0' } : { bg: '#1f2533' }} onClick={() => router.push(data.data.link)}>
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

export default Achievements