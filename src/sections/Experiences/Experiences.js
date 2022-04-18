import { Heading, VStack } from "@chakra-ui/react"
import { isMobile } from "react-device-detect"
import experiences from "../../data/experiences"
import Experience from "./Experience"

const Experiences = () => {

    const experienceList = experiences.map(xp => 
        <Experience title={xp.title} company={xp.company} duration={xp.duration} bullets={xp.bullets} stack={xp.stack}/>
        )

    return (
        <VStack 
            w='full' 
            pl={isMobile ? 12 : 48} 
            pr={isMobile ? 12 : 48} 
            spacing={isMobile ? 6 : 12} 
            align='baseline'
            id="experiences"
        >
            <VStack align='baseline' spacing={4}>
            <Heading size='3xl'>Experiences.</Heading>
            </VStack>
            <VStack spacing={24} align='baseline'>
                {experienceList}
            </VStack>
        </VStack>
    )
}
export default Experiences