import { Container, Text, VStack } from "@chakra-ui/react";

const Products = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Product Listing</Text>
        <Text>Here you can browse all our products.</Text>
      </VStack>
    </Container>
  );
};

export default Products;