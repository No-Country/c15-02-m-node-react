import React, { useState } from 'react';
import './SwitchButton.css'; 

const SwitchButton = () => {
  const [switchIsOn, setswitchIsOn] = useState(false);

  const handleClick = () => {
    setswitchIsOn(!switchIsOn);
  };

  //Cuando este el contexto
  //setNavBar(!navBar) => Aparece y desaparece la nav

  return (
    <div
      className={`switch-button ${switchIsOn ? 'on' : 'off'}`}
      onClick={handleClick}
    >
      <div className="ball" />
    </div>
  );
};

export default SwitchButton;