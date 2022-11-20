FROM node:16

ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm ci

COPY . /app

RUN npm run build:prod

ARG PORT=3000
ENV PORT $PORT

EXPOSE 3000

CMD ["node", "index.js"]
