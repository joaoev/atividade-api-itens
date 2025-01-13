#!/bin/sh

# Aguarde o banco de dados ficar disponível
echo "Waiting for the database to be ready..."
until nc -z database 5432; do
  sleep 2
done

echo "Running Prisma migrations..."
npx prisma migrate dev

echo "Starting the application..."
exec "$@"
