import React, { Component } from 'react';
// import { Route, NavLink, HashRouter } from "react-router-dom";
// import Login from './Components/Login';

class Home extends Component {
    render() {
        return (
            <div class="container">

            <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{position:"relative", height:50, width:1550, top:-30, left:-210}}>

                <div className="collapse navbar-collapse" id="navbarColor01">
                  <form className="form-inline my-2 my-lg-0">
                    <div className="form-group">
                      <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                          <a class="nav-link" href="#/home">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#/register">Register</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#/nearPharm">NearPharm</a>
                        </li>
                      </ul>
                    </div>
                  </form>
                </div>
            </nav>

                <h2>PHARMACY</h2>
                <p>
                Pharmacy
                PharmacistsMortar.svg
                Occupation
                Names	Pharmacist, Chemist, Doctor of Pharmacy, Druggist, Apothecary or simply Doctor
                Occupation type
                Professional
                Activity sectors
                health care, health sciences, chemical sciences
                Description
                Education required
                Doctor of Pharmacy, Master of Pharmacy, Bachelor of Pharmacy, Diploma in Pharmacy
                Related jobs
                Doctor, pharmacy technician, toxicologist, chemist, pharmacy assistant, other medical specialists

                The Apothecary or The Chemist by Gabriël Metsu (c. 1651–67)
                Pharmacy is the science and technique of preparing and dispensing drugs. It is a health profession that links health sciences with chemical sciences and aims to ensure the safe and effective use of pharmaceutical drugs.</p>

            </div>
        );
    }
}

export default Home;
