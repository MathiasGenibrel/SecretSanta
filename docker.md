# tips

Docker build image: (api)

```bash
docker build -t secret-santa-api -f ./backend/docker/api/Dockerfile .
```

Docker build image: (db)

```bash
docker build -t secret-santa-db ./backend/docker/db/
```

Docker build image: (web-app)

```bash
docker build -t secret-santa-web -f ./frontend/docker/web/Dockerfile .
```
