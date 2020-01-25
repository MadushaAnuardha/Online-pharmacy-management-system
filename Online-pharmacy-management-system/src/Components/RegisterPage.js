import React, {Component}from 'react';
import axios from 'axios';

class RegisterPage extends Component{

constructor(){
  super();
  this.state = {
    fName:'',
    lName:'',
    contact:'',
    email:'',
    nic:'',
    address:'',
    uName:'',
    password:'',
    password2:''
  };
}

handleChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
}

registerBtn = e => {
e.preventDefault();

const fName = this.refs.fName.value;
const lName = this.refs.lName.value;
const contact = this.refs.contact.value;
const email = this.refs.email.value;
const nic = this.refs.nic.value;
const address = this.refs.fName.value;
const uName = this.refs.uName.value;
const password = this.refs.password.value;
// console.log(fName)

axios.post('http://localhost:4002/getdata', {
  fName_data:fName,
  lName_data:lName,
  phone_data:contact,
  email_data:email,
  nic_data:nic,
  address_data:address,
  uName_data:uName,
  password_data:password

})
.then(function(response){
    console.log(response);
})
.catch(function(err){
  console.log(err);
});

console.log("this is it : "+fName)
console.log("this is it : "+password)

window.location.href = 'http://localhost:3000/#/LoginPage';
}



render(){
  return(

    <form>
      <fieldset>

        <div className="alert alert-dismissible alert-primary" style={{ position: "relative", backgroundColor:"White", width:700, height:650, left:350, top:-40}} >

          <h1 style={{textAlign:"center"}}>Register</h1>

          <div style={{height:10}}></div>

          <table style={{width:600, position:"relative", left:20, height:500}}>
            <tbody>
              <tr>
                <td>
                  <p style={{fontSize:18}}>First Name</p>
                </td>
                <td style={{width:20}}>
                  <p style={{fontSize:18}}>:</p>
                </td>
                <td>
                  <input type="text" ref="fName" name="fName" className="form-control" placeholder="First Name" onChange={e => this.handleChange(e)}/>
                </td>
              </tr>
              <tr>
                <td>
                  <p style={{fontSize:18}}>Last Name</p>
                </td>
                <td style={{width:20}}>
                  <p style={{fontSize:18}}>:</p>
                </td>
                <td>
                  <input type="lName" ref="lName" name="lName" className="form-control" placeholder="Last Name" onChange={e => this.handleChange(e)}/>
                </td>
              </tr>
              <tr>
                <td>
                  <p style={{fontSize:18}}>Phone</p>
                </td>
                <td style={{width:20}}>
                  <p style={{fontSize:18}}>:</p>
                </td>
                <td>
                  <input type="contact" ref="contact" name="contact" className="form-control" placeholder="Contact Number" onChange={e => this.handleChange(e)}/>
                </td>
              </tr>
              <tr>
                <td>
                  <p style={{fontSize:18}}>Email</p>
                </td>
                <td style={{width:20}}>
                  <p style={{fontSize:18}}>:</p>
                </td>
                <td>
                  <input type="email" ref="email" name="email" className="form-control" placeholder="Ex : abcdef@gmail.com" onChange={e => this.handleChange(e)}/>
                </td>
              </tr>
              <tr>
                <td>
                  <p style={{fontSize:18}}>NIC</p>
                </td>
                <td style={{width:20}}>
                  <p style={{fontSize:18}}>:</p>
                </td>
                <td>
                  <input type="nic" ref="nic" name="nic" className="form-control" placeholder="NIC" onChange={e => this.handleChange(e)}/>
                </td>
              </tr>
              <tr>
                <td>
                  <p style={{fontSize:18}}>Address</p>
                </td>
                <td style={{width:20}}>
                  <p style={{fontSize:18}}>:</p>
                </td>
                <td>
                  <textarea type="address" ref="address" name="address" className="form-control" placeholder="Address" onChange={e => this.handleChange(e)}></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <p style={{fontSize:18}}>User Name</p>
                </td>
                <td style={{width:20}}>
                  <p style={{fontSize:18}}>:</p>
                </td>
                <td>
                  <input type="uName" ref="uName" name="uName" className="form-control" placeholder="User Name" onChange={e => this.handleChange(e)}/>
                </td>
              </tr>
              <tr>
                <td>
                  <p style={{fontSize:18}}>Password</p>
                </td>
                <td style={{width:20}}>
                  <p style={{fontSize:18}}>:</p>
                </td>
                <td>
                  <input type="password" ref="password" name="password" className="form-control" placeholder="Password" onChange={e => this.handleChange(e)}/>
                </td>
              </tr>
              <tr>
                <td>
                  <p style={{fontSize:18}}>Confirm Password</p>
                </td>
                <td style={{width:20}}>
                  <p style={{fontSize:18}}>:</p>
                </td>
                <td>
                  <input type="password" id="password2" name="password2" className="form-control" placeholder="Re-Enter Password" onChange={e => this.handleChange(e)}/>
                </td>
              </tr>

            </tbody>
          </table>

          <button onClick={this.registerBtn.bind(this)} style={{ position:"relative", top:20, width:500, left:100}} type="button" className="btn btn-primary">Register</button>

        </div>

      </fieldset>
    </form>



);
}

}
export default RegisterPage;
