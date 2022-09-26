export function TotalAmountCalculator({ bill, tipPercentage, peopleNumber }) {
  const billWithTip = (
    Number(bill) + Number((bill * parseFloat(tipPercentage)) / 100)
  ).toFixed(2);
  if (billWithTip / peopleNumber === Infinity) {
    return "0.00";
  } else {
    return !tipPercentage || !bill || !peopleNumber
      ? "0.00"
      : (billWithTip / Number(peopleNumber)).toFixed(2);
  }
}

export function TipAmountCalculator({ bill, tipPercentage, peopleNumber }) {
  const totalAmount = (
    (bill * parseFloat(tipPercentage)) /
    100 /
    peopleNumber
  ).toFixed(2);
  if (!tipPercentage || !bill || !peopleNumber) {
    return "0.00";
  } else {
    return totalAmount === "Infinity" ? "0.00" : totalAmount;
  }
}
