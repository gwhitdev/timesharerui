import { Form } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

function CreateVolunteerFormPage()
{
    const [formData, setFormData] = useState([]);
    
    const createVolunteer = () => {
        /*axios.post(`https://timesharerapi.azurewebsites.net/volunteers`)
            .then(res => console.log(res));*/
            console.log(formData);
    };

    return (
        <div>
            <form onsubmit={createVolunteer}>
                <input type="text" name="name" value="" onchange={(e) => setFormData(e.target.value)}/>
                <button type="submit">Create volunteer account</button>
            </form>
        </div>
    );
}

export default CreateVolunteerFormPage;