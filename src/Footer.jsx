import "./Footer.css";
import insta from "./img/insta.png";
import Discord from "./img/Discord.png";
import Twitter from "./img/Twitter.png";
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
          <a href="https://twitter.com/TheLeosNft?t=K6LmNQwKMyXng2VzZz537A&s=09">
            <img src={Twitter} alt="" />
          </a>
          <a href="https://www.instagram.com/themotivationalleopardnft/">
            <img src={insta} alt="" />
          </a>
          <a href=" https://discord.gg/qYPrE9gpSh">
            <img src={Discord} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
