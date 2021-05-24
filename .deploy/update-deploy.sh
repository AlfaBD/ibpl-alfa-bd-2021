
#!/usr/bin/env bash
set -Eeo pipefail

UPSTREAM=${1:-'@{u}'}
LOCAL=$(git rev-parse @)
REMOTE=$(git rev-parse "$UPSTREAM")
BASE=$(git merge-base @ "$UPSTREAM")

if [ $LOCAL = $BASE ]; then
    echo "Updating deploy"
    docker stop alfabd || true
    docker rm alfabd || true

    # Updating source code
    git reset --hard HEAD
    git pull

    # Building new image
    docker build -t "alfabd:develop"

    # Deploying new image
    docker run -d -p 80:80 --name=alfabd alfabd:develop
fi
