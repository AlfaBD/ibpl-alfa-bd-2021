FROM node:12-alpine as build

# app
WORKDIR /app
COPY . /app/

# nginx
RUN apk update && apk add nginx openrc && \
    mkdir -p /run/openrc && \
    touch /run/openrc/softlevel && \
    rc-update add nginx default && \
    rc-status && \
    rm /etc/nginx/conf.d/default.conf
COPY .deploy/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# frontend
RUN cd front-end && npm install && \
    npm install react-scripts@3.0.1 -g && \
    npm run build

# backend
RUN cd back-end && npm install && \
    npm install -D cross-env && \
    npm install mysql2 && \
    npm install -g nodemon

# Server
EXPOSE 80

COPY docker-entrypoint.sh /usr/local/bin/
RUN ln -s /usr/local/bin/entrypoint.sh / # backwards compat
ENTRYPOINT ["docker-entrypoint.sh"]

CMD cd back-end && npm run start-prod
