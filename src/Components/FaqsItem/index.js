import "./index.css";

const FaqsItem = ({ faq, toggleShow }) => {
  const { question, id, answer, show } = faq;

  return (
    <div className="faqsItem">
      <div className="faqsItemContainer">
        <h3 className="question">{question}</h3>
        <button className="plusButton" onClick={() => toggleShow(id)}>
          <i className="fas fa-plus plusIcon"></i>
        </button>
      </div>
      {show && <p className="para">{answer}</p>}
    </div>
  );
};

export default FaqsItem;
