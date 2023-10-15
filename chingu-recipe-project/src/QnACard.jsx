import React, { useState } from 'react';
import { BiSolidDownArrow } from 'react-icons/bi';

function QnACard({ data }) {
  const { question, answer } = data;
  const [isCardVisible, setIsCardVisible] = useState(false);

  return (
    <div className='QnACard'>
      <div className='question-btn-div'>
        <h3 className='question'>{question}</h3>
        <button onClick={() => setIsCardVisible(!isCardVisible)}>
          <BiSolidDownArrow />
        </button>
      </div>
      {isCardVisible && <p className='answer'>{answer}</p>}
    </div>
  );
}

export default QnACard;
