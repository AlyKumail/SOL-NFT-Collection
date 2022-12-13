import "./Hero.css";
import heroimg from "./img/heroimg.png";
import vidgame from "./img/vidgame.png";
import Mouse from "./img/Mouse.png";

const Hero = () => {
  return (
    <div className="hero-container" id="about">
      <div className="MainContainer hero">
        <div className="hero-left">
          <h2>
            <span className="purpUnderline">Leo NFT</span> comes with multiple
            utilities
          </h2>
          <p>1. NFT Staking</p>
          <p>
            2. Metaverse Gaming <img src={vidgame} alt="video game" />
          </p>
          <p>3. Royalty paid back to holders</p>
          <p>4. Merch store and many more</p>
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
