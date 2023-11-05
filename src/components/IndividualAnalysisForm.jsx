import { FormProvider, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import NumericInput from "./NumericInput"
import SubmitButton from "./SubmitButton"

function IndividualAnalysisForm() {
    const methods = useForm();
    const navigate = useNavigate();
    
    function onSubmit(data) {
        let creditScoreVal = document.getElementById("credit-score").value;
        let incomeVal = document.getElementById("gross-monthly-income").value;
        let creditCardPaymentVal = document.getElementById("credit-card-payment").value;
        let carPaymentVal = document.getElementById("car-payment").value;
        let studentLoanPaymentVal = document.getElementById("student-loan-payment").value;
        let appraisedVal = document.getElementById("appraised-value").value;
        let downPaymentVal = document.getElementById("down-payment").value;
        let monthlyPaymentVal = document.getElementById("monthly-mortgage-payment").value;

        console.log(creditScoreVal);
        navigate("./results", {state: {creditScore: creditScoreVal, income: incomeVal, creditCardPayment: creditCardPaymentVal, carPayment: carPaymentVal, studentLoan: studentLoanPaymentVal, appraised: appraisedVal, downPayment: downPaymentVal, monthlyPayment: monthlyPaymentVal}});
    }

    return (
        <div className="form-container w-3/5 bg-white rounded-lg shadow-md px-3 py-2 mt-3 mx-auto">
            <FormProvider {...methods}>
                <form name="individual-analysis-form" onSubmit={methods.handleSubmit(onSubmit)} noValidate>
                    <div className="grid grid-cols-2 gap-x-10">
                        <div>
                            <h3 className="text-2xl">History</h3>
                            <hr className="mt-2 border-t-2 border-gray-300" />
                            <div className="mt-4 space-y-8">
                                <NumericInput
                                    id="credit-score"
                                    label="Credit score:"
                                    placeholder="ex: 321"
                                    required
                                    range={{ min: 300, max: 850 }}
                                />
                                <NumericInput
                                    id="gross-monthly-income"
                                    label="Gross monthly income:"
                                    unit="$"
                                    required
                                />
                                <NumericInput
                                    id="credit-card-payment"
                                    label="Credit card payment:"
                                    unit="$"
                                    required
                                />
                                <NumericInput
                                    id="car-payment"
                                    label="Car payment:"
                                    unit="$"
                                    required
                                />
                                <NumericInput
                                    id="student-loan-payment"
                                    label="Student loan payment:"
                                    unit="$"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl">Mortgage</h3>
                            <hr className="mt-2 border-t-2 border-gray-300" />
                            <div className="mt-4 space-y-8">
                                <NumericInput
                                    id="appraised-value"
                                    label="Appraised value:"
                                    unit="$"
                                    required
                                />
                                <NumericInput
                                    id="down-payment"
                                    label="Down payment:"
                                    unit="$"
                                    required
                                />
                                <NumericInput
                                    id="monthly-mortgage-payment"
                                    label="Monthly mortgage payment:"
                                    unit="$"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <SubmitButton label="Predict My Approval Status" />
                </form>
            </FormProvider>
        </div>
    )
}

export default IndividualAnalysisForm;
