function calculateQuote(packageCount: number, productPrice: number, payAtDestination: boolean): number {
    const costPerPackage = 30;
    const insuranceRate = 0.01;
    const destinationFee = 3;

    let totalCost = packageCount * costPerPackage;
    totalCost += productPrice * insuranceRate;

    if (payAtDestination) {
        totalCost += destinationFee;
    }

    return Math.round(totalCost);
}

export default calculateQuote;