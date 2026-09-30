const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 3000;

// Middleware for parsing JSON requests
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use("/api/users", userRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ success: false, error: "Endpoint not found" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
