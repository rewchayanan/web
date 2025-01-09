function calculateFlatRateLoan(principal, annualInterestRate, months) {
    const totalInterest = principal * (annualInterestRate / 100) * (months / 12);
    const totalAmount = principal + totalInterest;
    return (totalAmount / months).toFixed(2);
}

function calculateEffectiveRateLoan(principal, annualInterestRate, months) {
    const monthlyInterestRate = (annualInterestRate / 12) / 100;
    const emi = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months)) /
                (Math.pow(1 + monthlyInterestRate, months) - 1);
    return emi.toFixed(2);
}

function calculateLoan() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const downPayment = parseFloat(document.getElementById('downPayment').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const months = parseInt(document.getElementById('months').value, 10);
    const principal = loanAmount - downPayment;
    const flatRateResult = calculateFlatRateLoan(principal, interestRate, months);
    const effectiveRateResult = calculateEffectiveRateLoan(principal, interestRate, months);
    document.getElementById('flatRateResult').textContent = `Flat Rate: ${flatRateResult} บาท/เดือน`;
    document.getElementById('effectiveRateResult').textContent = `Effective Rate: ${effectiveRateResult} บาท/เดือน`;
}