FROM node:lts-alpine
WORKDIR /testtask/client
COPY ./.env.production ./.env
COPY package.json ./
RUN apk --no-cache add --virtual builds-deps build-base python
COPY build ./build
RUN npm install --only=prod && npm install -g serve
EXPOSE 2500
CMD ["serve", "-l", "tcp://0.0.0.0:2500", "build"]