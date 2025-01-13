# Atividade Docker Compose - GERÊNCIA DE CONFIGURAÇÃO (2024.2 - T01)

Esta é uma atividade da disciplina de Gerência e Configuração 2024.2.

## Descrição da atividade
Você deve criar o docker-compose para uma aplicação back-end de uma API e-commerce.
 

GET /itens e POST /item para listar e adicionar um item respectivamente. Defina alguns atributos que achar interessante para o objeto Produto que será armazenado no banco de dados.
 

A aplicação deve salvar os dados no banco de dados relacional Postgres.

## Instalação

### Pré-requisitos

- Node.js
- Docker

### Executar o compose

1. Use o comando para fazer o build na pasta raiz do projeto:
    ```sh
    docker-compose build
    ```

2. Inicie os containers:
    ```sh
    docker-compose up -d
    ```
## Uso

Acesse `http://localhost:3333` no navegador para visualizar a aplicação.

#### Obs.: Caso a api retorne o erro 500, tente rodar esse comando no container da api
1. Comando:
    ```sh
    npx prisma migrate dev
    ```