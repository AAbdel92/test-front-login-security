import React, { Component } from 'react';
import './App.css';
import MySite from "./MySite/MySite.js";
import "semantic-ui-css/semantic.min.css";

class App extends Component {

  constructor(props) {
        super(props);
        this.state = {     
            loggedIn : false,
            user : {
                lastname : "",
                firstname : "",
                role : {
                  id : 0,
                  name : ""
                },
                promo : {
                  id : 0,
                  name : ""
                }
             }
          }
     }

     componentDidMount() {
       console.log("App did mount")
       this.checkLocalStorage();
     }

     componentDidUpdate(prevProps, prevState) {
        console.log("App did update")
        localStorage.setItem('state', JSON.stringify(this.state));
}

     checkLocalStorage = () => {
       try {
         if (localStorage.getItem('state') !== null) {
         this.setState((prevState) => {
          return prevState = JSON.parse(localStorage.getItem('state'))
        });
         }
       } catch (err) {
          console.log(err);
         }         
       }     

     getUser = (boolean, newUser) => {  
  this.setState({
    loggedIn : boolean,
    user : newUser
  })  
}

deleteUser = () => {
  this.setState({
    loggedIn : false,
    user : {
                lastname : "",
                firstname : "",
                role : {
                  id : 0,
                  name : ""
                },
                promo : {
                  id : 0,
                  name : ""
                }
             }
  })
}

  render() {
    console.log("App render")   
    return (      
        <MySite user={this.state.user} loggedIn={this.state.loggedIn} getUser={this.getUser} deleteUser={this.deleteUser}/>
    );
  }
}

export default App;
