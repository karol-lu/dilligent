import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import TranslationForms from '../components/TranslationForms'

const Home = () => {
  return (
    <Container>
      <Header />
      <TranslationForms />
    </Container>
  )
}

export default Home

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`
