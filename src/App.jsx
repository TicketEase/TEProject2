import React from 'react';
import AgeHome from './Components/AllAgentTickets/AgeHome';
import CustomerHome from './Components/ALLCustomersTkt/CustomerHome';
import SortByDepartment from './Components/Sorting/SortByDepartment';
import SortByStatus from './Components/Sorting/SortByStatus';
import SortByPriority from './Components/Sorting/SortByPriority';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import FAQSearchBar from './Components/FAQ/FAQSearchBar';
import AboutUs from './Components/AboutUs/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerLogIn from './Components/Login/CustomerLogIn';
import EmpoloyeeLogIn from './Components/Login/EmpoloyeeLogIn';
import AgentLogIn from './Components/Login/AgentLogIn';
import TackenHome from "./Components/EmployeeSide/TackenTicket/TackenHome";
import EmployeeHome from "./Components/EmployeeSide/EmployeeHome";
import Footer from './Components/Footer/Footer';
export default function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQSearchBar />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/" element={<AgeHome />} />
        <Route path="/allagenttickets" element={<AgeHome />} />
        <Route path="/allcustomerstickets" element={<CustomerHome />} />
        <Route path="/sortagticketbystatus/:StaId" element={<SortByStatus />} />
        <Route path="/sortagticketbydepartment/:DepId" element={<SortByDepartment />} />
        <Route path="/sortagticketbypriority/:PriId" element={<SortByPriority />} />
        <Route path="/CustomerLogIn" element={<CustomerLogIn />} />
        <Route path="/EmpoloyeeLogIn" element={<EmpoloyeeLogIn />} />
        <Route path="/AgentLogIn" element={<AgentLogIn />} />
        <Route path="/TackenTicketHome" element={<TackenHome />} />
        <Route path="/EmployeeHome" element={<EmployeeHome />} />
      
      </Routes>
      <Footer/>
      {/* <Cardds/> */}
    </>
  )
}