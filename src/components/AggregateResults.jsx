import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, BarElement, LinearScale, CategoryScale } from 'chart.js';
import { 
    isApproved,
    FEDTI,
    DTI,
    LTV,
    MortgageInsurance
 } from "../scripts/approval";
import { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend, Title, BarElement, CategoryScale, LinearScale);

const AggregateResults = ({ data }) => {
    const [approvalData, setApprovalData] = useState(null);
    const [approvalCount, setApprovalCount] = useState(null);
    const [approvalCounts, setSuggestionCounts] = useState(null);
    const [averages, setAverages] = useState(null);

    useEffect(() => {
        let approvedCount = 0;
        let suggestionCounts = {};

        const res = data.map((entry) => {
            if (isApproved(entry).approved) {
                approvedCount++; 
            }

            isApproved(entry).suggestions.forEach(k => {
                if (suggestionCounts[k] == null) {
                    suggestionCounts[k] = 0;
                }

                suggestionCounts[k]++;
            });

            console.log(suggestionCounts);

            return {
                data: entry,
                ...isApproved(entry)
            }
        });

        const avgs = {};

        avgs["CreditScore"] = 0;
        avgs["GrossMonthlyIncome"] = 0;
        avgs["CreditCardPayment"] = 0;
        avgs["DownPayment"] = 0;
        avgs["CarPayment"] = 0;
        avgs["LoanAmount"] = 0;
        avgs["StudentLoanPayments"] = 0;
        avgs["AppraisedValue"] = 0;
        avgs["MonthlyMortgagePayment"] = 0;

        data.forEach((entry, i) => {
            for (let k in entry) {
                if (avgs[k] != null) {                    
                    avgs[k] = avgs[k] * (i) / (i + 1) + entry[k] * (1 / (i + 1));
                }
            }
        });

        setApprovalData(res);
        setAverages(avgs);
        setApprovalCount(approvedCount);
        setSuggestionCounts(suggestionCounts);
        console.log(suggestionCounts);
    }, [data])

    return (<div className="container w-full">
        <div className="w-full flex justify-between">
            {averages ? <div className="averages w-1/2 h-fit pr-4">
                <h1 className="text-sky-800 font-semibold text-2xl mb-2">Averages</h1>
                <table className="border-none w-full mb-2">
                    <tbody>
                        <td className="text-sky-800 font-semibold">Credit Score</td>
                        <td className="text-right">{averages.CreditScore.toFixed(2)}</td>
                    </tbody>
                    <tbody>
                        <td className="text-sky-800 font-semibold">Gross Monthly Income</td>
                        <td className="text-right">${averages.GrossMonthlyIncome.toFixed(2)}</td>
                    </tbody>
                    <tbody>
                        <td className="text-sky-800 font-semibold">Credit Card Payment</td>
                        <td className="text-right">${averages.CreditCardPayment.toFixed(2)}</td>
                    </tbody>
                    <tbody>
                        <td className="text-sky-800 font-semibold">Down Payment</td>
                        <td className="text-right">${averages.DownPayment.toFixed(2)}</td>
                    </tbody>
                    <tbody>
                        <td className="text-sky-800 font-semibold">Car Payment</td>
                        <td className="text-right">${averages.CarPayment.toFixed(2)}</td>
                    </tbody>
                    <tbody>
                        <td className="text-sky-800 font-semibold">Loan Amount</td>
                        <td className="text-right">${averages.LoanAmount.toFixed(2)}</td>
                    </tbody>
                    <tbody>
                        <td className="text-sky-800 font-semibold">Student Loan Payments</td>
                        <td className="text-right">${averages.StudentLoanPayments.toFixed(2)}</td>
                    </tbody>
                    <tbody>
                        <td className="text-sky-800 font-semibold">Appraised Value</td>
                        <td className="text-right">${averages.AppraisedValue.toFixed(2)}</td>
                    </tbody>
                    <tbody>
                        <td className="text-sky-800 font-semibold">Mortgage Insurance</td>
                        <td className="text-right">${MortgageInsurance(averages).toFixed(2)}</td>
                    </tbody>
                    <tbody>
                        <td className="text-sky-800 font-semibold">FEDTI</td>
                        <td className="text-right">{(FEDTI(averages) * 100).toFixed(2)}%</td>
                    </tbody>
                    <tbody>
                        <td className="text-sky-800 font-semibold">DTI</td>
                        <td className="text-right">{(DTI(averages) * 100).toFixed(2)}%</td>
                    </tbody>
                    <tbody>
                        <td className="text-sky-800 font-semibold">LTV</td>
                        <td className="text-right">{(LTV(averages) * 100).toFixed(2)}%</td>
                    </tbody>
                </table>
            </div> : ""}
            {approvalData ? <div className="approval-doughnuts w-1/2 h-fit pl-4 flex flex-col items-center max-h-80">
                <Doughnut data={{
                    labels: ["Approved", "Not approved"],
                    datasets: [
                        {
                            label: "# of homebuyers",
                            data: [approvalCount, data.length - approvalCount],
                            backgroundColor: [
                                'rgb(7, 89, 133)',
                                'rgba(7, 89, 133, .3)'
                            ],
                            borderWidth: 0,
                        }
                    ]
                }} options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "# of approved vs unapproved potential homebuyers",
                        }
                    }
                }} />
            </div> : ""}
        </div>
        {approvalCounts ? <div className="approval-counts w-full mt-3 flex justify-center">
                <Bar data={{
                    labels: ['Low Credit Score', 'Excessive LTV', 'Requires PMI', 'High LTV', 'Excessive DTI', 'Questionable DTI', 'Excessive FEDTI'],
                    datasets: [
                        {
                            data: [
                                approvalCounts.CREDIT_SCORE_LOW || 0,
                                approvalCounts.HIGH_LTV || 0,
                                approvalCounts.REQUIRE_PMI || 0,
                                approvalCounts.MEDIUM_LTV || 0,
                                approvalCounts.DTI_HIGH || 0,
                                approvalCounts.DTI_QUESTIONABLE || 0,
                                approvalCounts.FEDTI_HIGH || 0,
                            ],
                            backgroundColor: 'rgb(7, 89, 133)'
                        },
                    ],
                }} options={{
                    plugins: {
                        legend: {
                            display: false,
                        },
                        title: {
                            display: true,
                            text: "# of suggestions given to potential homebuyer"
                        }
                    }
                }} />
        </div> : ""}
    </div>);
}

export default AggregateResults;