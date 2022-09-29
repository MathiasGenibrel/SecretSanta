FROM node:18.9.1-alpine

LABEL MAINTAINER="Genibrel Mathias <mathias.genibrel@livecampus.tech>"

WORKDIR /app

COPY ./package.json .
# COPY ./frontend/tsconfig.json ./

# RUN npm install -g typescript
RUN npm install

COPY ./src/ .
COPY ./public/ .

# RUN tsc

CMD ["npm", "run", "start"]

EXPOSE 3000