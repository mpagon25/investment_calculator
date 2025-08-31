import logo from "../assets/logo.png";

export default function ICHeader() {
  return (
    <header id="header">
      <img src={logo} alt="Logo" />
      <h1>React Investment Calculator</h1>
    </header>
  );
}
