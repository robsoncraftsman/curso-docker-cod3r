# Exercício de mapeamento de volumes com Docker

- Executar o seguinte comando para criar um servidor web usando a pasta do curso como root:

`docker container run -d --name nginx-curso-cod3r -p 8000:80 -v \$(pwd):/usr/share/nginx/html nginx:1`

_\$(pwd) refere-se ao diretório corrente no SO_
