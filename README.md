# maisPraTi - Tarefa 5 - [MultiApp](https://multiapp-maisprati.netlify.app/) (deploy Netlify)

Este projeto é a continuação da série de tarefas do **maisPraTi**, com foco na implementação de todos os conceitos aprendidos durante o módulo de React.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite**: Ferramenta de build rápida para projetos modernos de front-end.
- **Axios**: Cliente HTTP baseado em Promises, utilizado para fazer requisições assíncronas.
- **Styled-components**: Utilizado para aplicar estilos de forma mais flexível e modular.
- **Material UI**: Biblioteca de componentes de UI para React, com suporte ao ícone `@mui/icons-material`.

## Funcionalidades

- **Autenticação**: Formulário de login e registro com autenticação do usuário (criar um token fake e salva no localStorage).
- **API TMDB**: Integração com a API do The Movie Database (TMDB) para busca de filmes.
- **Pesquisa de Filmes**: Permite ao usuário pesquisar filmes e exibir resultados dinâmicos.
- **Responsividade**: Interface otimizada para diferentes tamanhos de tela.
- **Gerenciamento de Estado**: Uso de `useContext` para gerenciar o estado de autenticação do usuário.
- **Simulação de Banco de dados no localStorage**: Ao criar um usuário, o mesmo será criado no localStorage.
- **Tasks por usuário**: No ToDoList é possivel incluir tasks para cada usuário, fazer updated, marcar com concluida ou excluir.

## Estrutura do Projeto

- **/src/components**: Contém os componentes reutilizáveis como formulários, botões, e listas de filmes.
- **/src/pages**: Cada página principal do projeto (ex: Login, Registro, Home).
- **/src/context**: Contém o `AuthContext` e outros contextos para gerenciamento de estado global.

## Instalação local

1. Clone o repositório:
   ```bash
   git clone https://github.com/fernando-angeli/maisPraTi-tarefa5.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto com suas credenciais de API e tokens necessários:
   ```env
   VITE_TOKEN_API_TMDB=your_tmdb_api_token
   VITE_TOKEN_API_SEARCH_IP=your_ip_search_api_token
   VITE_TOKEN_API_TRANSLATOR_GOOGLE=your_google_translator_api_token
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## Como Contribuir

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Faça push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.
