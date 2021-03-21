import {Link } from 'react-router-dom';
function OpportunityCells({ celldata }) {
    const { title, live, town, assignedVolunteers} = celldata["details"];
    return (
        <tr>
            <td>{title}</td>    
            <td>{live === false ? "No" : "Yes"}</td>
            <td>{town}</td>
            <td>{assignedVolunteers}</td>
            <td><Link to={`/opportunities/${celldata.id}/edit`}>Edit</Link></td>
        </tr>
    )
}
export default OpportunityCells;