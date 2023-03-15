import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import openai from 'openai';

const openaiApiKey = process.env.REACT_APP_OPENAI_API_KEY;

openai.apiKey = openaiApiKey;

const TranslationForms = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleInputTextChange = (event) => {
    setInputText(event.target.value);
  };

  const handleTranslateButtonClick = async () => {
    const response = await openai.translate({
      engine: 'text-davinci-002',
      prompt: inputText,
      target: 'pl' // change 'pl' to 'en' for English to Polish translation
    });

    setTranslatedText(response.data.translations[0].translated_text);
  };

  return (
    <div>
      <TextField
        id="input-text"
        label="Input text"
        variant="outlined"
        value={inputText}
        onChange={handleInputTextChange}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleTranslateButtonClick}
      >
        Translate
      </Button>
      <TextField
        id="translated-text"
        label="Translated text"
        variant="outlined"
        value={translatedText}
        fullWidth
        margin="normal"
        InputProps={{ readOnly: true }}
      />
    </div>
  );
}

export default TranslationForms;
