import ICHeader from "./components/ICHeader";
import ICResultTable from "./components/ICResultTable";
import ICUserInput from "./components/ICUserInput";
import { useInvestmentInputs } from "./hooks/useInvestmentInputs";

function App() {
  const {
    investmentInput,
    handleInputChange,
    investmentResults,
    inputIsValid,
  } = useInvestmentInputs();
  return (
    <>
      <ICHeader />
      <ICUserInput
        handleInputChange={handleInputChange}
        investmentInput={investmentInput}
      />
      {inputIsValid ? (
        <ICResultTable
          investmentResults={investmentResults}
          annualInvestment={investmentInput.annualInvestment}
          initialInvestment={investmentInput.initialInvestment}
        />
      ) : (
        <p className="center">Please enter a duration greater than 0</p>
      )}
    </>
  );
}

export default App;
