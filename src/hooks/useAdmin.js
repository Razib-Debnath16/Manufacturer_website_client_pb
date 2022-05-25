const { useState, useEffect } = require("react")

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const email = user?.email;

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/admin/${email}`, {
                method: 'GET',
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('AccessToken')}`
                },

            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin);
                })
        }

    }, [user])
    return [admin];

}
export default useAdmin;