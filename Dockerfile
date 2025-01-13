FROM node:20.18.1-alpine3.20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

COPY entrypoint.sh /usr/src/app/entrypoint.sh
RUN chmod +x /usr/src/app/entrypoint.sh

EXPOSE 3333

ENTRYPOINT ["/usr/src/app/entrypoint.sh"]
CMD ["npm", "start"]
