import React from 'react'
import './About.css'

export default function About(){
    return(
        <>
        <div className="academic1">
        <div className="about-container">
                <h1 className="heading1">About</h1>
                <hr/>
                <div className="about-container1">
                    <p><b>Name:</b> Suraj Sharma<br /><b>Email:</b> surajsharma95595@gmail.com<br/><b> Current Location:</b> Ghaziabad </p>
                </div> 
                <div className="about-cont">
                    <h1 className="heading1">Education Qualification</h1>
                    <div className="subacademic1">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">High School<hr/></h5>
                                        <p className="card-text"><b>Board:</b> Central Board of Secondary Education<br /><b>Marks:</b> 446/500<br /><b>Percentage:</b> 89.2%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Intermediate<hr/></h5>
                                        <p className="card-text"><b>Board:</b> Central Board of Secondary Education<br /><b>Marks:</b> 435/500<br /><b>Percentage:</b> 87%</p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <h1 className="heading1">Technical Skills</h1>
                    <p><b>Operating System:</b> WindowsXP/Windows7/Windows10/Windows11,Pop Os(linux)<br /><b>Language Known:</b> C and Data Structure, Python, React, React-Native, HTML, CSS, JavaScript<br/><b> Computer Application:</b> MS-OFFICE</p><br />
                    <h1 className="heading1">Extracurricular Activities</h1>
                     <p>-Participated in Adobe UX Foundation Learning Journey Aligned to SSC NASSCOM UX design Foundation Curriculum<br />-Participated in E-Commence & Tech Quiz of Flipkart Grid 4.0 - Software Development Challenge organised by Flipkart<br/> -Participated and won Table tennis and Badminton Tournament</p> 
                </div>
                
            </div>
        </div>
            
        </>
    );
}