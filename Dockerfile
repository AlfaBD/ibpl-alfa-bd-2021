FROM node:13 as build

# app
WORKDIR /app
COPY . /app/

# nginx
RUN apt-get update && apt-get install nginx -y && \
    /etc/init.d/nginx stop && \
    rm /etc/nginx/sites-enabled/default
COPY .deploy/nginx/nginx.conf /etc/nginx/conf.d

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
EXPOSE 8000

COPY docker-entrypoint.sh /usr/local/bin/
RUN ln -s /usr/local/bin/entrypoint.sh / # backwards compat
ENTRYPOINT ["docker-entrypoint.sh"]

CMD cd back-end && npm run start-prod
