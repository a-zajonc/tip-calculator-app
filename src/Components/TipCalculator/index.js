export function TotalAmountCalculator({bill, tipPercentage}) {
    if (!tipPercentage) {
    return bill 
    }
    else {
        return bill * parseFloat(tipPercentage) / 100
    }
}

export function TipAmount({bill, tipPercentage}) {
    return bill * tipPercentage
}  