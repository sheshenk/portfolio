import { Spacer, VStack } from "@chakra-ui/react"
import { isMobile } from "react-device-detect"
import '../../styles/transition.css'
import '../../styles/textGradient.css'
import IntroductionButtons from "./IntroductionButtons"
import IntroductionHeadings from "./IntroductionHeadings"

const Introduction = () => {

    return (
        <VStack 
            w='full'
            h='calc(100vh)'
            pl={isMobile ? 12 : 48} 
            pr={isMobile ? 12 : 48} 
            spacing={isMobile ? 6 : 12} 
            align='baseline'
        >
            <Spacer/>
            <IntroductionHeadings/>
            <IntroductionButtons/>
            <Spacer/>
        </VStack>
    )
}
export default Introduction