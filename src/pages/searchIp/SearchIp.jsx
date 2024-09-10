import { useState } from "react";
import axios from "axios";
import Title from "../../components/title/Title";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import ContainerApp from "../../components/container/ContainerApp";
import styled from "styled-components";

const ResultSearchIp = styled.div`
  width: calc(80% - 2rem);
  font-size: 0.9rem;
  border: 1px solid lightgray;
  border-radius: 5px;
  margin-top: 1rem;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const P = styled.div`
  padding: 1rem;
`;

const Error = styled.p`
  color: red;
  padding: 1rem;
`;

export default function SearchIp() {
  const [ip, setIp] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const token = import.meta.env.VITE_TOKEN_API_SEARCH_IP;

  const searchIp = async () => {
    axios
      .get(`https://ipinfo.io/${ip}/json?token=${token}`)
      .then((response) => {
        if (!response.data.loc) {
          setResult("");
          return setError("Não localizado.");
        }
        setResult(response.data);
        setError("");
      })
      .catch((error) => {
        setResult("");
        setError("Error:" + error);
      });
  };

  return (
    <ContainerApp>
      <Title title="Consulta de IP" />
      <Input
        type="text"
        value={ip}
        onChange={(event) => setIp(event.target.value)}
        placeholder="Informe um IP para pesquisar"
      />
      <Button
        onClick={searchIp}
        description="Buscar"
        border="1px solid"
        borderRadius="0.5rem"
        textColor="white"
        width="8rem"
        height="2.5rem"
        fontSize="1.1rem"
      />
      {import.meta.env.VITE_API_KEY}
      <ResultSearchIp>
        {result && (
          <P>
            <p>IP: {result.ip}</p>
            <p>Cidade: {result.city}</p>
            <p>País: {result.country}</p>
            <p>CEP: {result.postal}</p>
            <p>Localização: {result.loc}</p>
          </P>
        )}
        {error && <Error>{error}</Error>}
      </ResultSearchIp>
    </ContainerApp>
  );
}
