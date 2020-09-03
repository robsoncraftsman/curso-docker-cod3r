# Exercício de build com volumes executando um programa em python

- Para criar a imagem:

`docker image build -t build-com-volume .`

- Para criar e executar o container

`docker container run -it -v $(pwd):/app -p 8000:8000 --name build-com-volume build-com-volume`

_Parâmetro -v serve para mapear uma pasta local como um com-volume da imagem_

- Para executar novamente o container em modo interativo:

`docker start -ai build-com-volume`

- Para acessar um volume de um container a partir de outro container:

`docker run -it --volumes-from=build-com-volume --name=container-from-volume ubuntu bash`

- Para rodar novamente:

`docker start -ai container-from-volume`

- Para acessar a pasta log compartilhada:
  `cd log`
  `cat http-server.log`
