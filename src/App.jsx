import ICHeader from "./components/ICHeader";
import ICResultTable from "./components/ICResultTable";
import ICUserInput from "./components/ICUserInput";
import { useInvestmentInputs } from "./hooks/useInvestmentInputs";

function App() {
  const { investmentData, handleInputChange, investmentResults } =
    useInvestmentInputs();
  return (
    <>
      <ICHeader />
      <ICUserInput handleInputChange={handleInputChange} {...investmentData} />
      <ICResultTable
        investmentResults={investmentResults}
        annualInvestment={investmentData.annualInvestment}
        initialInvestment={investmentData.initialInvestment}
      />
    </>
  );
}

export default App;
