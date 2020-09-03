# Primeiro build com Docker

- Para gerar a imagem utilize o seguinte comando, na pasta do projeto (onde tem o arquivo Dockerfile):

`docker image build -t build-simples .`

- Para criar um container e executá-lo:

`docker container run -d -p 8000:80 --name build-simples build-simples`

- Para ver os logs do container:

`docker container logs build-simples`
