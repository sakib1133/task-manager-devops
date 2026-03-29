***Task Manager DevOps Project***

## Project Overview
This is a full-stack Task Manager application built using a **multi-container Docker architecture**.
The application consists of:
* Frontend (HTML, JavaScript)
* Backend (Node.js, Express)
* Database (MongoDB)

---

##Architecture
Frontend → Backend API → MongoDB Database
All services run in separate Docker containers using Docker Compose.

---

##Tech Stack
* Frontend: HTML, JavaScript
* Backend: Node.js, Express
* Database: MongoDB
* DevOps Tools: Docker, Docker Compose

---

## features
* Add tasks
* View tasks
* Persistent storage using MongoDB
* Multi-container setup
* Webhook test

---

###  How to Run the Project

## 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/task-manager-project.git

## 2. Navigate to project folder
cd task-manager-project

## 3. Run Docker Compose
docker-compose up --build

## 4. Open in browser
http://localhost:8080

---

## Project Structure
task-manager-project
│
├── docker-compose.yml
├── frontend/
├── backend/
└── README.md

---

## Learning Outcomes
* Dockerfile creation
* Multi-container applications
* Docker Compose
* Container networking
* Volume management
* API integration

---

## Author
mohd sakib malik

---

##  Future Improvements
* Add delete/update tasks
* Add authentication
* Deploy to cloud (AWS / Render)
* Add CI/CD pipeline

