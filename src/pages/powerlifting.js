import React from 'react'
import Layout from '../components/Layout'

import Col from 'react-bootstrap/col'
import Container from 'react-bootstrap/container'
import Row from 'react-bootstrap/row'

import deadlift from '../images/IMG_7742.jpeg'

const PowerliftingPage = () => (
  <Layout>
    <h1>Powerlifting</h1>
    <Row>
      <Col>
        <img src={deadlift} alt="Kayla deadlifting 298lbs." />
      </Col>
      <Col>
        <h2>Programming</h2>
        <p>I'll be offering programming-only coaching options over at <a href="">Coaching Business</a> soon!</p>
        <h2>Certification</h2>
        <p>I'm a USA Powerlifting Certified Club Coach.</p>
        <h2>Best Lifts</h2>
        <p>Currently, my best lifts are as follows:</p>
        <ul>
          <li>Squat: 275.5lbs/125kg</li>
          <li>Bench: 187.4lbs/85kg</li>
          <li>Deadlift: 319.6lbs/145kg</li>
        </ul>
      </Col>
    </Row>
  </Layout>
)

export default PowerliftingPage