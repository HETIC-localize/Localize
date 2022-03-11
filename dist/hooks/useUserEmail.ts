const headers =  {
    Authorization: "c_croizat@hetic.eu",
    Accept: "application/json",
    "Content-Type": "application/json",
}

const useUserEmail = (userEmail: string) => {
    let fetchData:any
    return fetch(`${userEmail}/translation`, {
        method: "GET",
        headers,
    }).then(response => {
        fetchData = response
        return fetchData
    });
}

export default useUserEmail