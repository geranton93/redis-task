FROM node:lts-alpine
WORKDIR /testtask
COPY /scripts/docker/.env ./
COPY package.json ./
RUN apk --no-cache add --virtual builds-deps build-base python
COPY dist ./
RUN npm install
EXPOSE 2502
CMD ["node", "dist/main.js"]