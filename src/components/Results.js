import { React } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import GaugeChart from "react-gauge-chart";

ChartJS.register(ArcElement, Tooltip, Legend);

function TableRow({ lengths, location, header, text, left }) {
  return (
    <div>
      <div className="flex h-[600px] ml-16">
        <GaugeChart
          id={header}
          arcsLength={lengths}
          colors={["#5BE12C", "#F5CD19", "#EA4228"]}
          percent={location}
          arcPadding={0.02}
          hideText={true}
        />

        <div className="w-full mx-8">
          <div className="text-center text-5xl">{header}</div>
          <div className="text-left text-[18px]">{text}</div>
        </div>
      </div>
      <div className="relative -top-96 ml-56">{left}</div>
    </div>
  );
}

function Results({ creditScore, LTV, DTI, FEDTI }) {
  const creditScoreLengths = [0.21, 0, 0.339];
  const LTVLengths = [0.8, 0.15, 0.05];
  const DTILengths = [0.36, 0.07, 0.57];
  const FEDTILengths = [0.28, 0, 0.72];

  const creditScorePercent = (creditScore - 300) / 550;

  return (
    <div>
      <TableRow
        lengths={creditScoreLengths}
        location={1 - creditScorePercent}
        header={"Credit Score"}
        text={
          <div>
            <p>
              Here are the biggest factors in your credit score and how to
              increase them:
            </p>
            <ul className="list-disc ml-8">
              <li>Payment history: make sure to make your payments on time.</li>
              <li>
                Amounts owed: pay off as much of your debt as possible at a
                time.
              </li>
              <li>
                Length of credit history: this increases naturally over time.
              </li>
              <li>
                New credit: try to avoid opening many accounts over a short
                period of time.
              </li>
              <li>
                Credit: having multiple types of credit can help boost your
                score, provided it doesn’t negatively impact in the other
                factors.
              </li>
            </ul>
          </div>
        }
        left={850}
      />
      <TableRow
        lengths={LTVLengths}
        location={LTV / 100}
        header={"Loan-to-Value"}
        text={
          "Try to put more on your down payment to avoid more loans (and by extension more interest)."
        }
        left={"\u00A0\u00A00"}
      />
      <TableRow
        lengths={DTILengths}
        location={DTI / 100}
        header={"Debt to Income"}
        text={
          "Besides mortgages, credit card payments tend to make up the largest share of debt. Make sure to pay as much as you can and not just the minimum amount and that you’re paying on time to avoid those costly late fees. In general, pay off as much of your debt as possible."
        }
        left={"\u00A0\u00A00"}
      />
      <TableRow
        lengths={FEDTILengths}
        location={FEDTI / 100}
        header={"Front-End-Debt to Income"}
        text={
          "Similar to loan-to-value, try putting more on your down payment to avoid paying more in the future."
        }
        left={"\u00A0\u00A00"}
      />
    </div>
  );
}

export default Results;
