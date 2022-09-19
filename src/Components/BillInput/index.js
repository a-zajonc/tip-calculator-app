import { Box, Heading, Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import { dollarSign } from "../Images";

export function BillInput() {
    return <Box fontFamily="Space Mono">
    <Heading fontFamily="Space Mono" fontSize="14px" color="#5E7A7D" pb="10px">
        Bill
        </Heading> 
        <InputGroup>
        <InputLeftElement
      pointerEvents='none'
      children={dollarSign}
    />
        <Input variant="filled" color="#7F9C9F"
_placeholder={{ opacity: 0.4}} focusBorderColor="#26C0AB"
        backgroundColor="#F4FAFA"  fontSize="24px" placeholder="0" textAlign="end"/>
        </InputGroup>
        </Box>
}