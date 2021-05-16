FROM node:lts-alpine3.12
WORKDIR /usr/src/app
RUN npm init -y
RUN npm install express
COPY package*.json app.js ./
RUN npm install
CMD ["node", "app.js"]
