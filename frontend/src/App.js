import React from 'react'
import ReactDOM from 'react-dom'
//import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//Delivery
import Deliveries from './components/deliveryComponents/Deliveries';
import AllDrivers from './components/deliveryComponents/Driver';
import DeliveryHeader from './components/deliveryComponents/DeliveryHeader';
import GetDelivery from './components/deliveryComponents/GetDelivery';
import DriverSignup from './components/deliveryComponents/DriverSignup';
import DriverLogin from './components/deliveryComponents/DriverLogin';
import ViewDriver from './components/deliveryComponents/viewDriver';
import UpdateDriver from './components/deliveryComponents/UpdateDriver';
import Track from './components/deliveryComponents/Track';
import DriverProfile from './components/deliveryComponents/DriverProfile';
import DriverLogout from './components/deliveryComponents/Driverlogout';
import DeliveryReport from './components/deliveryComponents/deliveryReport';
import DeliveryManager from './components/deliveryComponents/DeliveryManager';
import DeliverySection from './components/deliveryComponents/DeliveryMenuSection';
import DriverHeader from './components/deliveryComponents/DriverHeader';
import DriverSection from './components/deliveryComponents/DriverSection';






function App() {
  return (
    <Router>

      <div className='App'>

        <Routes>

          <Route path="/AllDrivers" element={<><DeliveryHeader/><AllDrivers/></>}/>
          <Route path="/Deliveries" element={<><DeliveryHeader/><Deliveries/></>}/>
          <Route path="/Delivery" element={<><DeliveryHeader/><GetDelivery/></>}/>
          <Route path="/DriverSignup" element={<><DriverHeader/><DriverSignup/></>}/>
          <Route path="/DriverLogin" element={<>< DriverHeader/><DriverLogin/></>}/>
          <Route path="/ViewDriver/:id" element={<><DeliveryHeader/><ViewDriver/></>}/>
          <Route path="/UpdateDriver/:id" element={<><DeliveryHeader/><UpdateDriver/></>}/>
          <Route path="/Track" element={<><DeliveryHeader/><Track/></>}/>
          <Route path="/DriverProfile" element={<DriverProfile/>}/>
          <Route path="/DriverLogout" element={<DriverLogout/>}/>
          <Route path="/DeliveryReport" element={<DeliveryReport/>}/>
          <Route path="/DeliveryManager" element={<><DeliveryHeader/><DeliveryManager/></>}/>
          <Route path="/DriverSection" element={<><DeliveryHeader/><DriverSection/></>}/>
          <Route path="/" element={<><DeliveryHeader/><DeliverySection/></>}/>

        </Routes>

        
      </div>

    </Router>
  );
}

export default App;
