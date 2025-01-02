import "./Security.css";
import iso from "../../assets/Logo/iso.svg";
import bi from "../../assets/Logo/bi.svg";
import kominfo from "../../assets/Logo/kominfo.svg";
import { Cards } from "./Cards/Cards";

export const Security = () => {
  return (
    <div className="security-main" id="security-section">
      <div className="security-text">
        <h3 className="security-title">Keamanan Yamisok Merchant</h3>
        <p className="security-desc">
          Keamanan adalah prioritas utama kami. Setiap transaksi di platform
          merchant terlindungi dengan standar keamanan terbaik untuk melindungi
          bisnis Anda dan pelanggan.
        </p>
      </div>
      <div className="securitycards">
        {/* <div className="security-card1">
          <Cards
            logo={iso}
            link="#"
            title="ISO 27001:2022"
            desc="Sistem manajemen keamanan informasi yang diterapkan menurut standar ini merupakan alat untuk manajemen risiko, ketahanan siber, dan keunggulan operasional."
          />
        </div> */}
        <div className="security-card2">
          {/* <Cards
            logo={bi}
            link="#"
            title="Bank Indonesia"
            desc="Merchant kami kini telah mendapatkan izin resmi dari Bank Indonesia, memastikan setiap transaksi berjalan sesuai dengan standar keamanan dan regulasi tertinggi."
          /> */}
          <Cards
            logo={iso}
            link="#"
            title="ISO 27001:2022"
            desc="Sistem manajemen keamanan informasi yang diterapkan menurut standar ini merupakan alat untuk manajemen risiko, ketahanan siber, dan keunggulan operasional."
          />
          <Cards
            logo={kominfo}
            link="#"
            title="Kominfo"
            desc="Dengan kepatuhan terhadap regulasi digital, kami memastikan transaksi yang aman, transparan, dan terpercaya untuk bisnis Anda."
          />
        </div>
        {/* <div className="security-card1">
          <Cards
            logo={iso}
            link="#"
            title="PCI DSS"
            desc="Merchant kami telah mendapatkan sertifikasi PCI DSS, menjamin keamanan data pembayaran Anda sesuai standar internasional."
          />
        </div> */}
      </div>

      <div className="securitycards-mobile">
        <Cards
          logo={iso}
          link="#"
          title="ISO 27001:2022"
          desc="Sistem manajemen keamanan informasi yang diterapkan menurut standar ini merupakan alat untuk manajemen risiko, ketahanan siber , dan keunggulan operasional."
        />
        {/* <Cards
          logo={bi}
          link="#"
          title="Bank Indonesia"
          desc="Merchant kami kini telah mendapatkan izin resmi dari Bank Indonesia, memastikan setiap transaksi berjalan sesuai dengan standar keamanan dan regulasi tertinggi."
        /> */}
        <Cards
          logo={kominfo}
          link="#"
          title="Kominfo"
          desc="Dengan kepatuhan terhadap regulasi digital, kami memastikan transaksi yang aman, transparan, dan terpercaya untuk bisnis Anda."
        />
        {/* <Cards
          logo={iso}
          link="#"
          title="PCI DSS"
          desc="Merchant kami telah mendapatkan sertifikasi PCI DSS, menjamin keamanan data pembayaran Anda sesuai standar internasional."
        /> */}
      </div>
    </div>
  );
};
