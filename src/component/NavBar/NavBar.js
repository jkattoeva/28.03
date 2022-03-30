import "./NavBar.css";

function NavBar(props) {
  const linksLeft = ["Link3", "Link4", "Link5"];
  const linksRight = ["Link1", "Link2"];

  const left = linksLeft.map((left) => {
    return (
      <li>
        <a href="#">{left}</a>
      </li>
    );
  });
  const right = linksRight.map((right) => {
    return (
      <li>
        <a href="#">{right}</a>
      </li>
    );
  });

  return (
    <nav className="NavBar">
      <ul>
        <span>{left}</span>
        <span>{right}</span>
      </ul>
    </nav>
  );
}
export default NavBar;
