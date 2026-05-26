const express = require("express");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <h1>CI/CD Nooode App 🚀</h1>
    <p>Deployed using AWS CodePipeline + CodeBuild + EC2</p>
    <a href="/health">Health Check</a>
  `);
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Server is healthy",
    uptime: process.uptime(),
    time: new Date()
  });
});

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
