import { Box } from "@chakra-ui/react";
import { BillInput } from "./BillInput";
import { PeopleNumberInput } from "./PeopleNumberInput";
import { ResetButton } from "./ResetButton";
import { TipAmount } from "./TipAmount";
import { TipSelect } from "./TipSelect";
import { TotalAmount } from "./TotalAmount";
import { useState } from "react";
import { TotalAmountCalculator } from "./TipCalculatorFunctions";
import { TipAmountCalculator } from "./TipCalculatorFunctions";

export function SplitterComponent() {
  const [bill, setBill] = useState("");
  const [tipPercentage, setTipPercentage] = useState("");
  const [peopleNumber, setPeopleNumber] = useState("");

  const totalResult = TotalAmountCalculator({
    bill,
    tipPercentage,
    peopleNumber,
  });
  const totalTip = TipAmountCalculator({ bill, tipPercentage, peopleNumber });

  return (
    <Box
      width={{ base: "375px", md: "500px", lg: "850px" }}
      bgColor="white"
      display="flex"
      flexDirection={{ base: "column", lg: "row" }}
      height={{ base: "fit-content", md: "650px", lg: "400px" }}
      p="0"
      borderRadius="20px"
    >
      <Box
        width={{ lg: "50%" }}
        height={{ base: "60%", lg: "initial" }}
        m="20px"
        p="20px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        pb={{ base: "0", lg: "20px" }}
      >
        <BillInput setBill={setBill} />
        <TipSelect
          setTipPercentage={setTipPercentage}
          tipPercentage={tipPercentage}
        />
        <PeopleNumberInput
          setPeopleNumber={setPeopleNumber}
          bill={bill}
          tipPercentage={tipPercentage}
          peopleNumber={peopleNumber}
        />
      </Box>
      <Box
        bgColor="#00494D"
        width={{ lg: "50%" }}
        height={{ base: "40%", lg: "initial" }}
        m="20px"
        borderRadius="20px"
        p="40px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flexDirection="column"
          height="50%"
          justifyContent="space-around"
        >
          <TipAmount
            total={totalTip}
            bill={bill}
            tipPercentage={tipPercentage}
            peopleNumber={peopleNumber}
          />
          <TotalAmount total={totalResult} />
        </Box>
        <ResetButton
          bill={bill}
          tipPercentage={tipPercentage}
          peopleNumber={peopleNumber}
        />
      </Box>
    </Box>
  );
}
