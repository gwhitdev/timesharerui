import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import {useRouteMatch} from 'react-router-dom';
function SiteNav() {
  
  let matchedVols = useRouteMatch("/volunteers");
  let matchedOrgs = useRouteMatch("/organisations");
  let matchedOpps = useRouteMatch("/opportunities");

    return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">TimeSharer</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <NavDropdown title="Admin">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/volunteers">Volunteers</Nav.Link>
            <Nav.Link href="/opportunities">Opportunities</Nav.Link>
            <Nav.Link href="/organisations">Organisations</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
        </NavDropdown>
        
        {matchedVols ? <Nav.Link href={`/volunteers/create`}>Create new volunteer</Nav.Link> : ""}
        {matchedOrgs ? <Nav.Link href={`/organisations/create`}>Create new organisation</Nav.Link> : ""}
        {matchedOpps ? <Nav.Link href={`/opportunities/create`}>Create new opportunity</Nav.Link> : ""}
        
        
          
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    )
};

export default SiteNav