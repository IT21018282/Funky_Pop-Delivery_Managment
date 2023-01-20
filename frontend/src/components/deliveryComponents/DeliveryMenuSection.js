import React from "react";
import {Link, link} from "react-router-dom";

function DeliverySection(){

  return (
<div  style={{margin:'3%',padding:'5%',border:'2px solid black',backgroundColor:'white',alignItems: "center"}}>
        <h1 class="cover-heading" style={{textAlign:'center'}}>Welcome To </h1>
        <h1 class="cover-heading" style={{textAlign:'center'}}>FunkeyPop Delivery</h1>
        <p style={{ textAlign:'center'}}>Easy Tracking.</p>
    <p></p>
    <p class=" lead" style={{margin:'20px', textAlign:'center'}}>
      <a href="/track" class="btn btnx btn-lg  btn-dark">Track Your Delivery</a>
      
    </p>
    <p class=" lead" style={{margin:'20px', textAlign:'center'}}>
    <a href="/DriverSection" class="btn btnx btn-lg  btn-dark" >Deliver With FunkeyPop</a>
    </p>
  </div>
  )
}

export default DeliverySection