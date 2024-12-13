docker compose up --build -d

cp .env.example .env

docker exec -it $(docker ps --filter "name=server" --format "{{.ID}}") ./node_modules/.bin/prisma db push