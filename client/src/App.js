import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Nav from './components/partials/Nav'
import Login from './components/Login'
import Home from './components/Home'
import Header from './components/partials/Header'

export const AuthContext = React.createContext()
const initialState = {
  isAuthenticated: false,
  user: null
}
const reducer = (state, action) => {
  switch(action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user
      }
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null
      }
    default:
      return state
  }
}


const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <AuthContext.Provider value={{state, dispatch}}>
      <Header />
      <Container fluid>
        <Row>
          <Col sm={2} className='p-2 m-0' style={{ backgroundColor: '#165A97', marginTop: '2rem', alignItems: 'center' }}>
            <Nav />
          </Col>
          <Col sm={10} className="justify-content-around" style={{ backgroundColor: '#165A97', display: 'flex', flexWrap: 'wrap', alignItems: 'center', padding: '0.5em 0.5em 0.5em 0' }}>
            {!state.isAuthenticated ? <Login /> : <Home />}
          </Col>
        </Row>
      </Container>
    </AuthContext.Provider>
  )
}
export default App
