FROM node:boron

RUN mkdir /server

WORKDIR /server

COPY . /server

RUN yarn

EXPOSE 8000

CMD ["npm", "run", "start"]
