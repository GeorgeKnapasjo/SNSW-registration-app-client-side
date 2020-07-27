import React, { useState, useEffect } from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

import Registration from './Registration'
import Establish from './Establish'


export default function List() {
    let { path, url } = useRouteMatch()
    // debugger
    const [registrations, setRegistrations] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/api/registrations')
            .then(res => res.json())
            .then(json => setRegistrations(json))
    }, [])

    function addRegistration(registration) {
        setRegistrations([...registrations, registration])

    }
    const props = <Establish addRegistration={addRegistration} />
    
    return (
        <div>
            <Container>
            <Switch>
                <Route path={`${path}/:vinNumber`}>
                    <Registration />
                </Route>
            </Switch>
            {registrations.map(r =>
                < div key={r.vinNumber} className='border' >
                    <Link className="btn btn-outline-primary m-1" to={`${url}/${r.vinNumber}`}>Delete registration </Link>
                    <p> Vin Number: {r.vinNumber} </p>
                    <p> Owner lic number: {r.licenceNumber} </p>
                    <p> Vehicle make: {r.vehicle.make} </p>
                    <p> Vehicle model: {r.vehicle.model} </p>
                    <p> Vehicle year: {r.vehicle.manufactureYear} </p>
                    <p> Vehicle weight: {r.vehicle.weight} </p>
                    <p> Vehicle shape: {r.vehicle.shape} </p>
                </div>
            )}
            </Container>
        </div >
    )
}