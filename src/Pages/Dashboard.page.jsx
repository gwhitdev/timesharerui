import { useState } from 'react';
import axios from 'axios';
import PresentData from '../Components/PresentData.component';
import { Nav, Container } from 'react-bootstrap';

function DashboardPage() {
    const [volData, setVolData] = useState([]);
    const [orgData, setOrgaData] = useState([]);
    const [userData, setUserData] = useState([]);
    const [oppData, setOppData] = useState([]);
    const [type, setType] = useState("");
    const [loading, setLoading] = useState(false);
    
    
  const getDataFromApi = async (e) => {
    e.preventDefault();
    const chosen = e.target.innerText.toLowerCase();
    await setType(chosen);

    if(chosen !== "")
    {
      await setLoading(true);
      await axios.get(`https://timesharerapi.azurewebsites.net/api/${chosen}`)
      .then(res => res.data[0])
      .then(data => {
        if(chosen === "opportunities") {setOppData(data); setVolData([]); setUserData([]); setOrgaData([])};
        if(chosen === "organisations") {setOrgaData(data); setVolData([]); setUserData([]); setOppData([])};
        if(chosen === "volunteers") {setVolData(data); setOrgaData([]); setUserData([]); setOppData([])};
        if(chosen === "users") {setUserData(data); setVolData([]); setOrgaData([]); setOppData([])};
      });
      setLoading(false);
    }
}
    return (
        <Container>
            <center>
            <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={getDataFromApi}>Volunteers</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" onClick={getDataFromApi}>Users</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={getDataFromApi} eventKey="link-3">Organisations</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link=4" onClick={getDataFromApi}>
                    Opportunities
                    </Nav.Link>
                </Nav.Item>
            </Nav>   
            {loading ? "Loading..." :
                <div className="dataSpace">
                    {userData.length === 0 ? "" : <PresentData loading={loading} datatype="users" apidata={userData}/>}
                    {volData.length === 0 ? "" : <PresentData loading={loading} datatype="volunteers" apidata={volData}/>}
                    {orgData.length === 0 ? "" : <PresentData loading={loading} datatype="organisations" apidata={orgData}/>}
                    {oppData.length === 0 ? "" : <PresentData loading={loading} datatype="opportunities" apidata={oppData}/>}
                </div>
            }
            </center>
        </Container>
    )
}

export default DashboardPage;