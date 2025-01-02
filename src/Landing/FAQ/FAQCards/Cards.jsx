import './Cards.css'

const FaqCards = ({question, answer, check}) => (
    <div className={`faq-card-main ${check}`}>
        <h4 className="faq-card-question">
            {question}
        </h4>
        <p className="faq-card-answer">
            {answer}
        </p>
    </div>
)

export default FaqCards