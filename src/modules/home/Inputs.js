import React from 'react'
import styled from 'styled-components'
import { TextField } from '@mui/material'

const Inputs = () => {
  return (
    <Container>
      <TextField />
    </Container>
  )
}

export default Inputs

const Container = styled.div`
  max-width: 1400px;
 display: flex;
`
