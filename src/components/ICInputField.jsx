export default function ICInputField({ value, onValueChange, label, id }) {
  return (
    <p>
      <label>{label}</label>
      <input
        id={id}
        type="number"
        value={value}
        onChange={(event) => onValueChange(+event.target.value)}
        required
      />
    </p>
  );
}
