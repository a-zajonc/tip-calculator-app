import { Box, Heading, Button, ButtonGroup , Input  } from "@chakra-ui/react";


export function TipSelect({setTipPercentage, tipPercentage}) {

    const handleChange = event => {
        setTipPercentage(event.target.value);
      }

    return <Box>
        <Heading fontFamily="Space Mono" fontSize="14px" color="#5E7A7D">Select Tip %</Heading>
        <ButtonGroup fontFamily="Space Mono" width="100%" paddingBlock="10px">
        <Button width="33%" bgColor={tipPercentage === "5%" ? "#20A291" : "#00494D" } color={tipPercentage === "5%" ? "#00494D" : "white" } fontSize="24px" _hover={{bgColor:"#9fe8df", color:"#00494D"}} onClick={handleChange} value={"5%"}>5%</Button>
        <Button width="33%" bgColor={tipPercentage === "10%" ? "#20A291" : "#00494D" } color={tipPercentage === "10%" ? "#00494D" : "white" } fontSize="24px" _hover={{bgColor:"#9fe8df", color:"#00494D"}} onClick={handleChange} value={"10%"}>10%</Button>
        <Button width="33%" bgColor={tipPercentage === "15%" ? "#20A291" : "#00494D" } color={tipPercentage === "15%" ? "#00494D" : "white" } fontSize="24px" _hover={{bgColor:"#9fe8df", color:"#00494D"}} onClick={handleChange} value={"15%"}>15%</Button>
        </ButtonGroup>
        <ButtonGroup fontFamily="Space Mono" width="100%" >
        <Button width="33%" bgColor={tipPercentage === "25%" ? "#20A291" : "#00494D" } color={tipPercentage === "25%" ? "#00494D" : "white" } fontSize="24px" _hover={{bgColor:"#9fe8df", color:"#00494D"}} onClick={handleChange} value={"25%"}>25%</Button>
        <Button width="33%" bgColor={tipPercentage === "50%" ? "#20A291" : "#00494D" } color={tipPercentage === "50%" ? "#00494D" : "white" } fontSize="24px" _hover={{bgColor:"#9fe8df", color:"#00494D"}} onClick={handleChange} value={"50%"}>50%</Button>
        <Input width="33%" bgColor="#F4FAFA" color="#00494D" fontSize="20px" placeholder="Custom" variant="filled" focusBorderColor="#26C0AB" textAlign="end" _placeholder={{color:"#7F9C9F"}}
        onChange={handleChange}
        />
        </ButtonGroup>
    </Box>
}