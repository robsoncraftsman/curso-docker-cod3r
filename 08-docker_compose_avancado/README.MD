# Exercício avançado de Docker Compose

- Para montar e rodar os containers:

`docker-compose up -d`

- Para rodar o script de verificação no banco de dados:

`docker-compose exec db psql -U admin -f /scripts/check.sql`

- Para ver os logs dos serviços:

`docker-compose logs -f -t`
