import React, { useState } from 'react';
import Insertion from '../../Components/Tutorial/Insertion';
import './Tutorial.css'
import validateInput from '../../utils/validation';

function Tutorial() {
  const steps = [
    { type: 'text', label: 'Nombre' },
    { type: 'text', label: 'Apellido' },
    { type: 'email', label: 'Email' },
    { type: 'number', label: 'DNI' },
    { type: 'password', label: 'Password' },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [isStepValid, setStepValid] = useState(true);

  const handleStepSubmit = (input) => {
    // Validate the input of the current step
    const isValid = validateInput(input, steps[currentStep].type);
    setStepValid(isValid);

    if (isValid) {
      // Move to the next step if the input is valid
      setCurrentStep(currentStep + 1);
      setStepValid(true);
    }
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInput(inputValue);
  };

  return (
    <main className='tutorial-container'>
      <div className='tutorial-title'>
        <h1>Tutorial</h1>
        <hr />
      </div>
      {currentStep < steps.length ? (
        <section>
          <h2>{steps[currentStep].label}</h2>
          <Insertion
            type={steps[currentStep].type}
            onInputChange={handleInputChange}
            onSubmit={handleStepSubmit}
            isValid={isStepValid}
          />
        </section>
      ) : (
        <div>
          <h2>Tutorial Completed</h2>
          <p>Congratulations! You have completed the tutorial.</p>
        </div>
      )}
    </main>
  );
}

export default Tutorial;