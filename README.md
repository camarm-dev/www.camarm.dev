<p align="center">
  <img src=".github/header.png" title="Banner" alt="Banner of camarm website">
</p>

# camarm Website
This repository contains th camarm's website code.
This website is available at https://www.camarm.dev.

## Documentation

### Configuration
`.env`
```dotenv
BACKEND=https://api.camarm.fr
```

### Developement run
`yarn dev`
Run a developement server.

### Deployement run
`yarn build && yarn start`
Properly build and run the nuxt website.

### Lint & Test
`yarn test`
Test application with specs in test/.

`yarn lint`
Lint code.

The default Git Ci file created by nuxt wizard run test and lint at each commit to the repository.
