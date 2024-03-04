export const getAllEmployees = async () => {
    return await fetch ("http://localhost:9000/employees?_expand=user").then((res) =>
    res.json()
    )
}

export const getEmployeeByUserId = async (employeeId) => {
    return await fetch (`http://localhost:9000/employees?userId=${employeeId}&_expand=user&_embed=employeeTickets`).then((res) =>
    res.json())
}

export const updateEmployee = (employee) => {
    return fetch(`http://localhost:9000/employees/${employee.id}`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(employee)
})
}