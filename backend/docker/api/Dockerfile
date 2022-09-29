# syntax=docker/dockerfile:1
FROM node:18.9.1-alpine

LABEL MAINTAINER="Genibrel Mathias <mathias.genibrel@livecampus.tech>"

WORKDIR /app

COPY ./package.json ./
COPY ./tsconfig.json ./

RUN npm install -g typescript
RUN npm install

COPY ./src/ .

RUN tsc

CMD ["node", "src/dist/index.js"]

EXPOSE 3000