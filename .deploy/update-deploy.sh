#!/usr/bin/env bash


git fetch --all

UPSTREAM=${1:-'@{u}'}
LOCAL=$(git rev-parse @)
REMOTE=$(git rev-parse "$UPSTREAM")
BASE=$(git merge-base @ "$UPSTREAM")

if [ $LOCAL = $REMOTE ]; then
    echo "Up-to-date"
elif [ $LOCAL = $BASE ]; then
    echo "Updating deploy"

    # Updating source code
    git reset --hard HEAD
    git pull

    # Building new image
    docker build -t "alfabd:develop" .

    
    # Removing old deploy
    docker stop alfabd || true
    docker rm alfabd || true

    # Deploying new image
    docker run -d -p 80:80 --name=alfabd alfabd:develop

fi
