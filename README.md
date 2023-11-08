<div align="center">
<img src="./src/assets/Logo.svg" alt= "Logo do Food Explorer">
</div>

<h1 align="center"> FOOD EXPLORER - FRONT END </h1>
<a href="https://foodexplorer-rocket.netlify.app/" target="_blank" rel="noopener noreferrer">Link Deploy</a>

## Descrição do Projeto

<h1 align="center">
Food Explorer 
</h1>
<p align="center"> O Food Explorer é uma aplicação responsiva que simula um menu interativo para um restaurante fictício. </p>
<p align="center">A aplicação é baseada em modelo disponibilizado no Figma e possui duas personas: o admin e o usuário.</p>
<p align="center">O admin é responsável pelo restaurante, sendo permitindo a criação, visualização, edição e exclusão de pratos. Os pratos deverão conter yma imagem, um nome, uma categoria, ingredientes, preço e uma breve descrição.</p>
<p align="center">O usuário poderá visualizar todos os pratos cadastrados e ao clicar em um prato será redirecionado para uma página com as informações detalhadas do prato.</p>

# Sumário

<!--ts-->

- 🛠 [Funcionalidades](#funcionalidades)
- 🎯 [Critérios Obrigatórios](#critérios-obrigatórios)
- 💻 [Tecnologias](#tecnologias)
- 🔑 [Contas](#contas-de-demonstração)
  - [Usuário Geral](#usuário-geral)
  - [Usuário Admin](#usuário-admin)
- 💽 [Instalação](#instalação)
- 👩 [Autora](#autora)
- ➡ [Links](#links)
  - [GitHub Front End](#github-front-end)
  - [GitHub Back End](#github-back-end)
- 📑 [Licença](#licença)
<!--te-->

# Funcionalidades

- [x] Criar conta;
- [x] Fazer Login;
- [x] Atualizar informações da conta;
- [x] Visualizar todos os pratos cadastrados;
- [x] Acessar os detalhes de um prato selecionado;
- [x] Pesquisar por um prato;
- [x] Admin: cadastrar, editar e excluir pratos.

# Critérios Obrigatórios

- Projeto estruturado com organização de pastas e divisão de componentes;
- Armazenamento de dados em uma banco de dados;
- Autenticação validada por senha na tela de login para acesso a aplicação utilizando JWT.
- Todos os elementos (funções, componentes, variáveis) devem possuir nome significativo seguindo boas práticas do mercado;
- Usuários e admin podem realizar pesquisa de pratos;
- O admin deverá realizar updload de imagem para cadastrar um prato;
- A aplicação deverá ser responsiva seguindo o conceito de Mobile First;
- Utilizar animações, transições e transformações para melhor experiência do usuário;
- A aplicação deverá consumir sua própria API;

# Tecnologias

- [Axios](https://axios-http.com/docs/intro)
- [React](https://pt-br.legacy.reactjs.org/)
- [React-Icons](https://react-icons.github.io/react-icons/)
- [Styled-Components](https://styled-components.com/docs/basics#getting-started)
- [Swiper](https://swiperjs.com/get-started)
- [EsLint](https://eslint.org/docs/latest/)
- [Vite](https://vitejs.dev/guide/)
- [NetFly](https://www.netlify.com/)

# Contas de demonstração

## Usuário Geral

 <p> Login: user@foodexplorer.com</p>
 <p> Senha: 123456</p>

## Usuário Admin

 <p> Login: admin@foodexplorer.com </p>
 <p> Senha: 012345</p>

# Instalação

Para utilizar o projeto em sua máquina será necessário possuir as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). Você precisará também de um editor como o [VSCode](https://code.visualstudio.com/).

# Rodando o Front End

```bash
# Clone este repositório
$ git clone https://github.com/jamile-xavier/FoodExplorer-Front.git

# Acesse a pasta do projeto no terminal/cmd
$ cd FoodExplorer-Front

# Instale as dependências
$ npm i

# Execute a aplicação no modo de desenvolvimento
$ npm run dev

# A aplicação iniciará na porta 5173 - acesse <http://localhost:5173>

```

# Autora

<p> Jamile Xavier Mendonça </p>

[Github](https://github.com/jamile-xavier)

[Linkedin](https://www.linkedin.com/in/jamile-xavier/)

# Links

## Github Front End

[Repositorio-front](https://github.com/jamile-xavier/FoodExplorer-Front)

## Github Back End

[Repositorio-back](https://github.com/jamile-xavier/FoodExplorer-Back)

# Licença

Licença MIT

O figma e requisitos da aplicação é disponibilizado pela [RocketSeat](https://www.rocketseat.com.br/) para conclusão do desafio final do curso Explorer.

O projeto foi criado de acordo com o aprendizado obtido no curso e os componentes, estilos e responsividade criados por mim baseado nos requisitos do projeto e no que foi aprendido durante o curso.

É concedida permissão gratuita para usar, copiar, modificar, mesclar, publicar, distribuir a aplicação desde que inclua a declaração de direitos autorais e o aviso de permissão em todas as cópias ou partes substanciais do software.

O software é fornecido "como está", sem garantia de qualquer tipo expressa ou implícitas, incluindo mas não se limitando às garantias de comercialização, adequação a um determinado fim e não violação.
