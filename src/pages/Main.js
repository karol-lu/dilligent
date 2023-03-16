import React, { useState } from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Main = () => {

  const { Configuration, OpenAIApi } = require("openai")

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_MY_API_KEY
  })

  const openai = new OpenAIApi(configuration)

  const [inputText, setInputText] = useState('');

  const [translatedText, setTranslatedText] = useState('');

  const handleInputTextChange = (event) => {
    setInputText(event.target.value);
  };

  const handleTranslation = async () => {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Translate english to polish: "${inputText}"`,
      temperature: 0.5,
      max_tokens: 100,
    });
    setTranslatedText(response.data.choices[0].text)
  }

  return (
    <Container>
      <MainContent>
        <TextFieldContainer>
          <TextBox
            id='seed'
            label='Input text'
            variant='outlined'
            color='#116466'
            margin='normal'
            value={inputText}
            onChange={handleInputTextChange}
          />
          <TextBox
            id='result'
            placeholder='Result'
            variant='outlined'
            color='#116466'
            margin='normal'
            InputProps={{ readOnly: true }}
            value={translatedText}
          />
       </TextFieldContainer>
        <TranslateButton
          onClick={handleTranslation}
          variant="outlined"
        >
          Go for it
        </TranslateButton>
      </MainContent>
    </Container>
  )
}

export default Main

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
