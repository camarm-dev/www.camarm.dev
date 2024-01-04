FROM node:18.17.0-alpine

# Create destination directory
RUN mkdir -p /usr/src/website
WORKDIR /usr/src/website

# Update and install dependency
RUN apk update && apk upgrade
RUN apk add git python3 make g++
RUN npm i -g npm@latest

# Copy the app, note .dockerignore
COPY . /usr/src/website/
RUN newline=BACKEND=https://api.camarm.fr sed -i "1s/.*/$newline/" .env
RUN npm install
RUN npm run build

EXPOSE 3000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "start" ]
