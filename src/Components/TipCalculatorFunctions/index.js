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

export const resultDisplaySize = (total) => {
  switch (total.length) {
    case 13:
      return "22px";
    case 12:
      return "24px";
    case 11:
      return "26px";
    case 10:
      return "28px";
    case 9:
      return "30px";
    case 8:
      return "33px";
    case 7:
      return "36px";
    case 6:
      return "38px";
    default:
      return "43px";
  }
};
