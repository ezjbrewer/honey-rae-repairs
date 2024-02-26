
import "./App.css"
import { TicketList } from "./components/tickets/TicketList.jsx"
import { CustomerList } from "./components/tickets/CustomersList.jsx"

export const App = () => {
  return <>
    <TicketList/>
    <CustomerList/>
  </>
}

