import React from 'react'
import logo from "../../assets/logo.png";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header>
        <div className="logo">
            
        </div>

        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Experience</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Services</a></li>

               

                <div className="social-icons">
                    <a href="#" className="youtube"><FaYoutube /></a>
                    <a href="#" className="instagram"><AiFillInstagram /></a>
                    <a href="#" className="linkedin"><FaLinkedin /></a>
                    <a href="#" className="facebook"><FaFacebook /></a>


                </div>
            </ul>
        </nav>
    </header>
  )
}

export default Header;