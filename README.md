<p align="center">
  <img src=".github/header.png" title="Banner" alt="Banner of camarm website">
</p>

# camarm Website
This repository contains th camarm's website code.
This website is available at https://www.camarm.dev.

## TODOS
- [x] Intersection observer bugged
- [ ] Magnetic scroll
- [ ] Stick the footer to bottom

## Documentation

### Configuration

`.env`
```dotenv
BACKEND=https://api.camarm.fr
```

### Developement run
```shell
npm run dev
```
Run a developement server.

### Deployement run
```shell
npm run build && npm start
```
Properly build and run the nuxt website.

### Lint & Test
```shell
npm run test
```
Test application with specs in test/.

```shell
npm run lint
```
Lint code.

The default Git Ci file created by nuxt wizard run test and lint at each commit to the repository.


## Docker
A `docker-compose.yml` file, in the project root runs this nuxt frontend and the [api code](https://github.com/camarm-dev/api.camarm.fr) simultaneous !

It's used for production purposes!

> `docker-compose` can be `docker compose` depending on your docker-compose version

## Build and start
```shell
docker-compose up
```

## Rebuild a project
(choice: www.camarm.dev / api.camarm.fr)
```shell
docker-compose build --no-cache [project]
```
