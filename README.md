# kubernetes-demo
Installing NODE,
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.nvm/nvm.sh
nvm install 20.10.0
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v20.10.0/bin
```
Check installation with `node --version`
On two terminals run both servers, 
```
cd hello-service
npm install
node index.js
```
```
cd hello-service
npm install
node index.js
```

Test out http://localhost:1729/hello-world 
docker build -t my-node-app .
docker run -p 3000:3000 my-node-app

