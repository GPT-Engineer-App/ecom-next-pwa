import { Container, Text, VStack, Heading, Button, Box, Image } from "@chakra-ui/react";
import { FaRocket, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Our Website
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Discover amazing content and get started with our services.
        </Text>
        <Box boxSize="sm">
          <Image src="/images/hero-image.jpg" alt="Hero Image" borderRadius="md" />
        </Box>
        <VStack spacing={4} direction="row">
          <Button leftIcon={<FaRocket />} colorScheme="teal" size="lg">
            Get Started
          </Button>
          <Button leftIcon={<FaInfoCircle />} colorScheme="blue" size="lg">
            Learn More
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;