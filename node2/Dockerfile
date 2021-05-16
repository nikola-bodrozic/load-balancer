FROM node:lts-alpine3.12
WORKDIR /usr/src/app
COPY package*.json app.js ./
RUN npm install
CMD ["node", "app.js"]
