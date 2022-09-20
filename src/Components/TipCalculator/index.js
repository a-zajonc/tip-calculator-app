export function TotalAmountCalculator({bill, tipPercentage, peopleNumber}) {
    const billWithTip = (Number(bill) + Number(bill * parseFloat(tipPercentage) / 100)).toFixed(2)

    if (!tipPercentage) {
    return bill 
    }
    else {
        return (!peopleNumber || peopleNumber < 2 ? billWithTip : (billWithTip / Number(peopleNumber)).toFixed(2))
    }
}

export function TipAmountCalculator({bill, tipPercentage}) {
    if (!tipPercentage || !bill) {
        return "0.00"
    }
    else {
    return (bill * parseFloat(tipPercentage) / 100).toFixed(2)
    }
}  