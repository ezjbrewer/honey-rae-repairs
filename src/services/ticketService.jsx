export const getAllTickets = async () => {
    return await fetch("http://localhost:9000/serviceTickets?_embed=employeeTickets").then(res => res.json())
}