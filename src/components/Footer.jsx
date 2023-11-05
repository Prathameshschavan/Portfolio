import React from 'react'
import "../styles/Footer.css"
import {Flex,Box, Heading} from "@chakra-ui/react"


export default function Footer() {
  return (
    <div >
        <footer>
            <Flex>
                <Box>
                    <Heading size={"lg"}>Prathamesh Chavan</Heading>
                    <p>A Frontend focused Web Developer building the 
                      Frontend of Websites and Web Applications that
                      leads to the success of the overall product</p>
                </Box>

                <Box>
                <Heading size={"lg"}>SOCIAL</Heading>
                <Flex>
                <a href="https://www.linkedin.com/in/prathamesh-chavan-5532261b4/" target={"_blank"}>
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png"
                  alt="linkedIn"
                />
                </a>

                <a href="https://twitter.com/Prathamesh_2117" target={"_blank"}>
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/ef67339f7016cb09ba66366c1dc9145ac69f2a21/feca1/assets/png/twitter-ico.png"
                  alt="Twitter"
                />
                </a>
                <a href="https://github.com/Prathameshschavan" target={"_blank"}>
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png"
                  alt="Github"
                />
                </a>
                </Flex>
                </Box>
            </Flex>
        </footer>
      
    </div>
  )
}
