const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db/database");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("API is running");
});

app.get("/notes", (req, res) => {
    db.all("SELECT * FROM notes ORDER BY created_at DESC", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: "Failed to fetch notes" });
        }
        res.json(rows);
    });
});

app.post("/notes", (req, res) => {
    const { title, content } = req.body;
    
    if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required" });
    }

    db.run("INSERT INTO notes (title, content) VALUES (?, ?)", [title, content], function(err) {
        if (err) {
            return res.status(500).json({ error: "Failed to create note" });
        }
        res.json({ id: this.lastID, title, content });
    });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});