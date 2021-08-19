FROM node:lts-alpine3.12

# get the latest security upgrades and bugfixes
RUN apk -U upgrade 

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY app.js ./

CMD ["node", "app.js"]
