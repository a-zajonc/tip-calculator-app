import { Button } from "@chakra-ui/react";

export function ResetButton({ bill, tipPercentage, peopleNumber }) {
  const buttonIsActive = bill || tipPercentage || peopleNumber ? false : true;

  const completedColor =
    bill && tipPercentage && peopleNumber ? "#20A291" : "#f3f8fb";

  return (
    <Button
      fontFamily="Space Mono"
      bgColor={completedColor}
      width="100%"
      textTransform="uppercase"
      _hover={{ bgColor: "#9ee7de" }}
      isDisabled={buttonIsActive}
      onClick={() => window.location.reload(false)}
    >
      Reset
    </Button>
  );
}
