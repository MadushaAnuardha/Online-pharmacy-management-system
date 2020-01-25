import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
// import axios from 'axios';
import './App.css';
// import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import NearPharm from './Components/NearPharmacy';
import RegisterPage from './Components/RegisterPage';
import LoginPage from './Components/LoginPage';
import Payment from './Components/Payment';
import Clock from 'react-live-clock';
import Background from '../src/img/medicine-2207622_960_720.jpg';




class App extends Component {

  Navreg(){

      window.location.href = 'http://localhost:3000/#/RegisterPage';

  }

  Navlogin(){

      window.location.href = 'http://localhost:3000/#/LoginPage';

  }

  // renderItem = ({ u_id,u_fname,u_lname}) => <div key={u_id}>{u_fname +' '+u_lname}</div>

  render() {
    // const { items } = this.state;
    return (
      <HashRouter >
        <div>
          <div>
            <div class="" style={{ paddingBottom: "30px", backgroundColor:"#aedcf5"}}>
              <nav>
                <h2 style={{ paddingLeft: "3%", position:"relative", top:15 , color: "black", display: "block-inline", width: "150%" }}>Online Pharmacy</h2>
                <h5 style={{ paddingLeft: "20%", position:"relative", top:20 , color: "black", display: "block-inline", width:40 }}>System</h5>
              </nav>
                <nav  style={{float:"right",color: "black",fontFamily:"Arial, Helvetica, sans-serif",position:"relative", top:-60, left:-650}}  >
              <h3><label style={{}}><Clock format={'Y-MMM-dddd'}  ticking={true} timezone={'Asia/Colombo'} /></label></h3>
              <h3><label style={{fontSize:'30px'}}><Clock format={'HH:mm:ss A'}  ticking={true} timezone={'Asia/Colombo'} /></label></h3>
              </nav>
              <nav style={{position:"relative", left:1200}}>
                <div>
                  <button type="button" className="btn btn-primary" style={{position:"relative", width:120, height:35, fontSize:15, top:-50}} onClick={this.Navlogin.bind(this)} >Login</button>
                </div>
                <div>
                  <button type="button" className="btn btn-primary" style={{position:"relative", width:120, height:35, fontSize:15, top:-20}} onClick={this.Navreg.bind(this)} >Register</button>
                </div>
              </nav>
            </div>

            <div  >
              <Route exact path="/home" component={Home} />
              <Route path="/register" component={Register} />
              <Route path="/RegisterPage" component={RegisterPage} />
              <Route path="/LoginPage" component={LoginPage} />
              <Route path="/nearPharm" component={NearPharm} />
              <Route path="/payment" component={Payment} />
            </div>
          </div>
        </div>
      </HashRouter >
    );
  }
}

export default App;
