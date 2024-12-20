# Movatic Coding Challenge

## Project Overview
This project is a prototype web application developed as part of the Movatic coding challenge. It fetches and displays station data from bike-share systems using provided MDS feeds. The application consists of a frontend built with modern web technologies and a backend API designed for flexibility and scalability. Both services are containerized with Docker for seamless deployment.

## Features
- **Home Page** 🏠: Displays a table of all available bike-share stations.
- **Station Details** 📍: Clicking on any station shows more detailed information about it.
- **Middleware API** 🔄: A backend server acts as a middleware to fetch data from the MDS feeds, ensuring the frontend is decoupled from direct API calls.

## Technology Stack

### Frontend
- **Next.js** ⚛️: A React.js framework used to create a modern and efficient user interface with support for server-side rendering, which improves page load speed and SEO.
- **Tailwind CSS** 🎨: Simplified the design process with utility-first CSS classes for building responsive components quickly, providing a consistent and clean UI without writing custom styles.
- **TypeScript** 🔒: Provided type safety, reducing bugs and improving code maintainability by explicitly defining the data structures used throughout the application.

### Backend
- **Flask** 🐍: A lightweight Python framework used to create the backend API for fetching and processing data from the MDS feed, offering simplicity and robust routing capabilities.
- **Flask-CORS** 🌐: Enabled cross-origin requests, allowing the frontend to communicate with the backend securely by configuring appropriate policies.
- **Requests** 📡: A Python library used to fetch data from the provided MDS feed URLs efficiently, offering a straightforward way to perform HTTP requests.

### Docker
- **Frontend Container** 📦: Built using the `frontend/Dockerfile` to host the Next.js application.
- **Backend Container** 📦: Built using the `backend/Dockerfile` to host the Flask API.
- **Docker Compose** ⚙️: Orchestrated the containers to run seamlessly together with a single command.

## How to Run the Project
1. **Prerequisites**:
   - Install Docker and Docker Compose on your system.

2. **Steps**:
   - Clone the repository.
   - Run the following command in the project root:
  
```bash
docker compose up
```

3. **Access the Application**:
   - Frontend: [http://localhost:3000](http://localhost:3000) 🌐
   - API: [http://localhost:5000](http://localhost:5000) 🌐

> Ensure ports 3000 and 5000 are available on your machine before running the project.

## Future Work
- **Pagination and Filtering** 📋:
  - Implement pagination and filtering mechanisms for the table to handle large datasets efficiently.
- **Enhanced Styling** ✨:
  - Refine the design for a more polished user interface.
- **Data Visualization** 📊:
  - Integrate maps or charts (e.g., Google Maps or Google Charts) to display station locations and data more intuitively.
- **Improved Navigation** 🧭:
  - Add navigation buttons to facilitate better user flow between views.
- **State Management** 🗂️:
  - Explore Redux or similar tools to manage application state for better scalability and user experience.
- **Testing** ✅:
  - Incorporate unit and integration tests for both the frontend and backend to ensure code reliability.
- **Kubernetes** ☁️:
  - Deploy the application in a Kubernetes cluster for improved scalability and fault tolerance.

## Reflection
This prototype demonstrates the potential of integrating MDS data into a scalable web application. While functional, it provides a solid foundation for further development and refinement.
