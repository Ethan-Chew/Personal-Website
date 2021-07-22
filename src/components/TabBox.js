import { Box ,Tabs , TabList, TabPanels, Tab, TabPanel, Text, VStack, HStack, Divider, Link } from '@chakra-ui/react'
import { MdDateRange } from 'react-icons/md'

const TabBox = () => {
    return(
        <Box>
            <Tabs>
                <TabList>
                    <Tab>Languages/Frameworks</Tab>
                    <Tab>Tools</Tab>
                    <Tab>Accomplishments</Tab>
                    <Tab>School Projects</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Box>
                            <VStack spacing={6} alignItems="left">
                                <VStack spacing={4} alignItems="left">
                                    <VStack alignItems="left">
                                        <Text fontSize="20px"><b>JavaScript</b></Text>
                                        <Text>
                                            Currently, most of the projects I've worked on are written in JavaScript. For example, this website and other projects on my GitHub account.
                                        </Text>
                                    </VStack>

                                    <VStack alignItems="left">
                                        <Text fontSize="20px"><b>React</b></Text>
                                        <Text>
                                            React is a JavaScript library for building user interfaces. It is my preferred framework for Front-End Development.
                                        </Text>
                                    </VStack>
                                </VStack>

                                <VStack alignItems="left">
                                    <Text><b>Other Languages</b></Text>
                                    <HStack spacing={4} alignItems='left'>
                                        <Text>Swift</Text>
                                        <Text>Python</Text>
                                        <Text>C++</Text>
                                    </HStack>
                                </VStack>
                            </VStack>
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box>
                            <VStack spacing={5} alignItems="left">
                                <VStack alignItems="left">
                                    <Text fontSize="20px"><b>Developer Tools</b></Text>
                                    <VStack alignItems="left" spacing={1}>
                                        <Text>- GitHub</Text>
                                        <Text>- Xcode</Text>
                                        <Text>- Visual Studio Code</Text>
                                        <Text>- IntelliJ/PyCharm</Text>
                                    </VStack>
                                </VStack>

                                <VStack alignItems="left">
                                    <Text fontSize="20px"><b>Design Tools</b></Text>
                                    <VStack alignItems="left" spacing={1}>
                                        <Text>- Adobe XD</Text>
                                        <Text>- Figma</Text>
                                    </VStack>
                                </VStack>

                                <VStack alignItems="left">
                                    <Text fontSize="20px"><b>Post-Production</b></Text>
                                    <VStack alignItems="left" spacing={1}>
                                        <Text>- Davinci Resolve</Text>
                                        <Text>- iMovie/Garageband</Text>
                                    </VStack>
                                </VStack>
                            </VStack>
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box>
                            <VStack spacing={5} alignItems="left">
                                <Text fontSize="20px"><b>Competitions</b></Text>
                                <VStack spacing={3} alignItems="left">
                                    <VStack alignItems="left">
                                        <Text fontSize="18px"><b>Youth Cyber Exploration Programme</b></Text>
                                        <HStack>
                                            <MdDateRange />
                                            <Text>May 2020</Text>
                                        </HStack>
                                    </VStack>
                                    <VStack alignItems="left">
                                        <Text fontSize="18px"><b>Hackwise</b></Text>
                                        <HStack>
                                            <MdDateRange />
                                            <Text>December 2020</Text>
                                        </HStack>
                                    </VStack>
                                </VStack>
                            </VStack>
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <VStack spacing={5} alignItems="left">
                            <Text fontSize="20px"><b>School Projects</b></Text>
                            <VStack spacing={5} alignItems="left">
                                <VStack alignItems="left" spacing={2}>
                                    <VStack alignItems="left">
                                        <Text fontSize="18px"><b>2021 Additional Mathematics Performance Task</b></Text>
                                        <Text>In this Performance Task, we researched and created a online model and report of a proposed shelter that we can build for our school.</Text>
                                    </VStack>
                                    <VStack alignItems="left">
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
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default TabBox