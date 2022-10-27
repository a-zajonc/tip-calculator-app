import { Box, Heading, Button, Container, Input } from "@chakra-ui/react";

function TipButton({ tipValue, tipPercentage, handleChange }) {
  return (
    <Button
      width={{ sm: "48%", md: "31%", lg: "33%%" }}
      variant="secondary"
      bgColor={tipPercentage === tipValue ? "green" : "darkGreen"}
      color={tipPercentage === tipValue ? "darkGreen" : "white"}
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
      <Heading fontSize="14px" color="grayish" pb="10px">
        Select Tip %
      </Heading>
      <Container
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
          bgColor="grayBg"
          color="darkGreen"
          fontSize={{ base: "19px", md: "23px", lg: "19px" }}
          placeholder="Custom"
          variant="filled"
          focusBorderColor="greenBorderFocus"
          textAlign="end"
          marginBottom="10px"
          _placeholder={{ color: "#7F9C9F" }}
          onChange={handleChange}
          inputMode="decimal"
          type="number"
          value={tipPercentage}
          min={1}
        />
      </Container>
    </Box>
  );
}
