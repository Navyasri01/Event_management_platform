const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());  // Allows parsing JSON request body

// Dummy event data (for testing)
const events = [
    { id: 1, name: "Tech Conference", date: "2025-03-10", description: "Tech event for developers" },
    { id: 2, name: "Music Festival", date: "2025-04-05", description: "A live music event" }
];

// API Routes
app.get("/api/events", (req, res) => {
    res.json(events); // Send dummy events as JSON
});

// Users Route (Example)
const users = [
    { id: 1, name: "Navya", email: "navya@example.com" },
    { id: 2, name: "Sravani", email: "sravani@example.com" }
];

app.get("/api/users", (req, res) => {
    res.json(users);
});

// Default Route
app.get("/", (req, res) => {
    res.send("Event Management Platform API is running!");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
