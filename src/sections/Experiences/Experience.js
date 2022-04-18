import { Heading, Spacer, Text, useColorModeValue, VStack, Wrap } from "@chakra-ui/react"
import { isMobile } from "react-device-detect"
import TechStack from "../../components/TechStack"

const Experience = ({title, company, duration, bullets, stack}) => {

    const bulletList = bullets.map(t => {
        return (
            <Text align='left' fontSize={isMobile ? 18 : 24} opacity={0.7}>{t}</Text>
        )
    })

    return (
        <VStack align='baseline' spacing={10}>
            <VStack align='baseline' spacing={6}>
                <VStack align='baseline' spacing={1}>
                    <Heading fontSize='2xl' color={useColorModeValue('gray.500', 'gray.300')}>{duration}</Heading>
                    <Wrap spacing={isMobile ? 0 : 8}>
                        <Heading fontSize={36} align='left'>{title}</Heading>
                        {company === null ? <Spacer/> : <Text opacity={0.7} align='left' fontSize={32}>@{company}</Text>}
                        <Spacer/>
                    </Wrap>
                </VStack>
                <VStack align='baseline' spacing={4} mb>
                    {bulletList}
                </VStack>
            </VStack>
            <VStack align='baseline' spacing={4}>
                <Heading fontSize='2xl' color={useColorModeValue('gray.800', 'gray.100')}>Tech Stack</Heading>
                <TechStack size={12} stack={stack}/>
            </VStack>
        </VStack>
        
    )
}
export default Experience