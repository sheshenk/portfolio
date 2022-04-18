import { Image, Tooltip, useColorModeValue } from "@chakra-ui/react"
import techImageData from "../data/techImageData"
import '../styles/darkModeImage.css'

const TechIcon = ({tech, size}) => {


    console.log(size)
    const iconSize = size === undefined ? 10 : size
    const icon = useColorModeValue(
        <Image src={techImageData[tech]} w={iconSize} h={iconSize} cursor='default'/>,
        <Image src={techImageData[tech]} w={iconSize} h={iconSize} cursor='default' className="dark-mode-image"/>
    )

    return (
        <Tooltip label={tech} cursor='none'>
            {icon}
        </Tooltip>
        
    )
}
export default TechIcon