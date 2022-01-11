import { Box, HStack, Text, IconButton, Badge, VStack, Link, Image, useColorMode } from "@chakra-ui/react"
import styles from '../styles/Home.module.css'

const HobbiesBox = () => {
    const { colorMode } = useColorMode()

    return (
        <VStack spacing={5} alignItems="left">
            <VStack alignItems="left">
                <Text fontSize="22px"><b>Flight Simulation</b></Text>
                <HStack spacing={6}>
                    <Image className={styles.removeIcn} boxShadow={colorMode === "light" ? "lg" : ""} src="/FlightSimImg.png" alt="XPlane 11" height="240px" width="300px" borderRadius="lg" />
                    <Text>Placeholder cause im lazy</Text>
                </HStack>
            </VStack>
        </VStack>
    )
}

export default HobbiesBox