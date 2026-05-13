import React from 'react'
import Header from '../Headers/Header.jsx';
import { FaArrowUp } from "react-icons/fa";


const Home = () => {
  return (
    <div className="hero-container">
        <Header/>
        <div className="hero-content">
          <h1>A Coding Enthusiast <br /> Passionate <br /> of Solving Problems</h1>

          <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor </p>

          <button>Explore <FaArrowUp  style={{
            transform:"rotate(40deg)", }}
            /></button>
        </div>
    </div>
  )
}

export default Home;