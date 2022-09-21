import { Box } from "@chakra-ui/react";
import { BillInput } from "./BillInput";
import { PeopleNumberInput } from "./PeopleNumberInput";
import { ResetButton } from "./ResetButton";
import { TipAmount } from "./TipAmount";
import { TipSelect } from "./TipSelect";
import { TotalAmount } from "./TotalAmount";
import { useState } from "react";
import { TotalAmountCalculator } from "./TipCalculator";
import { TipAmountCalculator } from "./TipCalculator";

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
      width="850px"
      bgColor="white"
      display="flex"
      flexDirection="row"
      height="400px"
      p="0"
      borderRadius="20px"
    >
      <Box
        width="50%"
        m="20px"
        p="20px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <BillInput setBill={setBill} />
        <TipSelect
          setTipPercentage={setTipPercentage}
          tipPercentage={tipPercentage}
        />
        <PeopleNumberInput setPeopleNumber={setPeopleNumber} bill={bill} tipPercentage={tipPercentage} peopleNumber={peopleNumber}/>
      </Box>
      <Box
        bgColor="#00494D"
        width="50%"
        m="20px"
        borderRadius="20px"
        p="40px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <TipAmount
          total={totalTip}
          bill={bill}
          tipPercentage={tipPercentage}
          peopleNumber={peopleNumber}
        />
        <TotalAmount total={totalResult} />
        <ResetButton
          bill={bill}
          tipPercentage={tipPercentage}
          peopleNumber={peopleNumber}
        />
      </Box>
    </Box>
  );
}
