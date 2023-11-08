FROM node:20-alpine

WORKDIR /testtask/server

COPY ./.env ./.env

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

COPY dist ./dist

EXPOSE 2501 2502

CMD ["node", "dist/main.js"]
