import { Button, Wrap, Spacer } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import { FaGithub, FaLinkedin, FaPaperclip } from "react-icons/fa";
import resume from '../../data/resume.pdf'

const introductionLinks = [
    {
        name: 'LinkedIn',
        icon: <FaLinkedin/>,
        colorScheme: 'linkedin',
        link: 'https://www.linkedin.com/in/achsg/'
    },
    {
        name: 'Resume/CV',
        icon: <FaPaperclip/>,
        colorScheme: 'pink',
        link: resume
    },
    {
        name: 'Github',
        icon: <FaGithub/>,
        colorScheme: 'gray',
        link:'https://github.com/sheshenk'
    }
].map(item => {
    return (
        <a href={item.link} target='_blank' rel='noreferrer'>
            <Button size={isMobile ? 'md' : 'lg'} colorScheme={item.colorScheme} leftIcon={item.icon}>
            {item.name}
        </Button>
        </a>
    )
})

const IntroductionButtons = () => {
    return (
        <Wrap spacing={4}>
            {introductionLinks}
            <Spacer/>
        </Wrap>
    )
}

export default IntroductionButtons