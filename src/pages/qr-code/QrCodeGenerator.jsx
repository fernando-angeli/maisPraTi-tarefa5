import ContainerApp from "../../components/container/ContainerApp";
import Title from "../../components/title/Title";
import Input from "../../components/input/Input";
import styled from "styled-components";
import { useState } from "react";
import QRCodeCanvas from "qrcode.react";
import Button from "../../components/button/Button";
import FormatClearIcon from "@mui/icons-material/FormatClear";

const QRCodeContainer = styled.div`
  max-width: 150px;
  max-height: 150px;
  box-shadow: 5px 5px 15px gray;
  padding: 1rem;
`;

const QRCodeGenerator = () => {
  const [text, setText] = useState("");
  return (
    <ContainerApp>
      <Title title="QR Code Generator" />
      <Input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Digite para gerar um QRCode"
      />
      <QRCodeContainer>
        <QRCodeCanvas id="qrCode" value={text} bgColor={"#eee"} />
      </QRCodeContainer>
      <Button
        onClick={() => setText("")}
        description="Limpar"
        border="1px solid"
        borderRadius="0.5rem"
        textColor="white"
        width="8rem"
        height="2.5rem"
        fontSize="1rem"
        backgroundColor="red"
        margin="1.5rem 0 0 0"
      >
        <FormatClearIcon />
      </Button>
    </ContainerApp>
  );
};

export default QRCodeGenerator;
