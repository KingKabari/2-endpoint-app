# 2-Endpoint Node App with Docker

## Overview
This is a simple Node.js application with **two endpoints**, containerized using Docker.

- **Endpoint 1**: `/` → Returns "Hello World"
- **Endpoint 2**: `/welcome` → Returns "Welcome to my app"

The app runs on **port 4000** inside the container.

---

## Prerequisites
- WSL 2 (Ubuntu)
- Docker installed in WSL (`docker.io`)
- Node.js installed for local testing (optional)

---

## Running the App in Docker

1. **Build the Docker image:**

```bash
docker build -t two-endpoint-app .
