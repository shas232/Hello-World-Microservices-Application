# Assignment 1

This guide demonstrates how to set up and run a Node.js application with microservices architecture, containerized using Docker, and orchestrated with Kubernetes.

## Prerequisites
Ensure you have the following installed on your system:
- Node.js 14+
- Docker
- Kubernetes (Minikube or any cloud provider's Kubernetes service)
- Git
  

## Installing Node.js
Follow these steps to install Node.js using NVM (Node Version Manager):
bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.nvm/nvm.sh
nvm install 20.10.0
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v20.10.0/bin

## Hello Service 

cd hello-service
npm install
node index.js
![image](https://github.com/user-attachments/assets/e06023c5-df4f-4848-b1ec-1c7ee2a87331)

# Build Docker image
docker build -t hello-service .
# Tag the image for Docker Hub
docker tag hello-service shas232/hello-service:latest
# Run the container
docker run -p 1729:1729 hello-service
# Push to Docker Hub
docker push shas232/hello-service:latest
![image](https://github.com/user-attachments/assets/bea1e36b-d9f1-4a12-ae14-e77aa7e7288c)



## World service
cd world-service
npm install
node index.js
![image](https://github.com/user-attachments/assets/e2220330-4f3d-4fd8-8764-995c870d8445)

# Build Docker image
docker build -t world-service .
# Tag the image for Docker Hub
docker tag world-service shas232/world-service:latest
# Run the container
docker run -p 3000:3000 world-service
# Push to Docker Hub
docker push shas232/world-service:latest
![image](https://github.com/user-attachments/assets/7cfa19e5-74db-45df-bf7f-ab3ec9014d76)



##Kubernetes Manifests
kubectl apply -f hello-service/kubernetes
kubectl apply -f world-service/kubernetes

## To test it
node test.js
![image](https://github.com/user-attachments/assets/5c3bd888-f305-4db3-9c89-431c90f527f8)



Docker Hub
Hello Service:https://hub.docker.com/layers/shas232/assignment/hello-service/images/sha256-1bfba9101d8faaa9a94f12871c417dbcee7dd87879de2d2134619710e780d129?context=repo
World Sercice: https://hub.docker.com/layers/shas232/assignment/world-service/images/sha256-f2b9b935745d8c47c1cc63becaeeb70c9390618f49a564d46098540dc5942e33?context=repo
