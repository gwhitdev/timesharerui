import {Link } from 'react-router-dom';
function UserCells({ celldata }) {
    const { assignedOrganisations, associatedVolunteerId } = celldata["details"];
    return (
        <tr>
            <td>{assignedOrganisations}</td>    
            <td>{associatedVolunteerId}</td>
            <td><Link to={`/users/${celldata.id}/edit`}>Edit</Link></td>
        </tr>
    )
}

export default UserCells;