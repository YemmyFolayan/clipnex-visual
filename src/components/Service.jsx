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
  useBreakpointValue
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import NavbarBeforeLogin from "./NavbarBeforeLogin";
import Footer from "./Footer";

const Service = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const services = [
    {
      category: "EVENT VIDEOGRAPHY",
      items: [
        "Highlight Reels – Relive the magic in under 60 seconds",
        "Cinematic Event Coverage – For birthdays, bridal showers, conferences, and corporate events",
        "Behind-The-Scenes (BTS) Clips – Perfect for social media storytelling",
        "Social Media Edits – Instagram Reels, TikTok Snippets, and Status-ready videos",
        "Same-Day Edits – Quick turnarounds for that instant wow!"
      ]
    },
    {
      category: "CORPORATE AND COMMERCIAL EDITING",
      items: [
        "Promo/Ad Videos – For products, services, and launches",
        "Customer Testimonial Videos – Build trust with real voices",
        "Brand Storytelling – Let the world know who you are and why you do it",
        "Product Unboxing & Showcases – Eye-catching, mobile-first product demos",
        "Business Behind-the-Scenes – Build connection and community with raw, real footage"
      ]
    },
    {
      category: "BASIC SERVICES",
      items: [
        "Short-form Reels & TikToks",
        "YouTube Video Editing",
        "Wedding & Event Highlights",
        "Brand Videos & Trailers",
        "Product & Service Promos"
      ]
    },
    {
      category: "ADD-ONS",
      items: [
        "Voiceovers",
        "Scriptwriting",
        "Ads Production",
        "Drone Piloting"
      ]
    }
  ];

  const whyChooseUs = [
    "100% Mobile Production – Agile, fast, and budget-friendly",
    "Social-Media-First – We edit with platforms like Instagram, TikTok, and WhatsApp in mind",
    "Affordable Packages – Professional quality without breaking the bank",
    "Creative Direction Included – We help you plan, script, and shine!"
  ];

  const perfectFor = [
    "Event Planners, Small Business Owners & Hosts",
    
    "Startups & Creatives",
    "Restaurants, Boutiques, Beauty Brands",
    "Personal Brands & Influencers",
    
  ];

  const packages = [
    {
      name: "Starter Pack",
      details: "3 reels/month",
      price: "₦50,000"
    },
    {
      name: "Pro Pack",
      details: "10 reels/month",
      price: "₦120,000"
    },
    {
      name: "Corporate Pack",
      details: "4 video edits/month",
      price: "₦200,000"
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
                OUR SERVICES
              </Heading>
              <Text fontSize="xl" mb={8}>
                We transform raw footage into powerful content—perfect for social media, 
                YouTube, branding, and events.
              </Text>
              <Button 
                colorScheme="brand" 
                size="lg" 
                as="a" 
                href="https://wa.me/+2348108439416" 
                target="_blank"
              >
                Book a Service
              </Button>
            </Box>
            <Box flex={1}>
              <Image 
                src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Video production" 
                borderRadius="lg"
                shadow="lg"
              />
            </Box>
          </Flex>
        </Container>
      </Box>

     {/* Services Section */}
<Box py={[10, 20]} bg="white">
  <Container maxW="container.lg">
    <Grid templateColumns={["1fr", "1fr", "1fr 1fr"]} gap={10}>
      {services.map((service, index) => (
        <GridItem key={index}>
          <Box 
            bg="brand.50" 
            p={6} 
            borderRadius="lg" 
            h="100%"
            textAlign="left" // Ensure all content is left-aligned
          >
            <Heading 
              as="h3" 
              size="lg" 
              mb={4} 
              color="brand.700"
              textAlign="left" // Explicit left-align for heading
            >
              {service.category}
            </Heading>
            <List spacing={3} textAlign="left">
              {service.items.map((item, i) => (
                <ListItem 
                  key={i}
                  display="flex"
                  alignItems="flex-start" // Align items to top
                  textAlign="left"
                >
                  <ListIcon 
                    as={CheckCircleIcon} 
                    color="brand.500" 
                    mt={1} // Adjust icon alignment
                  />
                  <Box as="span" textAlign="left">
                    {item}
                  </Box>
                </ListItem>
              ))}
            </List>
          </Box>
        </GridItem>
      ))}
    </Grid>
  </Container>
</Box>

  {/* Why Choose Us Section */}
<Box py={[10, 20]} bg="brand.50">
  <Container maxW="container.lg">
    <Heading as="h2" size="xl" mb={10} textAlign="center" color="brand.800">
      WHY CHOOSE US?
    </Heading>
    
    <Grid templateColumns={["1fr", "1fr", "1fr 1fr"]} gap={8}>
      <Box textAlign="left"> {/* Left-align container */}
        <List spacing={4} textAlign="left">
          {whyChooseUs.map((item, index) => (
            <ListItem 
              key={index} 
              fontSize="lg"
              display="flex"
              alignItems="flex-start"
              textAlign="left"
            >
              <ListIcon 
                as={CheckCircleIcon} 
                color="brand.500" 
                mt={1} /* Adjust icon alignment */
              />
              <Box as="span" textAlign="left">
                {item}
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box textAlign="left"> {/* Left-align container */}
        <Heading 
          as="h3" 
          size="md" 
          mb={4} 
          color="brand.700"
          textAlign="left" /* Left-align heading */
        >
          PERFECT FOR:
        </Heading>
        <Flex wrap="wrap" justify="flex-start"> {/* Left-align flex items */}
          {perfectFor.map((item, index) => (
            <Box 
              key={index} 
              bg="white" 
              px={4} 
              py={2} 
              m={1} 
              borderRadius="full" 
              shadow="sm"
              textAlign="left"
            >
              {item}
            </Box>
          ))}
        </Flex>
      </Box>
    </Grid>
  </Container>
</Box>
      {/* Packages Section */}
      <Box py={[10, 20]} bg="white">
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10} textAlign="center" color="brand.800">
            OUR PACKAGES
          </Heading>
          
          <Grid templateColumns={["1fr", "1fr", "1fr 1fr 1fr"]} gap={8}>
            {packages.map((pkg, index) => (
              <GridItem key={index}>
                <Box 
                  borderWidth="1px" 
                  borderColor="brand.200" 
                  borderRadius="lg" 
                  p={6}
                  textAlign="center"
                  transition="all 0.3s"
                  _hover={{
                    transform: "translateY(-5px)",
                    shadow: "lg"
                  }}
                >
                  <Heading as="h3" size="lg" mb={4} color="brand.700">
                    {pkg.name}
                  </Heading>
                  <Text fontSize="xl" mb={6}>
                    {pkg.details}
                  </Text>
                  <Text fontSize="2xl" fontWeight="bold" color="brand.600" mb={6}>
                    {pkg.price}
                  </Text>
                  <Button colorScheme="brand" size="lg" w="full">
                    Get Started
                  </Button>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Our Process Section */}
      <Box py={[10, 20]} bg="brand.50">
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10} textAlign="center" color="brand.800">
            OUR PROCESS
          </Heading>
          
          <Grid templateColumns={["1fr", "1fr", "repeat(4, 1fr)"]} gap={6}>
            {[
              {
                title: "1. Consultation",
                description: "We discuss your vision and requirements"
              },
              {
                title: "2. Footage Submission",
                description: "You send us your raw footage via Google Drive or WeTransfer"
              },
              {
                title: "3. Editing",
                description: "Our team crafts your perfect video"
              },
              {
                title: "4. Delivery",
                description: "Receive your polished, social-ready content"
              }
            ].map((step, index) => (
              <GridItem key={index}>
                <Box 
                  bg="white" 
                  p={6} 
                  borderRadius="lg" 
                  textAlign="center"
                  h="100%"
                >
                  <Text fontSize="xl" fontWeight="bold" mb={3} color="brand.600">
                    {step.title}
                  </Text>
                  <Text>{step.description}</Text>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Tool Stack Section */}
      <Box py={[10, 20]} bg="white">
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10} textAlign="center" color="brand.800">
            OUR TOOL STACK
          </Heading>
          
          <Grid templateColumns={["1fr", "1fr", "repeat(3, 1fr)"]} gap={8}>
            {[
              {
                category: "Project Management",
                tools: ["Trello", "Notion", "ClickUp"]
              },
              {
                category: "Communication",
                tools: ["Slack", "WhatsApp Business"]
              },
              {
                category: "Cloud Storage",
                tools: ["Google Drive", "Dropbox"]
              },
              {
                category: "Payment",
                tools: ["PayPal", "Paystack", "Wise", "Stripe"]
              },
              {
                category: "File Transfer",
                tools: ["WeTransfer", "Frame.io"]
              },
              {
                category: "CRM",
                tools: ["Airtable", "HubSpot"]
              }
            ].map((item, index) => (
              <GridItem key={index}>
                <Box 
                  borderWidth="1px" 
                  borderColor="brand.200" 
                  borderRadius="lg" 
                  p={6}
                  h="100%"
                >
                  <Heading as="h3" size="md" mb={4} color="brand.700">
                    {item.category}
                  </Heading>
                  <Stack spacing={2}>
                    {item.tools.map((tool, i) => (
                      <Text key={i}>• {tool}</Text>
                    ))}
                  </Stack>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box py={16} bg="brand.800" color="white">
        <Container maxW="container.lg" textAlign="center">
          <Heading as="h2" size="xl" mb={6}>
            Ready to elevate your video content?
          </Heading>
          <Text fontSize="xl" mb={8} maxW="2xl" mx="auto">
            Let's create something amazing together. Get in touch to discuss your project needs.
          </Text>
          <Button 
            colorScheme="whiteAlpha" 
            size="lg" 
            as="a" 
            href="https://wa.me/+2348108439416" 
            target="_blank"
          >
            Contact Us Now
          </Button>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default Service;