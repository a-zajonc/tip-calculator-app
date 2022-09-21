import { Box, Heading, Button, ButtonGroup, Input } from "@chakra-ui/react";

function TipButton({ tipValue, tipPercentage, handleChange }) {
  return (
    <Button
      width="33%"
      bgColor={tipPercentage === tipValue ? "#20A291" : "#00494D"}
      color={tipPercentage === tipValue ? "#00494D" : "white"}
      fontSize="24px"
      _hover={{ bgColor: "#9fe8df", color: "#00494D" }}
      onClick={handleChange}
      value={tipValue}
    >
      {tipValue}
    </Button>
  );
}

export function TipSelect({ setTipPercentage, tipPercentage }) {
  const handleChange = (event) => {
    setTipPercentage(event.target.value);
  };

  return (
    <Box>
      <Heading fontFamily="Space Mono" fontSize="14px" color="#5E7A7D">
        Select Tip %
      </Heading>
      <ButtonGroup fontFamily="Space Mono" width="100%" paddingBlock="10px">
        <TipButton
          tipValue={"5%"}
          tipPercentage={tipPercentage}
          handleChange={handleChange}
        />
        <TipButton
          tipValue={"10%"}
          tipPercentage={tipPercentage}
          handleChange={handleChange}
        />
        <TipButton
          tipValue={"15%"}
          tipPercentage={tipPercentage}
          handleChange={handleChange}
        />
      </ButtonGroup>
      <ButtonGroup fontFamily="Space Mono" width="100%">
        <TipButton
          tipValue={"25%"}
          tipPercentage={tipPercentage}
          handleChange={handleChange}
        />
        <TipButton
          tipValue={"50%"}
          tipPercentage={tipPercentage}
          handleChange={handleChange}
        />
        <Input
          width="33%"
          bgColor="#F4FAFA"
          color="#00494D"
          fontSize="20px"
          placeholder="Custom"
          variant="filled"
          focusBorderColor="#26C0AB"
          textAlign="end"
          _placeholder={{ color: "#7F9C9F" }}
          onChange={handleChange}
        />
      </ButtonGroup>
    </Box>
  );
}
