export function TotalAmountCalculator({bill, tipPercentage}) {
    if (!tipPercentage) {
    return bill 
    }
    else {
        return (Number(bill) + Number(bill * parseFloat(tipPercentage) / 100))
    }
}

export function TipAmountCalculator({bill, tipPercentage}) {
    if (!tipPercentage || !bill) {
        return "0.00"
    }
    else {
    return (bill * parseFloat(tipPercentage) / 100)
    }
}  