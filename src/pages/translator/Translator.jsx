import { useState } from "react";
import Title from "../../components/title/Title";
import styled from "styled-components";
import Button from "../../components/button/Button";
import ContainerApp from "../../components/container/ContainerApp";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import FormatClearIcon from "@mui/icons-material/FormatClear";
import TextArea from "../../components/textArea/TextArea";
import axios from "axios";

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  width: 350px;
  color: black;
  height: 2.5rem;
  box-sizing: border-box;
  margin: 1rem 0;
  font-size: 1.1rem;
`;

const Select = styled.select`
  width: 8rem;
  border-radius: 0.2rem;
  color: black;
  background: #ececf0;
  font-size: 1rem;
  height: 2rem;
  margin-left: 0.5rem;
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Error = styled.p`
  color: red;
`;

function Translator() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("en");

  const handleChange = (event) => {
    setError("");
    setText(event.target.value);
  };

  const handleClear = () => {
    setText("");
    setTranslatedText("");
  };

  const translateText = async () => {
    const apiKey = import.meta.env.VITE_TOKEN_API_TRANSLATOR_GOOGLE;
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    try {
      if (!text.trim()) {
        setError("Informe uma palavra ou texto pra traduzir.");
        setTranslatedText("");
        return;
      }
      const response = await axios.post(url, {
        q: text,
        target: targetLanguage,
      });
      setTranslatedText(response.data.data.translations[0].translatedText);
    } catch (error) {
      setError(`Erro na requisição: ${error.message}`);
      setTranslatedText("");
    }
  };

  return (
    <ContainerApp>
      <Title title="Tradução de textos" />
      <Label>
        Selecione o idioma:
        <Select
          value={targetLanguage}
          onChange={(event) => setTargetLanguage(event.target.value)}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="pt-br">Portuguese</option>
        </Select>
      </Label>

      <TextArea
        value={text}
        name="textInput"
        type="text"
        onChange={handleChange}
        placeholder="Digite o texto ou palavra para traduzir"
        margin="0 0 1rem 0"
        height="10rem"
      />
      {error && <Error>{error}</Error>}
      {translatedText && (
        <TextArea
          value={translatedText}
          readOnly
          color="green"
          border="1px solid green"
          margin="0 0 1rem 0"
        />
      )}
      <ButtonBox>
        <Button
          onClick={translateText}
          description="Traduzir"
          border="1px solid"
          borderRadius="0.5rem"
          textColor="white"
          width="8rem"
          height="2.5rem"
          fontSize="1rem"
          margin="0 0.5rem 0 0"
        >
          <GTranslateIcon />
        </Button>
        <Button
          onClick={handleClear}
          description="Limpar"
          border="1px solid"
          borderRadius="0.5rem"
          textColor="white"
          width="8rem"
          height="2.5rem"
          fontSize="1rem"
          backgroundColor="red"
          margin="0 0 0 0.5rem"
        >
          <FormatClearIcon />
        </Button>
      </ButtonBox>
    </ContainerApp>
  );
}

export default Translator;
