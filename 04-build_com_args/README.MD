# Exercício de criação de build com parâmetros

- Para gerar a imagem utilize o seguinte comando, na pasta do projeto (onde tem o arquivo Dockerfile):

`docker image build -t build-com-args .`

- Para criar um container e executá-lo:

`docker container run --name build-com-args build-com-args bash -c 'echo $MYARG'`

- Para gerar a imagem, passando o parâmetro:

`docker image build --build-arg MYARG=Hello -t build-com-args .`
