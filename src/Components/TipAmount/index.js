import { Box, Text, Img } from "@chakra-ui/react";
import { resultDisplaySize } from "../TipCalculatorFunctions";

export function TipAmount({ total }) {
  return (
    <Box
      fontFamily="Space Mono"
      display="flex"
      flexDirection="row"
      height="46px"
    >
      <Box w="33%">
        <Text fontSize="15px" color="white">
          Tip Amount
        </Text>
        <Text fontSize="12px" color="#7F9C9F">
          / person{" "}
        </Text>
      </Box>
      <Box
        w="66%"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Img src="icon-dollar-green.svg" alt="Dollar sign" height="30px" />
        <Text color="#20A291" fontSize={resultDisplaySize(total)}>
          {!total ? "0.00" : total}
        </Text>
      </Box>
    </Box>
  );
}
