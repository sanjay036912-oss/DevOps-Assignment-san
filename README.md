DevOps Multi-Cloud Assignment
📌 Project Overview

This repository contains a two-tier web application (Python backend + Next.js frontend) demonstrating end-to-end DevOps skills:

Backend: Python REST API (/health, /api/message) with unit tests

Frontend: Next.js UI calling backend APIs, with end-to-end tests

Containerized with Docker (multi-stage Dockerfiles)

Deployment on AWS ECS Fargate (attempted multi-cloud)

CI/CD automated using GitHub Actions

Infrastructure provisioned via Terraform

Monitoring, alerting, and security best practices implemented

⚠️ Note: Due to billing/ToS issues, GCP and Azure deployments were not completed. AWS ECS deployment is functional.

📂 Repository Structure
├── backend/                # Python Flask/FastAPI backend
│   ├── app.py
│   ├── requirements.txt
│   └── tests/
├── frontend/               # Next.js frontend
│   ├── pages/
│   ├── package.json
│   └── tests/
├── terraform/              # Terraform infrastructure configs
│   ├── aws/
│   └── modules/
├── .github/workflows/      # GitHub Actions CI/CD workflows
├── Dockerfile.backend
├── Dockerfile.frontend
└── README.md

⚙️ Prerequisites

Git & GitHub

Docker & Docker Compose

Terraform

AWS CLI (configured with credentials)

Python 3.9+ & Node.js 18+

🛠️ Running Locally
Backend
cd backend
python -m venv venv
source venv/bin/activate   # (Linux/Mac) or venv\Scripts\activate (Windows)
pip install -r requirements.txt
python app.py

Frontend
cd frontend
npm install
npm run dev

🐳 Dockerization
Backend Docker
docker build -t frontenddevopsassignmentsan:backend ./backend
docker run -p 5000:5000 frontenddevopsassignmentsan:backend

Frontend Docker
docker build -t frontenddevopsassignmentsan:frontend ./frontend
docker run -p 3000:3000 frontenddevopsassignmentsan:frontend

📦 CI/CD Pipeline

Trigger: Push to develop branch

Pipeline Steps:

Checkout code

Run backend & frontend tests

Build Docker images

Tag images with Git SHA

Push to AWS ECR

Deployment: On merge to main, automatically deploys ECS tasks to AWS

☁️ Infrastructure as Code

Terraform Modules: Reusable modules for ECS cluster, tasks, security groups, and VPC

AWS ECS Fargate: Backend & frontend deployed as services

Networking: Default VPC + public subnets + security groups

Load Balancer: Not deployed due to account restrictions; public IP used

📊 Monitoring & Alerts

CloudWatch metrics: CPU, Memory, Request count / latency

Alerts: CPU > 70% triggers email notification

Evidence: Screenshots of monitoring dashboards stored in docs/screenshots

🔐 Security & IAM

Least privilege IAM roles

Secrets stored in AWS Secrets Manager

No secrets stored in Git, Docker images, or CI logs

Security groups restrict access to only required ports (80/443 for frontend, 5000 for backend)

📌 Notes / Limitations

AWS deployment fully functional

GCP project blocked due to billing / Terms of Service acceptance

Azure deployment blocked due to billing restrictions

Load balancer not created; ECS tasks accessed via public IP

✅ Deliverables
Task	Status	Evidence
Git Repo & Branches	✅	GitHub history
Docker Images	✅	AWS ECR URLs
Terraform Infrastructure	✅	Terraform plan/apply
CI/CD Pipeline	✅	GitHub Actions logs
Monitoring & Alerts	✅	CloudWatch screenshots
Security & IAM	✅	Secrets proof screenshot
Load Balancing / Resiliency	⚠️	ECS tasks screenshot
Demo Video	✅	Link to video
📹 Demo Video

Demo Video Link
