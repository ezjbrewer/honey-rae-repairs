import { useEffect, useState } from "react"
import { Ticket } from "./Ticket.jsx"
import { getAllTickets } from "../../services/ticketService.jsx"
import "./Tickets.css"
import { FilterBar } from "./Filter-Bar.jsx"



export const TicketList = ({ currentUser }) => {
  const [allTickets, setAllTickets] = useState([])
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
  const [filteredTickets, setFilteredTickets] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  
  const getAndSetTickets = () => {
    getAllTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray)
    })
  }

  useEffect(() => {
    getAndSetTickets()
  }, []) // runs on initial render of component
  
  useEffect(() => {
    if (showEmergencyOnly) {
      const emergencyTickets = allTickets.filter(ticket => ticket.emergency === true)
      setFilteredTickets(emergencyTickets)
    } else {
      setFilteredTickets(allTickets)
    }
  }, [showEmergencyOnly, allTickets])
  
  useEffect(() => {
    const foundTickets = allTickets.filter((ticket) =>
      ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredTickets(foundTickets)
  }, [searchTerm, allTickets])
  
  return (
    <div className="tickets-container">
      <h2>Tickets</h2>
      <FilterBar
        setShowEmergencyOnly={setShowEmergencyOnly}
        setSearchTerm={setSearchTerm}
      />
      <article className="tickets">
        {filteredTickets.map(ticketObject => {
          return (
          <Ticket ticket={ticketObject} currentUser={currentUser} getAndSetTickets={getAndSetTickets} key={ticketObject.id}/>
          )
        })}
      </article>
</div>
)
}

