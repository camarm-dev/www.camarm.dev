FROM node:19.7.0-alpine

# create destination directory
RUN mkdir -p /usr/src/website
WORKDIR /usr/src/website

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/website/
RUN yarn install
RUN yarn run build

EXPOSE 3000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "yarn", "start" ]
