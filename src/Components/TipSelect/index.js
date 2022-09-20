import { Box, Heading, Button, ButtonGroup , Input  } from "@chakra-ui/react";

export function TipSelect() {
    return <Box>
        <Heading fontFamily="Space Mono" fontSize="14px" color="#5E7A7D">Select Tip %</Heading>
        <ButtonGroup fontFamily="Space Mono" width="100%" paddingBlock="10px">
        <Button width="33%" bgColor="#00494D" color="white" fontSize="24px" _hover={{bgColor:"#9fe8df", color:"#00494D"}}>5%</Button>
        <Button width="33%" bgColor="#00494D" color="white" fontSize="24px" _hover={{bgColor:"#9fe8df", color:"#00494D"}}>10%</Button>
        <Button width="33%" bgColor="#00494D" color="white" fontSize="24px" _hover={{bgColor:"#9fe8df", color:"#00494D"}}>15%</Button>
        </ButtonGroup>
        <ButtonGroup fontFamily="Space Mono" width="100%" >
        <Button width="33%" bgColor="#00494D" color="white" fontSize="24px" _hover={{bgColor:"#9fe8df", color:"#00494D"}}>25%</Button>
        <Button width="33%" bgColor="#00494D" color="white" fontSize="24px" _hover={{bgColor:"#9fe8df", color:"#00494D"}}>50%</Button>
        <Input width="33%" bgColor="#F4FAFA" color="#00494D" fontSize="20px" placeholder="Custom" variant="filled" focusBorderColor="#26C0AB" textAlign="end" _placeholder={{color:"#7F9C9F"}}/>
        </ButtonGroup>
    </Box>
}