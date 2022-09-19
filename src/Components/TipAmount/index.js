import { Box, Text, Img} from "@chakra-ui/react";

export function TipAmount() {
    return  <Box  fontFamily="Space Mono" display="flex" flexDirection="row" height="46px">
  <Box w="50%">
  <Text fontSize="17px" color="white">Tip Amount</Text>
        <Text fontSize="14px" color="#F4FAFA">/ person </Text>
    </Box>
  <Box w="50%" display="flex" flexDirection="row" alignItems="center">
  <Img src="icon-dollar-green.svg" alt="Dollar sign" height="40px"/>
    <Text fontSize="46px" color="#20A291">0.00</Text>
    </Box>
</Box>

}