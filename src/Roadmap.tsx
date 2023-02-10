import "./Roadmap.css";
import rightArrow from "./img/rightArrow.png";
import rightArrowRoadmap from "./img/rightArrowRoadmap.png";
import leftArrow from "./img/arrowLeft.png";

const Roadmap = () => {
  return (
    <div className="roadmap-container" id="roadmap">
      <h2>Roadmap</h2>
      <div className="MainContainer roadmap">
        <span className="dot dot-top "></span>
        <div className="roadmap-left padding-t2">
          <div className="roadmap-item">
            <div className="roadmap-item-data">
              <p>
                {" "}
                <img src={rightArrow} alt="" /> <span>Mint 10,000 Leos (Iphone 14, Iphone 14 Pro, Apple Macbook Air, Apple Watch Series 4, Apple Ipad 9th Gen) giveaways.</span>
              </p>
              
            </div>
            <div className="roadmap-item-dir">
              <p>Phase 1</p>
              <img src={leftArrow} alt="" />
            </div>
          </div>
        </div>
        <div className="roadmap-right"></div>
      </div>

      <div className="MainContainer roadmap">
        <div className="roadmap-left "></div>
        <div className="roadmap-right padding-t2">
          <div className="roadmap-item roadmap-item-rev">
            <div className="roadmap-item-data">
              <p>
                {" "}
                <img src={rightArrow} alt="" /> <span>NFT Staking.</span>
              </p>
              <p>
                {" "}
                <img src={rightArrow} alt="" />{" "}
                <span>Royalty upto 30% gets paid back.</span>
              </p>
            </div>
            <div className="roadmap-item-dir">
              <p>Phase 2</p>
              <img src={rightArrowRoadmap} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="MainContainer roadmap">
        <div className="roadmap-left padding-t2">
          <div className="roadmap-item">
            <div className="roadmap-item-data">
              <p>
                {" "}
                <img src={rightArrow} alt="" />{" "}
                <span>Merch Store to be launched.</span>
              </p>
            </div>
            <div className="roadmap-item-dir">
              <p>Phase 3</p>
              <img src={leftArrow} alt="" />
            </div>
          </div>
        </div>
        <div className="roadmap-right"></div>
      </div>

      <div className="MainContainer roadmap">
        <div className="roadmap-left "></div>
        <div className="roadmap-right padding-t2 padding-b2">
          <div className="roadmap-item roadmap-item-rev">
            <div className="roadmap-item-data">
              <p>
                {" "}
                <img src={rightArrow} alt="" /> <span>Metaverse Gaming.</span>
              </p>
            </div>
            <div className="roadmap-item-dir">
              <p>Phase 4</p>
              <img src={rightArrowRoadmap} alt="" />
            </div>
          </div>
        </div>
        <span className="dot dot-bottom "></span>
      </div>

      <div className="MainContainer roadmap">
        <div className="roadmap-left padding-t2">
          <div className="roadmap-item">
            <div className="roadmap-item-data">
              <p>
                {" "}
                <img src={rightArrow} alt="" />{" "}
                <span>
                Deflationary Collection: Every 6 months, the royalties collected will be used to buy NFTs and burn it (from secondary marketplaces to increase value and the ROI of our investors).
                </span>
              </p>
            </div>
            <div className="roadmap-item-dir">
              <p>Phase 5</p>
              <img src={leftArrow} alt="" />
            </div>
          </div>
        </div>
        <div className="roadmap-right"></div>
      </div>
    </div>
  );
};

export default Roadmap;
