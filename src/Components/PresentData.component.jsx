import { Container } from 'react-bootstrap';
import TableComponent from './TableComponents/Table.Component';

function PresentData ({ apidata, datatype }) {
    return (
        <div>
        <Container>
            <TableComponent data={apidata.data} datatype={datatype}/>
        </Container>
        </div>
    )
};

export default PresentData;