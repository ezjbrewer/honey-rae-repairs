export const getCustomerByUserId = (userId) => {
    return fetch(
        `http://localhost:9000/customers?userId=${userId}&_expand=user`
    ).then((res) => res.json())
}