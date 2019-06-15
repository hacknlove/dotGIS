npm run build

VERSION=$(node -pe "require('./package.json').version")
NAME=$(node -pe "require('./package.json').name")
DOCKER_HUB_USER=$(node -pe "require('./package.json').dockerHubUser")

cp Dockerfile build/

docker build build/ -t ${DOCKER_HUB_USER}/$NAME:$VERSION

rm -rf build

docker push ${DOCKER_HUB_USER}/$NAME:$VERSION
docker tag ${DOCKER_HUB_USER}/$NAME:$VERSION ${DOCKER_HUB_USER}/$NAME:latest
docker push ${DOCKER_HUB_USER}/$NAME:latest
