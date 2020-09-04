# Exercício de mapeamento de volumes com Docker

- Executar o seguinte comando para criar um servidor web usando a pasta deste exercício como root:

`docker container run -d --name exercicio-volume -p 8000:80 -v $(pwd):/usr/share/nginx/html nginx:1.19.2`

_\$(pwd) refere-se ao diretório corrente no SO_
