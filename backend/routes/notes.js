const express = require("express");
const router = express.Router();
const db = require("../db/database");

router.get("/", (req, res) => {
    db.all("SELECT * FROM notes ORDER BY created_at DESC", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: "Failed to fetch notes" });
        }
        res.json(rows);
    });
});

router.post("/", (req, res) => {
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

router.put("/:id", (req, res) => {
    const { title, content } = req.body;
    const { id } = req.params;

    if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required" });
    }

    db.run("UPDATE notes SET title = ?, content = ? WHERE id = ?", [title, content, id], function(err) {
        if (err) {
            return res.status(500).json({ error: "Failed to update note" });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: "Note not found" });
        }
        res.json({ id: Number(id), title, content });
    });
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;

    db.run("DELETE FROM notes WHERE id = ?", [id], function(err) {
        if (err) {
            return res.status(500).json({ error: "Failed to delete note" });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: "Note not found" });
        }
        res.json({ message: "Note deleted successfully" });
    });
});

module.exports = router;
