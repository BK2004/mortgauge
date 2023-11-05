import { useForm } from "react-hook-form"

import NumericInput from "./NumericInput"
import SubmitButton from "./SubmitButton"

function IndividualAnalysisForm() {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    
    function onSubmit(data) {
        console.log(data);
    }

    return (
        <form name="individual-analysis-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-x-10">
                <div>
                    <h3 className="text-2xl">History</h3>
                    <hr className="mt-2 border-t-2 border-gray-300" />
                    <div className="mt-4 space-y-8">
                        <NumericInput
                            id="credit-score"
                            label="Credit score:"
                            range={{ min: 300, max: 850 }}
                            placeholder="ex: 321"
                            required
                            register={register}
                        />
                        <NumericInput
                            id="gross-monthly-income"
                            label="Gross monthly income:"
                            unit="$"
                            required
                            register={register}
                        />
                        <NumericInput
                            id="credit-card-payment"
                            label="Credit card payment:"
                            unit="$"
                            required
                            register={register}
                        />
                        <NumericInput
                            id="car-payment"
                            label="Car payment:"
                            unit="$"
                            required
                            register={register}
                        />
                        <NumericInput
                            id="student-loan-payment"
                            label="Student loan payment:"
                            unit="$"
                            required
                            register={register}
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
                            register={register}
                        />
                        <NumericInput
                            id="down-payment"
                            label="Down payment:"
                            unit="$"
                            required
                            register={register}
                        />
                        <NumericInput
                            id="monthly-mortgage-payment"
                            label="Monthly mortgage payment:"
                            unit="$"
                            required
                            register={register}
                        />
                    </div>
                </div>
            </div>
            <SubmitButton label="Predict My Approval Status" />
        </form>
    )
}

export default IndividualAnalysisForm;
