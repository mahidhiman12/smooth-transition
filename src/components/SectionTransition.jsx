import React, { useState } from 'react';
import './SectionTransition.css';

const SectionTransition = () => {
  const [isBlack, setIsBlack] = useState(false);

  const handleTransition = () => {
    setIsBlack(!isBlack);
  };




  return (
    <>
    <div className='heading'> <h2>Welcome to "BlackOut"</h2> </div>
    <div className={`screen ${isBlack ? 'black' : 'white'}`}>
      
      <button onClick={handleTransition} className="transition-btn">
       Click to change
      </button>
    </div>
    </>
  );
};

export default SectionTransition;
