const express = require('express');
const path = require('path');

const app = express();

// app.use("/", express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

app.get("/styles", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.css"))
})

const port = process.env.PORT || 5005

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})
