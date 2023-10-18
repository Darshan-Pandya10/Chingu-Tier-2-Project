import React, { useState } from 'react';
import { BiSolidDownArrow } from 'react-icons/bi';

function QnACard({ data }) {
  const { question, answer } = data;
  const [isCardVisible, setIsCardVisible] = useState(false);

  return (
    <div className='QnACard border-2 border-black border-solid p-4 my-6 mx-4 w-fit sm:rounded-lg'>
      <div className='question-btn-div flex items-center justify-start'>
        <h3 className='question text-[1.3rem] sm:tracking-widest'>{question}</h3>
        <button className='p-2 my-0 mx-0 border-none outline-none bg-transparent cursor-pointer text-lg' onClick={() => setIsCardVisible(!isCardVisible)}>
          <BiSolidDownArrow />
        </button> 
      </div>
      {isCardVisible && <p className='answer sm:tracking-wider'>{answer}</p>}
    </div>
  );
}

export default QnACard;