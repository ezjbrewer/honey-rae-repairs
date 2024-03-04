import { getStaffUsers } from "../../services/userService.jsx";
import { useEffect, useState } from "react"
import { User } from "../users/User.jsx"
import "./employees.css"
import { Link } from "react-router-dom";

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getStaffUsers().then((employeeArray) => {
            setEmployees(employeeArray)
        })
    }, [])

    return <div className="employees">
        {employees.map(employeeObj => {
            return (
            <Link key={employeeObj.id} to={`${employeeObj.id}`}>
                <User user={employeeObj} />
            </Link>)
        })}
    </div>
}