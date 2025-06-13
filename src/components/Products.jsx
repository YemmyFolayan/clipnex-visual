import React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  Stack,
  List,
  ListItem,
  ListIcon,
  Container,
  Image,
  Divider,
  useBreakpointValue,
  Badge,
  Icon
} from "@chakra-ui/react";
import { CheckCircleIcon, StarIcon } from "@chakra-ui/icons";
import { FaPlay, FaRegClock, FaMagic, FaMobileAlt } from "react-icons/fa";
import NavbarBeforeLogin from "./NavbarBeforeLogin";
import Footer from "./Footer";

const Products = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Product showcase data
  const featuredProducts = [
    {
      id: 1,
      name: "Event Highlight Reels",
      description: "Capture the essence of your events in captivating 60-second videos",
      features: [
        "Cinematic transitions and effects",
        "Perfectly synced to music",
        "Optimized for social sharing",
        "Branded with your logo"
      ],
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      price: "From ₦25,000",
      deliveryTime: "48 hours",
      bestFor: ["Weddings", "Conferences", "Birthdays", "Corporate events"]
    },
    {
      id: 2,
      name: "Social Media Video Packs",
      description: "Scroll-stopping content designed for Instagram, TikTok & Facebook",
      features: [
        "Vertical format optimized",
        "Trending music and effects",
        "Captions and text overlays",
        "Weekly content batches"
      ],
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      price: "From ₦40,000/month",
      deliveryTime: "Weekly batches",
      bestFor: ["Influencers", "Small businesses", "Content creators"]
    },
    {
      id: 3,
      name: "Product Showcase Videos",
      description: "Make your products shine with professional showcase videos",
      features: [
        "360° product views",
        "Feature highlights",
        "Call-to-action overlays",
        "E-commerce optimized"
      ],
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      price: "From ₦35,000/video",
      deliveryTime: "72 hours",
      bestFor: ["E-commerce stores", "Artisans", "Fashion brands"]
    }
  ];

  const successStories = [
    {
      id: 1,
      title: "Lagos Wedding Extravaganza",
      description: "How we transformed 8 hours of wedding footage into a viral 2-minute highlight reel",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      stats: "250k+ views, 3.5k shares"
    },
    {
      id: 2,
      title: "Nigerian Startup Launch",
      description: "The product video that helped secure $50k in pre-orders",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      stats: "87% engagement rate"
    }
  ];

  return (
    <>
      <NavbarBeforeLogin />
      
      {/* Hero Section */}
      <Box bg="brand.50" py={[10, 20]}>
        <Container maxW="container.lg">
          <Flex direction={["column", "row"]} align="center">
            <Box flex={1} pr={[0, 10]} mb={[8, 0]}>
              <Heading as="h1" size="2xl" mb={6} color="brand.800">
                Our Video Products
              </Heading>
              <Text fontSize="xl" mb={8}>
                Professionally crafted video solutions designed to showcase your brand, 
                products, and events in their best light.
              </Text>
              <Button 
                colorScheme="brand" 
                size="lg" 
                as="a" 
                href="https://wa.me/+2348108439416" 
                target="_blank"
                rightIcon={<FaPlay />}
              >
                See Demo Reel
              </Button>
            </Box>
            <Box flex={1}>
              <Image 
                src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Video editing workstation" 
                borderRadius="lg"
                shadow="lg"
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Featured Products */}
      <Box py={[10, 20]} bg="white">
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={2} textAlign="center" color="brand.800">
            Our Signature Products
          </Heading>
          <Text fontSize="lg" mb={10} textAlign="center" color="gray.600">
            Tailored video solutions for every need
          </Text>
          
          <Grid templateColumns={["1fr", "1fr", "1fr 1fr 1fr"]} gap={8}>
            {featuredProducts.map((product) => (
              <GridItem key={product.id}>
                <Box 
                  borderWidth="1px" 
                  borderColor="gray.200"
                  borderRadius="lg" 
                  overflow="hidden"
                  bg="white"
                  shadow="md"
                  _hover={{
                    shadow: "lg",
                    transform: "translateY(-5px)"
                  }}
                  transition="all 0.3s"
                  h="100%"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    height="200px"
                    width="100%"
                    objectFit="cover"
                  />
                  
                  <Box p={6}>
                    <Flex justify="space-between" mb={4}>
                      <Heading as="h3" size="lg" color="brand.700">
                        {product.name}
                      </Heading>
                      <Badge colorScheme="green" alignSelf="flex-start">
                        {product.price}
                      </Badge>
                    </Flex>
                    
                    <Text color="gray.600" mb={6}>
                      {product.description}
                    </Text>
                    
                    <Box mb={6}>
                      <Heading as="h4" size="sm" mb={3} color="brand.600">
                        Key Features:
                      </Heading>
                      <List spacing={2}>
                        {product.features.map((feature, i) => (
                          <ListItem key={i} display="flex">
                            <ListIcon as={CheckCircleIcon} color="brand.500" mt={1} />
                            <Text>{feature}</Text>
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                    
                    <Flex justify="space-between" mb={6}>
                      <Box>
                        <Text fontSize="sm" color="gray.500">Delivery Time</Text>
                        <Flex align="center">
                          <Icon as={FaRegClock} mr={2} color="brand.500" />
                          <Text fontWeight="medium">{product.deliveryTime}</Text>
                        </Flex>
                      </Box>
                      <Box>
                        <Text fontSize="sm" color="gray.500">Best For</Text>
                        <Text fontWeight="medium">{product.bestFor.join(", ")}</Text>
                      </Box>
                    </Flex>
                    
                    <Button 
                      colorScheme="brand" 
                      size="lg" 
                      w="full"
                      rightIcon={<FaMagic />}
                    >
                      Customize This Product
                    </Button>
                  </Box>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Success Stories */}
      <Box py={[10, 20]} bg="brand.50">
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={2} textAlign="center" color="brand.800">
            Success Stories
          </Heading>
          <Text fontSize="lg" mb={10} textAlign="center" color="gray.600">
            See how our products have helped clients achieve their goals
          </Text>
          
          <Grid templateColumns={["1fr", "1fr", "1fr 1fr"]} gap={8}>
            {successStories.map((story) => (
              <GridItem key={story.id}>
                <Box 
                  bg="white" 
                  borderRadius="lg" 
                  overflow="hidden"
                  shadow="md"
                  h="100%"
                >
                  <Image
                    src={story.image}
                    alt={story.title}
                    height="200px"
                    width="100%"
                    objectFit="cover"
                  />
                  
                  <Box p={6}>
                    <Badge colorScheme="purple" mb={2}>
                      Case Study
                    </Badge>
                    <Heading as="h3" size="lg" mb={3} color="brand.700">
                      {story.title}
                    </Heading>
                    <Text color="gray.600" mb={4}>
                      {story.description}
                    </Text>
                    <Flex align="center">
                      <Icon as={FaMobileAlt} mr={2} color="brand.500" />
                      <Text fontWeight="medium">{story.stats}</Text>
                    </Flex>
                    
                    <Button 
                      mt={6}
                      variant="outline" 
                      colorScheme="brand"
                      size="sm"
                    >
                      Read Full Story
                    </Button>
                  </Box>
                </Box>
              </GridItem>
            ))}
            
            <GridItem>
              <Box 
                bg="brand.100" 
                borderRadius="lg" 
                p={8}
                h="100%"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                textAlign="center"
              >
                <Heading as="h3" size="lg" mb={4} color="brand.700">
                  Your Story Could Be Next
                </Heading>
                <Text color="gray.600" mb={6}>
                  Let us help you create video content that drives results and tells your unique story.
                </Text>
                <Button 
                  colorScheme="brand" 
                  size="lg"
                  alignSelf="center"
                >
                  Start Your Project
                </Button>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* How It Works */}
      <Box py={[10, 20]} bg="white">
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10} textAlign="center" color="brand.800">
            How Our Products Work
          </Heading>
          
          <Grid templateColumns={["1fr", "1fr", "repeat(4, 1fr)"]} gap={6}>
            {[
              {
                step: "1",
                title: "Choose Your Product",
                description: "Select from our range of video products or request a custom solution"
              },
              {
                step: "2",
                title: "Share Your Materials",
                description: "Send us your footage, images, and brand assets via our secure portal"
              },
              {
                step: "3",
                title: "Creative Development",
                description: "Our team crafts your video with your brand identity and goals in mind"
              },
              {
                step: "4",
                title: "Review & Delivery",
                description: "Receive your polished video ready for publishing on any platform"
              }
            ].map((item) => (
              <GridItem key={item.step}>
                <Box 
                  bg="brand.50" 
                  p={6} 
                  borderRadius="lg" 
                  textAlign="center"
                  h="100%"
                >
                  <Flex
                    justify="center"
                    align="center"
                    w={12}
                    h={12}
                    bg="brand.500"
                    color="white"
                    borderRadius="full"
                    fontSize="xl"
                    fontWeight="bold"
                    mb={4}
                    mx="auto"
                  >
                    {item.step}
                  </Flex>
                  <Heading as="h3" size="md" mb={3} color="brand.700">
                    {item.title}
                  </Heading>
                  <Text color="gray.600">{item.description}</Text>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Final CTA */}
      <Box py={16} bg="brand.800" color="white">
        <Container maxW="container.lg" textAlign="center">
          <Heading as="h2" size="xl" mb={6}>
            Ready to Bring Your Story to Life?
          </Heading>
          <Text fontSize="xl" mb={8} maxW="2xl" mx="auto">
            Our video products are designed to showcase your brand in the best possible light. 
            Let's create something amazing together.
          </Text>
          <Stack direction={["column", "row"]} spacing={4} justify="center">
            <Button 
              colorScheme="brand" 
              size="lg" 
              as="a" 
              href="https://wa.me/+2348108439416" 
              target="_blank"
              rightIcon={<FaPlay />}
            >
              Get Started
            </Button>
            <Button 
              colorScheme="whiteAlpha" 
              size="lg" 
              variant="outline"
            >
              View Full Portfolio
            </Button>
          </Stack>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default Products;