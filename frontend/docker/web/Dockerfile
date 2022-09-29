FROM node:18.9.1-alpine

LABEL MAINTAINER="Genibrel Mathias <mathias.genibrel@livecampus.tech>"

WORKDIR /app

COPY ./frontend/package.json ./
# COPY ./frontend/tsconfig.json ./

# RUN npm install -g typescript
RUN npm install

COPY ./frontend/src/ .
COPY ./frontend/public/ .

# RUN tsc

CMD ["node", "src/dist/index.js"]

EXPOSE 3000