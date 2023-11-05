/* buyerInfo format
AppraisedValue
CarPayment
CreditCardPayment
CreditScore
DownPayment
GrossMonthlyIncome
ID
MonthlyMortgagePayment
StudentLoanPayments
*/

/* Suggestion status codes
CREDIT_SCORE_LOW = Buyer's credit score is < 640
HIGH_LTV = Buyer's loan-to-value ratio > 95%
REQUIRE_PMI = Buyer will require Private Mortgage Insurance, 90% <= loan-to-value-ratio < 95%
MEDIUM_LTV = 80% <= Buyer's loan-to-value ratio < 90%
DTI_HIGH = Buyer's debt-to-income ratio > 43%
DTI_QUESTIONABLE = Buyer will probably be approved, but lenders prefer <= 36%; 36% < Buyer's debt-to-income ratio <= 43%
FEDTI_HIGH = front-end debt-to-income ratio > 28%
*/

// Calculate Loan-to-Value ratio
const LTV = (buyerInfo) => {
    const { DownPayment, AppraisedValue } = buyerInfo;
    
    return (AppraisedValue - DownPayment) / AppraisedValue;
};

// Calculate mortgage insurance
const MortgageInsurance = (buyerInfo) => {
    const { AppraisedValue } = buyerInfo;

    return (LTV(buyerInfo) >= 0.80 ? AppraisedValue / 100 / 12 : 0);
}

// Calculate debt-to-income ratio
const DTI = (buyerInfo) => {
    const { CreditCardPayment, MonthlyMortgagePayment, StudentLoanPayments, CarPayment, GrossMonthlyIncome } = buyerInfo;

    const debt = CarPayment + CreditCardPayment + MonthlyMortgagePayment + StudentLoanPayments + MortgageInsurance(buyerInfo);
    return debt / GrossMonthlyIncome;
};

// Calculate front-end debt-to-income ratio
const FEDTI = (buyerInfo) => {
    const { MonthlyMortgagePayment, GrossMonthlyIncome } = buyerInfo;

    return MonthlyMortgagePayment / GrossMonthlyIncome;
};

// Determine whether a buyer should be approved for a mortgage based on all the conditions.
// Include suggestions to better approval chances, and provide strength of approval if user isn't approved
const isApproved = (buyerInfo) => {
    const { CreditScore } = buyerInfo;
    const ltv = LTV(buyerInfo);
    const dti = DTI(buyerInfo);
    const fedti = FEDTI(buyerInfo);
    
    let approved = true;
    let approvalStrength = 1;
    const buyerSuggestions = [];

    if (CreditScore < 640) {
        approved = false;
        buyerSuggestions.push(
            "CREDIT_SCORE_INCREASE"
        );
    }

    if (ltv > 0.95) {
        // Worst case, won't be accepted most likely
        approved = false;
        buyerSuggestions.push(
            "HIGH_LTV"
        );
    } else if (ltv >= 0.9) {
        // Probably accepted, but most likely will require PMI (private mortgage insurance)
        approvalStrength -= 0.1;
        buyerSuggestions.push(
            "REQUIRE_PMI"
        ) 
    } else if (ltv >= 0.8) {
        // Probably accepted, might be good to lower ltv
        approvalStrength -= 0.05;
        buyerSuggestions.push(
            "MEDIUM_LTV"
        );
    }

    // Debt-to-income checks
    if (dti > 0.43) {
        // Too high, very high likelihood that lender won't accept
        approved = false;
        buyerSuggestions.push(
            "DTI_HIGH"
        );
    } else if (dti > 0.36) {
        // Possibly acceptable, but should aim for lower
        approvalStrength -= 0.05;
        buyerSuggestions.push(
            "DTI_QUESTIONABLE"
        );
    }

    if (fedti > .28) {
        // FEDTI too high
        approved = false;
        buyerSuggestions.push(
            "FEDTI_HIGH"
        );
    }


    // Provide whether buyer should be approved and suggestions for getting approval in the future or
    // further increasing their home-buying readiness
    return {
        approved,
        suggestions: buyerSuggestions,
    }
};

export default {
    isApproved,
    FEDTI,
    DTI,
    LTV,
    MortgageInsurance,
}