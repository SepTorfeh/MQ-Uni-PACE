FROM node:alpine
WORKDIR /app

COPY ./ ./
RUN npm i

WORKDIR /app/client
RUN npm i

WORKDIR /app
CMD ["npm", "run", "dev"]
