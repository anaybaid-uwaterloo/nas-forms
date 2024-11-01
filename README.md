# NAS Forms Web Application with Sidebar Tabs - Java Spring Boot Backend 

This is developed to recreate and help navigate between multiple tabs on a single interface, each representing a unique webpage with fields and query boxes for user input. This repository presents code structure, personalised set-up instructions on local machines for deployment, and is even customizable to varied needs. 

---

## General Project Overview

In this project, I've tried to present and develop the following:
- **A sidebar** with six clickable tabs (Namely represented as Tab 1, Tab 2, etc.).
- **Six webpages** that display different fields and query boxes for each tab, with proper redirection. 

Each tab in the sidebar corresponds to a webpage where users can input information, which is them aimed to be saved in a database for information storage and retreival - Users can also retrieve this information later. I've build this using **React** on the frontend, **Java Spring Boot** on the backend, and **MongoDB** for data storage for now (subject to change(s)).

### Technologies Used for Development 
- **Frontend**: React, HTML5, CSS3
- **Backend**: Java Spring Boot (Given our Java 8 codebase) 
- **Database**: MongoDB 

---

## Getting Started with this Project

### Prerequisites for Downloads and Availability
To get started, you would need to have **Node.js**, **Java (JDK 11 or higher)**, and **MongoDB** installed on your local machine. I've provided the download links below for reference if needed.

1. [Download Node.js](https://nodejs.org/) (at least version 14 or higher).
2. [Download JDK](https://adoptopenjdk.net/) and set up Java environment.
3. [Download MongoDB](https://www.mongodb.com/try/download/community) and start a local MongoDB server or use MongoDB Atlas for a cloud database.

### Cloning the Repository

This repository can be cloned to your local machine by using the commands below:

```bash
git clone https://github.com/anaybaid-uwaterloo/forms
cd forms
```

### Installing required Dependencies

I've divided this project is divided into two main parts: the backend and frontend, each with its own dependencies. They are as follows:

#### Backend Dependencies

We first navigate to the `backend` directory (for Java Spring Boot) and create a new Spring Boot project if it hasn’t been done already.

```bash
cd backend
```

Then install **Spring Boot dependencies** (if using Maven or Gradle) in your `pom.xml` or `build.gradle`:
- Use **Spring Web** for creating RESTful APIs.
- Use **Spring Data MongoDB** for MongoDB interactions.

Here’s an example `pom.xml` file which is as follows:

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-mongodb</artifactId>
    </dependency>
</dependencies>
```

#### Frontend Dependencies

We would then move to the `frontend` directory to install the frontend dependencies as follows:

```bash
cd ../frontend
npm install
```

This should help install all packages needed for the React app.

---

### Configuring Environment Variables

To connect to MongoDB, we would need to set up environment variables in Java Spring Boot.

To do so, in the `backend/src/main/resources` directory, we would create an `application.properties` file (or use the existing one):

```properties
spring.data.mongodb.uri=<Your MongoDB Connection String>
server.port=8080
```

Over here, you would have to replace `<Your MongoDB Connection String>` with your personalised MongoDB URI. If you’re using MongoDB locally, then it might look something like this:

```properties
spring.data.mongodb.uri=mongodb://localhost:27017/your_personalised_database_name
```

If MongoDB Atlas is being used, then we you would have to get the connection string from your Atlas dashboard.

### Running the Application

Now that (hopefully) everything is set up in terms of repository planning, we can then start on both the backend and frontend servers for this project.

#### Starting the Backend

From the `backend` directory, we would first start the Java Spring Boot server by following the command below:

```bash
./mvnw spring-boot:run
```

The backend server should start on the port specified in the `application.properties` file (the default is normally 8080). Then there should be a message showing confirming the server is running.

#### Starting the Frontend

We can now open a new terminal window, then navigate to the `frontend` directory, and start the frontend server from the command(s) below:

```bash
cd ../frontend
npm start
```

This command should then start the React app, which should normally be available in your local browser at [http://localhost:3000](http://localhost:3000).

---

## Project Structure as thought out so far 

This is a tentative breakdown that I've thought of the project structure, more so to help me figure out and try to understand where each component fits.

```
forms/
│
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/example/app/
│   │   │   │   ├── controller/
│   │   │   │   │   └── TabController.java    # This would have the REST API logic for saving and retrieving data
│   │   │   │   ├── model/
│   │   │   │   │   └── TabData.java          # This would define the schema for form data
│   │   │   │   └── repository/
│   │   │   │       └── TabRepository.java    # This is for setting up the MongoDB data access interface
│   │   │   └── resources/
│   │   │       └── application.properties    # This would have the Spring Boot config file
│   ├── pom.xml                               # Maven configuration file
│
├── frontend/
│   ├── public/
│   │   └── index.html         # This is our main HTML file for the React app
│   ├── src/
│   │   ├── components/
│   │   │   ├── Sidebar.js     # Current Sidebar with six tabs for now, can increase / decrease depending on requirements
│   │   │   ├── Webpage.js     # This is the Webpage component displaying form for each tab
│   │   │   └── Form.js        # Actual Form component with fields and query boxes
│   │   ├── App.js             # This is to organise the main React component organizing layout
│   │   ├── api.js             # Some helper functions for making API calls
│   │   └── index.js           # This is the entry point for the React app
│   └── styles/
│       └── styles.css         # Our main CSS file for styling the app
│
└── README.md                  # This documentation file that is being worked on
```

---

## Code Walkthrough for Documentation

### Backend Code (Java Spring Boot) ******************************************

- **`TabData.java`**: This file would define the MongoDB schema for form data (fields like `field1`, `field2`, etc.).
- **`TabRepository.java`**: This creates a Spring Data repository like interface for the purpose of interacting with MongoDB.
- **`TabController.java`**: This was done to define API endpoints (e.g., `/api/tab1`, `/api/tab[name]) for saving and retrieving data for each tab, as necessary.

### Frontend Code (React, HTML5, CSS3)

- **`App.js`**: This is the main component that organizes the layout. It includes the sidebar and displays the appropriate webpage based on the active tab, and other features as necessary for addition.
- **`Sidebar.js`**: This would be for the displays for our six tabs as of now. When we click on a tab, it sets the active tab in the `App` component, to be set for viewing.
- **`Webpage.js`**: Displays the form for the active tab. It retrieves data from the backend and passes it to the `Form` component.
- **`Form.js`**: Contains the fields and query boxes for each tab, allowing users to submit or retrieve data.
- **`api.js`**: Contains helper functions like `fetchTabData` and `saveTabData` for making API calls to the backend.

---

## 🖥️ API Endpoints (Spring Boot)

Here’s a list of API endpoints provided by the Spring Boot backend. Each endpoint corresponds to one of the tabs:

- **GET /api/tab/{tabId}**: Retrieves saved data for a specific tab.
- **POST /api/tab/{tabId}**: Saves data entered in a specific tab.

Example usage:
- **Retrieve Tab 1 data**: `GET /api/tab/1`
- **Save Tab 1 data**: `POST /api/tab/1` with JSON payload.

---

## 📖 How It Works

1. **Sidebar and Tab Navigation**: When you click on a tab in the sidebar, the `App.js` component updates the active tab, and `Webpage.js` renders the corresponding form.
2. **Form Data Handling**: Each form allows users to submit data to the backend via an API call. When data is submitted, it`s saved to MongoDB.
3. **Data Retrieval**: When you navigate back to a tab, the form retrieves the saved data for that tab from MongoDB, so the data persists across sessions.

---

## 🌐 Deployment

1. **Deploying Backend (Spring Boot)**: You can deploy the Spring Boot backend on platforms like Heroku, AWS, or DigitalOcean. Ensure that MongoDB is accessible by using a service like MongoDB Atlas.
2. **Deploying Frontend**: You can deploy the frontend on services like Netlify, Vercel, or GitHub Pages. Just make sure to update any API URLs to the deployed backend URL.

---

## 📜 License

This project is licensed under the MIT License. You’re free to use, modify, and distribute this
