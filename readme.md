# Company API

## Visão Geral

Este serviço é responsável por duas principais funcionalidades: a criação de empresas e o cadastro de licensas para projetos ambientais.


## Estruturas principais

- [Node.Js - v16.1.0](https://nodejs.org/en)
- [Express - v4.18.2](https://expressjs.com/pt-br/)
- [Prisma - v4.13.0](https://www.prisma.io/)
- [MySQL - v8.0](https://www.mysql.com/)


# Iniciando Projeto

Antes de iniciar os serviços, certifique-se de que estão instalados na sua maquina o **Docker-compose e o Node.Js**

#### 1. Configurando variáveis
   > copie o arquivo .env.example para o arquivo .env, certifique-se que todas as variáveis possuam valores válidos.

```
cp .env.example .env
```

#### 2. Iniciar container Docker

```shell
docker-compose up -d
```

> Esse comando irá rodar todas as instancias docker descritas no docker-compose



```shell
docker-compose logs  -f  service  name
```
> (Opcional visualizar logs)


#### 3. Instalar Dependências

```shell
yarn install
```

#### 4. Rodando Migrações

```shell
yarn migrate
```

#### 5. Rodando o Serviço

```shell
yarn dev
```

# Documentação

Após rodar a aplicação, clique no link [Doc - swagger](http://localhost:4000/docs) para abrir a documentação no swagger com exemplos.
