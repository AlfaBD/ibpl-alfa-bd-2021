# ALFA-BD Backend

## Desenvolvimento Local

Siga as etapas abaixo para configurar o ambiente de desenvolvimento local para o backend.

Primeiramente, clone o repositório:

```
git clone https://github.com/AlfaBD/ibpl-alfa-bd-2021.git
cd ibpl-alfa-bd-2021/back-end
```

Instale todas as dependências necessárias:

```
npm install
```
||CASO ESTEJA USANDO WINDOWS||
Caso esteja usando Windows, instale as seguintes dependências:
    - npm install -D cross-env
    - npm install mysql2

Em seguida, é necessário configurar uma instância do banco de dados MySQL localmente para o correto funcionamento do backend. Para isso, siga as etapas indicadas no tutorial abaixo:

[Configurando MySQL no Windows](https://www.alura.com.br/artigos/mysql-do-download-e-instalacao-ate-sua-primeira-tabela#:~:text=Configura%C3%A7%C3%A3o%20do%20servidor%20MySQL%3A%20escolha,em%20um%20servidor%20de%20produ%C3%A7%C3%A3o.)

Uma vez configurado, crie um novo usuário e um novo banco de dados com as seguintes credenciais:

```
Usuário: alfabd
Senha: alfabd
Banco de dados: alfabd
```

Por fim, basta rodar o seguinte comando para iniciar o backend:

```
npm run start-dev
```

## Estrutura do backend

O código do backend foi estruturado de tal forma a possibilidar um desenvolvimento ágil e eficaz de cada time. Para isso, foram criados arquivos de rotas para cada uma das entidades do projeto: Aluno, Professor e Escola. Estes arquivos estão definidos no diretório /api/routes/.

Todas as consultas e iterações com o banco de dados estão definidas nos arquivos de models. Cada arquivo de model deve ser usado para a escrita das respectivas consultas ao banco de dados que sejam necessárias para a correta manipulação da informação.
