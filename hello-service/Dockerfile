# 1. Use an official Node.js image as a base
FROM node:18-alpine

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# 4. Install dependencies
RUN npm install 

# 5. Copy the rest of the application code to the working directory
COPY . .

# 6. Expose the port the app runs on (e.g., 3000)
EXPOSE 1729

# 7. Define the command to start the server
CMD ["node", "index.js"]
