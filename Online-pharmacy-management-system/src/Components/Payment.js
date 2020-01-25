import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
var NumberFormat = require('react-number-format');

class Payment extends Component {
    submitPayment() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var cardNo = document.getElementById('cardNo').value;
        var contact = document.getElementById('contact').value;
        var payAmount = document.getElementById('payAmount').value;
        var cvcno = document.getElementById('cvcNo').value;
        var pay = payAmount.replace(/,/g, '').trim();

        // alert(' '+name+' '+email+' '+cardNo+' '+contact+' '+pay);
        if ((name != '') && (email != '') && (cardNo != '') && (payAmount != '') && (cvcno != '') && (contact != '')) {
            const payment = {
                name: name,
                email: email,
                cardNo: cardNo,
                contact: contact,
                payAmount: pay,
                cvcno: cvcno
            };

            axios.post('http://localhost:4002/payment', {
                payment
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                });


            swal({
                title: "SUCCESS",
                text: "Successfully Submited The Payment",
                icon: "success",
                button: true
            }).then((value) => {
                if (value) {
                    window.location.reload('/payment');
                }
            })
        } else {
            swal({
                title:"FIELDS ARE EMPTY",
                text:"Fill those fields correctly",
                icon:"error",
                button:true
            });
        }


    }


    render() {
        return (
            <div class="container" style={{ paddingLeft: "9%", paddingBottom: "9%" }}>
                <div class="card border-dark" style={{ width: "70%", paddingTop: "3%", paddingBottom: "3%", border: "2px solid", left:130, top:-35 }}>
                    <div style={{ paddingLeft: "23%", paddingTop: "2%" }}>
                        <h2  style={{ fontWeight: "bold", position:"relative", left:70, color:"#2FA4E7", top:-10 }}>Payment Details</h2>
                        <h6  style={{ fontWeight: "bold", position:"relative", left:300, color:"#2FA4E7", top:-10 }}>Sampath Bank</h6>
                    </div>
                    <div style={{ paddingLeft: "10%", paddingTop: "2%" }}>
                        <table style={{ fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold" , height:450, position:"relative", left:60}}>
                            <tr>
                                <td><label >Name</label></td>

                                <td ><input className="form-control" id="name" type='text' placeholder="Enter Name" style={{ width: "150%" }} /></td>
                            </tr>
                            <tr>
                                <td >Email</td>

                                <td ><input className="form-control" id="email" type='text' placeholder="Eg: abc01@gmail.com" style={{ width: "150%" }} /></td>
                            </tr>
                            <tr>
                                <td >Credit Card No</td>

                                <td ><NumberFormat format="#### #### #### ####" className="form-control" placeholder="xxxxxxxxxxx" mask="" id="cardNo" style={{ width: "150%" }} /></td>
                            </tr>
                            <tr>
                                <td >CVC No</td>

                                <td ><NumberFormat format="###" className="form-control" placeholder="CVC number"  mask="" id="cvcNo" style={{ width: "150%" }} /></td>
                            </tr>
                            <tr>
                                <td >Contact No</td>

                                <td ><NumberFormat format="### ###-####" className="form-control" placeholder="+94xxxxxxxxxx" mask="" id="contact" style={{ width: "150%" }} /></td>
                            </tr>
                            <tr>
                                <td >Pay Amount</td>

                                <td ><NumberFormat thousandSeparator={true} className="form-control" placeholder="Rs" id="payAmount" style={{ width: "150%" }} /></td>
                            </tr>
                            <tr >
                            </tr>
                        </table>
                        <div style={{position:"relative", left:200}}>
                            <button type="button" style={{ width:150}} class="btn btn-primary" onClick={this.submitPayment.bind(this)} >Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Payment;
