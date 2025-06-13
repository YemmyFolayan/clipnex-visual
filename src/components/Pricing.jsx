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
  Badge
} from "@chakra-ui/react";
import { CheckCircleIcon, StarIcon } from "@chakra-ui/icons";
import NavbarBeforeLogin from "./NavbarBeforeLogin";
import Footer from "./Footer";

const Pricing = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Sample video thumbnails for each service
  const serviceExamples = {
    eventVideography: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    ],
    corporateEditing: [
      "https://images.unsplash.com/photo-1579869847557-1f67382cc158?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    ]
  };

  const pricingPlans = [
    {
      name: "Starter",
      price: "₦50,000",
      period: "month",
      description: "Perfect for individuals and small businesses getting started",
      features: [
        "3 video edits per month",
        "Up to 1 minute per video",
        "1 revision per video",
        "48-hour turnaround time",
        "Social media optimization"
      ],
      mostPopular: false,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Professional",
      price: "₦120,000",
      period: "month",
      description: "Ideal for growing businesses and content creators",
      features: [
        "10 video edits per month",
        "Up to 3 minutes per video",
        "2 revisions per video",
        "24-hour turnaround time",
        "Social media optimization",
        "Basic motion graphics"
      ],
      mostPopular: false,
      image: "https://images.unsplash.com/photo-1579869847557-1f67382cc158?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Enterprise",
      price: "₦200,000",
      period: "month",
      description: "For businesses with high-volume video needs",
      features: [
        "20 video edits per month",
        "Up to 5 minutes per video",
        "Unlimited revisions",
        "12-hour rush service available",
        "Social media optimization",
        "Advanced motion graphics",
        "Dedicated editor",
        "Priority support"
      ],
      mostPopular: false,
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const addOnServices = [
    {
      name: "Voiceover",
      price: "₦5,000",
      description: "Professional voice narration for your videos",
      details: "Native English speaker, multiple takes included"
    },
    {
      name: "Scriptwriting",
      price: "₦10,000",
      description: "Engaging scripts for your video content",
      details: "Includes research and 2 revisions"
    },
    {
      name: "Drone Footage",
      price: "₦25,000",
      description: "Aerial shots to elevate your production",
      details: "Includes 30 minutes of flight time and basic editing"
    },
    {
      name: "Same-Day Delivery",
      price: "₦15,000",
      description: "Get your videos within 24 hours",
      details: "For urgent projects (additional charges may apply)"
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
                Transparent Pricing
              </Heading>
              <Text fontSize="xl" mb={8}>
                Professional video editing services tailored to your budget and needs.
                No hidden fees, just exceptional value.
              </Text>
              <Button 
                colorScheme="brand" 
                size="lg" 
                as="a" 
                href="https://wa.me/+2348108439416" 
                target="_blank"
              >
                Get Custom Quote
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

      {/* Pricing Plans Section */}
      <Box py={[10, 20]} bg="white">
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={2} textAlign="center" color="brand.800">
            Choose Your Plan
          </Heading>
          <Text fontSize="lg" mb={10} textAlign="center" color="gray.600">
            Flexible options for every budget and requirement
          </Text>
          
          <Grid templateColumns={["1fr", "1fr", "1fr 1fr 1fr"]} gap={8}>
            {pricingPlans.map((plan, index) => (
              <GridItem key={index}>
                <Box 
                  borderWidth="1px" 
                  borderColor={plan.mostPopular ? "brand.400" : "gray.200"}
                  borderRadius="lg" 
                  p={6}
                  position="relative"
                  bg="white"
                  shadow={plan.mostPopular ? "xl" : "md"}
                  transform={plan.mostPopular ? "scale(1.02)" : "scale(1)"}
                  zIndex={plan.mostPopular ? 1 : 0}
                  _hover={{
                    shadow: "lg",
                    transform: "translateY(-5px)"
                  }}
                  transition="all 0.3s"
                >
                 
                  <Flex direction="column" h="100%">
                    <Image
                      src={plan.image}
                      alt={plan.name}
                      mb={6}
                      borderRadius="md"
                      height="160px"
                      objectFit="cover"
                    />
                    
                    <Heading as="h3" size="lg" mb={2} color="brand.700">
                      {plan.name}
                    </Heading>
                    
                    <Flex align="flex-end" mb={4}>
                      <Text fontSize="3xl" fontWeight="bold" color="brand.600">
                        {plan.price}
                      </Text>
                      <Text fontSize="md" color="gray.500" ml={1}>
                        /{plan.period}
                      </Text>
                    </Flex>
                    
                    <Text color="gray.600" mb={6}>
                      {plan.description}
                    </Text>
                    
                    <List spacing={3} mb={8} flex="1">
                      {plan.features.map((feature, i) => (
                        <ListItem key={i} display="flex">
                          <ListIcon as={CheckCircleIcon} color="brand.500" mt={1} />
                          <Text>{feature}</Text>
                        </ListItem>
                      ))}
                    </List>
                    
                    <Button 
                      colorScheme={plan.mostPopular ? "brand" : "gray"} 
                      size="lg" 
                      w="full"
                      mt="auto"
                    >
                      Select Plan
                    </Button>
                  </Flex>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Add-On Services */}
      <Box py={[10, 20]} bg="brand.50">
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={2} textAlign="center" color="brand.800">
            Add-On Services
          </Heading>
          <Text fontSize="lg" mb={10} textAlign="center" color="gray.600">
            Enhance your videos with these premium options
          </Text>
          
          <Grid templateColumns={["1fr", "1fr", "1fr 1fr"]} gap={8}>
            {addOnServices.map((service, index) => (
              <GridItem key={index}>
                <Box 
                  bg="white" 
                  p={6} 
                  borderRadius="lg" 
                  shadow="md"
                  h="100%"
                  _hover={{
                    shadow: "lg",
                    transform: "translateY(-3px)"
                  }}
                  transition="all 0.2s"
                >
                  <Flex direction="column" h="100%">
                    <Flex justify="space-between" mb={4}>
                      <Heading as="h3" size="md" color="brand.700">
                        {service.name}
                      </Heading>
                      <Badge colorScheme="green" fontSize="md" px={2}>
                        {service.price}
                      </Badge>
                    </Flex>
                    
                    <Text color="gray.600" mb={4}>
                      {service.description}
                    </Text>
                    
                    <Text fontSize="sm" color="gray.500" mb={6}>
                      {service.details}
                    </Text>
                    
                    <Button 
                      colorScheme="brand" 
                      variant="outline" 
                      size="md" 
                      mt="auto"
                      w="full"
                    >
                      Add to Plan
                    </Button>
                  </Flex>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Service Examples Section */}
      <Box py={[10, 20]} bg="white">
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10} textAlign="center" color="brand.800">
            See What You'll Get
          </Heading>
          
          <Grid templateColumns={["1fr", "1fr", "1fr 1fr"]} gap={10} mb={10}>
            <Box>
              <Heading as="h3" size="lg" mb={6} color="brand.700">
                Event Videography Examples
              </Heading>
              <Grid templateColumns="1fr 1fr" gap={4}>
                {serviceExamples.eventVideography.map((img, i) => (
                  <GridItem key={i}>
                    <Image
                      src={img}
                      alt={`Event videography example ${i+1}`}
                      borderRadius="md"
                      shadow="md"
                    />
                  </GridItem>
                ))}
              </Grid>
              <Text mt={4} color="gray.600">
                Our event packages include cinematic coverage, highlight reels, and social media edits.
              </Text>
            </Box>
            
            <Box>
              <Heading as="h3" size="lg" mb={6} color="brand.700">
                Corporate Editing Examples
              </Heading>
              <Grid templateColumns="1fr 1fr" gap={4}>
                {serviceExamples.corporateEditing.map((img, i) => (
                  <GridItem key={i}>
                    <Image
                      src={img}
                      alt={`Corporate editing example ${i+1}`}
                      borderRadius="md"
                      shadow="md"
                    />
                  </GridItem>
                ))}
              </Grid>
              <Text mt={4} color="gray.600">
                Professional edits for testimonials, product showcases, and brand storytelling.
              </Text>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Money-Back Guarantee */}
      <Box py={[10, 20]} bg="brand.50">
        <Container maxW="container.lg">
          <Flex direction={["column", "row"]} align="center">
            <Box flex={1} pr={[0, 10]} mb={[8, 0]}>
              <Flex align="center" mb={4}>
                <StarIcon color="brand.500" boxSize={6} mr={2} />
                <Heading as="h2" size="xl" color="brand.800">
                  Satisfaction Guarantee
                </Heading>
              </Flex>
              <Text fontSize="lg" mb={6}>
                We stand behind our work with a 100% satisfaction guarantee. If you're not happy with your first edit, we'll redo it for free or give you your money back.
              </Text>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="brand.500" mt={1} />
                  <Text>No-risk trial for first-time clients</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="brand.500" mt={1} />
                  <Text>Unlimited revisions on select plans</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="brand.500" mt={1} />
                  <Text>Dedicated support for all customers</Text>
                </ListItem>
              </List>
            </Box>
            <Box flex={1}>
              <Image 
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Happy client" 
                borderRadius="lg"
                shadow="lg"
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box py={[10, 20]} bg="white">
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10} textAlign="center" color="brand.800">
            Frequently Asked Questions
          </Heading>
          
          <Grid templateColumns={["1fr", "1fr", "1fr 1fr"]} gap={10}>
            {[
              {
                question: "What's included in a video edit?",
                answer: "Each edit includes color correction, audio enhancement, basic transitions, and format optimization for your chosen platform."
              },
              {
                question: "How do I send you my footage?",
                answer: "We accept files via Google Drive, Dropbox, or WeTransfer. Large projects may require cloud storage links."
              },
              {
                question: "What's your turnaround time?",
                answer: "Standard turnaround is 48 hours. Rush services (12-24 hours) are available for an additional fee."
              },
              {
                question: "Can I cancel my subscription?",
                answer: "Yes, you can cancel anytime. Unused edits don't roll over to the next month."
              },
              {
                question: "Do you offer discounts for long-term contracts?",
                answer: "Yes! We offer 10% off 3-month commitments and 15% off 6-month commitments."
              },
              {
                question: "What file formats do you deliver?",
                answer: "We provide MP4 files by default but can deliver in any format you need (MOV, AVI, etc.)."
              }
            ].map((faq, index) => (
              <GridItem key={index}>
                <Box 
                  borderBottomWidth="1px" 
                  borderColor="gray.200" 
                  pb={6}
                >
                  <Heading as="h3" size="md" mb={2} color="brand.700">
                    {faq.question}
                  </Heading>
                  <Text color="gray.600">{faq.answer}</Text>
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
            Ready to Transform Your Content?
          </Heading>
          <Text fontSize="xl" mb={8} maxW="2xl" mx="auto">
            Choose a plan or contact us for custom solutions. We're here to help you create stunning videos that get results.
          </Text>
          <Stack direction={["column", "row"]} spacing={4} justify="center">
            <Button 
              colorScheme="brand" 
              size="lg" 
              as="a" 
              href="https://wa.me/+2348108439416" 
              target="_blank"
            >
              WhatsApp Us
            </Button>
            <Button 
              colorScheme="whiteAlpha" 
              size="lg" 
              variant="outline"
            >
              View Portfolio
            </Button>
          </Stack>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default Pricing;