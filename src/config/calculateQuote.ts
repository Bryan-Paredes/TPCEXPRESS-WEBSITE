function calculateQuote(packageCount: number, productPrice: number, payAtDestination: boolean, service: string): number {
    let totalCost: number;

    const isPayDestination = service === 'cod' ? true : payAtDestination

    const packagePrice: number = 40; // Price per package
    const insuranceRate: number = 0.01; // 1% insurance
    const destinationCharge: number = 3; // Charge for pay-at-destination

    // Calculate base values
    const packageTotal = Number(packageCount) * packagePrice;
    const insurance = Number(productPrice) * insuranceRate;
    const destinationFee = isPayDestination ? destinationCharge : 0;


    if (service === "cod") {
        // Calculate total for COD service
        totalCost = packageTotal + insurance + Number(productPrice) + destinationFee;
    } else {
        // Calculate total for standard service
        totalCost = packageTotal + insurance + destinationFee;
    }

    return Math.round(totalCost)
}

export default calculateQuote;