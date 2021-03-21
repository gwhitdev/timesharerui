import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'  
import './Components/styles.css';
import CreateVolunteerFormPage from './Pages/Admin/Volunteers/NewVolunteer.page';
import SiteNav from './Components/SiteNav.Component';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DashboardPage from './Pages/Dashboard.page';
import Home from './Pages/Home.page';
import { Container } from 'react-bootstrap';
import VolunteersPage from './Pages/Admin/Volunteers/ViewVolunteers.page';
import ViewOrganisationsPage from './Pages/Admin/Organisations/ViewOrganisations.page';
import ViewOpportunitiesPage from './Pages/Admin/Opportunities/ViewOpportunities.page';
import ViewUsersPage from './Pages/Admin/Users/ViewUsers.page';
import EditUserPage from './Pages/Admin/Users/EditUser.page'
import EditOrganisationPage from './Pages/Admin/Organisations/EditOrganisation.page';
import EditOpportunityPage from './Pages/Admin/Opportunities/EditOpportunity.page';
import EditVolunteerPage from './Pages/Admin/Volunteers/EditVolunteer.page';

function App() {
  return (
    <div>
      
      
        <Router>
        <SiteNav />
        <Container>
          <Switch>
            <Route path="/users/:id"  component={EditUserPage} />
            <Route path="/organisations/:id"  component={EditOrganisationPage} />
            <Route path="/volunteers/:id"  component={EditVolunteerPage} />
            <Route path="/opportunities/:id" component={EditOpportunityPage} />
            <Route path="/users">
              <ViewUsersPage />
            </Route>
            <Route path="/opportunities">
              <ViewOpportunitiesPage />
            </Route>
            <Route path="/organisations">
              <ViewOrganisationsPage />
            </Route>
            <Route path="/volunteers">
              <VolunteersPage />
            </Route>
            <Route path="/dashboard">
              <DashboardPage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          </Container>
        </Router>
      
      
   
    </div>
  );
}

export default App;
