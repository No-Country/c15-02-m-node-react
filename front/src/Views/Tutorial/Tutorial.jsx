import React, { useState } from 'react';
import Insertion from '../../Components/Tutorial/Insertion';
import './Tutorial.css'
import validateInput from '../../utils/validation';
import Steps from '../../Components/Tutorial/Steps';
import { useTutorialState } from '../../Context/tutorialContext';

function Tutorial() {
  const {tasks, currentTask} = useTutorialState()
  console.log(tasks.length);
  console.log(currentTask);
  return (
    <main className='tutorial-container'>
      <div className='tutorial-title'>
        <h1>Tutorial</h1>
        <hr />
      </div>
      {currentTask < tasks.length ? (
        <section>
          <Steps />
        </section>
      ) : (
        <div>
          <h2>Tutorial Completo</h2>
          <p>Felicitaciones! Completaste el tutorial.</p>
        </div>
      )}
    </main>
  );
}

export default Tutorial;