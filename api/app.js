// Node dependencies
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Port used
const port = process.env.API_PORT;

// Connection to DB
let connected = false;
const connectDB = async () => {
  var options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 480000,
    keepAlive: true,
  };

  let dbURI = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mongo:27017`;
  // console.log(dbURI);
  await mongoose
    .connect(dbURI, options)
    .then(() => {
      console.log("\n");
      console.log("Connected to DB successfully!");
      console.log("\n");
      connected = true;
    })
    .catch((error) => {
      console.log("\n");
      console.log("Error: Connection to DB failed!");
      console.log("Error message" + error);
      console.log("\n");
      connected = false;
    });
};
connectDB();

// App construction
const app = express();
var server = require("http").createServer(app);

// To listen on the port specified as an env variable
server.listen(port, () => {
  setTimeout(() => {
    console.log("\n");
    console.log("Server Running...");
    console.log("Listening on Port " + port);
    console.log("Project Batsort");
  }, 500);
});

// Enable body parser for Json requests
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }, { limit: "10mb" }));
app.use(bodyParser.json({ limit: "10mb" }));

// Security enhancement
app.use(helmet());

// Enable CORS
app.use(cors());
app.all("/*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// Middlewares
app.use(express.static("Public"));

// Routes
app.get("/", (req, res) => {
  if (connected) {
    res.status(200).json({ nodeJS: true, mongoDB: true });
  } else {
    res.send({ node: true, mongoDB: false });
  }
});

const userRoutes = require("./Routes/users");

app.use("/api/user", userRoutes);
