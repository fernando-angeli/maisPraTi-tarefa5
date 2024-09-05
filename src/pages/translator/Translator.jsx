import { useState } from "react";
import axios from "axios";
import Title from "../../components/title/Title";
import styled from "styled-components";
import Button from "../../components/button/Button";
import Container from "../../components/container/Container";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import TextArea from "../../components/textArea/TextArea";

const Label = styled.label`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0.5rem 1rem;
  width: 300px;
  color: black;
  height: 2.5rem;
  box-sizing: border-box;
  margin-bottom: 1rem;
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

const Error = styled.p`
  color: red;
`;

function Translator() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("pt-br");
  const [targetLanguage, setTargetLanguage] = useState("en");

  const apiKey = `AIzaSyA2h1UIr66R2nh9iHlUjj90mRcjhD2O8Ek`;
  const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
  const translateText = async () => {
    try {
      const response = await axios.post(url, {
        q: text,
        source: sourceLanguage,
        target: targetLanguage,
        format: "text",
      });
      console.log("RESPONSE", response);
      setTranslatedText(response.data.data.translations[0].translatedText);
    } catch (error) {
      setError("Erro na requisição\n", error.message);
    }
  };

  return (
    <Container>
      <Title title="Tradução de textos" />
      <Label>
        Traduzir de:
        <Select
          value={sourceLanguage}
          onChange={(event) => setSourceLanguage(event.target.value)}
        >
          <option value="pt-br">Portuguese</option>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
        </Select>
      </Label>

      <Label>
        Para:
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
        onChange={(event) => setText(event.target.value)}
        placeholder="Digite o texto ou palavra para traduzir"
      />
      {error && <Error>{error}</Error>}
      {translatedText && (
        <TextArea
          value={translatedText}
          readOnly
          color="green"
          border="1px solid green"
        />
      )}
      <Button
        onClick={translateText}
        description="Traduzir"
        border="1px solid"
        borderRadius="0.5rem"
        textColor="white"
        width="8rem"
        height="2.5rem"
        fontSize="1rem"
      >
        <GTranslateIcon />
      </Button>
    </Container>
  );
}

export default Translator;
