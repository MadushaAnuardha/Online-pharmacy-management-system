// import React, { Component } from 'react';
// import axios from 'axios';
// // import Home from './Components/Home';
// // import './App.css';

// class Login extends Component {
//   getAuthenDetails(e) {
//     e.preventDefault();
//     var uname = this.refs.uname.value;
//     var pass = this.refs.pass.value;
//     alert(uname + ' ' + pass);
//     // axios.get(`http://localhost:4000/users`)
//     //   .then(function (response) {

//     //   })
//     if (uname == "kaveen" && pass == "123") {
//       this.props.history.push("/");
//     } else {
//       this.props.history.push("/login");
//     }

//   }

//   constructor(props) {
//     super(props);
//     this.state = {
//       items: 'Pharmacy'
//     }
//   }
//   render() {
//     return (
//       <div class="container" style={{ paddingTop: '30px', width: '350px',float:"left" }}>
//         <div style={{ border: '2px solid white', boxShadow: '0.1px 0.1px 1px 1px', borderRadius: '5px', paddingLeft: '10px', paddingTop: '30px' }}>
//           <div>
//             <label class="text-info" style={{ paddingLeft: '75px', paddingBottom: '20px', fontWeight: 'bold', fontSize: '25px' }} >Login</label>
//           </div>
//           <div class="form-group">
//             <div>
//               <lable id="nameLabel">Username</lable>
//               <input type="text" id="unameInput" class="form-control" placeholder="username" ref="uname" />
//             </div>
//             <div style={{ paddingTop: '20px' }}>
//               <lable id="nameLabel">Password</lable>
//               <input type="password" id="passInput" class="form-control" placeholder="password" ref="pass" />
//             </div>
//             <table>
//               <tr>
//                 <td>
//                   <p><a href="#/register" >create new account</a></p>
//                 </td>
//               </tr>
//               <tr>
//                 <td>
//                   <div style={{ paddingTop: '40px', paddingLeft: '60px' }}><button style={{ width: '100px' }} onClick={this.getAuthenDetails.bind(this)} class="btn btn-primary" id="serBtn">LOG IN</button></div>
//                 </td>
//               </tr>
//             </table>
//             <div>

//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Login;