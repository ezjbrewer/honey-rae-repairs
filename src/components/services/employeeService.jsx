export const getAllEmployees = async () => {
    return await fetch ("http://localhost:9000/employees?_expand=user").then((res) =>
    res.json()
    )
}