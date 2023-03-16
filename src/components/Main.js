import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FormControlLabel, FormGroup, Switch } from '@mui/material'

const Main = () => {
  const [inputText, setInputText] = useState('')
  const [translatedText, setTranslatedText] = useState('')

  const [translationDirection, setTranslationDirection] = useState('Translate PL to EN:')
  const [isTranslationToEnglish, setIsTranslationToEnglish] = useState(true)

  const [translationEngine, setTranslationEngine] = useState('text-davinci-003')
  const [isEngine003, setIsEngine003] = useState(true)

  const { Configuration, OpenAIApi } = require('openai');
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_MY_API_KEY,
  })

  const openai = new OpenAIApi(configuration)

  const handleInputTextChange = (event) => {
    setInputText(event.target.value);
  }

  const handleLanguageSwitch = () => {
    setIsTranslationToEnglish((prevState) => !prevState)
    if (isTranslationToEnglish) {
      setTranslationDirection('Translate EN to PL:')
    } else {
      setTranslationDirection('Translate PL to EN:')
    }
  }

  const handleEngineSwitch = () => {
    setIsEngine003( (prevState) => !prevState)
    if (isEngine003) {
      setTranslationEngine('text-davinci-003')
    } else {
      setTranslationEngine('text-davinci-002')
    }
  }

  const handleTranslation = async () => {
    const response = await openai.createCompletion({
      model: `${
        isEngine003 ? 'text-davinci-003' : 'text-davinci-002'
      }`,
      prompt: `${
        isTranslationToEnglish ? 'Translate to english:' : 'Translate to polish:'
      } "${inputText}"`,
      temperature: 0.5,
      max_tokens: 100,
    })
    setTranslatedText(response.data.choices[0].text);
  }

  return (
    <Container>
      <MainContent>
        <Params>
          <FormGroup>
            <FormControlLabel
            control={<Switch defaultUnchecked onChange={handleLanguageSwitch} />}
            label={translationDirection}
              />
            <FormControlLabel
              control={<Switch defaultChecked onChange={handleEngineSwitch} />}
              label={translationEngine}
              />
          </FormGroup>
        </Params>
        <TextFieldContainer>
          <TextBox
            id="seed"
            label="Input text"
            variant="outlined"
            color="#116466"
            margin="normal"
            value={inputText}
            onChange={handleInputTextChange}
          />
          <TextBox
            id="result"
            placeholder="Result"
            variant="outlined"
            color="#116466"
            margin="normal"
            InputProps={{ readOnly: true }}
            value={translatedText}
          />
        </TextFieldContainer>
        <TranslateButton onClick={handleTranslation} variant="outlined">
          Go for it
        </TranslateButton>
      </MainContent>
    </Container>
  )
}

export default Main;

const Container = styled.div`
  margin: 15px auto;
  max-width: 1400px;
  border: 1px solid red;
`
const MainContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const Params = styled.div`
  
`
const TextFieldContainer = styled.div`
  display: flex;
  gap: 20px;
`
const TextBox = styled(TextField)`
  padding: 5px 15px;
  border: 1px solid #116466;
  background-color: #CCC;
  width: 400px;
`
const TranslateButton = styled(Button)`
  margin: 10px auto;
`
