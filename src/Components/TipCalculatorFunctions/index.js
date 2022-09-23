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
  console.log(typeof totalAmount);
  if (!tipPercentage || !bill || !peopleNumber) {
    return "0.00";
  } else {
    return totalAmount === "Infinity" ? "0.00" : totalAmount;
  }
}

export const resultDisplaySize = (total) => {
  switch (total.length) {
    case 20:
      return "12px";
    case 19:
      return "12px";
    case 18:
      return "12px";
    case 17:
      return "14px";
    case 16:
      return "16px";
    case 15:
      return "18px";
    case 14:
      return "20px";
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
