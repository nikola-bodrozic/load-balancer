FROM node:14
WORKDIR /usr/src/app
RUN npm init -y
RUN npm install express
COPY package*.json app.js ./
RUN npm install
EXPOSE 4000
CMD ["node", "app.js"]