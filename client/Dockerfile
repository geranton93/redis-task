FROM node:20-alpine

WORKDIR /testtask/client

COPY package.json ./
COPY package-lock.json ./

RUN npm ci && npm i serve -g

COPY ./.env ./.env

COPY build ./build

EXPOSE 2500

CMD ["serve", "-l", "tcp://0.0.0.0:2500", "build"]
