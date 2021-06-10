#!/usr/bin/env bash

# =====================================================
# verify-services.sh  -  Script para verificar de forma automática se os 
# principais serviços estão funcionando no servidor e avisa por e-mail eventuais
# problemas. 
# Mantenedor: Carlos Eduardo e Vitor Cruz
# 
# Versão: 1.0
# 
# Testado em: 
# =====================================================

#Variáveis
HAS_ERROR= false

#Verificando o docker
CURRENT_LOG= $(docker logs 03f68363f2fe) 
echo $CURRENT_LOG

#Verificando o Hadoop


#Função para envio do email
send_email_error()
{
  emailListFile="email-list.lst"
  while IFS= read -r line 
  do  
    echo "Atenção, Problema com o servidor!" | mail -s "Problema servidor " $line
  done < "$emailListFile"
}

#Aviso de problemas
#if [HAS_ERROR == true]; then
#  send_email_error()
#  HAS_ERROR= false
#fi


