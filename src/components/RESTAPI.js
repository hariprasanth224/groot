import React, { Component } from 'react';
import { Card, Icon, Header, Image, Button } from 'semantic-ui-react'
import './restapi.css';
import './script';


class RestAPI extends Component {
  state = {
    student: [],
    popup: 0,
    view: 0,
    auth: 0
  }
  componentDidMount() {
    fetch("https://60c72aaf06f3160017d28aae.mockapi.io/studentRecords")
      .then(res => res.json())
      .then((data) => {
        this.setState({ student: data })
        console.log(this.state.student)
      })
      .catch(console.log)
  }

  renderfullprofile(s) {

    let arr = this.state.student;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id == s) {
        console.log("got it..!");
        this.setState({ view: arr[i], popup: 1 }, console.log("got it..! updated.."));
      }
    }

  }
  closepopup() {
    this.setState({ popup: 0 });
  }

  login() {
    this.setState({ auth: 1 });
  }


  render() {

    console.log(this.state.popup);

    if (this.state.auth == 0) {
      return (
        <div id="body"> 
        <form onSubmit={this.authenticate}>
                                         
        <div id="main">
      
      <div id="tab-btn">
        <a href="#" class="login-tab active">Sign In</a>
        <a href="#" class="register-tab">Sign Up</a>
      </div>
      
      <div class="login-box">
        <h2>Get Started!</h2>
        <form action="#" method="post" id="login-form">
          <input type="text" name="username" placeholder="Username" class="inp"  autofocus /><br />
          <input type="password" name="password" placeholder="Password" class="inp"  /><br />
          <a href="#" id="forgot">Forgot Password?</a><br />
          <input type="submit" name="submit" value="SIGN IN" onClick={()=>this.login() }class="sub-btn" />
        </form>
      </div>
      
      <div class="register-box">
        <h2>Register With Us!</h2>
        <form action="#" method="post" id="reg-form">
          <input type="text" name="uname" placeholder="Enter Username" class="inp"  autofocus /><br />
          <input type="email" name="email" placeholder="Enter Email" class="inp"  /><br />
          <input type="password" name="pass" placeholder="Enter Password" class="inp"  /><br />
          <input type="password" name="repass" placeholder="Confirm Password" class="inp"  /><br />
          <input type="submit" name="submit" value="SIGN UP" onClick={()=>this.login() } class="sub-btn" />
        </form>
      </div>
    </div>
          
      </form>
      </div>
      )
          
    }
          else{

        if(this.state.popup==1)

          {

            let cprofile = this.state.view;
          console.log("popup",this.state.view);
          return(
          <>
           
            
                <div class="box">
                <img src={cprofile.avatar}></img>
                <h1>{cprofile.FirstName} {cprofile.LastName}</h1>
                <p>First Name : {cprofile.FirstName} </p>
                <p>Last Name : {cprofile.LastName}</p>
                <p>Address : {cprofile.street}</p>
                <p >City:{cprofile.city}</p>
                <p>Country: {cprofile.country}</p>
                <p>Phone-Number: {cprofile.number}</p>
                <p>{cprofile.mail}</p>                 
                <div class="btn">  
                <button onClick={()=>{this.renderfullprofile( (parseInt(cprofile.id)-1))  }}>prev</button>
                </div>
                <a href="#"> 
                <div class="btn">  
                <button onClick={()=>{this.renderfullprofile( (parseInt(cprofile.id)+1))  }}>next</button>
                </div ></a>
                
                <p> <div class="back"><button onClick={()=>this.closepopup() }>back</button> </div> </p>
                </div>
                
          </>
          )

        

    }

          else
          {

    return (
          <>
           
            
            {this.state.student.map((student) => (
                <Card>
                <Card.Content>
                  <Image
                    floated='right'
                    size='mini'
                    border ="circular"
                    src={student.avatar}
                  />
                  <Card.Header>{student.FirstName} {student.LastName}</Card.Header>
                  <Card.Meta>{student.mail}</Card.Meta>
                  
                </Card.Content>
                <Card.Content extra>
                  <div className='ui buttons' onClick={()=>{this.renderfullprofile(student.id)}}>
                    <Button basic color='green'>
                      View Profile
                    </Button>

                  </div>
                </Card.Content>
              </Card>

            ))}
            
          </>
          );

    }}
  }
}
          export default RestAPI;