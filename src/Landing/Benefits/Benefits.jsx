import Footer from '../../Nav/Footer';
import './Benefits.css'
import Desc from './Desc/Desc'
import FAQ from '../FAQ/FAQ'
import beneLogo from '../../assets/mobile/benefits-mobile.svg'

export const Benefits = () => (
  <div className="combofoot">
    <div className="combofaq">
      <div className='benefit-contain'>
        <div className="benefits-main">
          <div className="benefits-header">
            <img src={beneLogo} alt="" className='benelogo'/>
            <h3 className="benefits-title">Keuntungan</h3>
            <p className="benefits-desc">
              Platform merchant kami memberikan Anda akses ke berbagai fitur
              unggulan yang mendukung kemajuan bisnis Anda.
            </p>
          </div>
          <div className="lists">
            <div className="list-content">
              <Desc
                title="Jangkauan Lebih Luas"
                desc="Merchant website memungkinkan bisnis Anda diakses oleh pelanggan dari berbagai lokasi, bahkan secara global, sehingga meningkatkan potensi penjualan."
              />
              <Desc
                title="Transaksi 24/7"
                desc="Dengan platform online, transaksi bisa dilakukan kapan saja tanpa batasan waktu, memberi kenyamanan bagi pelanggan dan menambah pendapatan bisnis."
              />
              <Desc
                title="Kemudahan Pembayaran"
                desc="Merchant website umumnya terintegrasi dengan berbagai metode pembayaran yang memudahkan pelanggan untuk melakukan transaksi, seperti kartu kredit, e-wallet, atau transfer bank."
              />
            </div>
            <div className="list-content">
              <Desc
                title="Manajemen Produk yang Mudah"
                desc="Anda dapat dengan mudah menambahkan, menghapus, atau mengubah informasi produk secara langsung dari akun anda, menjaga katalog produk tetap up-to-date."
              />
              <Desc
                title="Keamanan Transaksi"
                desc="Sistem merchant website dilengkapi dengan teknologi keamanan yang canggih, seperti enkripsi data, yang melindungi informasi pribadi dan pembayaran pelanggan."
              />
              <Desc
                title="Laporan Penjualan Real-Time"
                desc="Merchant website memberikan akses ke data penjualan secara real-time, memungkinkan Anda untuk menganalisis performa bisnis dan membuat keputusan yang lebih tepat."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="faqbene">
        <FAQ />
      </div>
    </div>
    <div className="feet">
      <Footer />
    </div>
    {/* <div className="combofeet">
    </div> */}
  </div>
  
);