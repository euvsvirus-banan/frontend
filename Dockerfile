FROM node:12-alpine

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install --quiet

COPY . .

ENTRYPOINT [ "npm", "run" ]

CMD [ "start" ]
