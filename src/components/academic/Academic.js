import React from 'react'
import './Academic.css'
import {FiGithub} from "react-icons/fi";

export default function Academic(){
    return(
        <div className="academic">
            <div className="subacademic">
                <h1 className="aproject">
                    Academic Projects
                </h1>
                <hr />
            <div className="subacademic1">
                <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Delhi-Tour</h5>
                        <p className="card-text">This app helps people to find famous places in Delhi to Visit.This app contain informations about many famous palces of Delhi.</p>
                        <a href="https://github.com/Suraj7280/Delhi-Tour.git" className="btn btn-primary"><FiGithub /> Git Hub</a>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Gym-workout</h5>
                        <p className="card-text">This app is all about the gym related things like on the particular day which exercise we should do.</p>
                        <a href="https://github.com/Suraj7280/Gym-workout.git" className="btn btn-primary"><FiGithub /> Git Hub</a>
                    </div>
                    </div>
                </div>
                </div> 
            </div>
            <div className="subacademic1">
                <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Engineering-Chemistry</h5>
                        <p className="card-text">This app is all about the education .This app is related to Engineering Chemistry likes notes and previous year paper.</p>
                        <a href="https://github.com/Suraj7280/Engineering-Chemistry.git" className="btn btn-primary"><FiGithub /> Git Hub</a>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">alastin-the-fighter</h5>
                        <p className="card-text">This is a online multiplayer zombies fighting game where you have to fight with zombies with your teammates.</p>
                        <a href="https://github.com/Suraj7280/alastin-the-fighter.git" className="btn btn-primary"><FiGithub /> Git Hub</a>
                    </div>
                    </div>
                </div>
                </div> 
            </div>
            <div className="subacademic1">
                <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Portfolio</h5>
                        <p className="card-text">This Portfolio is made by using the react-native app where my skills are defined.</p>
                        <a href="/" className="btn btn-primary"><FiGithub /> Git Hub</a>
                    </div>
                    </div>
                </div>
                </div> 
            </div>

            </div>
        </div>
    );
}