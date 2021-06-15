import React from "react";
import ReactDOM from "react-dom";
import { Card, Container, Header, List } from "semantic-ui-react";
import pkg from 'semantic-ui-react/package.json'
import RESTAPI from "./components/RESTAPI";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import {ToastsContainer, ToastsStore} from 'react-toasts';

const App = ({ children }) => (
  
 
  <Container  style={{ margin: 20 , alignItems: "center" , justifyContent: "center" , display: "flex" }}>
    
    {children}
  </Container>

);

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
  <App className="App"  style={{backgroundColor: "black"}}>
    <Card.Group>
      {/* <cardview /> */}
      <RESTAPI/>
    </Card.Group>
    
  </App>,
  document.getElementById("root")
);
