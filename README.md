# Full-Stack Web Application with Sidebar Tabs

Welcome to this full-stack web application project! This app is designed to help you navigate between multiple tabs, each representing a unique webpage with fields and query boxes for user input. Whether you're here to learn more about the code structure, set it up on your machine, or customize it for your needs, this `README.md` has got you covered.

---

## 🌟 Project Overview

In this project, we have:
- **A sidebar** with six clickable tabs (Tab 1, Tab 2, etc.).
- **Six webpages** that display different fields and query boxes for each tab.
  
Each tab in the sidebar corresponds to a webpage where users can input information, which is then saved to a database. Users can also retrieve this information later. This project is built with **React** on the frontend, **Node.js** with **Express** on the backend, and **MongoDB** for data storage.

### Technologies Used
- **Frontend**: React, HTML, CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB

---

## 🚀 Getting Started

### Prerequisites
To get started, you need to have **Node.js** and **MongoDB** installed on your computer.

1. [Download Node.js](https://nodejs.org/) (at least version 14 or higher).
2. [Download MongoDB](https://www.mongodb.com/try/download/community) and start a local MongoDB server or use MongoDB Atlas for a cloud database.

### Step 1: Clone the Repository

Begin by cloning this repository to your local machine:

```bash
git clone <your-repository-url>
cd project-root
```

### Step 2: Install Dependencies

This project is divided into two main parts: the backend and frontend, each with its own dependencies. Let’s go through them one by one.

#### Backend Dependencies

Navigate to the `backend` directory and install the dependencies:

```bash
cd backend
npm install
```

This command will install all necessary backend packages, such as **Express** (for routing) and **Mongoose** (for MongoDB interactions).

#### Frontend Dependencies

Next, move to the `frontend` directory to install the frontend dependencies:

```bash
cd ../frontend
npm install
```

This will install all packages needed for the React app.

---

### Step 3: Configure Environment Variables

To connect to MongoDB, we need to set up environment variables. In the `backend` directory, create a file called `.env`:

```bash
cd ../backend
touch .env
```

Inside the `.env` file, add the following:

```plaintext
MONGO_URI=<Your MongoDB Connection String>
PORT=5000
```

Replace `<Your MongoDB Connection String>` with your MongoDB URI. If you’re using MongoDB locally, it might look something like this:

```plaintext
MONGO_URI=mongodb://localhost:27017/your_database_name
```

If you’re using MongoDB Atlas, get the connection string from your Atlas dashboard.

### Step 4: Running the Application

Now that everything is set up, let’s start both the backend and frontend servers.

#### Starting the Backend

From the `backend` directory, start the backend server:

```bash
npm start
```

The backend server will start on the port specified in your `.env` file (default is 5000). You should see a message confirming the server is running.

#### Starting the Frontend

Now, open a new terminal window, navigate to the `frontend` directory, and start the frontend server:

```bash
cd ../frontend
npm start
```

This command will start the React app, which will be available in your browser at [http://localhost:3000](http://localhost:3000).

---

## 🗂️ Project Structure

Here's a breakdown of the project structure to help you understand where each component fits.

```
project-root/
│
├── backend/
│   ├── controllers/
│   │   └── tabController.js   # API logic for saving and retrieving data for each tab
│   ├── models/
│   │   └── TabData.js         # Defines the schema for form data in MongoDB
│   ├── routes/
│   │   └── tabRoutes.js       # Defines API endpoints for each tab
│   ├── index.js               # Entry point for the backend server
│   └── .env                   # Environment variables file (MongoDB URI, port)
│
├── frontend/
│   ├── public/
│   │   └── index.html         # Main HTML file for the React app
│   ├── src/
│   │   ├── components/
│   │   │   ├── Sidebar.js     # Sidebar with six tabs
│   │   │   ├── Webpage.js     # Webpage component displaying form for each tab
│   │   │   └── Form.js        # Form component with fields and query boxes
│   │   ├── App.js             # Main React component organizing layout
│   │   ├── api.js             # Helper functions for making API calls
│   │   └── index.js           # Entry point for the React app
│   └── styles/
│       └── styles.css         # Main CSS file for styling the app
│
└── README.md                  # This documentation file
```

---

## 📂 Code Walkthrough

### Backend Code

- **`index.js`**: This is the main entry point for the backend server. It sets up Express, connects to MongoDB, and defines middleware.
- **`controllers/tabController.js`**: Contains functions to save and retrieve data for each tab.
- **`models/TabData.js`**: Defines the schema for form data, such as `field1`, `field2`, etc.
- **`routes/tabRoutes.js`**: Sets up API routes, like `POST /api/tab1` to save data for Tab 1 and `GET /api/tab1` to retrieve it.

### Frontend Code

- **`App.js`**: The main component that organizes the layout. It includes the sidebar and displays the appropriate webpage based on the active tab.
- **`Sidebar.js`**: Displays the six tabs. When you click on a tab, it sets the active tab in the `App` component.
- **`Webpage.js`**: Displays the form for the active tab. It retrieves data from the backend and passes it to the `Form` component.
- **`Form.js`**: Contains the fields and query boxes for each tab, allowing users to submit or retrieve data.
- **`api.js`**: Contains helper functions like `fetchTabData` and `saveTabData` for making API calls to the backend.

---

## 🖥️ API Endpoints

Here’s a list of API endpoints that the backend provides. Each endpoint corresponds to one of the tabs:

- **GET /api/tab{n}**: Retrieves saved data for a specific tab.
- **POST /api/tab{n}**: Saves data entered in a specific tab.

Example usage:
- **Retrieve Tab 1 data**: `GET /api/tab1`
- **Save Tab 1 data**: `POST /api/tab1` with JSON payload.

---

## 📖 How It Works

1. **Sidebar and Tab Navigation**: When you click on a tab in the sidebar, the `App.js` component updates the active tab, and `Webpage.js` renders the corresponding form.
2. **Form Data Handling**: Each form allows users to submit data to the backend via an API call. When data is submitted, it's saved to MongoDB.
3. **Data Retrieval**: When you navigate back to a tab, the form retrieves the saved data for that tab from MongoDB, so the data persists across sessions.

---

## 🌐 Deployment

1. **Deploying Backend**: You can deploy the backend on platforms like Heroku, AWS, or DigitalOcean. Ensure that MongoDB is accessible by using a service like MongoDB Atlas.
2. **Deploying Frontend**: You can deploy the frontend on services like Netlify, Vercel, or GitHub Pages. Just make sure to update any API URLs to the deployed backend URL.

---

## 🛠️ Customization

- **Adding More Tabs**: To add more tabs, simply add more routes in `tabRoutes.js` and update the frontend’s `Sidebar.js`.
- **Modifying Form Fields**: If you want to add or change fields, modify the `TabData` schema in `TabData.js` and update the `Form.js` component.

---

## 📜 License

This project is licensed under the MIT License. You’re free to use, modify, and distribute this code as you see fit!

---

## 🙋‍♂️ Need Help?

If you run into issues or have questions, feel free to open an issue in the repository. Happy coding!
