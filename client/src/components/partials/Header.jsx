import React from 'react'
import Clock from './Clock'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../../styles/header.scss'

import Logo from '../../images/Logo-CNG.jpg'
import BckGrnd from '../../images/ismd_color_lines_opacity.png'

const Header = () => {
  return (
    <Container fluid className="header">
      <Row>
        <Col sm={2} className="p-0 logo">
          <img src={Logo} alt="logo" />
        </Col>
        <Col sm={10} className="text-center clock" style={{backgroundImage: `url(${BckGrnd})`}}>
          <Clock />
        </Col>
      </Row>
    </Container>
  )
}
export default Header
