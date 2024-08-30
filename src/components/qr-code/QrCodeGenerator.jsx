import Container from "../container/Container";
import Title from "../title/Title";
import Input from "../input/Input";
import styled from "styled-components";
import { useState } from "react";
import QRCodeCanvas from "qrcode.react";

const QRCodeContainer = styled.div`
  max-width: 150px;
  max-height: 150px;
  box-shadow: 5px 5px 15px gray;
  padding: 1rem;
`;

const QRCodeGenerator = () => {
  const [text, setText] = useState("");
  return (
    <Container>
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
    </Container>
  );
};

export default QRCodeGenerator;
