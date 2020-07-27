import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

export default function Registration() {
    debugger

    let {vinNumber} = useParams();
    const [registration, setRegistration] = useState(undefined);
    

    useEffect(() => {
        fetch(`http://localhost:4000/api/registrations/${vinNumber}`)
            .then(res => res.json())
            .then(json => setRegistration(json))
    }, [vinNumber]);

    return (
        <div>
            {registration &&
                <div>
                    <h1>{registration.vinNumber}</h1>
                </div>}
               
        </div>
    )

}