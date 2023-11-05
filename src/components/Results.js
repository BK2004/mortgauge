import { React } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const minCreditScore = 640;
const maxLTV = 95;
const preferredLTV = 80;
const maxDTI = 43;
const preferredDTI = 36;
const maxFEDTI = 28;

function TableRow({ tableData, header, text }) {
  return (
    <div className="flex h-[600px] ml-16">
      <Doughnut
        data={tableData}
        options={{ plugins: { legend: { position: "right", labels: {
          font: {
            size: 20
          }
        }
       } } }}
      />

      <div className="w-full mx-8"> 
        <div className="text-center text-5xl">{header}</div>
        <div className="text-left text-[18px]">{text}</div>
      </div>
    </div>
  );
}

function Results({ creditScore, LTV, DTI, FEDTI }) {
  const creditScoreData = {
    labels: ["Credit Score", "Required Increase    "],
    datasets: [
      {
        label: "Points",
        data: [
          Math.min(creditScore, minCreditScore),
          Math.max(minCreditScore - creditScore, 0),
        ],
        backgroundColor: [
          "rgba(100, 255, 100, 0.2)",
          "rgba(255, 100, 100, 0.2)",
        ],
        borderColor: ["rgba(100, 255, 100, 1)", "rgba(255, 100, 100, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const LTVData = {
    labels: ["LTV", "Suggested Decrease", "Required Decrease"],
    datasets: [
      {
        label: "%",
        data: [
          Math.min(LTV, 80),
          Math.max(0, Math.min(LTV - 80, 15)),
          Math.max(0, Math.min(LTV - 95, 5)),
        ],
        backgroundColor: [
          "rgba(100, 255, 100, 0.2)",
          "rgba(255, 255, 100, 0.2)",
          "rgba(255, 100, 100, 0.2)",
        ],
        borderColor: [
          "rgba(100, 255, 100, 1)",
          "rgba(255, 255, 100, 1)",
          "rgba(255, 100, 100, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const DTIData = {
    labels: ["DTI", "Suggested Decrease", "Required Decrease"],
    datasets: [
      {
        label: "%",
        data: [
          Math.min(DTI, 36),
          Math.max(0, Math.min(DTI - 36, 7)),
          Math.max(0, Math.min(DTI - 43, 57)),
        ],
        backgroundColor: [
          "rgba(100, 255, 100, 0.2)",
          "rgba(255, 255, 100, 0.2)",
          "rgba(255, 100, 100, 0.2)",
        ],
        borderColor: [
          "rgba(100, 255, 100, 1)",
          "rgba(255, 255, 100, 1)",
          "rgba(255, 100, 100, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const FEDTIData = {
    labels: ["FEDTI", "Required Decrease"],
    datasets: [
      {
        label: "%",
        data: [Math.min(FEDTI, 28), Math.max(0, Math.min(DTI - 28, 72))],
        backgroundColor: [
          "rgba(100, 255, 100, 0.2)",
          "rgba(255, 100, 100, 0.2)",
        ],
        borderColor: ["rgba(100, 255, 100, 1)", "rgba(255, 100, 100, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <TableRow
        tableData={creditScoreData}
        header={"Credit Score"}
        text={
          <div>
            <p>Here are the biggest factors in your credit score and how to increase them:</p>
            <ul className="list-disc ml-8">
              <li>Payment history: make sure to make your payments on time.</li>
              <li>Amounts owed: pay off as much of your debt as possible at a time.</li>
              <li>Length of credit history: this increases naturally over time.</li>
              <li>New credit: try to avoid opening many accounts over a short period of time.</li>              
              <li>Credit: having multiple types of credit can help boost your score, provided it doesn’t negatively impact in the other factors.</li>
            </ul>
          </div>
        }
      />
      
      <br />
      <TableRow 
        tableData={LTVData} 
        header={"Loan-to-Value"}
        text={"Try to put more on your down payment to avoid more loans (and by extension more interest)."}
      />
      <br />
      <TableRow 
        tableData={DTIData}
        header={"Debt to Income"}
        text={"Besides mortgages, credit card payments tend to make up the largest share of debt. Make sure to pay as much as you can and not just the minimum amount and that you’re paying on time to avoid those costly late fees. In general, pay off as much of your debt as possible."}
      />
      <br />
      <TableRow 
        tableData={FEDTIData}
        header={"Front-End-Debt to Income"}
        text={"Similar to loan-to-value, try putting more on your down payment to avoid paying more in the future."}
      />
    </div>
  );
}

export default Results;
