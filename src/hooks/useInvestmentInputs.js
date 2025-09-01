import { useState } from "react";

export function useInvestmentInput() {
  const [investmentInput, setInvestmentInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  console.log(investmentInput);

  function handleInputChange(name, value) {
    setInvestmentInput((prevInput) => ({ ...prevInput, [name]: value }));
  }
  return { ...investmentInput, handleInputChange };
}
