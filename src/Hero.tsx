import "./Hero.css";
import heroimg from "./img/TCMheroPic1.png";
import vidgame from "./img/vidgame.png";
import passive from "./img/passive.png";
import nftstake from "./img/nftstake.png";
import defla from "./img/defla.png";
import merch from "./img/merch.png";
import Mouse from "./img/Mouse.png";

const Hero = () => {
  return (
    <div className="hero-container" id="hero">
      <div className="MainContainer hero">
        <div className="hero-left">
          <h2>
            <span className="purpUnderline">Leo NFT</span> brings passive income with multiple utilities
          </h2>
          <p>1. Passive Income <img src={passive} alt="video game" /></p>
          <p>2. NFT Staking <img src={nftstake} alt="video game" /></p>
          <p>
            3. Metaverse Gaming <img src={vidgame} alt="video game" />
          </p>
          <p>4. Deflationary Collection. <img src={defla} alt="video game" /></p>
          <p>5. Merch store and many more <img src={merch} alt="video game" /></p>
        </div>
        <div
          //   style={{ background: `url(${circle}) no-repeat` }}
          className="hero-right"
        >
          <img className="circleBg" src={heroimg} alt="" />
        </div>
      </div>
      <h3>
        <a href="#mint">
          <img src={Mouse} alt="" />
        </a>
      </h3>
    </div>
  );
};

export default Hero;
