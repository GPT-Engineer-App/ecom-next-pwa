import { useRouter } from 'next/router';
import { Container, Text, VStack } from "@chakra-ui/react";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Product Detail</Text>
        <Text>Details for product ID: {id}</Text>
      </VStack>
    </Container>
  );
};

export default ProductDetail;