cd ./usr/app
docker-compose stop
docker-compose rm -f
docker-compose build
docker-compose up -d