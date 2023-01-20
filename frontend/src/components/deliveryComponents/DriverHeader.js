import React from "react";
import {Link, link} from "react-router-dom";

function DriverHeader() {

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">FunkeyPop Delivery</a>
  

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item ">
        <a class="nav-link" href="" style={{color:'white'}}>Home </a>
      </li>
      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:'white'}}>
          Delivery
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/track">Track your Delivery</a>
          
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="/DeliverySection">Deliver With FunkeyPop</a>
        </div>
      </li>
      
    </ul>
    <ul class="nav  navbar-right">
    
      <li><a href="/DriverSignUp" style={{color:'white'}}><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a href="/DriverLogin" style={{color:'white'}}><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
</nav>
  )
}

export default DriverHeader;