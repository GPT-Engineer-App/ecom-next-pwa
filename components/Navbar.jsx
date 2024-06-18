import { Box, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <Box bg="brand.700" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <NextLink href="/" passHref>
            <Link color="white" fontSize="lg" fontWeight="bold">Home</Link>
          </NextLink>
        </Box>
        <Box>
          <NextLink href="/products" passHref>
            <Link color="white" mx={2}>Products</Link>
          </NextLink>
          <NextLink href="/cart" passHref>
            <Link color="white" mx={2}>Cart</Link>
          </NextLink>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;