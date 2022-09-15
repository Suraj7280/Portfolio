import React from 'react'
import './Content.css'

import Typical from 'react-typical'



export default function Content(){
    return(
        <>
        <div className="container2">
            <div className="child1">
               <ul type="none">
                <div className="shado">
                    <li><h1><b>Hey,There</b></h1></li>
                </div> 
                <li>
                    <h1>
                    <div className="shado">
                        <b>I am a</b>
                    </div>
                        <Typical
                            steps={['Enthusiastic Dev', 1000,'Developer' , 1000,'Designer',1000,'React Dev',1000]}
                            loop={Infinity} className="design"
                     />
                    </h1>
                </li>
                <li>
                <p className="text3">
                    To work in globally competitive environment on challenging assignments that shall yeild the twin benefits of the job satisfaction and steady-pace professional growth. 
                </p>
                </li>
                <a href="contactus" className="btn btn-outline-secondary">Hire Me</a>
               </ul>
            </div>
        </div>
        
        </>
    );
}