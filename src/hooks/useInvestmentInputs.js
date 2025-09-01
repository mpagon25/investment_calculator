import { useState } from "react";
import { calculateInvestmentResults } from "../util/investment";

export function useInvestmentInputs() {
  const [investmentInput, setInvestmentInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleInputChange(inputIdentifier, newValue) {
    setInvestmentInput((prevInput) => ({
      ...prevInput,
      [inputIdentifier]: newValue,
    }));
  }

  const inputIsValid = investmentInput.duration > 1;

  const investmentResults = calculateInvestmentResults(investmentInput);
  return {
    investmentInput,
    handleInputChange,
    investmentResults,
    inputIsValid,
  };
}
