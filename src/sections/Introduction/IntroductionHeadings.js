import { Heading, Text, useColorModeValue, VStack } from "@chakra-ui/react"
import { isMobile } from "react-device-detect"
import textData from "../../data/textData"

const IntroductionHeadings = () => {
    return (
        <VStack align='baseline' className="fade-in">
            <Text fontSize={isMobile ? 24 : '3xl'} align='left'>Hi, my name is</Text>
            <Heading fontSize={isMobile ? 48 : '8xl'} align='left' className="animated-gradient">Shashank{isMobile ? '' : ' Acharya'}.</Heading>
            {/* <Heading fontSize='6xl' align='left' color={useColorModeValue('gray.500', 'gray.300')}></Heading> */}
            <Text fontSize={isMobile ? 24 : '3xl'} align='left' maxW='800px'>
                {textData.introduction.paragraph1}
            </Text>
        </VStack>
    )
}
export default IntroductionHeadings