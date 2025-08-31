# Demo with NodeJS


## 1. Run test with coverage
```
$npm install
$npm test
```

Open coverage report in folder `coverage/`


## 2. Build image and run container with docker
```
$docker image build -t nodejs-api:1.0 .
$docker container run -d -p 3000:3000 nodejs-api:1.0
```

## 3. API testing with Postman and newman
```
$cd postman
$newman run node-api.postman_collection.json
```

## 4. Push image to Container Registry
* Docker Hub
* Harbor
* Azure container registry

```
$docker image tag nodejs-api:1.0 somkiat/nodejs-api:1.0
$docker login
$docker push somkiat/nodejs-api:1.0
```

## 5. Deploy with Kubernetes
* Working with minikube
* Azure Kubernetes Service

Check your context
```
$kubectl config get-contexts
$kubectl config use minikube
```

Deploy
```
$cd k8s
$kubectl get node

$kubectl apply -f api_deployment.yml
$kubectl apply -f api_service.yml
```

Monitoring
```
$kubectl get deployment
$kubectl get rs
$kubectl get po
$kubectl get service
```

Access to service
* https://minikube.sigs.k8s.io/docs/handbook/accessing/
```
$minikube service nodejs-api-service --url
```

## 6. Deploy in AKS (Azure Kubernetes Service)
```
$kubectl get node

$kubectl apply -f api_deployment.yml
$kubectl apply -f api_service_lb.yml
```