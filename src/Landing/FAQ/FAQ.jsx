// import { Footer } from '../../Nav/Footer';
import './FAQ.css'
import FaqCards from './FAQCards/Cards'

const FAQ = () => {
    return (
      <div className="combo-with-footer">
        <div className="faq-main" id="faq-section">
          <div className="faq-text">
            <p className="faq-short">FAQ</p>
            <h3 className="faq-long">Frequently Asked Questions</h3>
          </div>
          <div className="faq-list">
            <div className="lists-faq">
              <FaqCards
                check="odd"
                question="Apa tujuan dari Yamisok Merchant?"
                answer="Tujuan Yamisok Merchant adalah untuk memudahkan transaksi sehari-hari berdasarkan apa yang pengguna kami butuhkan."
              />
              <FaqCards
                check="even"
                question="Bagaimana caranya untuk bergabung?"
                answer="Untuk bergabung, anda hanya perlu untuk mendaftarkan diri di laman Register kami. Tidak ada biaya sama sekali yang diperlukan untuk bergabung ke Yamisok Merchant."
              />
            </div>
            <div className="lists-faq">
              <FaqCards
                check="even"
                question="Apakah keamanan data Yamisok Merchant terjamin?"
                answer="Keamanan data Yamisok Merchant terjamin karena syarat dan kebutuhan yang ditampung telah dienkripsi serta sudah bersertifikat ISO 27001 dan bersertifikat BI."
              />
              <FaqCards
                check="odd"
                question="Dimana saya bisa bertanya lebih lanjut mengenai Yamisok Merchant?"
                answer="Anda dapat menghubungi kami melalui laman Kontak Kami."
              />
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
}

export default FAQ; 