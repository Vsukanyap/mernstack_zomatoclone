import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Find the Best Restaurants Near You</h1>
        <p>Order food from your favorite places in just a few clicks.</p>
        <input type="text" placeholder="Search for best restaurants or cuisines..." />
        <button>Search</button>
      </section>
    </div>
  );
};

export default Home;