FROM node:lts-alpine3.12
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY app.js ./
CMD ["node", "app.js"]
