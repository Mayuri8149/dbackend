#!/bin/bash

#Docker Login

docker login --username knagware9 --password Nilu@2025

#Docker image pull from dockerhub

docker pull knagware9/snapper-api:latest

#Docker Logout Reanme 1234

docker logout

#Docker Login

docker login --username logdoker --password Heena786

#Docker image pull from dcokerhub

docker pull logdoker/snapcert:latest

#Docker Logout

docker logout

#snapcert up 

docker-compose -f docker-compose.yml up -d 

#Node image up

#docker-compose -f docker-compose.yml up -d app

#Angular image up

#docker-compose -f docker-compose.yml up -d api
