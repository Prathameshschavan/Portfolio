import React from 'react';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import "../styles/Projects.css";
import Image from "../images/Shop.png";
import airbnbb from "../images/airbnb.png";
import kooapp from "../images/kooapp.png";

export default function Projects() {
  return (
    <div id='projects'>
        <Box id='projectbox1'>
           <Heading>PROJECTS</Heading>
           <span id='emptySpan'>*****</span>
           <p>Here you will find some of the personal 
            and clients projects that I created with 
            each project containing its own case study</p>
        </Box>

        <Flex className='project-card'>
            <Box>
                <img className='laptopImg' src="https://d33wubrfki0l68.cloudfront.net/19c708670a1f21231c1e2efa6ba38dbf52b15343/3237e/assets/jpeg/dopefolio.jpeg" alt="" />
                <img className='websitePhoto' src={kooapp} alt="" />
            </Box>
            <Box>
                <Heading className="project-title">KooApp.com</Heading>
                <p className="project-description">Koo is an Indian microblogging and social networking service, based in Bengaluru, India. As of November 2022, the company is valued at over $275 million.</p>
                <div>
                    <a target={'_blank'} className="project-deployed-link" href="https://prathamesh-kooapp.vercel.app/"><Button>VISIT</Button></a>
                    <a target={'_blank'} className="project-github-link" href="https://github.com/Prathameshschavan/FullStackKooApp"><Button>GITHUB</Button></a>
                </div>
                
            </Box>
        </Flex>

        <Flex className='project-card'>
            <Box>
                <img className='laptopImg' src="https://d33wubrfki0l68.cloudfront.net/19c708670a1f21231c1e2efa6ba38dbf52b15343/3237e/assets/jpeg/dopefolio.jpeg" alt="" />
                <img className='websitePhoto' src={Image} alt="shop" />
            </Box>
            <Box>
                <Heading className="project-title">Shop.com</Heading>
                <p className="project-description">SHOP.COM Marketplace offers great deals on clothes, beauty, health and nutrition, shoes, electronics, and more from over 1500 stores with one easy checkout.</p>
                 
                 <div>
                    <a target={'_blank'} className="project-deployed-link" href="https://timely-bavarois-d3839f.netlify.app/"><Button>VISIT</Button></a>
                    <a target={'_blank'} className="project-github-link"  href="https://github.com/ritikraj07/Project_shop.com"><Button>GITHUB</Button></a>
                 </div>
            </Box>
        </Flex>


        <Flex className='project-card'>
            <Box>
                <img className='laptopImg' src="https://d33wubrfki0l68.cloudfront.net/19c708670a1f21231c1e2efa6ba38dbf52b15343/3237e/assets/jpeg/dopefolio.jpeg" alt="" />
                <img className='websitePhoto' src={airbnbb} alt="" />
            </Box>
            <Box>
                <Heading className="project-title">Airbnb.com</Heading>
                <p className="project-description">Airbnb, Inc. is an American San Francisco-based company operating an online marketplace for short-term homestays and experiences. The company acts as a broker and charges a commission from each booking.</p>
                <div>
                    <a target={'_blank'} className="project-deployed-link" href="https://dashing-lokum-307e4a.netlify.app/html/product"><Button>VISIT</Button></a>
                    <a target={'_blank'} className="project-github-link"  href="https://github.com/Prathameshschavan/Project_Airbnb.com"><Button>GITHUB</Button></a>
                </div>
                
            </Box>
        </Flex>
        
       {/* <Flex className='projectContainer'>
            <Box>
                <img src="https://d33wubrfki0l68.cloudfront.net/19c708670a1f21231c1e2efa6ba38dbf52b15343/3237e/assets/jpeg/dopefolio.jpeg" alt="" />
                <img className='websitePhoto' src={kooapp} alt="" />
            </Box>
            <Box>
                <Heading>KooApp.com</Heading>
                <p>Koo is an Indian microblogging and social networking service, based in Bengaluru, India. As of November 2022, the company is valued at over $275 million.</p>
                <div>
                    <a target={'_blank'} href="https://prathameshschavan.github.io/Project_kooApp/"><Button>VISIT</Button></a>
                    <a target={'_blank'} href="https://prathameshschavan.github.io/Project_kooApp/"><Button>GITHUB</Button></a>
                </div>
            </Box>
        </Flex> */}
      
    </div>
  )
}
