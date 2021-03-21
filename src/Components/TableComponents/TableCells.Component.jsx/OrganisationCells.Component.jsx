import {Link } from 'react-router-dom';
function OrganisationCells({ celldata }) {
    const { name, opportunityIds, town }  = celldata["details"];
    return (
        <tr>
            <td>{name}</td>
            <td>{town}</td>
            <td>{opportunityIds}</td>
            <td><Link to={`/organisations/${celldata.id}/edit`}>Edit</Link></td>
        </tr>
    )
}
export default OrganisationCells;