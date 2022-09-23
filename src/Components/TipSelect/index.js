import { Box, Heading, Button, Container, Input } from "@chakra-ui/react";

function TipButton({ tipValue, tipPercentage, handleChange }) {
  return (
    <Button
      width={{ base: "48%", md: "31%", lg: "33%%" }}
      bgColor={tipPercentage === tipValue ? "#20A291" : "#00494D"}
      color={tipPercentage === tipValue ? "#00494D" : "white"}
      fontSize="24px"
      marginBottom="10px"
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
      <Heading
        fontFamily="Space Mono"
        fontSize="14px"
        color="#5E7A7D"
        pb="10px"
      >
        Select Tip %
      </Heading>
      <Container
        fontFamily="Space Mono"
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        p="0"
      >
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
          width={{ base: "48%", md: "31%", lg: "33%%" }}
          bgColor="#F4FAFA"
          color="#00494D"
          fontSize={{ base: "19px", md: "23px", lg: "19px" }}
          placeholder="Custom"
          variant="filled"
          focusBorderColor="#26C0AB"
          textAlign="end"
          marginBottom="10px"
          _placeholder={{ color: "#7F9C9F" }}
          onChange={handleChange}
          type="number"
        />
      </Container>
    </Box>
  );
}
