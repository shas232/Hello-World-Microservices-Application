# Kubernetes Demo

This guide demonstrates how to set up and run a Node.js application with microservices architecture, containerized using Docker, and orchestrated with Kubernetes.

## Prerequisites
Ensure you have the following installed on your system:
- Node.js 14+
- Docker
- Kubernetes (Minikube or any cloud provider's Kubernetes service)
- Git

## Running the repo
Follow these steps to install Node.js using NVM (Node Version Manager):
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.nvm/nvm.sh
nvm install 20.10.0
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v20.10.0/bin

## Hello Service 

cd hello-service
npm install
node index.js
# Build Docker image
docker build -t hello-service .
# Tag the image for Docker Hub
docker tag hello-service shas232/hello-service:latest
# Run the container
docker run -p 1729:1729 hello-service
# Push to Docker Hub
docker push shas232/hello-service:latest

## World service
cd world-service
npm install
node index.js
# Build Docker image
docker build -t world-service .
# Tag the image for Docker Hub
docker tag world-service shas232/world-service:latest
# Run the container
docker run -p 3000:3000 world-service
# Push to Docker Hub
docker push shas232/world-service:latest

##Kubernetes Manifests
kubectl apply -f hello-service/kubernetes
kubectl apply -f world-service/kubernetes

## To test it
node test.js

