import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

export default function Search() {
    const [registration, setRegistration] = useState()
    const [searchTerm, setSearchTerm] = useState()

    function sendSearch(c) {
        c.preventDefault()
        let search = { searchTerm }
        fetch('http://localhost:4000/api/registrations/search', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(search)
        })
            .then(res => res.json())
            .then(json => setRegistration(<div>
                <p>Licence Number: {json.licenceNumber}</p>
                <p>Year: {json.vehicle.manufactureYear}</p>
                <p>Vehicle Make: {json.vehicle.make}</p>
                <p>Vehicle Model: {json.vehicle.model}</p>
                <p>Vehicle Shape: {json.vehicle.shape}</p>
                <p>Vehicle Weight: {json.vehicle.weight}</p>

            </div>))
    }
    debugger
    return (
        <div>
            <Container>
                <form>
                    <label>Please enter vehicle vin number: </label>
                    <input onChange={(c) => setSearchTerm(c.target.value)} value={searchTerm} />
                    <button onClick={sendSearch} className="btn btn-outline-primary m-1" >Search</button>
                </form>
                <div className="border">
                {registration}
                </div>
            </Container>
        </div>
    )
}