import { React } from "react";

function Home() {
  return (
    <div>
      <div className="text-center">
        <div className="text-[220px] mt-8 font-bold text-sky-800">MortGauge</div>
        <div className="text-4xl">
          Improving the mortgage experience for homebuyers and businesses alike
        </div>
      </div>

      <div>
        <div className="text-6xl mt-20 font-bold text-center mb-12">
          What You Need to Know
        </div>

        <div className="flex">
          <div className="text-center">
            <div className="text-5xl mt-4">Credit Score</div>
            <div className="text-3xl mx-8">
              A credit score is assigned to all Americans with credit by the
              three major credit bureaus. It ranges from 300 to 850 with higher
              being better. A score of 640 or higher is generally required to
              receive a mortgage.
            </div>
          </div>
          <img className="w-1/3" src="CreditScore.jpg" alt="Credit Score" />
        </div>
        <div className="flex mt-4">
          <img className="w-1/3" src="Balance.jpg" alt="Debt to Income" />
          <div className="text-center">
            <div className="text-5xl mt-4">Loan to Value Ratio</div>
            <div className="text-3xl mx-8">
              Loan to value is the ratio between the loan for the house and the
              value of the house, or otherwise the value of the home minus the
              down payment, divided by the value. A LTV of 95% or under is
              required for a mortgage, but having a lower LTV (less than 80%)
              will prevent you from being forced to purchase Private Mortgage
              Insurance.
            </div>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="text-center">
            <div className="text-5xl mt-4">Debt to Income Ratio</div>
            <div className="text-3xl mx-8">
              Debt to income ratio is the precent of your gross monthly income
              that goes to paying your monthly debt payments. Some sources of
              debt are car payments and credit card payments as well as
              mortgages. A DTI of 43% or less is required, but lenders prefer
              36% or less.
            </div>
          </div>
          <img
            className="w-1/3"
            src="DebtToIncome.jpg"
            alt="Debt to Income Ratio"
          />
        </div>
        <div className="flex mt-4">
          <img
            className="w-1/3"
            src="HouseWithMoney.webp"
            alt="Front-end Debt to Income Ratio"
          />
          <div className="text-center">
            <div className="text-5xl mt-4">Front-end Debt to Income Ratio</div>
            <div className="text-3xl mx-8">
              Front-end debt to income is the ratio of your monthly debt from
              housing alone divided (your mortgage) by your gross monthly
              income. A FEDTI of 28% or lower is required.
            </div>
          </div>
        </div>
      </div>

      <div className="text-6xl mt-24">About Us</div>
      <div className="text-3xl">
        Created at HackUTD X by Connor Harris, Joe Su, Braedon Kotko, and Sean
        Clarke, MortGauge is designed to help potential homebuyers understand
        whether their financial situation places them in a good place to get a
        mortgage. In addition, business can use this tool by uploading
        information about a list of customers and can receive helpful statistics
        to allow for better understanding of their customers' financial
        situations.
      </div>

      <div className="text-xl mt-20">
        Any information found on this page is an estimate and not necessarily
        reflective of mortgage acceptance requirements for all lenders.
        MortGauge holds no responsibilty for any issues arising via the use of
        this website. Using this website constitutes acceptance of these terms.
      </div>
    </div>
  );
}

export default Home;
