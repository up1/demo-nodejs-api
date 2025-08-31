# Demo with NodeJS


## 1. Run test with coverage
```
$npm test
```

Open coverage report in folder `coverage/`


## 2. Build image and run container with docker
```
$docker image build -t nodejs-api:1.0 .
$docker container run -d -p 3000:3000 nodejs-api:1.0
```