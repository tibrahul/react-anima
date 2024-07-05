// import React from 'react'
// import LandingHeader from './LandingHeader'
// // import './index.css';
import './all.css';
// import TopSection from './TopSection';
// import SecondSection from './SecondSection';

// const FreshLanding = () => {
//   return (
//     <>
//       <LandingHeader />
//       <TopSection />
//       <SecondSection />
//     </>
//   )
// }

// export default FreshLanding
import React, { useState } from 'react';
import { Element, Link as ScrollLink, scroller } from 'react-scroll';
import { motion } from 'framer-motion';
import './App.css'; // Add your CSS styles here

const sections = [
  { title: 'UPLOAD', description: 'Drag, drop, add descriptions & upload.', image: 'https://i.vimeocdn.com/custom_asset/535e81585d41c90fe2bb59a0e45373a5?w=632&q=80' },
  { title: 'ADD THE MICRO LOGIC', description: 'Lock the peaks of your content & build unique interactions.', image: 'https://i.vimeocdn.com/custom_asset/a4707a19ba7387976753a6324d784fc3?w=632&q=80' },
  { title: 'CUSTOMIZE', description: 'Select from micro payments, promocodes, forms & more', image: 'https://i.vimeocdn.com/custom_asset/4715a7d22333d2c4e7391477d1e86722?w=632&q=80' },
  { title: 'EMBED', description: 'Extract your unique embed code to add on your website.', image: 'https://i.vimeocdn.com/custom_asset/535e81585d41c90fe2bb59a0e45373a5?w=632&q=80' },
  { title: 'EARN', description: 'Earn audience engagement & build new revenue channels.', image: 'https://i.vimeocdn.com/custom_asset/535e81585d41c90fe2bb59a0e45373a5?w=632&q=80' }
];

const App: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (direction: 'up' | 'down') => {
    if (direction === 'down' && activeIndex < sections.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else if (direction === 'up' && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div className="app-container">
      <div className="full-screen-section">
        <h1>Welcome to our website</h1>
        <ScrollLink to="sections-container" smooth={true} duration={800}>
          <button>Start</button>
        </ScrollLink>
      </div>
      <Element name="sections-container" className="sections-container">
        <div className="left-panel">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`content ${activeIndex === index ? 'active' : ''}`}
            >
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </div>
          ))}
        </div>
        <div className="right-panel">
          {sections.slice(activeIndex).map((section, index) => (
            <motion.img
              key={index}
              src={section.image}
              alt={section.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="image"
            />
          ))}
        </div>
      </Element>
    </div>
  );
};

export default App;

