import React from 'react'
import './sidebar.css'
import image from "./assets/profile.jpg"
import {FiInstagram} from "react-icons/fi";
import {FiTwitter} from "react-icons/fi";
import {FiGithub} from "react-icons/fi";
import {FaFacebook} from "react-icons/fa";
import {FiLinkedin} from "react-icons/fi";

export default function Sidebar(){
    
    
    return(
        <>
            <div className="sidebar">
                <div className="container1">
                    <img src={image} alt="profile" className="image" />
                    <h2 className="text1">Suraj Sharma</h2>
                        <ul type='none'>
                            <li className="space"><a href='/'>Home</a></li>
                            <li className="space"><a href='/about'>About</a></li>
                            <li className="space"><a href='/academic'>Academic</a></li>
                            <li className="space"><a href='/specialisedin'>SpecializedIn</a></li>
                            <li className="space"><a href='/contactus'>Contact Us</a></li>
                        </ul> 
                </div>
                
                <div  className="icons">
                    <a href="https://www.instagram.com/s_raj_sh/"  className="icons1"><FiInstagram /></a>
                    <a href="https://twitter.com/s_raj_sh" className="icons1"><FiTwitter /></a>
                    <a href="https://github.com/Suraj7280" className="icons1"><FiGithub /></a>
                    <a href="/" className="icons1"><FaFacebook /></a>
                    <a href="/" className="icons1"><FiLinkedin /></a>
                </div>
                
            </div>
        
        
        </>
    );
}