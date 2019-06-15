npm run build

VERSION=$(node -pe "require('./package.json').version")
NAME=$(node -pe "require('./package.json').name")

cp Dockerfile build/

docker build build/ -t hacknlove/$NAME:$VERSION

rm -rf build

docker push hacknlove/$NAME:$VERSION
docker tag hacknlove/$NAME:$VERSION hacknlove/$NAME:latest
docker push hacknlove/$NAME:latest
