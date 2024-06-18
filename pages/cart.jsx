import { Container, Text, VStack } from "@chakra-ui/react";

const Cart = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Shopping Cart</Text>
        <Text>Your selected items will appear here.</Text>
      </VStack>
    </Container>
  );
};

export default Cart;