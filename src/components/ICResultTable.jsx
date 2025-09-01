import {
  calculateInvestedCapital,
  formatter,
  caculateTotalInterest,
} from "../util/investment";

export default function ICResultTable({
  investmentResults,
  annualInvestment,
  initialInvestment,
}) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentResults.map((result) => (
          <tr key={result.year}>
            <td>{result.year}</td>
            <td>{formatter.format(result.valueEndOfYear)}</td>
            <td>{formatter.format(result.interest)}</td>
            <td>{caculateTotalInterest(result.year, investmentResults)}</td>
            <td>
              {calculateInvestedCapital(
                result.year,
                annualInvestment,
                initialInvestment
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
