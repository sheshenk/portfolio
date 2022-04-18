import { VStack, Heading } from "@chakra-ui/react"
import { isMobile } from "react-device-detect"
import featuredProjects from "../../data/featuredProjects"
import FeaturedProject from "./FeaturedProject"

const FeaturedProjects = () => {

    const featuredProjectList = featuredProjects.map(fp => {
        return (
            <FeaturedProject 
                title={fp.title}
                appLink={fp.appLink}
                description={fp.description}
                otherLinks={fp.otherLinks}
                stack={fp.stack}
                image={fp.image}
            />
        )
    })

    return (
        <VStack 
            w='full'
            minW={350}
            pl={isMobile ? 12 : 48} 
            pr={isMobile ? 12 : 48} 
            spacing={isMobile ? 6 : 12} 
            align='baseline'
            id="projects"
        >
            <VStack align='baseline' spacing={4}>
                <Heading size='3xl' align='left'>Featured Projects.</Heading>
            </VStack>
            <VStack spacing={24} align='baseline' w='full'>
                {featuredProjectList}
            </VStack>
        </VStack>
    )
}

export default FeaturedProjects