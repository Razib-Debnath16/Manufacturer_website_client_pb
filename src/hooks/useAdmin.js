const { useState, useEffect } = require("react")

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    const email = user?.email;

    useEffect(() => {
        if (email) {
            fetch(`https://enigmatic-shelf-24691.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('AccessToken')}`
                },

            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin);
                    setAdminLoading(false);
                })
        }

    }, [user])
    return [admin, adminLoading];

}
export default useAdmin;