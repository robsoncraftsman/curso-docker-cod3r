# Exercício de criação de um build com cópia de arquivos

- Para criar a imagem:

`docker image build -t build-com-copy .`

- Para criar e iniciar o container

`docker container run -d -p 8000:80 --name build-com-copy build-com-copy
