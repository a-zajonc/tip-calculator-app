import {
  Box,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { personSign } from "../Images";

export function PeopleNumberInput({
  setPeopleNumber,
  bill,
  tipPercentage,
  peopleNumber,
}) {
  const handleChange = (event) => {
    setPeopleNumber(event.target.value);
  };

  const isError = tipPercentage && bill && !peopleNumber;

  return (
    <Box fontFamily="Space Mono">
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Heading
          fontFamily="Space Mono"
          fontSize="14px"
          color="#5E7A7D"
          pb="10px"
        >
          Number of People
        </Heading>
        {isError === true ? (
          <Text fontFamily="Space Mono" color="#b87b6a" fontSize="14px">
            Can't be zero
          </Text>
        ) : null}
      </Box>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={personSign} />
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
        />
      </InputGroup>
    </Box>
  );
g}
