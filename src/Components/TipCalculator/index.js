export function TotalAmountCalculator({ bill, tipPercentage, peopleNumber }) {
  const billWithTip = (
    Number(bill) + Number((bill * parseFloat(tipPercentage)) / 100)
  ).toFixed(2);
  return !tipPercentage || !bill || !peopleNumber
    ? "0.00"
    : (billWithTip / Number(peopleNumber)).toFixed(2);
}

export function TipAmountCalculator({ bill, tipPercentage, peopleNumber }) {
  return !tipPercentage || !bill || !peopleNumber
    ? "0.00"
    : ((bill * parseFloat(tipPercentage)) / 100 / peopleNumber).toFixed(2);
}
