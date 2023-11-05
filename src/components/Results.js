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
        options={{ plugins: { legend: { position: "right" } } }}
      />

      <div className="w-full mx-8">
        <div className="text-center text-9xl">{header}</div>
        <div className="text-left text-3xl">{text}</div>
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
        text={"Joe is gay"}
      />
      <br />
      <TableRow tableData={LTVData} />
      <br />
      <TableRow tableData={DTIData} />
      <br />
      <TableRow tableData={FEDTIData} />
    </div>
  );
}

export default Results;
