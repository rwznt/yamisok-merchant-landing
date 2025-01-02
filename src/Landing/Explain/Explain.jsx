import './Explain.css'
import explainImage from '../../assets/explain-image.png'

export const Explain = () => {
    return (
      <div className="explain-main" id="explain-section">
        <div className="explain-logo">
            <img src={explainImage} alt="" className='explain-logo-image'/>
        </div>
        <div className="explain-desc">
          <h3 className='explain-title'>
            Apa itu <span className="yellow-text-explain">Yamisok Merchant</span>?
          </h3>
          <div className="explain-text">
            <p className='explain-text'>
              Yamisok Merchant hadir untuk memudahkan bisnis Anda dengan
              menyediakan layanan merchant yang lengkap, termasuk dompet digital
              yang praktis dan aman, serta kemudahan pembayaran melalui PPOB
              (Payment Point Online Bank). Dengan Yamisok, Anda dapat menerima
              berbagai metode pembayaran secara cepat dan efisien, membantu
              meningkatkan transaksi dan kepuasan pelanggan!
            </p>
          </div>
        </div>
      </div>
    );
}