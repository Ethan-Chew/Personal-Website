import { Box, VStack, Text, AspectRatio, Image, useColorMode } from "@chakra-ui/react"

export default function Experience({allData}){
    return (
        <VStack spacing={10} alignItems="left">
            {allData.map((data) => (
                <DataBox key={data.name} data={data}/>
            ))}
        </VStack>
    )
}

const DataBox = ({data}) => {
    const { colorMode } = useColorMode();

    return(
        <VStack alignItems="left">
            <Box h="83px" overflow="hidden">
                {colorMode === "light" ? <Image height="100%" fill style={{objectFit: 'contain'}} src={data.lightImg} /> : <Image height="100%" fill style={{objectFit: 'contain'}} src={data.darkImg} />}
            </Box>
            <Text fontSize="20px"><b>{data.name} - {data.location}</b></Text>
            <AspectRatio ratio={6/1} maxW="190px">
                <Box p={2} borderRadius="md" bg={colorMode === "light" ? "#EDF2F7" : "grey"}>
                    <Text>{data.startDate} - {data.endDate === "Current" ? <b>Current</b> : data.endDate}</Text>
                </Box>
            </AspectRatio>
            <Text>{data.desc}</Text>
        </VStack>
    )
}