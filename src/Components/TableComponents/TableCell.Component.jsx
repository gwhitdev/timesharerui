import UserCells from './TableCells.Component.jsx/UserCells.Component';
import OrganisationCells from './TableCells.Component.jsx/OrganisationCells.Component';
import OpportunityCells from './TableCells.Component.jsx/OpportunityCells.Component';
import VolunteerCells from './TableCells.Component.jsx/VolunteerCells.Component';
import {Link } from 'react-router-dom';
function TableCell( { celldata, datatype }) {
    return (
        <>
            {datatype === "volunteers" ? <VolunteerCells celldata={celldata} /> : ""}
            {datatype === "organisations" ? <OrganisationCells celldata={celldata} />: ""}
            {datatype === "users" ? <UserCells celldata={celldata} /> : ""}
            {datatype === "opportunities" ? <OpportunityCells celldata={celldata} /> : ""}

        </>
    )
    
}

export default TableCell;