import { Box, HStack, Text, IconButton, Badge, VStack, Link, Image, useColorMode } from "@chakra-ui/react"
import styles from '../styles/Home.module.css'

const HobbiesBox = () => {
    const { colorMode } = useColorMode()

    // Styles
    const FlightSimImg = {
        width: "400px",
        height: "auto",
        borderRadius: "4px"
    }

    return (
        <VStack spacing={5} alignItems="left">
            <VStack alignItems="left">
                <Text fontSize="25px"><b>Flight Simulation</b></Text>
                <HStack spacing={10}>
                    <Image className={styles.removeIcn} style={FlightSimImg} boxShadow={colorMode === "light" ? "lg" : ""} src="/FlightSim.png" alt="XPlane 11" borderRadius="lg" />
                    <VStack>
                        <Text></Text>
                        <Text><b>Planes: </b><br />Cessna 172 Skyhawk, Cirrus SF50, B737-800</Text>
                    </VStack>
                </HStack>
            </VStack>
        </VStack>
    )
}

export default HobbiesBox