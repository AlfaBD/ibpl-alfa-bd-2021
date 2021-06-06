# ALFA-BD

Análise de Fluência na Alfabetização em Big Data

## Visão do Projeto

Para o Ministério da Educação e Cultura (MEC) do Brasil e as Instituições envolvidas com a alfabetização de alunos do ensino fundamental, que vêm sendo consideradas relevantes para o "Programa Mais Alfabetização", o Projeto ALFA-BD representa uma iniciativa para se "dotar o ensino fundamental brasileiro de uma sistemática apropriada, visando melhor avaliar fluência em leitura de palavras, pseudopalavras e textos, bem como melhor diagnosticar e propor correções para aumento dos níveis de alfabetização atuais no país". Diferentemente de sistemas computacionais ou computadorizados existentes no mercado, este produto deverá ser desenvolvido com soluções tecnológicas emergentes e inovadoras, para atender às necessidades de detecção de níveis de fluência de alfabetização em alunos do 2º ano do ensino fundamental brasileiro.

## Criando uma nova branch para desenvolvimento de novas funcionalidades

```bash
git pull
git checkout develop
git checkout -b feature_[name_of_feature]
git push --set-upstream origin feature_[name_of_feature]
```

## Docker

Para executar a aplicação através de uma imagem Docker, execute os comandos abaixo:

```bash
docker build -t "alfabd:dev" .
```

Para executar em modo de desenvolvimento:

```bash
docker run -it --rm -p 8000:80 alfabd:dev
```

A aplicação ficará disponível em http://localhost:8000