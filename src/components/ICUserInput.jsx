import ICInputField from "./ICInputField";
import {
  INITIAL_INVESTMENT,
  ANNUAL_INVESTMENT,
  EXPECTED_RETURN,
  DURATION,
} from "../util/constants";

export default function ICUserInput({ investmentInput, handleInputChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <ICInputField
          label={"Initial Investment"}
          value={investmentInput[INITIAL_INVESTMENT]}
          onValueChange={(value) =>
            handleInputChange(INITIAL_INVESTMENT, value)
          }
        />

        <ICInputField
          label={"Annual Investment"}
          value={investmentInput[ANNUAL_INVESTMENT]}
          onValueChange={(value) => handleInputChange(ANNUAL_INVESTMENT, value)}
        />
      </div>
      <div className="input-group">
        <ICInputField
          label={"Expected Return (%, per year)"}
          value={investmentInput[EXPECTED_RETURN]}
          onValueChange={(value) => handleInputChange(EXPECTED_RETURN, value)}
        />
        <ICInputField
          label={"Duration (years)"}
          value={investmentInput[DURATION]}
          onValueChange={(value) => handleInputChange(DURATION, value)}
        />
      </div>
    </section>
  );
}
