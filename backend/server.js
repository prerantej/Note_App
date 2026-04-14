const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const notesRouter = require("./routes/notes");
const db = require("./db/database");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("API is running");
});

app.use("/notes", notesRouter);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});