FROM node:alpine

ARG SERVICE_URL
ENV SERVICE_URL $SERVICE_URL

RUN mkdir /app
WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm install

COPY . /app

RUN ["npm", "run", "add-proxy"]
CMD ["npm", "start"]
