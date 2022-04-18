import { Heading, VStack, Wrap, Text } from "@chakra-ui/react"
import { isMobile } from "react-device-detect"
import textData from "../../data/textData"
import AboutMeImage from "./AboutMeImage"

const AboutMe = () => {
    return (
        <VStack 
            w='full'
            pl={isMobile ? 12 : 48} 
            pr={isMobile ? 12 : 48} 
            spacing={isMobile ? 6 : 12} 
            align='baseline'
        >
            <Wrap spacing={12}>
                <AboutMeImage/>
                <VStack align='baseline' spacing={4}>
            <Heading size='3xl'>About Me.</Heading>
            <Text fontSize={'2xl'} maxW='600px' align='left'>{textData.aboutMe.paragraph1}</Text>
            </VStack>
            </Wrap>
        </VStack>
    )
}
export default AboutMe