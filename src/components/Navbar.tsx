import logo from "../images/react-icon-small.png";

export default function NavBar() {
  return (
    <nav className="nav-container">
      <div className="logo">
        <img src={logo} alt="React logo" />
        <h2>ReactFacts</h2>
      </div>
      <h3>React Course - Project 1</h3>
    </nav>
  );
}
