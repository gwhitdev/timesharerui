import { Table } from 'react-bootstrap';
import TableCell from './TableCell.Component';

function TableComponent({ data, datatype })
{
    console.log(data);
    const headers = Object.keys(data[0]["details"]);
    return (
        <Table key={Math.floor(Math.random())} striped bordered>
                                    <thead key={Math.random()}>
                                    <tr key={Math.random()}>
                                        {headers.map((key,index) => {
                                            return <th key={key}>{key}</th> 
                                        })}
                                        </tr>
                                    </thead>
                                    <tbody key={Math.random()}>
                                        {data.map(a => <TableCell datatype={datatype} celldata={a} /> )}
                                    </tbody>
                                </Table>
    );
}

export default TableComponent;