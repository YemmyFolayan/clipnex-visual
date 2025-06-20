import { Box, Flex, Image, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import clipnex_logo_black from '../images/clipnex_logo_blue.png'

const Footer = () => {
  return (
<Box>
  <Flex 
    direction={["column","column","row"]} 
    backgroundColor="#fff" 
    color="black" 
    h={["auto","auto","470px"]} // Changed to auto for better content fit
    p="50px 15% 50px 8%"  
    pr={["10%","10%","15%"]} 
    justifyContent="space-between"
  >
    {/* Logo and Description */}
    <Box pl="10px" w={["80%","45%","20%"]} h="fit-content" pb="10px" fontStyle="Poppins, sans-serif" fontSize="15px" textAlign="left" lineHeight={"21px"}>
      <Image
        w="120px"
        pt="8px"
        h="75px"
        mb="25px"
        src={clipnex_logo_black}
      />
      <Text fontWeight="semibold">
        Clipnex Visuals craft creative mobile videos for events and businesses, highlights, promos, testimonials & more. Fast, social-ready content from the palm of our hand.
      </Text>
    </Box>
    
    <Spacer/>
    
    {/* Main Footer Links - Now with 4 columns */}
    <Flex direction="row" w={["100%","100%","75%"]} textAlign="left" flexWrap="wrap">
      {/* Explore Column */}
      <Box w={["50%","50%","23%"]} pl="10px" pr="10px">
        <Text mb="25px" pt="12px" fontWeight="semibold" fontSize={["12px","15px","15px"]}>EXPLORE</Text>
        <VStack fontWeight="semibold" align='stretch' lineHeight={["20px","28px","30px"]} color="black" fontSize={["12px","15px","15px"]}>
          <Text>About</Text>
          <Text>Features</Text>
          <Text>Careers</Text>
          <Text>Linkedin</Text>
          <Text>Support</Text>
          <Text>Product updates</Text>
        </VStack>
      </Box>
      
      <Spacer/>
      
      {/* Portfolio Column - New */}
      <Box w={["50%","50%","23%"]} pr="10px" pl="10px">
        <Text mb="25px" pt="12px" fontWeight="semibold" fontSize={["12px","15px","15px"]}>PORTFOLIO</Text>
        <VStack align='stretch' fontWeight="semibold" lineHeight={["20px","30px","30px"]} color="black" fontSize={["12px","15px","15px"]}>
          <Text>Short-form Edits</Text>
          <Text>Behind-the-Scenes</Text>
          <Text>Before & After</Text>
          <Text>Event Highlights</Text>
          <Text>Product Videos</Text>
          <Text>View Gallery</Text>
        </VStack>
      </Box>
      
      <Spacer/>
      
      {/* Book Now Column - New */}
      <Box w={["50%","50%","23%"]} pr="10px" pl="10px">
        <Text mb="25px" pt="12px" fontWeight="semibold" fontSize={["12px","15px","15px"]}>BOOK NOW</Text>
        <VStack align='stretch' fontWeight="semibold" lineHeight={["20px","30px","30px"]} color="black" fontSize={["12px","15px","15px"]}>
          <Text>💬 Tell us your vision</Text>
          <Text>📅 Choose date</Text>
          <Text>📍 Set location</Text>
          <Text mt="10px">Delivery in 24-48hrs</Text>
          <Text mt="10px">📞 info@clipnexvisuals.com</Text>
          <Text>WhatsApp Available</Text>
        </VStack>
      </Box>
      
      <Spacer/>
      
      {/* FAQs Column - New */}
      <Box w={["50%","50%","23%"]} pr="10px" pl="10px">
        <Text mb="25px" pt="12px" fontWeight="semibold" fontSize={["12px","15px","15px"]}>FAQs</Text>
        <VStack align='stretch' fontWeight="semibold" lineHeight={["20px","30px","30px"]} color="black" fontSize={["12px","15px","15px"]}>
          <Text>Do you shoot outside Akure?</Text>
          <Text>How long does editing take?</Text>
          <Text>What should I prepare?</Text>
          <Text>Is deposit required?</Text>
          <Text>Same-day shoots?</Text>
          <Text>See all FAQs</Text>
        </VStack>
      </Box>
    </Flex>
  </Flex>
  
  {/* Copyright Section */}
  <Stack 
    fontWeight="semibold" 
    backgroundColor="#000080" 
    h="70px" 
    p={["0px","0px","20px 50px 50px"]} 
    direction={["column","column","row"]} 
    justifyContent={["space-evenly","space-evenly","space-between"]} 
    color="white" 
    justify="center"
    alignItems="center"
  >
    <Text>CopyRight@ 2025 Clipnex Visuals</Text>
    <Text>Terms of Use & Privacy Policy</Text>
  </Stack>
</Box>
  )
}

export default Footer