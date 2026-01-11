# DevOps Multi-Cloud Assignment - My Implementation

## Overview
This repository contains my implementation of a two-tier web application (Python backend + Next.js frontend) deployed on cloud platforms. The focus is on containerization, CI/CD, Terraform-based infrastructure, monitoring, and security.

---

## 1. Project Setup
- Repository cloned from the provided codebase.
- Branching strategy followed:
  - `main` – production-ready
  - `develop` – integration
  - `feature/*` – specific tasks
- Git commits are meaningful and traceable.

---

## 2. Backend
- Framework used: Python Flask
- APIs implemented:
  - `/health`
  - `/api/message`
- Unit tests: 2 tests using `pytest`
- Dockerized with a multi-stage Dockerfile:
  - Non-root user
  - Small image size
  - Environment-based configuration

---

## 3. Frontend
- Framework used: Next.js
- Calls backend APIs for data
- End-to-end tests implemented using Jest (2 tests)
- Dockerized with multi-stage Dockerfile

---

## 4. CI/CD
- GitHub Actions used for CI/CD:
  - Backend and frontend tests run on push to `develop`
  - Docker images built and tagged with Git SHA
  - Pushed to AWS ECR
- Automatic deployment to AWS ECS (Fargate)
- **Notes:** GCP and Azure deployment blocked due to billing issues

---

## 5. Cloud Deployment

### AWS
- ECS Fargate used for container deployment
- Security groups configured:
  - Frontend: `sg-0415858d8e2116f`
  - ALB: `sg-01a292cf4e10f7559`
- VPC and subnet configured
- Service Discovery used for backend/frontend communication

### Issues Faced
- Unable to create ALB due to account limitations:  
  `OperationNotPermitted: This AWS account currently does not support creating load balancers`
- Security group conflicts when adding rules:  
  `InvalidPermission.Duplicate` errors
- GCP project creation failed due to unaccepted Terms of Service
- Azure account blocked due to billing restrictions

---

## 6. Monitoring & Logging
- Monitoring dashboards configured in AWS CloudWatch
- Alerts configured for CPU > 70% for 5 minutes (Email notification)
- Logs collected from ECS tasks

---

## 7. Security
- IAM roles followed least privilege principle
- Secrets stored in AWS Secrets Manager
- No secrets exposed in Git, Docker images, or CI logs
- Network ingress/egress documented

---

## 8. Load Balancing & Resiliency
- Attempted to configure ALB (blocked due to account)
- ECS tasks configured with multiple replicas
- Service discovery used for inter-container routing

---

## 9. Lessons Learned
- Multi-cloud deployments require active billing accounts
- Security group and ALB limitations can block deployments
- ECS service discovery can be used without a load balancer for small projects

---

## 10. Evidence
- CI/CD logs (available in `.github/workflows`)
- Terraform output for AWS ECS and networking
- CloudWatch dashboard screenshots
- Docker images pushed to AWS ECR

