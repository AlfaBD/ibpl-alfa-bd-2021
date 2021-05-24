docker-build:
	docker build -t "alfabd:dev" .

docker-run:
	docker run -it --rm -p 8000:80 alfabd:dev
