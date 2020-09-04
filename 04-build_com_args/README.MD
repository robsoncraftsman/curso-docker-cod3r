# Exercício de criação de build com parâmetros

- Para gerar a imagem utilize o seguinte comando, na pasta do projeto (onde tem o arquivo Dockerfile):

`docker image build -t build-com-args:1.0.0 .`

- Para criar um container e executá-lo:

`docker container run --name build-com-args build-com-args:1.0.0 bash -c 'echo $MYARG'`

- Para gerar a imagem, passando um parâmetro:

`docker image build --build-arg MYARG=Hello -t build-com-args .`
