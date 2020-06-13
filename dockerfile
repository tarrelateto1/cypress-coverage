# base image
# FROM node:14.4
# FROM debian:stretch-slim
# FROM httpd:2.4

# set working directory
# RUN mkdir /usr/src/app
# WORKDIR /usr/src/app

# # add `/usr/src/app/node_modules/.bin` to $PATH
# ENV PATH /usr/src/app/node_modules/.bin:$PATH

# # install and cache app dependencies
# COPY package.json /usr/src/app/package.json
# RUN npm install
# RUN npm install react-scripts -g

# # start app
# CMD ["npm", "start"]


# Create Docker apche
# FROM jenkins:2.60.3
FROM httpd:2.4
# COPY build/ /usr/local/apache2/htdocs/
EXPOSE 80
# EXPOSE 8080