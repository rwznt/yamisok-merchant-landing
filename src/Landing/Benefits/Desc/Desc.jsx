import './Desc.css'

const Desc = ({title, desc}) => (
    <div className="desc-main">
        <div className="desc-title">
            <h4 className="desc-title">{title}</h4>
        </div>
        <hr />
        <div className="desc-content">
            <p className="desc-content">{desc}</p>
        </div>
    </div>
)

export default Desc