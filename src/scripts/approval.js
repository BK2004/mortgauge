// every combination should give a unique value
const credit = function(score){
    if(score < 640){
        return 0;
    }
    else{
        // succeed
        return 14;
    }
}

const LTV = function(value, downPayment){
    let loan = value - downPayment;
    if(loan / value > 0.95){
        return 0;
    }
    else if(loan / value > 0.8){
        // succeed with caution
        // requires insurance, 1% of house price per year
        return 2;
    }
    else{
        // succeed
        return 4;
    }
};

//insurance should be per month
const DTI = function(grossIncome, carPayment, creditCardPayment, mortgage, insurance = 0){
    let debt = carPayment + creditCardPayment + mortgage + insurance;
    let DTI = debt / grossIncome;
    if(DTI > 0.43){
        return 0;
    }
    else if(DTI > 0.36){
        // succeed with caution
        return 3;
    }
    else if((mortgage + insurance) / debt > 0.28){
        // succeed with caution
        return 6;
    }
    else{
        // succeed
        return 9;
    }
};

const FEDTI = function(housing, grossIncome, insurance = 0){
    if((housing + insurance) / grossIncome > 28){
        return 0;
    }
    else{
        // succeed
        return 28;
    }
};

const isApproved = function(credit, LTV, DTI, FEDTI){
    let result = credit + LTV + DTI + FEDTI;
    if(result == 47 || result == 50 || result == 53 || result == 49 || result == 52 || result == 55){
        return true;
    }
    else{
        return false;
    }
};

export default {
    isApproved,
    FEDTI,
    DTI,
    LTV,
    credit
}