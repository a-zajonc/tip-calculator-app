import {
  Box,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { PersonSign } from "../Images/PersonSign";

export function PeopleNumberInput({
  setPeopleNumber,
  bill,
  tipPercentage,
  peopleNumber,
}) {
  const handleChange = (event) => {
    setPeopleNumber(event.target.value);
  };

  const isError =
    (tipPercentage && bill && !peopleNumber) || peopleNumber === "0";

  return (
    <Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Heading fontSize="14px" color="#5E7A7D" pb="10px">
          Number of People
        </Heading>
        {isError === true ? (
          <Text color="#b87b6a" fontSize="14px">
            Can't be zero
          </Text>
        ) : null}
      </Box>
      <InputGroup>
        <InputLeftElement pointerEvents="none">{PersonSign}</InputLeftElement>
        <Input
          variant="filled"
          color="#00494D"
          _placeholder={{ opacity: 0.4 }}
          focusBorderColor="#26C0AB"
          errorBorderColor="#b87b6a"
          backgroundColor="#F4FAFA"
          fontSize="24px"
          placeholder="0"
          textAlign="end"
          onChange={handleChange}
          isInvalid={!isError ? false : true}
          type="number"
          value={peopleNumber}
          min={1}
        />
      </InputGroup>
    </Box>
  );
}
