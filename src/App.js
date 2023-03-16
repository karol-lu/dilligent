import React from 'react'
import Main from './pages/Main'
import styled from 'styled-components'
import Header from './components/Header'

function App() {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  )
}

export default App;

const Container = styled.div`
  margin: 0 auto;
  background-color: #EEE;
  min-height: 100vh;
  
`
