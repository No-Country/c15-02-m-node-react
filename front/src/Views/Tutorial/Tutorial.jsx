import React, { useState } from 'react';
import './Tutorial.css'
import Steps from '../../Components/Tutorial/Steps';
import { useTutorialState } from '../../Context/tutorialContext';
import SwitchButton from '../../Components/Buttons/SwitchButton';

function Tutorial() {
  const {tasks, currentTask} = useTutorialState()
  const [toggle, setToggle] = useState(false)
 
  return (
    <main className='tutorial-container'>
      <div className='tutorial-title'>
        <h1>Tutorial</h1>
        <hr />
      </div>
      {toggle ? (currentTask < tasks.length ? (
        <section>
          <Steps />
        </section>
      ) : (
        <div>
          <h2>Tutorial Completo</h2>
          <p>Felicitaciones! Completaste el tutorial.</p>
        </div>
      )) : <SwitchButton onToggle={()=>setToggle(!toggle)}/>}
    </main>
  );
}

export default Tutorial;