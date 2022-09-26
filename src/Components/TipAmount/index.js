import { Box, Text, Img } from "@chakra-ui/react";
import greenDollar from "../Images/icon-dollar-green.png";

export function TipAmount({ total }) {
  return (
    <Box
      fontFamily="Space Mono"
      display="flex"
      flexDirection="row"
      height="46px"
    >
      <Box w="33%">
        <Text fontSize={{ base: "13px", md: "15px", lg: "15px" }} color="white">
          Tip Amount
        </Text>
        <Text fontSize="12px" color="#7F9C9F">
          / person
        </Text>
      </Box>
      <Box
        w="66%"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Img
          src={greenDollar}
          alt="Dollar sign"
          height={{ base: "20px", md: "30px", lg: "30px" }}
        />
        <Text
          color="#20A291"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          fontSize={{ base: "30px", md: "45px", lg: "40px" }}
        >
          {!total ? "0.00" : total}
        </Text>
      </Box>
    </Box>
  );
}
