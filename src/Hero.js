import React from 'react';
import './Hero.css';
// import backgroundImage from './ZenDesk.png'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h2>Welcome to Zen Dev Hub</h2>
        <p>Experience balance in your digital presence.</p>
        <button className="explore-button">Explore More</button>
      </div>
      <div className="hero-image">
        <img src="nature-image.jpg" alt="Zen Nature" />
      </div>
    </section>
  );
}

export default Hero;
