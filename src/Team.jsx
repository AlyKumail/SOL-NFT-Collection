import "./Team.css";
import team1 from "./img/TCMteamPic.png";

const Team = () => {
  return (
    <div className="team-container" id="team">
      <h2>Meet the team</h2>
      <div className="MainContainer team">
        <div className="team-member">
          <div className="team-member-img">
            <img src={team1} alt="" />
          </div>
          <div className="team-member-info-wrap">
            <div className="team-member-info">
              <h1>Sam</h1>
              <p>NFT Designer</p>
            </div>
          </div>
        </div>
        <div className="team-member">
          <div className="team-member-img">
            <img src={team1} alt="" />
          </div>
          <div className="team-member-info-wrap">
            <div className="team-member-info">
              <h1>Mazhar</h1>
              <p>Social Media Manager</p>
            </div>
          </div>
        </div>
        <div className="team-member">
          <div className="team-member-img">
            <img src={team1} alt="" />
          </div>
          <div className="team-member-info-wrap">
            <div className="team-member-info">
              <h1>Phillips</h1>
              <p>Blockchain Expert</p>
            </div>
          </div>
        </div>
        <div className="team-member">
          <div className="team-member-img">
            <img src={team1} alt="" />
          </div>
          <div className="team-member-info-wrap">
            <div className="team-member-info">
              <h1>Persley</h1>
              <p>UI/UX Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
