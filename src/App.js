import React from 'react'
import Home from './pages/Home'
import styled from 'styled-components'
import Navbar from './pages/Navbar'

function App() {
  return (
    <Container>
      <Navbar />
      <Home />
    </Container>
  )
}

export default App;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`
