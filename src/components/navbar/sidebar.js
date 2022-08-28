import React from 'react'
import './sidebar.css'
import image from "./assets/profile.jpg"
import {FiInstagram} from "react-icons/fi";
import {FiTwitter} from "react-icons/fi";
import {FiGithub} from "react-icons/fi";
import {FaFacebook} from "react-icons/fa";
import {FiLinkedin} from "react-icons/fi";
import Content from './content/Content'
import {BrowserRouter,Link} from 'react-router-dom';




export default function Sidebar(){
    return(
        <>
        <div className="sidebar">
            <div className="conatainer">
                <img src={image} alt="profile" className="image" />
                <h2 className="text1">Suraj Sharma</h2>
            </div>
            <div>
            <p className="text2">surajsharma95595@gmail.com</p>
            </div>
            <div className="link-container">
               <BrowserRouter>
                    <ul type='none'>
                        <li className="space"><Link to='/'>Home</Link></li>
                        <li className="space"><Link to='/about'>About</Link></li>
                        <li className="space"><Link to='/academic'>Academic Projects</Link></li>
                        <li className="space"><Link to='specializedin'>Specialized In</Link></li>
                        <li className="space"><Link to='contactus'>Contact Us</Link></li>
                    </ul> 
               </BrowserRouter> 
            </div>
            <div  className="icons">
                <a href="https://www.instagram.com/s_raj_sh/"  className="icons1"><FiInstagram /></a>
                <a href="/" className="icons1"><FiTwitter /></a>
                <a href="/" className="icons1"><FiGithub /></a>
                <a href="/" className="icons1"><FaFacebook /></a>
                <a href="/" className="icons1"><FiLinkedin /></a>
            </div>
            
        </div>
        <div className="content">
            <Content />
        </div>
        
        </>
    );
}