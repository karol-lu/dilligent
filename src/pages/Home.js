import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Header from '../components/Header'

const Home = () => {
  return (
    <Container>
      <Header />
      <MainContent>
        <TextFieldContainer>
          <TextBox
            id='seed'
            label='Input text'
            variant='outlined'
            color='#116466'
            margin='normal'
          />
          <TextBox
            id='result'
            label='Result'
            variant='outlined'
            color='#116466'
            margin='normal'
          />
       </TextFieldContainer>
        <Button />
      </MainContent>
    </Container>
  )
}

export default Home

const Container = styled.div`
`
const MainContent = styled.div`
`
const TextFieldContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const TextBox = styled(TextField)`
  padding: 5px 15px;
  border: 1px solid #116466;
  min-width: 800px;
  background-color: #CCC;
`
