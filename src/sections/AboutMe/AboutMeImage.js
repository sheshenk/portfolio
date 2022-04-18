import { Image, Box } from "@chakra-ui/react"
import '../../styles/zoomImage.css'
import headshot from '../../data/images/headshot.jpeg'

const AboutMeImage = () => {
    return (
        <Box
            w={250}   
            h={250}
            overflow='hidden'
            // boxShadow='0px 0px 30px 0px rgba(0,0,0,0.2)'
        >
            <Image 
                src={headshot} 
                alt='headshot' 
                objectFit='cover' 
                className="zoom-image"
            />
        </Box>
    )
}
export default AboutMeImage