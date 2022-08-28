import React from 'react'
import './Content.css'

import Typical from 'react-typical'



export default function Content(){
    return(
        <>
        <div className="container">
            <div className="child1">
               <ul type="none">
                <li><h1><b>Hey,There</b></h1></li>
                <li>
                    <h1><b>I am a</b>
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
                <li><button type="button" className="btn btn-outline-secondary">Hire me</button></li>
               </ul>
            </div>
        </div>
        
        </>
    );
}