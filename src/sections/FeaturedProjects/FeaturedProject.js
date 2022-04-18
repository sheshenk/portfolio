import { Heading, Image, Link, VStack, Wrap, Text, WrapItem } from "@chakra-ui/react"
import { isMobile } from "react-device-detect"
import TechStack from "../../components/TechStack"

const FeaturedProject = ({title, appLink, description, otherLinks, stack, image}) => {

    const otherLinksList = otherLinks.map(ol => {
        return (
            <Link href={ol.link}>{ol.prompt}</Link>
        )
    })

    return (
        <Wrap spacing={16} align='center' w='full'>
            <WrapItem w='45%' minW={300} order={isMobile ? 2 : 1}>
                <VStack spacing={10} align='baseline'>
                    <VStack align='baseline' spacing={4}>
                        <Link href={appLink}>
                            <Heading fontSize={'4xl'} align='left'>{title}</Heading>
                        </Link>
                        <Text align='left' fontSize={24}>
                            {description}
                        </Text>
                        <VStack align='baseline' spacing={2} textDecoration='underline'>
                            {otherLinksList}
                        </VStack>
                    </VStack>
                    <TechStack size={10} stack={stack}/>
                </VStack>
            </WrapItem>
            <WrapItem w='45%' minW={300} order={isMobile ? 1 : 2}>
                <Image src={image} w='100%'/>
            </WrapItem>
            
        </Wrap>
    )
}
export default FeaturedProject