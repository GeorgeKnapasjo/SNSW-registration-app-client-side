import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import List from './List'
import Establish from './Establish'
import Search from './Search'
import image from './img/servicensw-logo.png'


function App() {



  return (

    <Router>
      <Container className="mb-3">
        {/* <div className="container"> */}
        <Jumbotron> <Image src={image} className=' img-thumbnail'/></Jumbotron>
        {/* <div className='row text-center'> */}
       
        <ul className="nav">
          <li className="nav-item">
            <Link className="btn btn-outline-primary m-1" style={{ padding: '10px' }} to="/registrations">Home </Link>
          </li>
          <li className="nav-item">
            <Link className="btn btn-outline-primary m-1" style={{ padding: '10px' }} to='/registrations-establish'>Add registartions </Link>
          </li>
          <li className="nav-item">
            <Link className="btn btn-outline-primary m-1" style={{ padding: '10px' }} to='/registrations-search'>Search vehicle</Link>
          </li>
        </ul>


        {/* </div> */}
        {/* </div > */}
      </Container>
      <Switch>
        <Route path='/registrations'>
          <List />
        </Route>
        <Route path='/registrations-establish'>
          <Establish />
        </Route>
        <Route path='/registrations-search'>
          <Search />
        </Route>
      </Switch>
    </Router >

  );
}

export default App;

