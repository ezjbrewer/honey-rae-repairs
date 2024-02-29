import { getStaffUsers } from "../services/userService.jsx";
import { useEffect, useState } from "react"
import { User } from "../users/User.jsx"
import "./employees.css"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getStaffUsers().then((employeeArray) => {
            setEmployees(employeeArray)
        })
    }, [])

    return <div className="customers">
        {employees.map(employeeObj => {
            return <User user={employeeObj} />
        })}
    </div>
}