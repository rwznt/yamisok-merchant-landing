import './Top.css'
import topImage from '../../assets/top-image.svg'
import { Explain } from '../Explain/Explain';
import { Navbar } from '../../Nav/Navbar';
import '../../Nav/Navbar.css';

export const Top = () => {
    return (
        <div className="combo">
          <Navbar />
          <div className="top-main">
            <div className="top-left">
              <div className="top-title">
                <h3 className="top-title-main">Yamisok Merchant</h3>
                <div className="top-content">
                  <p className="top-content no-margin">
                    Kami Membuka
                    <span className="yellow-text-top"> Jalan </span>
                  </p>
                  <p className="top-content no-margin">
                    untuk
                    <span className="yellow-text-top"> Bisnis </span>
                    Anda
                  </p>
                </div>
                  <a className="top-button" href="#explain-section">
                    Pelajari Lebih Lanjut
                  </a>
              </div>
            </div>
            <div className="top-right">
              <img src={topImage} alt="" className="top-image" />
            </div>
          </div>
          <div>
            <Explain />
          </div>
        </div>
    );
}      