import "./Nav.css";
import logo from "./img/logo.png";
// import Twitter from "./img/Twitter.png";
import insta from "./img/insta.png";
import Discord from "./img/Discord.png";

const Nav = () => {
  return (
    <div className="navbar-container">
      <div className="MainContainer navbar">
        <img className="logo" src={logo} alt="" />
        <ul className="navlinks">
          <li>
            <a href="#hero">About</a>
          </li>
          <li>
            <a href="#mint">Mint</a>
          </li>
          <li>
            <a href="#roadmap">Roadmap</a>
          </li>
          <li>
            <a href="https://themotivationalleopard.gitbook.io/untitled/ ">Whitepaper</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#faq">FAQs</a>
          </li>
        </ul>

        <div className="navbar_social-links">
          <a href="https://www.instagram.com/themotivationalleopardnft/">
            <img src={insta} alt="" />
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
