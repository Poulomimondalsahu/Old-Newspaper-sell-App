import React, { useState } from 'react';
import './NewspaperTimeline.css';

const NewspaperTimeline = () => {
  const [activeEra, setActiveEra] = useState('1940s');
  
  const timelineData = {
    '1940s': {
      title: '1940s - World War II Era',
      description: 'Newspapers from the 1940s documented the most significant global conflict in history, from the battles of World War II to the formation of the United Nations.',
      image: '/image/im12.jpeg',
      headlines: [
        'Victory in Europe: Nazi Germany Surrenders',
        'Atomic Bomb Dropped on Hiroshima',
        'United Nations Charter Signed in San Francisco',
        'Churchill Delivers Iron Curtain Speech'
      ]
    },
    '1950s': {
      title: '1950s - Post-War Prosperity',
      description: 'The 1950s newspapers captured the post-war economic boom, the beginning of the Cold War, and significant social changes across the world.',
      image: '/image/im13.jpeg',
      headlines: [
        'Korean War Begins as North Invades South',
        'Queen Elizabeth II Crowned in Westminster Abbey',
        'Soviets Launch Sputnik, Space Race Begins',
        'Rosa Parks Refuses to Give Up Bus Seat'
      ]
    },
    '1960s': {
      title: '1960s - Era of Social Change',
      description: 'Newspapers of the 1960s documented a decade of profound social and political change, from civil rights movements to the space race.',
      image: '/image/im14.jpeg',
      headlines: [
        'John F. Kennedy Assassinated in Dallas',
        'Martin Luther King Jr. Delivers "I Have a Dream" Speech',
        'Neil Armstrong Becomes First Man on the Moon',
        'Woodstock Music Festival Draws 400,000'
      ]
    },
    '1970s': {
      title: '1970s - Turbulent Times',
      description: 'The 1970s newspapers covered political scandals, economic challenges, and continued social transformation around the world.',
      image: '/image/im15.jpeg',
      headlines: [
        'Watergate Scandal Forces Nixon to Resign',
        'OPEC Oil Embargo Triggers Energy Crisis',
        'Vietnam War Ends as Saigon Falls',
        'Apple Computer Founded by Jobs and Wozniak'
      ]
    },
    '1980s': {
      title: '1980s - Conservative Revolution',
      description: 'Newspapers in the 1980s documented the rise of conservative politics, the end of the Cold War, and rapid technological advancement.',
      image: '/image/im16.jpeg',
      headlines: [
        'Reagan and Thatcher Usher in Conservative Era',
        'Space Shuttle Challenger Disaster Shocks Nation',
        'Berlin Wall Falls as Cold War Thaws',
        'Live Aid Concert Raises Millions for Famine Relief'
      ]
    },
    '1990s': {
      title: '1990s - Digital Revolution',
      description: 'The 1990s newspapers captured the rise of the internet, the end of apartheid, and major geopolitical shifts following the Cold War.',
      image: '/image/im17.jpeg',
      headlines: [
        'Nelson Mandela Freed After 27 Years',
        'Soviet Union Dissolves, Cold War Ends',
        'World Wide Web Opens Internet to the Masses',
        'Princess Diana Dies in Paris Car Crash'
      ]
    }
  };
  
  const handleEraClick = (era) => {
    setActiveEra(era);
  };

  return (
    <div className="timeline-container">
      <div className="timeline-header">
        <h2>Journey Through Time</h2>
        <p>Explore newspapers from different eras that captured defining moments in history</p>
      </div>
      
      <div className="timeline-navigation">
        {Object.keys(timelineData).map((era) => (
          <button 
            key={era}
            className={`era-button ${activeEra === era ? 'active' : ''}`}
            onClick={() => handleEraClick(era)}
          >
            {era}
          </button>
        ))}
      </div>
      
      <div className="timeline-content">
        <div className="timeline-era-image">
          <img src={timelineData[activeEra].image} alt={timelineData[activeEra].title} />
          <div className="era-overlay">
            <h3>{activeEra}</h3>
          </div>
        </div>
        
        <div className="timeline-era-info">
          <h3>{timelineData[activeEra].title}</h3>
          <p>{timelineData[activeEra].description}</p>
          
          <div className="headline-list">
            <h4>Notable Headlines</h4>
            <ul>
              {timelineData[activeEra].headlines.map((headline, index) => (
                <li key={index}>
                  <i className="fas fa-newspaper"></i>
                  {headline}
                </li>
              ))}
            </ul>
          </div>
          
          <button className="explore-era-btn">
            Explore {activeEra} Newspapers
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewspaperTimeline;import React, { useState } from 'react';
import './NewspaperTimeline.css';

const NewspaperTimeline = () => {
  const [activeEra, setActiveEra] = useState('1940s');
  
  const timelineData = {
    '1940s': {
      title: '1940s - World War II Era',
      description: 'Newspapers from the 1940s documented the most significant global conflict in history, from the battles of World War II to the formation of the United Nations.',
      image: 'https://images.unsplash.com/photo-1621600411688-4be93c2c1208?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      headlines: [
        'Victory in Europe: Nazi Germany Surrenders',
        'Atomic Bomb Dropped on Hiroshima',
        'United Nations Charter Signed in San Francisco',
        'Churchill Delivers Iron Curtain Speech'
      ]
    },
    '1950s': {
      title: '1950s - Post-War Prosperity',
      description: 'The 1950s newspapers captured the post-war economic boom, the beginning of the Cold War, and significant social changes across the world.',
      image: 'https://images.unsplash.com/photo-1541726260-e6b6a6a08b27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      headlines: [
        'Korean War Begins as North Invades South',
        'Queen Elizabeth II Crowned in Westminster Abbey',
        'Soviets Launch Sputnik, Space Race Begins',
        'Rosa Parks Refuses to Give Up Bus Seat'
      ]
    },
    '1960s': {
      title: '1960s - Era of Social Change',
      description: 'Newspapers of the 1960s documented a decade of profound social and political change, from civil rights movements to the space race.',
      image: 'https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      headlines: [
        'John F. Kennedy Assassinated in Dallas',
        'Martin Luther King Jr. Delivers "I Have a Dream" Speech',
        'Neil Armstrong Becomes First Man on the Moon',
        'Woodstock Music Festival Draws 400,000'
      ]
    },
    '1970s': {
      title: '1970s - Turbulent Times',
      description: 'The 1970s newspapers covered political scandals, economic challenges, and continued social transformation around the world.',
      image: 'https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      headlines: [
        'Watergate Scandal Forces Nixon to Resign',
        'OPEC Oil Embargo Triggers Energy Crisis',
        'Vietnam War Ends as Saigon Falls',
        'Apple Computer Founded by Jobs and Wozniak'
      ]
    },
    '1980s': {
      title: '1980s - Conservative Revolution',
      description: 'Newspapers in the 1980s documented the rise of conservative politics, the end of the Cold War, and rapid technological advancement.',
      image: 'https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      headlines: [
        'Reagan and Thatcher Usher in Conservative Era',
        'Space Shuttle Challenger Disaster Shocks Nation',
        'Berlin Wall Falls as Cold War Thaws',
        'Live Aid Concert Raises Millions for Famine Relief'
      ]
    },
    '1990s': {
      title: '1990s - Digital Revolution',
      description: 'The 1990s newspapers captured the rise of the internet, the end of apartheid, and major geopolitical shifts following the Cold War.',
      image: 'https://images.unsplash.com/photo-1591983358615-662ef49ed987?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      headlines: [
        'Nelson Mandela Freed After 27 Years',
        'Soviet Union Dissolves, Cold War Ends',
        'World Wide Web Opens Internet to the Masses',
        'Princess Diana Dies in Paris Car Crash'
      ]
    }
  };
  
  const handleEraClick = (era) => {
    setActiveEra(era);
  };

  return (
    <div className="timeline-container">
      <div className="timeline-header">
        <h2>Journey Through Time</h2>
        <p>Explore newspapers from different eras that captured defining moments in history</p>
      </div>
      
      <div className="timeline-navigation">
        {Object.keys(timelineData).map((era) => (
          <button 
            key={era}
            className={`era-button ${activeEra === era ? 'active' : ''}`}
            onClick={() => handleEraClick(era)}
          >
            {era}
          </button>
        ))}
      </div>
      
      <div className="timeline-content">
        <div className="timeline-era-image">
          <img src={timelineData[activeEra].image} alt={timelineData[activeEra].title} />
          <div className="era-overlay">
            <h3>{activeEra}</h3>
          </div>
        </div>
        
        <div className="timeline-era-info">
          <h3>{timelineData[activeEra].title}</h3>
          <p>{timelineData[activeEra].description}</p>
          
          <div className="headline-list">
            <h4>Notable Headlines</h4>
            <ul>
              {timelineData[activeEra].headlines.map((headline, index) => (
                <li key={index}>
                  <i className="fas fa-newspaper"></i>
                  {headline}
                </li>
              ))}
            </ul>
          </div>
          
          <button className="explore-era-btn">
            Explore {activeEra} Newspapers
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewspaperTimeline;