import { useState } from "react";
import { 
    FormProvider, 
    useForm
} from "react-hook-form";
import NumericInput from "./NumericInput";
import SubmitButton from "./SubmitButton";
import BuyerFrame from "./BuyerFrame";
import Delete from "../img/delete.png";

const AggregateManualInput = ({ setLoading, setData }) => {
    const [buyerList, setBuyerList] = useState([]);
    const [totalBuyers, setTotalBuyers] = useState(0);
    const methods = useForm();

    const onSubmit = (data) => {
        setBuyerList([...buyerList, {...data, ID: totalBuyers + 1}]);
        setTotalBuyers((old) => old + 1);
    }

    const handleEvaluate = () => {
        setLoading(true);
        setData(buyerList);
        setLoading(false);
    }

    return (<>
        <div className="table-scroll relative w-full overflow-y-auto overflow-x-hidden h-[200px]">
            <table className="buyer-list px-3 w-full">
                <thead className="font-semibold sticky top-0 bg-white w-full text-sky-800 text-left">
                    <tr>
                        <th>ID</th>
                        <th>Gross Monthly Income</th>
                        <th>Down Payment</th>
                        <th>Appraised Value</th>
                        <th className="opacity-0"><img src={Delete} height={"20px"} width={"20px"} /></th>
                    </tr>
                </thead>
                <tbody className="w-full">
                    {buyerList.map((buyer) => <BuyerFrame key={buyer.ID} {...buyer} removeBuyer={() => {
                        setBuyerList((prev) => {
                            const res = prev.slice();
                            let idx = -1;
                            prev.forEach((b, i) => {
                                if (b.ID === buyer.ID) {
                                    idx = i;
                                }
                            });

                            if (idx === -1) return prev;

                            res.splice(idx, 1);
                            return res;
                        })
                    }} />)}
                </tbody>
            </table>
        </div>
        <FormProvider {...methods} >
            <form className="py-2 mt-3" onSubmit={methods.handleSubmit(onSubmit)}>
                <div className="form-container grid grid-cols-3 gap-1">
                    <NumericInput 
                        id="GrossMonthlyIncome"
                        label="Gross monthly income:"
                        range={{ min: 0 }}
                        unit="$"
                        required 
                    />
                    <NumericInput 
                        id="CreditCardPayment"
                        label="Credit card payment:"
                        range={{ min: 0 }}
                        unit="$"
                        required 
                    />
                    <NumericInput 
                        id="CarPayment"
                        label="Car payment:"
                        range={{ min: 0 }}
                        unit="$"
                        required 
                    />
                    <NumericInput 
                        id="StudentLoanPayments"
                        label="Student Loan payment:"
                        range={{ min: 0 }}
                        unit="$"
                        required 
                    />
                    <NumericInput 
                        id="AppraisedValue"
                        label="Appraised value:"
                        range={{ min: 0 }}
                        unit="$"
                        required 
                    />
                    <NumericInput 
                        id="DownPayment"
                        label="Down payment:"
                        range={{ min: 0 }}
                        unit="$"
                        required 
                    />
                    <NumericInput
                        id="MonthlyMortgagePayment"
                        label="Monthly mortgage payment:"
                        unit="$"
                        required
                    />
                    <NumericInput 
                        id="CreditScore"
                        label="Credit score:"
                        placeholder="ex: 321"
                        range={{ min: 300, max: 850 }}
                        required 
                    />
                </div>
                <input className="bg-sky-800 hover:ring-1 ring-sky-800 hover:cursor-pointer transition-all duration-100 ease-in-out px-6 py-2 mt-3 rounded-lg text-white" type="submit" value="Add potential buyer" />
            </form>
        </FormProvider>
        <button className="bg-sky-800 px-6 py-2 mt-3 rounded-lg text-white transition-all duration-100 ease-in-out hover:ring-1 ring-sky-800" onClick={handleEvaluate}>Evaluate</button>
    </>);
}

export default AggregateManualInput;