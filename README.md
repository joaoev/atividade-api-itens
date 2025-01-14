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

## Criar e listar items
```
POST http://localhost:3333/item
```
Estrutura da requisição:
```
{
    "name": "Produto 001",
    "description": "Descrição",
    "price": 25.00
}
```


```
GET  http://localhost:3333/itens
```
Exemplo do que este endpoint retorna:
```
[
    {
        "id": "4eb49457-ccb2-46af-871f-c9ed8d078bf2",
        "name": "Produto 001",
        "description": "Descrição",
        "price": 25,
        "createdAt": "2025-01-14T01:16:44.413Z"
    },
    {
        "id": "2b54cbd2-15eb-4935-a10a-df8cdf0bafeb",
        "name": "Produto 002",
        "description": "Descrição",
        "price": 25,
        "createdAt": "2025-01-14T01:20:15.162Z"
    }
]
```