# Node.js Docker Deployment with GitHub Actions

![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

This project demonstrates automated deployment of a Node.js application using Docker and GitHub Actions, with a self-hosted runner for production deployment.

## Features

- 🐳 Docker containerization
- ⚡ GitHub Actions CI/CD pipeline
- 🔄 Automatic deployment on push to main branch
- 🔒 Secure secret management
- 🖥️ Self-hosted runner for production deployments

## Prerequisites

- Docker installed on both local and production machines
- Docker Hub account (or alternative container registry)
- Ubuntu server for self-hosted runner (or other Linux distro)
- Node.js application with Dockerfile

## Setup Instructions

### 1. Configure Secrets

Add these secrets to your GitHub repository (Settings → Secrets → Actions):

- `DOCKER_USERNAME`: Your Docker Hub username
- `DOCKER_PASSWORD`: Your Docker Hub password or access token
- `SERVER_IP`: Your production server IP (if using SSH deployment)

### 2. Set Up Self-Hosted Runner

On your production server:

```bash
mkdir actions-runner && cd actions-runner
curl -o runner.tar.gz -L https://github.com/actions/runner/releases/download/v2.309.0/actions-runner-linux-x64-2.309.0.tar.gz
tar xzf runner.tar.gz
./config.sh --url https://github.com/YOUR_USER/YOUR_REPO --token YOUR_RUNNER_TOKEN
./run.sh
