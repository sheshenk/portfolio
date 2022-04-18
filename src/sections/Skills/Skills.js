import { Heading, VStack, Wrap } from "@chakra-ui/react"
import { isMobile } from "react-device-detect"
import TechStack from "../../components/TechStack"
import skills from "../../data/skills"

const Skills = () => {

    const techIconSize = 12

    return (
        <VStack 
            w='full' 
            h='full' 
            maxH='1100px' 
            pl={isMobile ? 12 : 48} 
            pr={isMobile ? 12 : 48} 
            spacing={isMobile ? 6 : 12} 
            align='baseline'
            id="skills"
        >
            <Heading size='3xl'>Skills.</Heading>
            <Wrap spacing={20}>
            <VStack align='baseline' spacing={techIconSize + 3}>
                <Heading size='xl'>Advanced</Heading>
                <VStack spacing={6} align='baseline'>
                    <TechStack stack={skills.advanced} size={techIconSize}/>
                    <TechStack stack={skills.advanced_design} size={techIconSize}/>
                </VStack>
                
            </VStack>
            <VStack align='baseline' spacing={techIconSize + 3}>
                <Heading size='xl'>Intermediate</Heading>
                <VStack spacing={6} align='baseline'>
                    <TechStack stack={skills.intermediate} size={techIconSize}/>
                    <TechStack stack={skills.intermediate_design} size={techIconSize}/>
                </VStack>
                
            </VStack>
            <VStack align='baseline' spacing={techIconSize + 3}>
                <Heading size='xl'>Basic</Heading>
                <VStack spacing={6} align='baseline'>
                    <TechStack stack={skills.basic} size={techIconSize}/>
                </VStack>
            </VStack>
            </Wrap>
            
            
        </VStack>
    )
}
export default Skills