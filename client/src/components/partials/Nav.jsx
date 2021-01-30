import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

export default function Nav() {

  function handleLogout(event) {
    event.preventDefault()

    fetch('/api/user/logout')
      .then(() => {
        sessionStorage.removeItem('User')
        sessionStorage.removeItem('Role')
      })
      .then(() => window.location.assign('/'))

  }

  return(
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} className="p-0" variant="link" eventKey={'dashboard'}>
            <a className="btn-nav" href="/">Link 1</a>
          </Accordion.Toggle>
        </Card>

        <Card>
          <Accordion.Toggle className="nav-acr" as={Card.Header} variant="link" eventKey={'settings'}>Link 2</Accordion.Toggle>
          <Accordion.Collapse eventKey={'settings'}>
            <Card.Body className='p-0'>
              Link 2 A
            </Card.Body>
          </Accordion.Collapse>
          <Accordion.Collapse eventKey={'settings'}>
            <Card.Body className='p-0'>
              Link 2 B
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Accordion.Toggle as={Card.Header} className="p-0" variant="link" eventKey={'logout'}>
            <a className="btn-nav" onClick={handleLogout}>Logout</a>
          </Accordion.Toggle>
        </Card>

      </Accordion>
    )
}
