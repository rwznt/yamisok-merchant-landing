import './MerchCards.css'

const MerchCards = ({ logo, title, desc, links }) => (
  <div className="merchcard-main">
    <div className="merchcard-logo">
      <img src={logo} alt="Logo" className='merchacard-logo-img'/>
    </div>
    <div className="merchcard-content">
      <div className="merchcard-title">
        <h4 className="merchcard-title">{title}</h4>
      </div>
      <div className="merchcard-desc">{desc}</div>
    </div>
    <div className="merchcard-link">
      <a href={links} className="merchcard-link">
        Pelajari Lebih Lanjut
      </a>
    </div>
  </div>
);

export default MerchCards