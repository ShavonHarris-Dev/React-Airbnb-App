import React from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from './components/Card';
import Data from './components/data';





function App() {
  const cardElements = Data.map(card => {
    return <Card 
    key={card.id}
    card={card}
   
    // give the prop name card the entire card object rather than listing them out by dot notation
    />
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
      {cardElements}
      </section>
    </div>
  );
}

export default App;

