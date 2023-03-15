import React from 'react'
import styled from 'styled-components'
import Header from '../modules/home/Header'
import Inputs from '../modules/home/Inputs'

const Home = () => {
  return (
    <Container>
      <Header />
      <Inputs />
    </Container>
  )
}

export default Home

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`
