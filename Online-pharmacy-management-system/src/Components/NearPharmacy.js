import React, { Component } from 'react';

class NearPharmacy extends Component{
    render(){
        return(
            <div class="container" style={{}}>

            <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{position:"relative", height:50, width:1550, top:-30, left:-210}}>

                <div className="collapse navbar-collapse" id="navbarColor01">
                  <form className="form-inline my-2 my-lg-0">
                    <div className="form-group">
                      <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                          <a class="nav-link" href="#/register">Drugs</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#/nearPharm">About us</a>
                        </li>
                      </ul>
                    </div>
                  </form>
                </div>
            </nav>

                <h2>About Us</h2>
                  <p style={{position:"relative", top:40, color:"Black", fontWeight:'bold'}}>OnlinePharmacy is an online portal owned and operated by ABC (Pvt) Ltd which is a company duly incorporated in the Democratic Socialist Republic of Sri Lanka under the company and which has its registered office in Malabe.

                  The goal of OnlinePharmacy is to ensure that pharmaceutical products are delivered instantly to customers, as requested, within the limits of Colombo. Therefore, ABC (Pvt) Ltd has launched an online portal to place the customer order and the mobile application to process the order by the pharmacist in the back-end.

                  The OnlinePharmacy portal will have a wide range of health-related products, such as over-the-counter medications, surgical items, medical devices and cosmetics. In addition, OnlinePharmacy will deliver prescription medications once a client / patient / caregiver loads the valid prescription into the OnlinePharmacy portal. Customers must agree to the terms and conditions and be informed about the privacy policy in order to use OnlinePharmacy's online portal via desktop computer safely'.

                  Pharmacists assigned by OnlinePharmacy would monitor each and every step of the order for the delivery process and communicate with relevant customers and pharmacies to ensure the safe, effective and efficient delivery of orders placed by customers. In addition, the relevant pharmacies would ensure that customers can cancel the quality and safety of each product ordered or ordered before the approval and verification of the order.</p>
            </div>
        );
    }
}

export default NearPharmacy;
