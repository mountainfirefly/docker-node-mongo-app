# docker-node-mongo-app
It is a sample node-mongo application that is build using Docker Compose.

#### Build and run this app with Docker Compose
From your project directory, start up your application by running `docker-compose up`.

```zsh
# Use -d option to run it in the detached mode.
docker-compose up -d
```
Compose pull the mongodb and nodejs image, builds an image for your code, and starts the defined the services. In this case, the code statically copied to the image in build time.

To test your app, open [http://localhost:8000](http://localhost:9000) inside your browser. And you hopefully see this message in the web page:
```
Node application containerised using docker that is successfully connected to mongoDB
```

Use the following command to see if docker containers are running:
```zsh
$ docker container ls
CONTAINER ID           IMAGE                      CREATED            STATUS              PORTS
cee722aab6d7           docker-node-mongo-app_web  2 minutes ago      Up About a minute   0.0.0.0:9000->8080/tcp
7f929fe48f00           mongo                      2 minutes ago      Up About a minute   0.0.0.0:27017->27017/tcp
```

You can bring everything down, remove the container entirely, with the `docker-compose down` command as following:
```zsh
docker-compose down
```

***NOTE***: `docker-compose up` never rebuilds an image. Rebuild your image by following command:
```zsh
docker-compose build
```