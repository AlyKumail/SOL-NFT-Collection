import "./Nav.css";
import logo from "./img/logo.png";
import Twitter from "./img/Twitter.png";
import Discord from "./img/Discord.png";

const Nav = () => {
  return (
    <div className="navbar-container">
      <div className="MainContainer navbar">
        <img className="logo" src={logo} alt="" />
        <ul className="navlinks">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#mint">Mint</a>
          </li>
          <li>
            <a href="#roadmap">Roadmap</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
        </ul>

        <div className="navbar_social-links">
          <a href="https://twitter.com/TheMotiLeo">
            <img src={Twitter} alt="" />
          </a>
          <a href="https://discord.gg/vbKjBCxkbN">
            <img src={Discord} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
