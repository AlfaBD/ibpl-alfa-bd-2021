
# ALFA-BD
## Análise de Fluência na Alfabetização em Big Data

# Documentação da Análise Descritiva com Apache Spark

Este repositório tem por objetivo relatar as implementações como prova de conceito da análise descritiva dos dados de avaliação da fluencia de leitura tentendo a:

 **US#221 - COMO Product Owner DESEJO QUE seja criado para a escola uma análise descritiva utilizando Apache Spark PARA que o dashboard possa conter dados analíticos.**

## Get Started (Linux - pyspark - python3)

Install [**Apache Spark**](http://spark.apache.org/downloads.html)

 Enviroment
```sh
~/.bashrc

export SPARK_HOME=< your-directory >/spark-3.1.1-bin-hadoop2.7
export PYSPARK_DRIVER_PYTHON=jupyter
export PYSPARK_DRIVER_PYTHON_OPTS='notebook'
```

Install dependencies
```sh
pip install jupyter pandas mysql
```

Start Spark
```sh
$SPARK_HOME/bin/pyspark --jars < your-directory >/spark/packages/mongo-spark-connector_2.12-3.0.1.jar,< your-directory >/spark/packages/bson-4.2.3.jar,< your-directory >/spark/packages/mongodb-driver-core-4.2.3.jar,< your-directory >/spark/packages/mongodb-driver-sync-4.2.3.jar
```
