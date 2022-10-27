import { Button } from "@chakra-ui/react";

export function ResetButton({
  bill,
  tipPercentage,
  peopleNumber,
  handleClick,
}) {
  const completedColor =
    bill && tipPercentage && peopleNumber ? "green" : "lightGray";

  return (
    <Button
      variant="primary"
      bgColor={completedColor}
      isDisabled={bill || tipPercentage || peopleNumber ? false : true}
      onClick={handleClick}
      _hover={{ bgColor: "cyanish" }}
    >
      Reset
    </Button>
  );
}
