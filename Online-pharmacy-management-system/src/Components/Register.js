import React, { Component } from 'react';
import swal from 'sweetalert';
import axios from 'axios';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            cartList: [],
            priceQty: '',
            totalPrice: '',
            quantity: ''
        }
    }

    searchDrugs() {
        var drugName = document.getElementById('drugName').value;
        // alert(drugName);
        if (drugName == '') {
            axios.get(`http://localhost:4002/users/`)
                .then(res => {
                    console.log(res.data)
                    this.setState({ users: res.data });
                })
        } else {
            axios.get(`http://localhost:4002/users2/${drugName}`)
                .then(res => {
                    console.log(res.data)
                    this.setState({ users: res.data });
                })
        }

    }

    addList(name, price) {

        // console.log(name);
        const drugs = this.state.cartList.concat([{ name: name, price: price }]);
        console.log(drugs);
        this.setState({
            cartList: drugs

        });
    }
    qty() {
        var qty = 0;
        var unitPrice = 0;
        var newPrice = 0;
        unitPrice = this.refs.unitPrice.value;
        qty = this.refs.qty.value
        console.log('Function console and price:=' + qty + ' ' + unitPrice)
        newPrice = unitPrice * qty;
        this.setState({
            quantity: newPrice
        });
    }

    //Remove items from the cartlist
    removeItem(item) {
        // alert("item remove");
        const newDrugsItem = this.state.cartList.filter(drugItem => {
            return drugItem !== item;
        })
        this.setState({
            cartList: [...newDrugsItem]
        });
        console.log(item);
    }

    cartSubmit(drugList) {
        if (drugList.length == 0) {
            swal({
                title: "Please Add",
                text: "Drugs Into This Cart",
                icon: "info",
                button: true
            });
        } else {
            swal({
                title:'Your Payment Is',
                text:'Processing',
                icon:'info',
                button:true,
            }).then((value) =>{
                window.location.href = 'http://localhost:3000/#/payment';
            })


        }

    }


    render() {
        var unitPrice = 0;
        var price = 0;
        var qty = 0;
        // console.log(listDrug.price);
        console.log(this.state.quantity);
        var drugList = this.state.cartList.map(listDrug => {

            return (
                <div>
                    <table class="table">

                        <tr class="table-primary">
                            <td >
                                <strong >{listDrug.name}</strong>
                            </td>
                            <td>
                                <input ref="unitPrice" style={{ width: "50px", textAlign: "center" }} value={listDrug.price} />
                            </td>
                            <td >
                                <input type="text" ref="qty" onChange={this.qty.bind(this)} placeholder="Qty" style={{ width: "50px", color: "black", paddingBottom: "-10px", textAlign: "center" }} />
                            </td>
                            <td >
                                <input type="text" id="priceQty" value={this.state.quantity} placeholder="Qty" style={{ width: "50px", color: "black", paddingBottom: "-10px", textAlign: "center" }} />
                            </td>
                            <td >
                                <label onClick={this.removeItem.bind(this, listDrug)} style={{ cursor: "pointer" }}>X</label>
                            </td>
                        </tr>

                    </table>
                </div>
            )
        });


        return (

            <div class="container">

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

            <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{position:"relative", top:0}}>

              <div className="collapse navbar-collapse" id="navbarColor01">
                <form className="form-inline my-2 my-lg-0">

                  <div className="form-group">

                    <div style={{width:40}}/>
                    <label htmlFor="" style={{color:"white", fontSize:20, width:150}}>Drug Name</label>
                    <input className="form-control mr-sm-2" type="text" id="drugName" placeholder="Search" style={{width:300}}/>
                    <button class="btn btn-secondary my-2 my-sm-0"  onClick={this.searchDrugs.bind(this)} id="serBtn" type="submit">Search</button>


                  </div>

                </form>
              </div>
            </nav>


                <div class="container" style={{ paddingTop: '10px', width: '50%', float: 'left' }}>
                    <div style={{ borderRadius: '5px', paddingLeft: '10px', paddingTop: '30px' }}>
                        <div class="form-group">
                            <div style={{ paddingTop: "10px" }}>
                                <table class="table" >
                                    <thead class="thead-light">
                                        <tr class="table-success">
                                            <th scope="col">Drug Name</th>
                                            <th scope="col">Drug Stregnth</th>
                                            <th scope="col">Price</th>
                                            <th scope="col"></th>
                                        </tr>

                                    </thead>
                                    <tbody class="">
                                        {this.state.users.map(users =>
                                            <tr class="table-info">
                                                <td>{users.drug_name}</td>
                                                <td>{users.drug_strength}</td><td>{users.price.toFixed(2)}</td>
                                                <td><button type="button" class="btn btn-primary" id="addBtn" onClick={this.addList.bind(this, users.drug_name, users.price)} >Buy</button></td>
                                            </tr>)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
                <div style={{ float: "right" }}>
                    <label class="text-info" style={{ position:"relative", left:60, fontWeight: 'bold', fontSize: '150%', paddingTop: '30px' }}>Drug cart</label>
                    <td>{drugList}</td>
                    <div style={{ float: "right" }}>
                        <div>
                            <tr>
                                <td style={{ paddingRight: "50px" }}>
                                    <label><b>Total</b></label>
                                </td>
                                <td style={{ paddingRight: "100px" }}>
                                    <label>Rs.{this.state.totalPrice}</label>
                                </td>
                                <td>
                                    <button type="button" style={{ padding: "5px", width: "70px" }} onClick={this.cartSubmit.bind(this, drugList)} class="btn btn-primary">PAY</button>
                                </td>
                            </tr>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
