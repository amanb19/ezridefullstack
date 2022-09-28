
import './App.css';
import { Routes, Route } from "react-router-dom"
import React from 'react';
import { BrowserRouter } from "react-router-dom";

//Navabar ,sidebar , header ,footer
import NewNav from './components/navbar/NewNav';
import SideNav from './components/sidenavbar/SideNav';
import Title from './components/Title/Title';
import Footer2 from './components/footer/Footer2';
import Home from './components/home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
// login
import Adminlogin from './role/Admin/Adminlogin';
import Customerlogin from './role/Customer/Customerlogin';

import Driverlogin from './role/Driver/Driverlogin';
// signup
import Customersignup from './role/Customer/Customersignup';
import Driversignup from './role/Driver/Driversignup';
//dashboard
import AdminDashboard from './role/Admin/AdminDashboard';
import CustomerDashboard from './role/Customer/CustomerDashboard';
import DriverDashboard from './role/Driver/DriverDashboard';
//profile
import CustomerProfile from './services/CustomerService/CustomerProfile';
import DriverProfile from './services/DriverService/DriverProfile';
import FindRide from './services/CustomerService/FindRide';
import BookRide from './services/CustomerService/BookRide';
import ConfirmRide from './services/CustomerService/ConfirmRide';
//main admin
import MALogin from './role/MainAdmin/MALogin';
import PrivateRoutes from './ProtectedRoute/PrivateRoutes';
import NewPayment from './services/CustomerService/NewPayment';
import RideBooked from './services/CustomerService/RideBooked';

function App() {
  return (
    <div className="App">
      <Title/>
      <>
      <BrowserRouter>
        <NewNav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          
         
        </Routes>

       {/* Login & Signup */}
        <Routes>
       
        <Route path="/admin_login" element={<Adminlogin/>}></Route>
        <Route path="/customer_login" element={<Customerlogin />}></Route>
        <Route path="/customer_signup" element={<Customersignup />}></Route>
        {/* <Route path="/customer_signup" element={<Customersignup />}></Route> */}
        <Route path="/driver_login" element={<Driverlogin />}></Route>
        <Route path="/driver_signup" element={<Driversignup />}></Route>
        </Routes>

      {/* dashboard */}
        <Routes>
        {/* <Route element={<PrivateRoutes />}>
        <Route path="/customer_dashboard" element={<CustomerDashboard/>}></Route>
          <Route path="/driver_dashboard" element={<DriverDashboard/>}></Route>
            </Route> */}
          <Route path="/admin_dashboard" element={<AdminDashboard/>}></Route>
          <Route path="/customer_dashboard" element={<CustomerDashboard/>}></Route>
          <Route path="/driver_dashboard" element={<DriverDashboard/>}></Route>
        </Routes>

        {/* Admin service*/}
        {/* <Routes>
        <Route path="/get_userlist" element={<UserList/>}></Route>
        <Route path="/get_ridelist" element={<RideList/>}></Route>
        </Routes> */}

        {/* Driver service */}
        <Routes>
        <Route path="/driver_profile" element={<DriverProfile/>}></Route>
        
        </Routes>
 
        {/* Customer service */}
        <Routes>
        <Route path="/customer_profile" element={<CustomerProfile/>}></Route>
        <Route path="/find_ride" element={<FindRide/>}></Route>
        <Route path="/book_ride" element={<BookRide/>}></Route>
        <Route path="/confirm_ride" element={<ConfirmRide/>}></Route>
        <Route path="/ride_booked" element={<RideBooked/>}></Route>
        </Routes>

        {/* Main Admin */}
        <Routes>
        <Route path="/ma_login" element={<MALogin/>}></Route>
        
        
        </Routes>

       
      </BrowserRouter>
    </>
      <Footer2/>
    </div>
  );
}

export default App;
