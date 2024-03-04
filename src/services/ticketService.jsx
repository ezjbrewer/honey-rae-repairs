export const getAllTickets = async () => {
    return await fetch("http://localhost:9000/serviceTickets?_embed=employeeTickets").then(res => res.json())
}

export const assignTicket = (employeeTicket) => {
    return fetch(`http://localhost:9000/employeeTickets`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employeeTicket)
    })
}

export const updateTicket = (ticket) => {
    return fetch(`http://localhost:9000/serviceTickets/${ticket.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(ticket)
    })
}