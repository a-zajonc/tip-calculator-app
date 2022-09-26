import { Box, Text, Img } from "@chakra-ui/react";
import { resultDisplaySize } from "../TipCalculatorFunctions";
import { greenDollar } from "../Images";

export function TotalAmount({ total }) {
  return (
    <Box
      fontFamily="Space Mono"
      display="flex"
      flexDirection="row"
      height="46px"
    >
      <Box w="33%">
        <Text fontSize="15px" color="white">
          Total
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
        <Img src={greenDollar} alt="Dollar sign" height="30px" />
        <Text
          fontSize={{
            base: "26px",
            md: resultDisplaySize(total),
            lg: resultDisplaySize(total),
          }}
          color="#20A291"
        >
          {!total ? "0.00" : total}
        </Text>
      </Box>
    </Box>
  );
}
