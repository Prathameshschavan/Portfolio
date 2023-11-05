import React from 'react'
import Image from "../images/Prathamesh_pic.jpeg"
// import {Flex, Button,useMediaQuery,Box, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverArrow, PopoverCloseButton, PopoverBody, PopoverFooter, ButtonGroup, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody } from "@chakra-ui/react"
import {NavLink} from "react-router-dom"
import "../styles/Navbar.css";
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, useDisclosure, useMediaQuery } from '@chakra-ui/react';

export default function Navbar() {
  const [isLargerThan1280] = useMediaQuery('(min-width: 800px)')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('top')
 
  let btnStyles ={
    visibility: "hidden",
    // display:"none",
    position:"absolute"
  }

  return (
    <Flex id="nav-menu">
      <Flex id='nav1'>
            <img id='logo' src={Image} alt="Pic" />
            <h1>PRATHAMESH CHAVAN</h1>
        </Flex>
        
        {isLargerThan1280?(
          <Flex id='nav2'>
          <a href="#home" className="nav-link home"><Button>HOME</Button></a>
           <a href="#about"className="nav-link about"><Button>ABOUT</Button></a>
           <a href="#projects" className="nav-link projects"><Button>PROJECTS</Button></a>
           <a href="#contact" className="nav-link contact"><Button>CONTACT</Button></a> 
           <a style={btnStyles} className="nav-link resume"><Button>Resume</Button></a> 
           <a style={btnStyles}  href="#skills" className="nav-link skills"><Button>skill</Button></a>
          </Flex>
        ):
        <>
          <Button bg={"white"} onClick={onOpen}>
          <i class="fa-solid fa-bars"></i>
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'></DrawerHeader>
          <DrawerBody id='drawerBody' display={"flex"} flexDirection={"column"} alignItems={"center"} gap={1} >
           <a href="#home" className="nav-link home"><Button >HOME</Button></a>
           <a href="#about"className="nav-link about"><Button>ABOUT</Button></a>
           <a href="#projects" className="nav-link projects"><Button>PROJECTS</Button></a>
           <a href="#contact" className="nav-link contact"><Button>CONTACT</Button></a> 
           <a style={btnStyles} className="nav-link resume"><Button>Resume</Button></a> 
           <a style={btnStyles} href="#skills" className="nav-link skills"><Button>skill</Button></a>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
        </>
        }
        
     
    </Flex>

    
  )
}
