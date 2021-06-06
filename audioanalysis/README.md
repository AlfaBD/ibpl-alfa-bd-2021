
# ALFA - BD
## Análise de Fluência na Alfabetização em Big Data

# Documentação dos Scripts de Análise e Predição dos Áudios US#209 - v1.0

Este repositório tem por objetivo relatar os estudos e as implementações como prova de conceito da análise e modelos preditivos para avaliar a fluência em leitura atentendo a:

 **US#209: COMO Backup de Scrum Master DESEJO QUE seja implementado um modelo de classificação de texto PARA que seja possível avaliar a fluência.**

## Get Started (Linux - Python3)

Create enviroment
```sh
virtualenv venv
```

Activate enviroment
```sh
source venv/bin/activate
```

Install dependencies
```sh
pip install -r requirements.txt
```

Start jupyter
```sh
jupyter notebook
```

## Scripts

- [**Exploratory Analysis Audio Data.ipynb**](https://github.com/AlfaBD/ibpl-alfa-bd-2021/blob/feature_analise_audio/audioanalysis/Exploratory%20Analysis%20Audio%20Data.ipynb): Análise exploratória dos áudios para detectar algum padrão na frequencia e escalas sonoras utilizadas para análise de áudio. 

- [**Convert Speech to Text.ipynb**](https://github.com/AlfaBD/ibpl-alfa-bd-2021/blob/feature_analise_audio/audioanalysis/Convert%20Speech%20to%20Text.ipynb): Conversão do áudio para texto para análise preditiva.

- [**Prediction Naive Bayes (Text).ipynb**](https://github.com/AlfaBD/ibpl-alfa-bd-2021/blob/feature_analise_audio/audioanalysis/Prediction%20Naive%20Bayes%20(Text).ipynb): Modelo preditivo criado a partir dos textos.

- [**Prediction SVM (Audio).ipynb**](https://github.com/AlfaBD/ibpl-alfa-bd-2021/blob/feature_analise_audio/audioanalysis/Prediction%20SVM%20(Audio).ipynb): Modelo preditivo a partir das features extraídas dos áudios.


## Conclusões e Recomendações

1. A análise exploratória precisa ser feita com mais tempo e estudo, um conhecimneto no dominío do contexto do projeto também se faz necessário para a interpretação dos resultados obtidos e devido o tempo da Sprint não foi possível apronfundar na análise, entretando ela oferece um ponto de partida para pesquisas futuras.

2. A biblioteca utilizada não conseguiu converter todos os áudios, mesmo com a remoção de ruidos, portanto é necessário ajustar a função de remoção de ruído e criar um algoritmo para comprimir o tamanho dos áudios.

3. **Naive Bayes**: Os resultados não foram satisfatórios, mesmo utilizando a técnica de geração de amostras sintéticas para treinar o modelo, pois devido a quantidade pequena de amostras reais, as amostras sintéticas ficaram muio parecidas gerando overffiting.
Para um teste completo é necessário uma base de dados de áudio maior que seja capaz de gerar um espaço amostral mais representativo.

4. **SVM**: Com a utilização da escala MFCC é possível obter caracteristicas específicas do áudio e ter um resultado satisfatório em comparação ao modelo Naive Bayes.
Para um teste completo seria interessante aplicar oversampling antes de executar validação cruzada em cada conversão de escala dos dados e kernel.
