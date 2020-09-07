FROM node:14.7.0-alpine

WORKDIR /app

ENV NODE_ENV production

COPY package*.json ./

RUN npm ci 

COPY . /app

RUN npm install --only=dev && npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
