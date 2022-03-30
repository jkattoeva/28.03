import "./NavBar.css";

function NavBar(props) {
  const linksLeft = ["Link3", "Link4", "Link5"];
  const linksRight = ["Link1", "Link2"];

  const left = linksLeft.map((left) => {
    return (
      <li>
        <a href="https://app.netlify.com/sites/rainbow-meerkat-2388c0/deploys/62441ff4b2e5ab0008fb05e1">
          {left}
        </a>
      </li>
    );
  });
  const right = linksRight.map((right) => {
    return (
      <li>
        <a href="https://app.netlify.com/sites/rainbow-meerkat-2388c0/deploys/62441ff4b2e5ab0008fb05e1">
          {right}
        </a>
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
