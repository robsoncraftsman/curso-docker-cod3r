# Exercício avançado de Docker Compose

- Para montar e rodar os containers:

`docker-compose up -d`

- Para rodar o script de verificação no banco de dados:

`docker-compose exec db psql -U admin -f /scripts/check.sql`

- Para ver os logs dos serviços:

`docker-compose logs -f -t`

- Para conectar no banco de dados via bash:

`docker-compose exec db psql -U admin -d email`

-Para executar uma query no psql:
_NOTA: colocar ponto e vírugula no final do comando sql_

`select * from emails;`
