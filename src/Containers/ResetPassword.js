import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Auth from "../Authentication/Auth";
//  import Nav from './Nav'
// import CustomerNav from './CustomerNav'
//  import Footer from './Footer'
// import Cart from './Cart';

export class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: [],
      token: "",
      login: "",
      fName: "",
      lName: "",
      email: "",
      password: "",
      cDeleteEmail: "",
    };

    this.setFname = this.setFname.bind(this);
    this.setLname = this.setLname.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    // this.setDeleteEmail = this.setDeleteEmail.bind(this);
    // this.deleteCustomer = this.deleteCustomer.bind(this);
    // this.handleLogin = this.handleLogin.bind(this);
    // this.updateCustomer = this.updateCustomer.bind(this);
  }

  setFname(event) {
    this.setState({
      fName: event.target.value,
    });
  }
  setLname(event) {
    this.setState({
      lName: event.target.value,
    });
  }
  setEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  setPassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  // setDeleteEmail(event){
  //     this.setState({
  //         cDeleteEmail: event.target.value
  //     });
  // }

  // deleteCustomer(event){
  //     let deleteCusEmail = this.state.cDeleteEmail;
  //     axios.get('/CustomerProf/delete-customer/' + deleteCusEmail);
  //     this.setState({
  //         cDeleteEmail:""
  //     });
  // }
  componentDidMount() {
    // let {email} = this.props.match.params;
    // let {token} = this.props.match.params;
    // console.log(token);
    // console.log(email);
    this.profile();
    //  this.handleToken(token);
    //  this.getToken(token);
  }

  async profile() {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: Auth.getUserId() }),
      };
      const res = await fetch(
        "http://localhost:5000/reset/reset",
        requestOptions
      );
      const user = await res.json();
      console.log(user);
      this.setState({
        fName: user.fname,
        lName: user.lname,
        email: user.email,
        password: "",
      });
    } catch (e) {
      console.log(e);
    }
  }

  // handleToken(token){
  //     console.log(token);
  //     this.setState({
  //         token:token
  //     })
  // }

  // getToken(token){
  //     let gToken = token;
  //     console.log(gToken);
  //     this.setState({
  //         login:gToken
  //     })
  //     //  axios.get('/CustomerProf/logged/' + gToken);
  // }

  // handleLogin(){
  //     console.log(this.state.login);
  //     let logStatus = this.state.login;
  //     axios.post('/CustomerProf/logged/' + logStatus).then(function(req,res) {

  //         console.log('FRONTEND : ' + res.data.logStatus);
  //     });
  // }

  // render() {
  //     return (
  //         <Router>
  //         <Switch>
  //         <Route path="/CustomerProf/Cart/:logged" component={Cart}></Route>
  //         <div>
  //         {/* <Nav></Nav> */}
  //         <CustomerNav token={this.state.token}></CustomerNav>
  //         <button onClick={this.handleLogin}>Browse Products</button>
  //         <div className="card bg-light mt-3" style={{width:"600px", marginLeft:"400px"}}>
  //           <form className="form-signin" action="/CustomerProf/update-customer" method="POST">
  //                 <h1 className="h3 mb-3 font-weight-normal">Account Details</h1>
  //                 <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
  //                 <div className="input-group-prepend">
  //                     <div className="input-group-text">First Name</div>
  //                 </div>
  //                 <input type="text" id="inputFname"  name="uFname" onChange={this.setFname}  defaultValue= {this.state.customer.fName} className="form-control" placeholder="First name"  autoFocus></input>
  //                 </div>

  //                 <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
  //                 <div className="input-group-prepend">
  //                     <div className="input-group-text">Last Name</div>
  //                 </div>
  //                 <input type="text" id="inputLname" name="uLname" onChange={this.setLname} defaultValue= {this.state.customer.lName} className="form-control" placeholder="Last name"  autoFocus></input>
  //                 </div>

  //                 <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
  //                 <div className="input-group-prepend">
  //                     <div className="input-group-text">Mobile</div>
  //                 </div>
  //                 <input type="text" id="inputMob" name="uMobile" onChange={this.setMobile} defaultValue= {this.state.customer.mobile} className="form-control" placeholder="+94xxxxxxxxx"  autoFocus></input>
  //                 </div>

  //                 <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
  //                 <div className="input-group-prepend">
  //                     <div className="input-group-text">Email</div>
  //                 </div>
  //                 <input type="email" id="inputEmail1" name="uEmail" onChange={this.setEmail} value={this.state.customer.email} className="form-control" placeholder="Email address"  autoFocus readOnly></input>
  //                 </div>

  //                 <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
  //                 <div className="input-group-prepend">
  //                     <div className="input-group-text">Password</div>
  //                 </div>
  //                 <input type="password" id="inputPassword" name="uPassword" onChange={this.setPassword} defaultValue= {this.state.customer.password} className="form-control" placeholder="Password" ></input>
  //                 </div>

  //                 <label htmlFor="sel1">User Type:</label>
  //                 <select className="form-control" id="sel1" name="uType" onChange={this.setUsertype} value={this.state.customer.usertype} placeholder="User Type">
  //                     <option>Customer</option>
  //                     <option>Admin</option>
  //                 </select>
  //                 <button className="btn btn-md btn-warning "  type="submit" style={{width:"180px"}}>Update Details</button></form>
  //                 <label htmlFor="sel1">Input your email here to delete the account :</label>
  //                  <input type="email" id="inputEmail" name="dCusEmail" onChange={this.setDeleteEmail} value={this.state.cDeleteEmail} className="form-control" placeholder="Email address" required autoFocus></input>
  //                 <button className="btn btn-md btn-danger " onClick={this.deleteCustomer} type="submit" style={{width:"180px", marginLeft:"225px"}}>Delete Account</button>

  //                 {/* <Link to={{ pathname: '/admin' }}><button className="btnAdmin" type="button">Act as Admin</button></Link> */}

  //                 <p className="mt-5 mb-3 text-muted">&copy; 2020-2021</p>

  //         </div>
  //          <Footer></Footer>

  //         </div>
  //        </Switch>
  //        </Router>
  //     )
  // }

  render() {
    return (
      <Router>
        <Switch>
          {/* <Route path="/CustomerProf/Cart/:logged" component={Cart}></Route> */}
          <div>
            {/* <Nav></Nav> */}
            {/* <CustomerNav token={this.state.token}></CustomerNav> */}
            {/* <button onClick={this.handleLogin}>Browse Products</button> */}
            <div>
              <section class="login_box_area section-margin">
                <div class="container">
                  <div
                    className="card bg-light mt-3"
                    style={{ width: "600px", marginLeft: "300px" }}
                  >
                    <form
                      className="form-signin"
                      action="/register/register"
                      method="POST"
                    >
                      <button
                        className="btn btn-md btn-success"
                        type="submit"
                        style={{ width: "180px", marginLeft: "225px" }}
                      >
                        <a href="/Home">Go to home</a>
                      </button>
                      <h1 className="h3 mb-3 font-weight-normal">
                        Account Details
                      </h1>
                      <div
                        className="input-group mb-2"
                        style={{ width: "500px", marginLeft: "50px" }}
                      >
                        <div className="input-group-prepend">
                          <div className="input-group-text">First Name</div>
                        </div>
                        <input
                          type="text"
                          id="inputFname"
                          name="uFname"
                          onChange={this.setFname}
                          value={this.state.fName}
                          className="form-control"
                          placeholder="First name"
                          autoFocus
                        ></input>
                      </div>

                      <div
                        className="input-group mb-2"
                        style={{ width: "500px", marginLeft: "50px" }}
                      >
                        <div className="input-group-prepend">
                          <div className="input-group-text">Last Name</div>
                        </div>
                        <input
                          type="text"
                          id="inputLname"
                          name="uLname"
                          onChange={this.setLname}
                          defaultValue={this.state.lName}
                          className="form-control"
                          placeholder="Last name"
                          autoFocus
                        ></input>
                      </div>

                      <div
                        className="input-group mb-2"
                        style={{ width: "500px", marginLeft: "50px" }}
                      >
                        <div className="input-group-prepend">
                          <div className="input-group-text">Email</div>
                        </div>
                        <input
                          type="email"
                          id="inputEmail1"
                          name="uEmail"
                          onChange={this.setEmail}
                          value={this.state.email}
                          className="form-control"
                          placeholder="Email address"
                          autoFocus
                          readOnly
                        ></input>
                      </div>

                      <div
                        className="input-group mb-2"
                        style={{ width: "500px", marginLeft: "50px" }}
                      >
                        {/* <div className="input-group-prepend">
                          <div className="input-group-text">Password</div>
                        </div>
                        <input
                          type="password"
                          id="inputPassword"
                          name="uPassword"
                          onChange={this.setPassword}
                          defaultValue={this.state.password}
                          className="form-control"
                          placeholder="Password"
                        ></input> */}
                      </div>

                      {/* <label htmlFor="sel1">User Type:</label>
                    <select className="form-control" id="sel1" name="uType" onChange={this.setUsertype}  placeholder="User Type">
                        <option>Customer</option>
                        <option>Admin</option>
                    </select> */}
                      <button
                        className="btn btn-md btn-warning "
                        type="submit"
                        style={{ width: "180px", marginLeft: "225px" }}
                      >
                        Update Details
                      </button>
                    </form>

                    <br></br>
                    <label htmlFor="sel1">
                      Input your email here to delete the account :
                    </label>
                    <input
                      type="email"
                      id="inputEmail"
                      name="dCusEmail"
                      onChange={this.setDeleteEmail}
                      className="form-control"
                      placeholder="Email address"
                      required
                      autoFocus
                    ></input>
                    <br></br>
                    <button
                      className="btn btn-md btn-danger "
                      onClick={this.deleteCustomer}
                      type="submit"
                      style={{ width: "180px", marginLeft: "225px" }}
                    >
                      Delete Account
                    </button>

                    {/* <Link to={{ pathname: '/admin' }}><button className="btnAdmin" type="button">Act as Admin</button></Link> */}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default ResetPassword;