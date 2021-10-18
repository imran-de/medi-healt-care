import React from 'react';
import { useParams } from 'react-router';

const Service = () => {
    const [id, serviceName] = useParams()
    return (
        <div>
            <p>{id} {serviceName}
                6.	Clicking on the button will take the user to the service detail route. Each route should display detailed information of the service along with the image of the service.
            </p>
        </div>
    );
};

export default Service;