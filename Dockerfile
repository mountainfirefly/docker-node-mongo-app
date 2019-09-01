FROM node:10

# Create a work dir
WORKDIR /user/src/app

# Copy package.json and package-lock.json in docker container
COPY package*.json ./

# Install all the depencies for the application
RUN npm install

COPY . .

# Your app binds to port 8080 so you will have use EXPOSE instruction to have it mapped with docker daemon: 
EXPOSE 8080

# CMD command defines your app runtime.
CMD ["node", "app.js"]

