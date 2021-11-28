FROM node:16

RUN mkdir -p /app
WORKDIR /app
EXPOSE 3000
ENTRYPOINT ["npm","run","dev"]