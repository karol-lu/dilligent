import React from 'react'
import Home from './pages/Home'
import styled from 'styled-components'

function App() {
  return (
    <Container>
      <Home />
    </Container>
  )
}

export default App;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  background-color: #EEE;
  border: 1px solid red;
`
