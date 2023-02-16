import "./Footer.css";
import insta from "./img/insta.png";
import Discord from "./img/Discord.png";
import copyright from "./img/copyright.png";

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
            <a href="#roadmap">Whitepaper</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#faq">Faq</a>
          </li>
        </ul>

        <p>
          {" "}
          <img src={copyright} alt="" /> 2023. All Rights Reserved
        </p>

        <div className="navbar_social-links">
          <a href="https://www.instagram.com/themotivationalleopardnft/?igshid=ZDdkNTZiNTMp">
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

export default Footer;
