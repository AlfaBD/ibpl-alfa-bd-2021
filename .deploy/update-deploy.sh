
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
    docker run -d -p 80:80 --restart unless-stopped --name=alfabd alfabd:develop

    # Link to audio's folder 
    ln -s /home/pc06/alfa-bd/audios /home/pc06/ibpl-alfa-bd-2021/ 
fi
