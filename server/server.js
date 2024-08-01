const express=require('express');
const app=express();
const { dbConnect } = require('./config/databaseConnect'); 
const dotenv=require('dotenv');
const cors = require('cors');
const groupRoutes=require('./routes/Group')
const noteRoutes=require('./routes/Note')
dotenv.config();
app.use(express.json()); // Middleware to parse JSON bodies

// Use CORS middleware
app.use(cors({
    origin:"*",
    methods:'GET,POST'
}));

app.use('/api/v1/pocketnote',groupRoutes);
app.use('/api/v1/pocketnote',noteRoutes);


// Connect to the database
dbConnect()
    .then(() => {
        console.log("Database connected successfully");

        // Start the server on the port defined in environment variables
        const server = app.listen(process.env.PORT, () => {
            console.log("Server is started");
        });

        // Handle server startup errors
        server.on('error', (error) => {
            console.error("Server failed to start:", error);
            process.exit(1); // Exit the process with a failure code
        });
    })
    .catch((error) => {
        console.error("DB Connection Failed:", error);
        process.exit(1); // Exit the process with a failure code
    });