import "./App.css"
import { NavBar } from "./nav/NavBar.jsx"
import { TicketList } from "./components/tickets/TicketList.jsx"
import { CustomerList } from "./components/customers/CustomersList.jsx"
import { EmployeeList } from "./components/employees/employee.jsx" 
import { Routes, Route, Outlet } from "react-router-dom"

export const App = () => {
  return (
  <Routes>
    <Route
      path="/"
      element={
        <>
          <NavBar />
          <Outlet />
        </>
      }
    >
      <Route path="tickets" element={<TicketList />} />
      <Route path="employees" element={<EmployeeList/>}/>
      <Route path="customers" element={<CustomerList/>} />
    </Route>
  </Routes>
  )
}
