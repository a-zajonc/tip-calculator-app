import {
  Box,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { DollarSign } from "../Images/DollarSign";

export function BillInput({ setBill, bill }) {
  const handleChange = (event) => {
    setBill(event.target.value);
  };

  return (
    <Box>
      <Heading fontSize="14px" pb="10px" color="#5E7A7D">
        Bill
      </Heading>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <DollarSign color="#9EBBBD" />
        </InputLeftElement>
        <Input
          variant="filled"
          color="#00494D"
          _placeholder={{ opacity: 0.4 }}
          focusBorderColor="#26C0AB"
          backgroundColor="#F4FAFA"
          fontSize="24px"
          placeholder="0"
          textAlign="end"
          onChange={handleChange}
          type="number"
          inputMode="decimal"
          value={bill}
          min={1}
        />
      </InputGroup>
    </Box>
  );
}
