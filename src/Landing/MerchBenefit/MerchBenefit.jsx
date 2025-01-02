import "./MerchBenefit.css";
import MerchCards from "./Cards/MerchCards";
import easePayment from "../../assets/Logo/ease-payment.svg";
import everywhere from "../../assets/Logo/everywhere.svg";
import transactionSec from "../../assets/Logo/transaction-security.svg";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

export const MerchBenefit = () => {
  // const [email, setEmail] = useState("");
  // const [name, setName] = useState("");
  // const [error, setError] = useState("");
  // const navigate = useNavigate();

  // const validateEmail = (email) => {
  //   const regex = /^[^\s@]+@[^\s@]+[^\s@]+$/;
  //   return regex.test(email);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validateEmail(email)) {
  //     setError("");
  //     alert("Email is valid: " + email);
  //     navigate("");
  //   } else {
  //     setError("Please enter a valid email addtess.");
  //   }
  //   if (name.trim() === "") {
  //     setError("Name cannot be empty.");
  //   } else {
  //     setError("");
  //     alert("Name is valid: " + name);
  //   }
  // };

  return (
    <div className="merch-container" id="merch-section">
      <div className="merch-main">
        <div className="merch-submain">
          <div className="merch-context">
            <h3 className="merch-title">Keuntungan Merchant</h3>
            <p className="merch-desc">
              Yamisok Merchant hadir untuk memudahkan bisnis Anda dengan
              menyediakan layanan merchant yang lengkap, termasuk dompet digital
              yang praktis dan aman, serta kemudahan pembayaran melalui PPOB
              (Payment Point Online Bank). Dengan Yamisok, Anda dapat menerima
              berbagai metode pembayaran secara cepat dan efisien, membantu
              meningkatkan transaksi dan kepuasan pelanggan!
            </p>
          </div>
        </div>
        <div className="merch-cards">
          <MerchCards
            logo={easePayment}
            title="Kemudahan Pembayaran"
            desc="Yamisok Merchant terintegrasi dengan berbagai metode pembayaran yang memudahkan pelanggan untuk melakukan transaksi, seperti kartu kredit, e-wallet, atau transfer bank."
            links="#"
          />
          <MerchCards
            logo={transactionSec}
            title="Keamanan Transaksi"
            desc="Yamisok Merchant website dilengkapi dengan teknologi keamanan yang canggih, seperti enkripsi data, yang melindungi informasi pribadi dan pembayaran pelanggan."
            links="#"
          />
          <MerchCards
            logo={everywhere}
            title="Transaksi Kapan Saja"
            desc="Dengan platform online, transaksi bisa dilakukan kapan saja tanpa batasan waktu, memberi kenyamanan bagi pelanggan dan menambah pendapatan bisnis."
            links="#"
          />
        </div>
        <div className="enlist">
          <div className="context">
            <h2 className="enlist-title">Daftar merchant kamu sekarang</h2>
            <p className="enlist-desc">
              Daftarkan merchant kamu sekarang dan raih peluang bisnis lebih
              besar dengan kemudahan transaksi yang cepat, aman, dan efisien!
            </p>
          </div>
          <div className="forms">
            <div className="forms-main">
              <form action="#" className="forms-body" 
              // onSubmit={handleSubmit}
              >
                <div className="forms-content">
                  <div className="inputs">
                    <label htmlFor="name" className="labels">
                      Nama
                    </label>
                    <input
                      type="text"
                      placeholder="Nama"
                      required
                      // onChange={(e) => setName(e.target.value)}
                      // value={name}
                      className="checks-input"
                    />
                  </div>
                  <div className="inputs">
                    <label htmlFor="email" className="labels">
                      Email<span className="stars">*</span>
                    </label>
                    <input
                      type="email"
                      // value={email}
                      placeholder="Email"
                      // onChange={(e) => setEmail(e.target.value)}
                      required
                      className="checks-input"
                    />
                  </div>
                </div>
                <div className="enlist-button">
                  <a href="#" className="enlist-button">
                    Kirim Permintaan
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
