import "./Nav.css";
import logo from "./img/logo.png";
import Discord from "./img/Discord.png";
import Twitter from "./img/Twitter.png";

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
          <a href="https://twitter.com/TheLeosNft?t=K6LmNQwKMyXng2VzZz537A&s=09">
            <img src={Twitter} alt="" />
          </a>
          
          <a href=" https://discord.gg/qYPrE9gpSh">
            <img src={Discord} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
