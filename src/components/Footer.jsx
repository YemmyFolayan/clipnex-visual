import { Box, Flex, Image, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import clipnex_logo_black from '../images/clipnex_logo_blue.png'

const Footer = () => {
  return (
    <Box>
<Flex direction={["column","column","row"]} backgroundColor="#fff" color="black" h={["700px","650px","470px"]} p="50px 15% 50px 8%"  pr={["10%","10%","15%"]} justifyContent="space-between">
<Box pl="10px"  w={["80%","45%","20%"]} h="fit-content" pb="10px" fontStyle="Poppins, sans-serif" fontSize="15px" textAlign="left" lineHeight={"21px"} >
<Image
    w="120px"
    pt="8px"
    h="75px"
    mb="25px"
    
    // objectFit='cover'
    src={clipnex_logo_black}
    // alt='Dan Abramov'
  />
  <Text fontWeight="semibold">
    Clipnex Visuals craft creative mobile videos for events and businesses, highlights, promos, testimonials & more. Fast, social-ready content from the palm of our hand.
  </Text>
</Box>
<Spacer/>
<Flex direction="row" w={["100%","100%","60%"]} textAlign="left">
    <Box w={["50%","50%","30%"]} pl="10px" pr="10px"  >
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
    <Box w={["50%","50%","30%"]} pr="10px" pl="10px" >
    
        <Text mb="25px" pt="12px" fontWeight="semibold" fontSize={["12px","15px","15px"]}>VIDEO TOOLS</Text>
        <VStack align='stretch' fontWeight="semibold" lineHeight={["20px","30px","30px"]} color="black" fontSize={["12px","15px","15px"]}>
        <Text>Add Text to Vedio</Text>
        <Text>Cut Vedio</Text>
        <Text>Merge Vedio</Text>
        <Text>Compress Vedio</Text>
        <Text>Resize Vedio</Text>
        <Text>See all</Text>
        </VStack>
    </Box>
    <Spacer/>
    <Box w={["50%","50%","30%"]}  pr="10px" pl="10x" >
    <Text mb="25px" pt="12px" fontWeight="semibold" fontSize={["12px","15px","15px"]}>VEDIO CREATORS</Text>
        <VStack align='stretch' fontWeight="semibold" lineHeight={["20px","30px","30px"]} color="black" fontSize={["12px","15px","15px"]}>
        <Text>Vedio Editor</Text>
        <Text>Photo Vedio Maker</Text>
        <Text>Facebook Vedio Maker</Text>
        <Text>YouTube Intro Maker</Text>
        <Text>Instagram Vedio Maker</Text>
        <Text>See all</Text>
        </VStack>
    </Box>
</Flex>
</Flex>
<Stack fontWeight="semibold" backgroundColor="#000080" h="70px" p={["0px","0px","20px 50px 50px"]} direction={["column","column","row"]} justifyContent={["space-evenly","space-evenly","space-between"]} color="white" justify="center">
    <Text>CopyRight@ 2025 Clipnex Visuals</Text>
    <Text>Terms of Use & Privacy Policy</Text>
</Stack>
    </Box>
  )
}

export default Footer