# Smith-shop Api

## Sumário

- [Descrição](#Descrição)
- [Pré-requisitos](#Pre-requisitos)
  - [Instalação](#Instalação)
  - [Instruções para iniciar o projeto](#Intruções-para-iniciar-o-projeto)
- [Documentação](#Documentação)
  - [Verifica o estado da Api](#Verifica-o-estado-da-Api)
  - [Registrar usuário](#Registrar-usuário)
  - [Login](#Login) 
  - [Lista todos os usuário](#Lista-todos-os-usuário)
  - [Lista um usuário](#Lista-um-usuário)
  - [Cria uma categoria](#Cria-uma-categoria)
  - [Lista todas as categorias](#Lista-todas-as-categorias)
  - [Editar um usuário](#Editar-um-usuário)
  - [Lista todos os Blogposts](#Lista-todos-os-Blogposts)
  - [Lista um Blogpost pelo id](#Lista-um-Blogpost-pelo-id)
  - [Atualiza um Blogpost pelo id](#Atualiza-um-Blogpost-pelo-id)
  - [Deleta um BlogPost](#Deleta-um-BlogPost)
  - [Pesquisa por um BlogPost](#Pesquisa-por-um-BlogPost)


<br>

## Descrição

**Objetivo**: O objetivo dessa aplicação, é manipular um banco de dados. Os conhecimentos aplicados foram:

- Arquitetura REST;
- Autenticações e Permissões com JWT;
- Banco de Dados MySQL;
- Docker

## Pré-requisitos

- `npm version 6.14.13`
- `node version 14.17.0`
- `docker`
- `docker-compose`

## Instalação

- Clone o repositório
  ```sh
    git clone git@github.com:esdrasoliveira5/Smith-Shop-API.git
- Vá para a pasta da aplicação
  ```sh
    cd Smith-Shop-API

## Instruções para iniciar o projeto

<br>

- Comando para iniciar

  ```sh
    sudo docker-compose up

<br/>

## Documentação

<br/>

### **Verifica o estado da Api**
##### `GET` /health
<br/>

  Esse endpoint verifica se a Api esta online e retorna um objeto com a mensagem `'Api Online!!`

  - Exemplo `response body`
    ```json
      {
          "message": "'Api Online!!"
      }
    ```
  <br/>

### **Registrar usuário**
##### `POST` /users
<br/>

  Esse endpoint registra um usuário e retorna um objeto com um token.

  - Exemplo `request body` 
    ``` json
        {
          "username": "user",
          "classe": "knight",
          "level": 1,
          "password": "password"
        }
    ```

  - Exemplo `response body`
    ```json
      {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
      }
    ```
<br/>

### **Login** 
##### `POST` /login
  <br/>

  Esse endpoint valida o login do usuário e retorna um objeto com um  token.

  - Exemplo `request body` 
    ``` json
      {
        "username": "user",
        "password": "password"
      }
    ```

  - Exemplo `response body`
    ```json
      {
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiZXhlbXBsZUBlbWFpbC5jb20iLCJpYXQiOjE2NDUxNDI0NzksImV4cCI6MTY0NTc0NzI3OX0.sRZtnLnkGYHjhFBXJISTcX41QbvpGxll-wUnU-kGxyE"
      }
    ```
  <br/>

### **Cadastra um produto**
##### `POST` /products
  <br/>

  Esse endpoint cadastra um produto e retorna um objeto com o produto cadastrado.

  - Exemplo `request headers`
      ```json
      {
        "Authorization": "(Bearer Token)"
      }
      ```
  - Exemplo `request body` 
    ``` json
      {
        "name": "Poção de cura",
        "amount": "20 gold",
      }
    ```

  - Exemplo `response body`
    ```json
      {
        "item": {
          "id": 1,
          "name": "Poção de cura",
          "amount": "20 gold",
        }
      }
    ```
  <br/>

### **Lista todos os produtos**
##### `GET` /products
  <br/>

  Esse endpoint lista todos os produtos e retorna um array.

  - Exemplo `request headers`
      ```json
      {
        "Authorization": "(Bearer Token)"
      }
      ```

  - Exemplo `response body`
    ```json
      [
        {
          "id": 1,
          "name": "Poção de cura",
          "amount": "20 gold",
          "orderId": null
        },
        {
          "id": 2,
          "name": "Escudo do Herói",
          "amount": "100 diamond",
          "orderId": 1
        }
      ]
    ```
  <br/>

### **Cadastra um pedido**
##### `POST` /orders
  <br/>

  Esse endpoint cadastra um pedido, e retorna um objeto.

  - Exemplo `request headers`
      ```json
      {
        "Authorization": "(Bearer Token)"
      }
      ```

  - Exemplo `request body` 
    ``` json
      {
        "products": [1, 2]
      }
    ```


  - Exemplo `response body`
    ```json
      {
        "order": {
          "userId": 1,
          "products": [1, 2]
        }
      }
    ```
  <br/>

### **Consulta um pedido**
##### `GET` /orders/:id
  <br/>

  Esse endpoint retorna um pedido especificado pelo id e retorna um objeto.

  - Exemplo `request headers`
      ```json
      {
        "Authorization": "(Bearer Token)"
      }
      ```

  - Exemplo `response body`
    ```json
      {
        "id": 1,
        "userId": 2,
        "products": [1, 2]
      }
    ```
  <br/>

### **Lista todos os pedidos**
##### `GET` /orders
  <br/>

  Esse endpoint lista todos os pedidos e os retorna em um array.

  - Exemplo `request headers`
    ```json
        {
          "Authorization": "(Bearer Token)"
        }
    ```

  - Exemplo `response body`
    ```json
        [
          {
            "id": 1,
            "userId": 2,
            "products": [1, 2]
          },
          {
            "id": 2,
            "userId": 2,
            "products": [3, 1, 4]
          }
        ]
    ```
  <br/>
