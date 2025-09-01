import { useState } from "react";
import { calculateInvestmentResults } from "../util/investment";

export function useInvestmentInputs() {
  const [investmentData, setInvestmentData] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleInputChange(name, value) {
    setInvestmentData((prevInput) => ({ ...prevInput, [name]: value }));
  }

  const investmentResults = calculateInvestmentResults(investmentData);
  return { investmentData, handleInputChange, investmentResults };
}
