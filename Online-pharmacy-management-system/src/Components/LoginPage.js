import React, { Component } from 'react';
import swal from 'sweetalert';
import { table } from 'table';

class LoginPage extends Component {

Navreg(){

      window.location.href = 'http://localhost:3000/#/RegisterPage';

  }

Navhome(){

  var userName = document.getElementById('userName').value;
  var password = document.getElementById('password').value;

  if (userName != '' && password != '') {

      if( userName == 'admin' && password == 'admin'){

          window.location.href = 'http://localhost:3000/#/register';

      }

      else{

        swal({
            title: "Invalid User Name and Password",
            text: "Try again with correct user name and password",
            icon: "error",
            button: true
        });
      }

    }
    else{

        if ( userName == '' && password == ''){
          swal({
              title: "Fields are empty",
              text: "Enter user name and password",
              icon: "warning",
              button: true
          });
        }
        else if ( userName == '' ) {

          swal({
              title: "User name field is empty",
              text: "Enter user name",
              icon: "warning",
              button: true
          });

        }

        else{

          swal({
              title: "Password field is empty",
              text: "Enter password",
              icon: "warning",
              button: true
          });
        }

    }
}

  render(){
    return(
    <form  className="container" style={{position:"relative"}}>
        <fieldset>

          <div className="form-control" style={{position:"relative", width:700, height:500, top:-30, right:-210, backgroundColor:""}}>


                      <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{position:"relative", height:50, width:700, top:-30, left:-12}}>

                          <div className="collapse navbar-collapse" id="navbarColor01">
                            <form className="form-inline my-2 my-lg-0">
                              <div className="form-group">
                                  <p style={{position:"relative", left:280, fontSize:30, top:10, color:"black"}}>Welcome</p>
                              </div>
                            </form>
                          </div>
                      </nav>


            <table style={{position:"relative", top:30, height:125, left:50}}>
              <tbody>
                <tr>
                    <td>
                      <label htmlFor="exampleInputUserName1" style={{width:150, color:"Black"}}>User Name</label>
                    </td>
                    <td>
                      <input type="userName" className="form-control" id="userName" aria-describedby="UserNameHelp" placeholder="User Name" style={{width:400, height:35}}/>
                    </td>
                </tr>
                <tr style={{height:20}}>
                </tr>
                <tr>
                    <td>
                      <label htmlFor="exampleInputPassword1" style={{width:150, color:"Black"}}>Password</label>
                    </td>
                    <td>
                      <input type="password" className="form-control" id="password" placeholder="Password" style={{width:400, height:35}}/>
                    </td>
                </tr>
              </tbody>
            </table>
            <div style={{position:'relative',left:300,top:70}}>
              <button type="button" className="btn btn-primary" style={{width:120, height:35, fontSize:15}} onClick={this.Navhome.bind(this)} >Login</button>
            </div>

            <div style={{width:600, backgroundColor:"black", height:2, position:"relative", left:50, top:120}}></div>

            <div style={{position:'relative',left:105,top:170}}>
              <button type="button" className="btn btn-primary" style={{width:120, height:35, fontSize:15}} onClick={this.Navreg.bind(this)} >New User</button>
            </div>

            <div style={{position:'relative',left:400,top:130}}>
              <small id="Help" className="form-text text-muted" style={{fontSize:12}}>New user has to register first to login.</small>
            </div>

          </div>
        </fieldset>
      </form>


);
}
}

export default LoginPage;
