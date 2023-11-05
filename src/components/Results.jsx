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
            colors={["#EA4228", "#F5CD19", "#5BE12C"]}
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

  const creditScoreLengths = [0.339, 0, 0.21];
  const LTVLengths = [0.05, 0.15, 0.8];
  const DTILengths = [0.57, 0.07, 0.36];
  const FEDTILengths = [0.72, 0, 0.28];

  const creditScorePercent = (CreditScore - 300) / 550;

  return (
    <div className="relative">
      <TableRow
        lengths={creditScoreLengths}
        location={creditScorePercent}
        header={"Credit Score"}
        text={
          <div>
            {CreditScore < 640 ? (
              <div>
                <p>
                  Here are the biggest factors in your credit score and how to
                  increase them:
                </p>
                <ul className="list-disc ml-8">
                  <li>
                    Payment history: make sure to make your payments on time.
                  </li>
                  <li>
                    Amounts owed: pay off as much of your debt as possible at a
                    time.
                  </li>
                  <li>
                    Length of credit history: this increases naturally over
                    time.
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
            ) : (
              "Your credit score meets the requirements!"
            )}
          </div>
        }
        left={"300"}
        right={"\u00a0850"}
      />
      <TableRow
        className="absolute -top-96"
        lengths={LTVLengths}
        location={1 - LTVVal}
        header={"Loan-to-Value"}
        text={
          <div>
            {LTVVal > 0.95 ? (
              <div>
                Try to put more on your down payment to avoid more loans (and by
                extension more interest).
              </div>
            ) : LTVVal >= 0.8 ? (
              <div>
                You will likely receive a mortgage but will have to buy private
                mortgage insurance.
              </div>
            ) : (
              "Your LTV meets the requirements!"
            )}
          </div>
        }
        left={"100%"}
        right={"0%"}
      />
      <TableRow
        lengths={DTILengths}
        location={1 - DTIVal}
        header={"Debt to Income"}
        text={
          <div>
            {DTIVal > 0.43 ? (
              <div>
                Your DTI does not currently meet the requirements. One strategy
                to decrease your ratio is to transfer your high interest loans
                to a low interest credit card. However, keep in mind that having
                too many credits may negatively impact your credit score.
              </div>
            ) : DTIVal > 0.28 ? (
              <div>
                You'll likely get approved, however it is still a good idea to
                try to lower your ratio.
              </div>
            ) : (
              "Your DTI meets the requirements!"
            )}
          </div>
        }
        left={"100%"}
        right={"0%"}
      />
      <TableRow
        lengths={FEDTILengths}
        location={1 - FEDTIVal}
        header={"Front-End-Debt to Income"}
        text={
          <div>
            {FEDTIVal > 0.28 ? (
              <div>
                Similar to loan-to-value, try putting more on your down payment
                to avoid paying more in the future.
              </div>
            ) : (
              "Your FEDTI meets the requirements!"
            )}
          </div>
        }
        left={"100%"}
        right={"0%"}
      />
    </div>
  );
}

export default Results;
