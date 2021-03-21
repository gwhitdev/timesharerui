import { useState, useEffect }  from 'react';
import axios from 'axios';
import TableComponent from '../../../Components/TableComponents/Table.Component';
function ViewOrganisationsPage() {
    const [orgs, setOrgs] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getOrganisations();
    }, [])
    
    async function getOrganisations () {
        setLoading(true);
        await axios.get('https://timesharerapi.azurewebsites.net/api/organisations/')
            .then(res => res.data)
            .then(data => setOrgs(data[0].data));
        setLoading(false);
    }
    //console.log(orgs.data);
    console.log(orgs.length)   ;
    if(loading) return "Loading...";
    return (
        <div>
           {orgs.length > 0? <TableComponent data={orgs} datatype="organisations"/> : ""}
        </div>
    )
}

export default ViewOrganisationsPage;