import { useState } from "react";
import Title from "../../components/title/Title";
import styled from "styled-components";
import Button from "../../components/button/Button";
import ContainerApp from "../../components/container/ContainerApp";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import TextArea from "../../components/textArea/TextArea";

const Label = styled.label`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0.5rem 1rem;
  width: 350px;
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
  const [targetLanguage, setTargetLanguage] = useState("en");

  const handleChange = (event) => {
    setError("");
    setText(event.target.value);
  };

  const translateText = async () => {
    const apiKey = "AIzaSyDoBQoa7Y614FYVEEyRHWgqmExRhS2djvs";
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    try {
      if (!text) {
        setError("Informe uma palavra ou texto pra traduzir.");
      }
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          q: text,
          target: targetLanguage,
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error.message);
      }
      const data = await response.json();
      setTranslatedText(data.data.translations[0].translatedText);
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
    </ContainerApp>
  );
}

export default Translator;
