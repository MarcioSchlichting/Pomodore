FROM node:latest
MAINTAINER Marcio Sergios
COPY . /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT ["npm", "run", "dev"]
EXPOSE 3000