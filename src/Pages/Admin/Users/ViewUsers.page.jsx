import { useState, useEffect }  from 'react';
import axios from 'axios';
import TableComponent from '../../../Components/TableComponents/Table.Component';
function ViewUsersPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getUsers();
    }, [])
    
    async function getUsers () {
        await setLoading(true);
        await axios.get('https://timesharerapi.azurewebsites.net/api/users/')
            .then(res => res.data)
            .then(data => setUsers(data[0].data))
            .then(setLoading(false));
    }
    if(loading) return "Loading...";
    return (
        <div>
            {users.length > 0? <TableComponent data={users} datatype="users"/> : ""}
        </div>
    )
}

export default ViewUsersPage;