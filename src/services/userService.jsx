export const getNonStaffUsers = () => {
    return fetch(`http://localhost:9000/users?isStaff=false`).then(res => res.json)
}