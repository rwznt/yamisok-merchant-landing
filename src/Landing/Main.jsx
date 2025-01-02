import { Top } from "./Top/Top";
import { MerchBenefit } from "./MerchBenefit/MerchBenefit";
import { Security } from "./Security/Security";
import { Benefits } from "./Benefits/Benefits";
// import { FAQ } from "./FAQ/FAQ";
import "./Main.css";
// import { Navbar } from "../Nav/Navbar";
// import { Footer } from "../Nav/Footer";

export const Main = () => {
  return (
    <div className="home-main">
      <div className="tops">
        <div className="topnav">
          {/* <Navbar />   */}
          <Top />
        </div>
      </div>
      <MerchBenefit />
      <Security />
      <Benefits />
      {/* <FAQ />
      <Footer /> */}
      {/* <MerchBenefit /> */}
    </div>
  );
};
