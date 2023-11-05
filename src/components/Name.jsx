import React from "react";
import "../styles/Name.css";
import { Box, Heading, Button, Flex } from "@chakra-ui/react";
import PhotoPNG from "../images/PhotoPNG.jpg"
export default function Name() {
  
  return (
    <div id="home">
         <div id="NameMain">
      
      <Flex id="Social">
        <a id="contact-linkedin" href="https://www.linkedin.com/in/prathamesh-chavan-5532261b4/" target={"_blank"}>
        <img
          src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg"
          alt="linkedIn"
        />
        </a>
        <a href="https://twitter.com/Prathamesh_2117" target={"_blank"}>
        <img
          src="https://d33wubrfki0l68.cloudfront.net/ba3ef9fd9d500c55ba265adae6087ba71e05f5d9/d0067/assets/svg/twitter-dark.svg"
          alt="Twitter"
        />
        </a>
        <a id="contact-github" href="https://github.com/Prathameshschavan" target={"_blank"}>
        <img
          src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg"
          alt="Github"
        />
        </a>
      </Flex>
      <Box id="nameDetails">
        <Box>
        <Heading id="user-detail-name" as={"h1"}>HEY, I'M CHAVAN PRATHAMESH</Heading>
        <p id="user-detail-intro">
          A Frontend focused Web Developer building the Frontend of Websites
          and Web Applications that leads to the success of the overall
          product
        </p>
       <a href="#projects"> <Button>PROJECTS</Button></a>

        </Box>
        
        <img className="home-img" src={PhotoPNG} alt="photo" />

      </Box>

      
    
    </div>

      <Flex id="mouseIcon">
        
          <img  src="https://cdn-icons-png.flaticon.com/128/9762/9762146.png" alt="mouse" />
          
          <p></p>
      </Flex>
    
    </div>
   
  );
}
