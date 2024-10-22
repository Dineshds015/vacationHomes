require("dotenv").config({
    path: './.env'
});

const express = require("express");
const cors = require("cors");
const app = express();
const authroute = require("./router/auth-router");
const contactroute = require("./router/contact-router");
const adminRoute = require("./router/admin-router");
const serviceRoute = require("./router/service-router");
const connectdb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

// CORS options configuration
const corsOptions = {
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',  // Use env variable for frontend URL
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,  // Allow credentials (like cookies)
    optionsSuccessStatus: 200  // For legacy browsers
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Express JSON middleware
app.use(express.json());

// Define routes
app.use("/api/auth", authroute);
app.use("/api/form", contactroute);
app.use("/api/data", serviceRoute);
app.use("/api/admin", adminRoute);

// Error-handling middleware
app.use(errorMiddleware);

// Get PORT from env variables or use 5000 by default
const PORT = process.env.PORT || 5000;

// Connect to DB and start server
connectdb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at port: ${PORT}`);
    });
});
