import { useState, useEffect }  from 'react';
import axios from 'axios';
import TableComponent from '../../../Components/TableComponents/Table.Component';
function ViewOpportunitiesPage() {
    const [opps, setOpps] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getOpportunities();
    }, [])
    
    async function getOpportunities () {
        await setLoading(true);
        await axios.get('https://timesharerapi.azurewebsites.net/api/opportunities/')
            .then(res => res.data)
            .then(data => setOpps(data[0].data))
            .then(setLoading(false));
    }
    if(loading) return "Loading...";
    return (
        <div>
            {opps.length > 0? <TableComponent data={opps} datatype="opportunities"/> : ""}
        </div>
    )
}

export default ViewOpportunitiesPage;