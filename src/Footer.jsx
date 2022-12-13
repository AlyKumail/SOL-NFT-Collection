import "./Footer.css";
import Twitter from "./img/Twitter.png";
import Discord from "./img/Discord.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="MainContainer footer">
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

        <p>2023. All Rights Reserved</p>

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

export default Footer;
