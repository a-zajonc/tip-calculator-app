import { Box , Heading, Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import { personSign } from "../Images";

export function PeopleNumberInput() {
    return <Box fontFamily="Space Mono">
    <Heading fontFamily="Space Mono" fontSize="14px" color="#5E7A7D" pb="10px">
        Number of People
        </Heading> 
        <InputGroup>
        <InputLeftElement
      pointerEvents='none'
      children={personSign}
    />
        <Input variant="filled" color="#7F9C9F"
_placeholder={{ opacity: 0.4}} focusBorderColor="crimson"
        backgroundColor="#F4FAFA"  fontSize="24px" placeholder="0" textAlign="end"/>
        </InputGroup>
        </Box>
}
