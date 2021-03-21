import {Link } from 'react-router-dom';
function VolunteerCells({ celldata }) {
    const { name, associatedUserId } = celldata["details"];
    return (
        <tr>
            <td>{associatedUserId}</td>    
            <td>{name}</td>
            <td><Link to={`/volunteers/${celldata.id}/edit`}>Edit</Link></td>
        </tr>
    )
}
export default VolunteerCells;