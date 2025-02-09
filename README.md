# Event Management Platform

## Overview
This is a full-stack Event Management Platform where users can view events and manage their accounts. The project includes a frontend (HTML, CSS, JavaScript) and a backend (Node.js, Express.js).

## Features
- User Authentication (Signup/Login)
- View and Manage Events
- API Endpoints for Users and Events
- Real-Time Communication with Socket.IO
- Hosted Frontend and Backend

##  Live Deployment
- **Frontend**: https://glistening-sundae-971171.netlify.app/

##  Project Structure
```
project-root/
│-- frontend/
│   |--> index.html
│   |--> style.css
│   |--> script.js
│
│-- backend/
│   |--> server.js
│   |--> auth.js
│   |--> authroute.js
│   |--> user.js
│   |--> cred.env
│
|--> node_modules/
│--> package.json
│-->package-lock.json
│--> README.


## Installation & Setup

### 1.Clone the Repository

git clone https://github.com/yourusername/event-management.git
cd event-management

### 2️. Install Dependencies
npm install express dotenv mongoose cors bcryptjs jsonwebtoken multer socket.io


### 3️. Start Backend Server
node server.js


### 4️. Open Frontend
- Open `index.html` in your browser.


##  API Endpoints
### **Events API**
 Method   Endpoint        Description                    
 GET     `/api/events`   Fetch all events               
 POST    `/api/events`   Create a new event            |


**Sample Events Response:**
[
  {"id":1, "name":"Tech Conference", "date":"2025-03-10", "description":"Tech event for developers"},
  {"id":2, "name":"Music Festival", "date":"2025-04-05", "description":"A live music event"}
]


### **Users API**
 Method  Endpoint        Description                     
 GET     `/api/users`    Fetch all users                 
 POST    `/api/register` Register a new user             

**Sample Users Response:**

[
  {"id":1, "name":"Navya", "email":"navya@example.com"},
  {"id":2, "name":"Sravani", "email":"sravani@example.com"}
]



## Test Credentials
Username: testuser
Password: Test@123


##  Evaluation Criteria
1. **Functionality**: All features should work as expected.
2. **Deployment**: Hosted and accessible online.
3. **Code Quality**: Well-structured and documented.
4. **UI/UX**: Responsive and user-friendly.
5. **Performance**: Efficient handling of multiple users.



