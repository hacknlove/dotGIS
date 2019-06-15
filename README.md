This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).


## Default Create React App Scripts

* `npm start`
* `npm test`
* `npm run build`
* `npm run eject`

## Custom Scripts

### `npm run build:docker`

Builds a docker image, with the mane and versión from `package.json` and uploads it to the docker hub

You must be logged in docker hub with the apropiate account.

### `npm run serve`

Builds and serves the production environment

### `npm run serve:docker`
Serves the production environment from the last docker image

### traefik
**docker-compose.yml**
```
version: '3.2'
services:
  rest-api:
    restart: always
    image: hacknlove/dotgis-challenge:latest
    logging:
      driver: json-file
      options:
        max-size: "200k"
        max-file: "10"
    expose:
      - 80
    networks:
      - web
    labels:
      - "traefik.port=80"
      - "traefik.enable=true"
      - "traefik.frontend.rule=Host:example.com"
      - "traefik.docker.network=web"

```
