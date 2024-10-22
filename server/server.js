require("dotenv").config({
    path:'./.env'
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
const { default: Credentials } = require("next-auth/providers/credentials");
// const services = require("./controllers/service-controller");





const corsOptions = {
    // origin: "http://localhost:5173",
    origin:process.env.FRONTEND_URL,
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    Credentials:  true,

};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", authroute);
app.use("/api/form", contactroute);
app.use("/api/data", serviceRoute);
app.use("/api/admin", adminRoute);
// app.use("/api/contact", )

app.use(errorMiddleware)

const PORT = process.env.PORT || 5000;

connectdb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running at port: ${PORT}`);
    });
})