FROM node:boron

RUN mkdir /canvas

WORKDIR /canvas

COPY . /canvas

RUN yarn

EXPOSE 3000

CMD ["npm", "start"]
