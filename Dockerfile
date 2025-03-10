# User an offical node.js runtime as a parent image
From node:23-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and the package-lock.json files to the container
COPY package*.json .

#Install the dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the port that the application will run on
EXPOSE 5000

# Start the application
CMD ["node", "./src/server.js"]