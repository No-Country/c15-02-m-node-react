import React, { useState, useEffect, useRef } from 'react';
import './Slider.css'

const testimonies = [
  { id: 1, name: 'John Doe', quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: 'src/assets/manos.jpg' },
  { id: 2, name: 'Jane Smith', quote: 'Praesent euismod justo id augue euismod, ac pulvinar mi semper.', image: 'src/assets/tim.jpg' },
  { id: 3, name: 'Alice Johnson', quote: 'Vestibulum eu erat non nisi consequat suscipit.', image: 'src/assets/alesia.jpg' },
];

const TestimoniesSlider = () => {
  const [currentTestimony, setCurrentTestimony] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentTestimony((prev) => (prev === testimonies.length - 1 ? 0 : prev + 1));
    }, 3000); // Change the delay (in milliseconds) here to adjust the sliding interval

    return () => clearInterval(intervalRef.current);
  }, []);

  const handleNext = () => {
    setCurrentTestimony((prev) => (prev === testimonies.length - 1 ? 0 : prev + 1));
    resetInterval();
  };

  const handlePrev = () => {
    setCurrentTestimony((prev) => (prev === 0 ? testimonies.length - 1 : prev - 1));
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentTestimony((prev) => (prev === testimonies.length - 1 ? 0 : prev + 1));
    }, 3000);
  };

  return (
    <div className="testimonies-slider">
      <div className="testimony">
        <div className="testimony-image">
          <img src={testimonies[currentTestimony].image} alt={testimonies[currentTestimony].name} />
        </div>
        <p className="quote">{testimonies[currentTestimony].quote}</p>
        <p className="name">{testimonies[currentTestimony].name}</p>
      </div>
      <div className="controls">
        <button onClick={handlePrev}>&lt; Prev</button>
        <button onClick={handleNext}>Next &gt;</button>
      </div>
    </div>
  );
};

export default TestimoniesSlider;