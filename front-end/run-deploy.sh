#!/bin/bash

#############################################################
# Data: 20/04/2021                                          #
# Nome: run-deploy.sh                                       #
# Criador: Aline Rodrigues                                  #
# Motivo:Script para automatizacao de criação da stack      #
# Atualizado em: 22/04/2021                                 #
#############################################################

# Função de Cabeçalho
function Head () {
`which clear`
echo "=============================================================================="
echo "	       			Run Deploy FrontEnd"
echo -e "==============================================================================\n"
}

# Função de amostragem de utilização
function Usage (){
  echo -e "Utilize:
          run-deploy.sh --dev ou run-deploy.sh --prod\n"
}

# Função para remover a stack existente
function Validate (){
  docker-compose stop
}

t=$1

# Função de validação e criação da stack
function CheckOptions (){
    if [ "$t" = "--dev" ]; then
        echo "Iniciando ambiente de desenvolvimento..."
        echo "Desconstruindo containers, caso existam..."
        docker-compose down
        echo "Construindo containers de desenvolvimento..."
        docker-compose up -d --build
        echo -e " Aplicação criada com sucesso [Ok]"
        echo -e " Para acessar a aplicação entre: [http://localhost:3001]"

    elif [ "$t" = "--prod" ]; then
        echo "Fazendo deploy em ambiente de Produção"
        echo "Desconstruindo containers, caso existam..."
        docker-compose -f docker-compose-prod.yml down
        echo "Construindo containers de desenvolvimento"
        docker-compose -f docker-compose-prod.yml up -d --build
    else
        echo "Opção Invalida"
    fi
}

# Chamadas de Funções
Head
Usage
Validate
CheckOptions
