# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

COPY package*.json ./


RUN npm install

# Copy app code
COPY . .


EXPOSE 4000

# Start the app
CMD ["node", "index.js"]
