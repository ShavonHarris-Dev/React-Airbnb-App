import React from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from './components/Card';
import Data from './components/data';





function App() {
  const cardElements = Data.map(card => {
    return <Card 
    key={card.id}
    coverImg={card.coverImg} 
    rating={card.stats.rating} 
    reviewCount={card.stats.reviewCount}
    location={card.location}
    title={card.title}
    price={card.price}
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

//  img="katie-zaferes.png"
// rating="5.0"
// reviewCount={6}
// location="USA"
// title="Life Lessons with Katie Zaferes"
// price={136}
