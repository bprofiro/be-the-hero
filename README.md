<p align="center">
  <img src="https://github.com/Rocketseat/semana-omnistack-11/blob/master/.github/bethehero.svg" />
</p>
 
<p align="center">
  <img src="https://github.com/bprofiro/assets/blob/master/WhatsApp%20Image%202020-04-13%20at%2018.10.27.jpeg" />
</p>

## Sobre o Projeto

  Esse projeto foi desenvolvido durante a Semana Omnistack 11, organizada pela Rocketseat, evento criado com o objetivo de passar, no periodo de uma semana, conhecimentos básicos e avançados de programação, por meio do desenvolvimento de um projeto de ponta a ponta. O projeto de vez foi o Be The Hero.

  O Be The Hero é um aplicação que conecta pessoas interessadas em realizar doações monetárias e ONGs. Ele foi desenvolvido com uma Rest API em NodeJs, ReactJS e React Native, tudo isso utilizando o JavaScript.
  
  Na aplicação web, a ONG é capaz de fazer o seu login utilizando um token gerado no meu momento do seu cadastro e postar os seus casos com os respectivos valores de cada contribuição.
  
  Já a aplicação mobile foi desenvolvida tendo como público alvo o usuário que irá fazer a doação. Nela, há a listagem de todos os casos e, ao selecionar um caso específico, o usuário é levado para uma outra página onde poderá entrar em contato com a ONG pelo e-mail ou whatsapp.

  A escolha dessa Stack se deve à quantidade de conhecimento que é possível aproveitar entre as tecnologias, por conta de todas elas utilizarem apenas uma linguagem: o JavaScript, além de serem extremamente modernas e poderosas com o uso de seu ecossistema.

## Tecnologias:
  O Be The Hero é um aplicação complexa e, por tanto, muitas ferramentas foram utilizadas para o seu desenvolvimento. Entre elas estão:

- Node
- React
  - React Icons
  - React Dom
  - React Router Dom
- React Native
  - React Navigation
  - React Native Gesture Handler
  - React Native Reanimated
  - React Native Safe Area Context
  - React Native Screens
  - React Native Web
- Expo
  - Expo Mail Composer
- SQLite3
- Express
- Knex
- CORS
- Axios


## Ambiente de Desenvolvimento

Para rodar essa aplicação em sua máquina, você precisará de um ambiente NodeJs básico instalado.

**Clonando o repositório:**

```
$ git clone https://github.com/bprofiro/be-the-hero.git
```

### Instalando:

**Back-End**

- Digite `npm install` na pasta `backend` para instalar todas as dependências;
- Digite `npm run start` para rodar o servidor;

**Front-End** 

- Digite `npm install` na pasta `frontend` para instalar todas as dependências;
- Digite `npm start` para rodar o projeto;

**Mobile** 

- Digite `npm install` na pasta `mobile` para instalar todas as dependências;
- Atualize a baseURL na pasta src/services/api.js.
- Digite `expo start` para rodar o projeto.
