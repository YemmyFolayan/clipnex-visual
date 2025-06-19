import React from "react";
import {
  Box,
  Flex,
  Image,
  Button,
  Stack,
  Grid,
  GridItem,
  Text,
  Heading,
  Container,

} from "@chakra-ui/react";
import NavbarBeforeLogin from "./NavbarBeforeLogin";
import Footer from "./Footer";
import ceo1 from '../images/ceo1.jpeg'

const About = () => {
  return (
    <>
      <NavbarBeforeLogin />
      
      {/* Hero Section */}
      <Box bg="brand.50" py={20}>
        <Container maxW="container.lg">
          <Flex direction={["column", "column", "row"]} align="center">
            <Box flex={1} pr={[0, 0, 10]}>
              <Heading as="h1" size="2xl" mb={6} color="brand.800">
                Clipnex Visuals
              </Heading>
              <Text fontSize="xl" mb={8} color="gray.600">
                Bringing your events and business stories to life through stunning mobile videos
              </Text>
              <Button 
                colorScheme="brand" 
                size="lg" 
                as="a" 
                href="https://wa.me/+2348108439416" 
                target="_blank"
              >
                Book Us
              </Button>
            </Box>
            <Box flex={1} mt={[8, 8, 0]}>
              <Image 
                src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Video production team" 
                borderRadius="lg"
                shadow="lg"
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* CEO Section */}
      <Box py={20} bg="white">
        <Container maxW="container.lg">
          <Flex direction={["column", "column", "row"]} align="center">
            <Box flex={1} pr={[0, 0, 10]} mb={[8, 8, 0]}>
              <Image 
                src={ceo1} 
                alt="CEO Profile" 
                borderRadius="full"
                boxSize="400px"
                objectFit="cover"
                mx="auto"
              />
            </Box>
            <Box flex={2}>
              <Heading as="h2" size="xl" mb={6} color="brand.800">
                Founder & CEO
              </Heading>
             <Heading as="h3" size="md" mb={3} color="brand.700">
                Folayan Ifeoluwa Omoniyi
              </Heading>
              <Text fontSize="lg" mb={6} lineHeight="tall">
                As the founder of Clipnex Visuals, I position myself as the strategist and visionary behind our operations. 
                My role encompasses building our company structure, sourcing exceptional talent, attracting clients, 
                and overseeing service delivery.
              </Text>
              <Text fontSize="lg" mb={6} lineHeight="tall">
                I focus on three core areas: <strong>client acquisition</strong>, <strong>project management</strong>, 
                and <strong>quality control</strong>. This strategic approach allows me to ensure every project meets 
                our high standards while maintaining client satisfaction.
              </Text>
              <Text fontSize="lg" lineHeight="tall">
                Rather than being involved in the day-to-day editing, I concentrate on the bigger picture - 
                growing our business, developing our team, and delivering exceptional value to our clients.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Company Overview */}
      <Box py={20} bg="brand.50">
        <Container maxW="container.lg">
          <Box textAlign="center" mb={16}>
            <Heading as="h2" size="xl" mb={4} color="brand.800">
              Our Company
            </Heading>
            <Text fontSize="lg" maxW="2xl" mx="auto">
              Specializing in mobile video production that captivates and converts
            </Text>
          </Box>

          <Grid templateColumns={["1fr", "1fr", "1fr 1fr"]} gap={10}>
            <GridItem>
              <Box bg="white" p={8} borderRadius="lg" shadow="md" h="100%">
                <Heading as="h3" size="lg" mb={4} color="brand.700">
                  What We Do
                </Heading>
                <Text mb={4}>
                  We create stunning mobile videos that bring your events and business stories to life. 
                  Our services include:
                </Text>
                <Stack spacing={3}>
                  <Text>✓ Event highlight reels and cinematic coverage</Text>
                  <Text>✓ Behind-the-scenes clips and brand storytelling</Text>
                  <Text>✓ Scroll-stopping promotional videos</Text>
                  <Text>✓ Product showcases and customer testimonials</Text>
                  <Text>✓ Fast, social-media-ready content</Text>
                </Stack>
              </Box>
            </GridItem>
            
            <GridItem>
              <Box bg="white" p={8} borderRadius="lg" shadow="md" h="100%">
                <Heading as="h3" size="lg" mb={4} color="brand.700">
                  Our Vision
                </Heading>
                <Text mb={4}>
                  To become the go-to mobile video editing partner for content creators, 
                  SMEs, and event planners across Southwest Nigeria.
                </Text>
                <Text>
                  We aim to grow into a multifaceted agency offering a range of digital 
                  services, including video editing and production catering to a diverse 
                  clientele across Africa.
                </Text>
              </Box>
            </GridItem>
            
            <GridItem>
              <Box bg="white" p={8} borderRadius="lg" shadow="md" h="100%">
                <Heading as="h3" size="lg" mb={4} color="brand.700">
                  Business Model
                </Heading>
                <Text mb={4} fontWeight="bold">
                  100% service-based mobile videography and editing services
                </Text>
                <Text mb={4}>
                  We serve events, brands, startups, realtors, influencers, YouTubers and more. 
                  Clients send raw footage via Google Drive or WeTransfer, and our team edits remotely.
                </Text>
              </Box>
            </GridItem>
            
            <GridItem>
              <Box bg="white" p={8} borderRadius="lg" shadow="md" h="100%">
                <Heading as="h3" size="lg" mb={4} color="brand.700">
                  Delivery Model
                </Heading>
                <Text mb={4}>
                  Our fully remote operation allows editors to work from anywhere while clients 
                  conveniently upload content from their location.
                </Text>
                <Text fontWeight="bold">
                  We specialize in creating fast, social-ready content - all from the palm of our hands.
                </Text>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
      <Box py={20} bg="white">
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={12} textAlign="center" color="brand.800">
            Our Values
          </Heading>
          
          <Grid templateColumns={["1fr", "1fr", "1fr 1fr 1fr"]} gap={8}>
            {[
              {
                title: "Creativity",
                description: "We approach every project with fresh eyes, delivering unique perspectives that make your content stand out."
              },
              {
                title: "Efficiency",
                description: "Our streamlined process ensures quick turnaround times without compromising quality."
              },
              {
                title: "Collaboration",
                description: "We work closely with clients to understand their vision and bring it to life."
              },
              {
                title: "Innovation",
                description: "Constantly exploring new techniques to keep your content ahead of the curve."
              },
              {
                title: "Reliability",
                description: "Consistent quality and dependable service you can count on every time."
              },
              {
                title: "Passion",
                description: "We love what we do, and it shows in every frame we create."
              }
            ].map((value, index) => (
              <GridItem key={index}>
                <Box 
                  p={6} 
                  borderWidth="1px" 
                  borderColor="brand.200" 
                  borderRadius="lg" 
                  bg="brand.50"
                  h="100%"
                >
                  <Heading as="h3" size="md" mb={3} color="brand.700">
                    {value.title}
                  </Heading>
                  <Text>{value.description}</Text>
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
            Ready to bring your story to life?
          </Heading>
          <Text fontSize="xl" mb={8} maxW="2xl" mx="auto">
            Let's create something amazing together. Get in touch to discuss your next project.
          </Text>
          <Button 
            colorScheme="whiteAlpha" 
            size="lg" 
            as="a" 
            href="https://wa.me/+2348108439416" 
            target="_blank"
          >
            Contact Us
          </Button>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default About;