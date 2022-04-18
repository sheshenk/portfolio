import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  theme,
  Spacer,
  HStack,
  Link,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Introduction from './sections/Introduction/Introduction';
import Skills from './sections/Skills/Skills';
import './styles/stickyHeader.css'
import Experiences from './sections/Experiences/Experiences';
import FeaturedProjects from './sections/FeaturedProjects/FeaturedProjects';
import { isMobile } from 'react-device-detect';

function App() {

  const scroll = (id) => () => {
    const yOffset = -200; 
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" w='100vw'>
        <HStack pt={4} w='full' className={isMobile ? '' : 'sticky-header'} pl={40} pr={isMobile? 4 : 40} spacing={6}>
            {isMobile ? <></> : <Link onClick={scroll('skills')}>Skills</Link>}
            {isMobile ? <></> : <Link onClick={scroll('experiences')}>Experiences</Link>}
            {isMobile ? <></> : <Link onClick={scroll('projects')}>Projects</Link>}
            <Spacer/>
            <ColorModeSwitcher/>
        </HStack>
        <VStack w='full' minH='100vh'
          // align='baseline'
         >
          <Introduction/>
          {/* <AboutMe/> */}
          {/* <Box height={48}/> */}
          <Skills/>
          <Box height={48}/>
          <Experiences/>
          <Box height={48}/>
          <FeaturedProjects/>
          <Box height={48}/>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
