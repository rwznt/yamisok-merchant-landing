import arrow from "../../../assets/arrow.svg";
import "./Cards.css";

const handleClick = (links) => {
  if (links) {
    window.location.href = links;
  } else {
    console.warn("No link provided!");
  }
}

export const Cards = ({ logo, title, desc, link }) => (
  <>
    <div className="card-main">
      <div className="corner-right">
        <div
          className="inner-corner"
          onClick={() => handleClick(link)}
        >
          <img src={arrow} alt="" className="arrows" />
        </div>
      </div>
      <div className="cards-content">
        <div className="image-logo">
          <img src={logo} alt="" className="image-logo" />
        </div>
        <div className="card-title">
          <h4 className="card-title">{title}</h4>
        </div>
        <div className="card-desc">
          <p className="card-desc">{desc}</p>
        </div>
      </div>
    </div>
  </>
);
