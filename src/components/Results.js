import { React } from "react";
import { useLocation } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import GaugeChart from "react-gauge-chart";

import {
  DTI,
  FEDTI,
  LTV,
  MortgageInsurance,
  isApproved,
} from "../scripts/approval.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function TableRow({ lengths, location, header, text, left, right }) {
  return (
    <div className="-mb-48">
      <div className="flex h-[600px] -ml-24">
        <div className="w-2/3 ml-4">
          <GaugeChart
            id={header}
            arcsLength={lengths}
            colors={["#5BE12C", "#F5CD19", "#EA4228"]}
            percent={location}
            arcPadding={0.02}
            hideText={true}
          />
          <div className="relative left-[15%] -top-[8%]">{left}</div>
          <div className="relative left-[79%] -top-[12%]">{right}</div>
        </div>

        <div className="w-full mr-4">
          <div className="text-center text-5xl">{header}</div>
          <div className="text-left text-[18px]">{text}</div>
        </div>
      </div>
    </div>
  );
}

function Results() {
  const { state } = useLocation();
  const { CreditScore } = state;

  const approved = isApproved(state);
  const LTVVal = LTV(state);
  const DTIVal = DTI(state);
  const FEDTIVal = FEDTI(state);

  const creditScoreLengths = [0.21, 0, 0.339];
  const LTVLengths = [0.8, 0.15, 0.05];
  const DTILengths = [0.36, 0.07, 0.57];
  const FEDTILengths = [0.28, 0, 0.72];

  const creditScorePercent = (CreditScore - 300) / 550;

  return (
    <div className="relative">
      <TableRow
        lengths={creditScoreLengths}
        location={1 - creditScorePercent}
        header={"Credit Score"}
        text={
          <div>
          {CreditScore < 640 ?
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
            </div>: "" }
          </div>
        }
        left={"850"}
        right={"\u00a0300"}
      />
      <TableRow
        className="absolute -top-96"
        lengths={LTVLengths}
        location={LTVVal}
        header={"Loan-to-Value"}
        text={
          "Try to put more on your down payment to avoid more loans (and by extension more interest)."
        }
        left={"0%"}
        right={"100%"}
      />
      <TableRow
        lengths={DTILengths}
        location={DTIVal}
        header={"Debt to Income"}
        text={
          "Besides mortgages, credit card payments tend to make up the largest share of debt. Make sure to pay as much as you can and not just the minimum amount and that you’re paying on time to avoid those costly late fees. In general, pay off as much of your debt as possible."
        }
        left={"0%"}
        right={"100%"}
      />
      <TableRow
        lengths={FEDTILengths}
        location={FEDTIVal}
        header={"Front-End-Debt to Income"}
        text={
          "Similar to loan-to-value, try putting more on your down payment to avoid paying more in the future."
        }
        left={"0%"}
        right={"100%"}
      />
    </div>
  );
}

export default Results;
