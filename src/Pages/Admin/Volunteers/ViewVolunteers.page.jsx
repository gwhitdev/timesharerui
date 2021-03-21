import { useState, useEffect }  from 'react';
import axios from 'axios';
import TableComponent from '../../../Components/TableComponents/Table.Component';
function ViewVolunteersPage() {
    const [vols, setVols] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getVolunteers();
    }, [])
    
    async function getVolunteers () {
        setLoading(true);
        await axios.get('https://timesharerapi.azurewebsites.net/api/volunteers/')
            .then(res => res.data)
            .then(data => setVols(data[0].data))
            .then(setLoading(false));
    }
    if(loading) return "Loading...";
    return (
        <div>
          {vols.length > 0? <TableComponent data={vols} datatype="volunteers"/> : ""}
        </div>
    )
}

export default ViewVolunteersPage;