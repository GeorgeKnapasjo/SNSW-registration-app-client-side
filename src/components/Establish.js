import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'

export default function Establish(props) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dobDay, setDobDay] = useState('')
    const [dobMonth, setDobMonth] = useState('')
    const [dobYear, setDobYear] = useState('')
    const [address, setAddress] = useState('')
    const [licenceNumber, setLicenceNumber] = useState('')
    const [vinNumber, setVinNumber] = useState('')
    const [manufactureYear, setManufactureYear] = useState('')
    const [make, setMake] = useState('')
    const [model, setModel] = useState('')
    const [shape, setShape] = useState('')
    const [weight, setWeight] = useState('')
    const [licenceHeld, setLicenceHeld] = useState(undefined)
    const [registration, setRegistration] = useState()

    function setState(e) {
        setLicenceHeld(e.target.value)
    }



    function sendEstablishRegistrationRequest(e) {
        debugger
        e.preventDefault()
        let data = { licenceHeld, firstName, lastName, dobDay, dobMonth, dobYear, address, licenceNumber, vinNumber, manufactureYear, make, model, shape, weight }
        fetch('http://localhost:4000/api/registrations', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((json) =>
                // console.log(`Success, ${json.customer.firstName} your vehicle has been registered`)
                // console.log(Object.keys(json.customer.dateOfBirth))
                setRegistration(
                    <div>
                        <h2>Success! vehicle has been registered</h2>
                        <ul>
                            <label>Customer details</label>
                            <li>Licence Number: {json.customer.licenceNumber}</li>
                            <li>First Name: {json.customer.firstName}</li>
                            <li>Last Name: {json.customer.lastName}</li>
                            <li>DOB: {json.customer.dateOfBirth.day} / {json.customer.dateOfBirth.month} /{json.customer.dateOfBirth.year} </li>
                            <label>Vehicle details</label>
                            <li>VIN: {json.registration.vinNumber}</li>
                            <li>Manufacture Year: {json.registration.vehicle.manufactureYear}</li>
                            <li>Make: {json.registration.vehicle.make}</li>
                            <li>Model: {json.registration.vehicle.model} </li>
                            <li>Weight: {json.registration.vehicle.weight}</li>
                        </ul>
                    </div>
                )

                // props.addRegistration(json)
            )
    }


    return (
        <div>
            <Container>
                <form>
                    <div className="form-group">
                        <label>Have you held a NSW licence before? </label>
                        <input onChange={setState} id="Yes" value="Yes" type="checkbox" />
                        <label htmlFor="Yes">Yes</label>
                        <input onChange={setState} id="No" value="No" type="checkbox" />
                        <label htmlFor="No">No</label>
                    </div>

                    {/* {licenceHeld === "Yes" ? <div>Jeff</div> : <div>no</div>} */}
                    {licenceHeld === "Yes" && <div>
                        <br />
                        {/* <form> */}
                        <div className="form-group">
                            <label>Enter licence Number:</label>
                            <input className="form-control" onChange={(c) => setLicenceNumber(c.target.value)} value={licenceNumber} /> <br /> <br />
                        </div>
                        <div className="form-group">
                            <label>Enter VIN number:</label>
                            <input className="form-control" onChange={(c) => setVinNumber(c.target.value)} value={vinNumber} /> <br /><br />
                        </div>
                        <div className="form-group">
                            <label>Enter manufacture year:</label>
                            <input className="form-control" onChange={(c) => setManufactureYear(c.target.value)} value={manufactureYear} /> <br /><br />
                        </div>
                        <div className="form-group">
                            <label>Enter vehicle make:</label>
                            <input className="form-control" onChange={(c) => setMake(c.target.value)} value={make} /> <br /><br />
                        </div>
                        <div className="form-group">
                            <label>Enter vehicle model:</label>
                            <input className="form-control" onChange={(c) => setModel(c.target.value)} value={model} /> <br /><br />
                        </div>
                        <div className="form-group">
                            <label>Enter vehicle weight:</label>
                            <input className="form-control" onChange={(c) => setWeight(c.target.value)} value={weight} /> <br /><br />
                        </div>
                        <div className="form-group">
                            <label htmlFor="vehicle-shape">Enter vehicle shape:</label>
                            <select className="form-control" onChange={(c) => setShape(c.target.value)} id="vehicle-shape">
                                <option value="sedan">sedan</option>
                                <option value="coupe">coupe</option>
                                <option value="wagon">wagon</option>
                                <option value="van">van</option>
                                <option value="ute">ute</option>
                            </select>
                        </div>
                        <button onClick={sendEstablishRegistrationRequest} className="btn btn-outline-primary m-1">Submit</button>
                        {/* </form> */}
                    </div>}
                    {licenceHeld == "No" && <div>
                        {/* <form> */}
                        <h3>Customer Details</h3>
                        {/* <label>Enter licence number:</label>
                    <input onChange={(c) => setLicenceNumber(c.target.value)} /> <br /> <br /> */}
                        <div className="form-group">
                            <label>Please enter first name: </label>
                            <input className="form-control" onChange={(c) => setFirstName(c.target.value)} value={firstName} /> <br /><br />
                        </div>
                        <div className="form-group">
                            <label>Please enter last name: </label>
                            <input className="form-control" onChange={(c) => setLastName(c.target.value)} value={lastName} /> <br /><br />
                        </div>
                        <div className="form-group">
                            <label>Please enter date of birth: </label>
                            <input className="form-control" style={{ width: '100px', display: "inline" }} placeholder="Day" type="number" onChange={(c) => setDobDay(c.target.value)} value={dobDay} />
                            <input className="form-control" style={{ width: '100px', display: "inline" }} placeholder="Month" type="number" onChange={(c) => setDobMonth(c.target.value)} value={dobMonth} />
                            <input className="form-control" style={{ width: '140px', display: "inline" }} placeholder="Year" type="number" onChange={(c) => setDobYear(c.target.value)} value={dobYear} /> <br /> <br />
                        </div>
                        <div className="form-group">
                            <label>Please enter address: </label>
                            <input className="form-control" onChange={(c) => setAddress(c.target.value)} value={address} />
                        </div>
                        <h3>Vehicle Details</h3>
                        <div className="form-group">
                            <label>Enter VIN number:</label>
                            <input className="form-control" onChange={(c) => setVinNumber(c.target.value)} value={vinNumber} /> <br /> <br />
                        </div>
                        <div className="form-group">
                            <label>Enter manufacture year:</label>
                            <input className="form-control" onChange={(c) => setManufactureYear(c.target.value)} value={manufactureYear} /> <br /><br />
                        </div>
                        <div className="form-group">
                            <label>Enter vehicle make:</label>
                            <input className="form-control" onChange={(c) => setMake(c.target.value)} value={make} /> <br /><br />
                        </div>
                        <div className="form-group">
                            <label>Enter vehicle model:</label>
                            <input className="form-control" onChange={(c) => setModel(c.target.value)} value={model} /> <br /><br />
                        </div>
                        <div className="form-group">
                            <label>Enter vehicle weight:</label>
                            <input className="form-control" onChange={(c) => setWeight(c.target.value)} value={weight} /> <br /><br />
                        </div>
                        <div className="form-group">
                            <label htmlFor="vehicle-shape">Enter vehicle shape:</label>
                            <select className="form-control" onChange={(c) => setShape(c.target.value)} id="vehicle-shape">
                                <option value="sedan">sedan</option>
                                <option value="coupe">coupe</option>
                                <option value="wagon">wagon</option>
                                <option value="van">van</option>
                                <option value="ute">ute</option>
                            </select>
                        </div>
                        {/* </form> */}
                        <button className="btn btn-outline-primary m-1" onClick={sendEstablishRegistrationRequest}>Submit</button>
                        {registration}

                    </div>
                    }



                </form>
            </Container>
        </div>
    )
}