export const getAllEmployees = () => {
    return fetch ("http://localhost:9000/employees?_expand=user").then((res) =>
    res.json()
    )
}