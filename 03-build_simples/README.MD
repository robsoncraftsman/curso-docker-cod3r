# Primeiro build com Docker

- Para gerar a imagem utilize o seguinte comando, na pasta do projeto (onde tem o arquivo Dockerfile):

`docker image build -t build-simples:1.0.0 .`

- Para criar um container e executá-lo:

`docker container run -d -p 8000:80 --name build-simples build-simples:1.0.0`

- Para ver os logs do container:

`docker container logs build-simples`
