import React, { useState } from "react";
import ICInputField from "./ICInputField";
import { useInvestmentInput } from "../hooks/useInvestmentInputs";

export default function ICUserInput() {
  const {
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
    handleInputChange,
  } = useInvestmentInput();
  return (
    <section id="user-input">
      <div className="input-group">
        <ICInputField
          label={"Initial Investment"}
          value={initialInvestment}
          onValueChange={(value) =>
            handleInputChange("initialInvestment", value)
          }
        />

        <ICInputField
          label={"Annual Investment"}
          value={annualInvestment}
          onValueChange={(value) =>
            handleInputChange("annualInvestment", value)
          }
        />
      </div>
      <div className="input-group">
        <ICInputField
          label={"Expected Return (%, per year)"}
          value={expectedReturn}
          onValueChange={(value) => handleInputChange("expectedReturn", value)}
        />
        <ICInputField
          label={"Duration (years)"}
          value={duration}
          onValueChange={(value) => handleInputChange("duration", value)}
        />
      </div>
    </section>
  );
}
