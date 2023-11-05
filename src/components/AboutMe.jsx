import React from 'react'
import "../styles/AboutMe.css"
import resume from "../images/Prathamesh_Chavan_CV.pdf"
import {Flex,Box,Heading,Text, Button} from "@chakra-ui/react"

export default function Aboutme() {
  return (
    <div id='about' class="about section" >
      <Box >
        <Box id='about1' >
            <Heading>ABOUT ME</Heading>
            <span id='emptySpan'>*****</span>
            <p>Here you will find more information about me,
               what I do, and my current skills mostly in terms 
               of programming and technology</p>
        </Box>
        <Flex id='flexed'>
          <Box id='about2'>
            <Heading size={"lg"}>Get to know me!</Heading>
             <Text>
             I'm a <strong>Frontend Web Developer</strong> building the Front-end of 
             Websites and Web Applications that leads to the success 
             of the overall product. Check out some of my work in the 
            <strong> Projects</strong> section.<br /><br />
             I also like sharing content related to the stuff that I have 
             learned over the years in  <strong>Web Development</strong> so it can help other
             people of the Dev Community. Feel free to Connect or Follow me 
             on my <a href='https://www.linkedin.com/in/prathamesh-chavan-5532261b4/' target={'_blank'}>Linkedin</a> where
              I post useful content related to Web Development and Programming<br /><br />
             I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow. 
             If you have a good opportunity that matches my skills and experience 
             then don't hesitate to <strong>contact</strong> me.
             </Text>
             
              <a href="#contact">
              <Button>
              CONTACT
              </Button>
              </a>
              
            
            &nbsp;
            &nbsp;
            &nbsp;
            <a id="resume-button-1" href={resume} download>
             <Button id="resume-button-1" >
              RESUME
             </Button> 
            </a>
             
          </Box>
          <Box id='skills'>
            <Box>
              <Heading size={"lg"}>My Skills</Heading>
                <Box>
                  <Button className="skills-card-name">HTML</Button>
                  <Button className="skills-card-name">CSS</Button>
                  <Button className="skills-card-name">JavaScript</Button>
                  <Button className="skills-card-name">React</Button>
                  <Button className="skills-card-name">Github</Button>
                  <Button className="skills-card-name">Responsive Design</Button>
                  <Button className="skills-card-name">Bootstrap</Button>
                  <Button className="skills-card-name">Chakra ui</Button>
                  <Button className="skills-card-name">Redux</Button>
                </Box>
            </Box>
            
          </Box>
        </Flex>
      </Box>
      
    </div>
  )
}
