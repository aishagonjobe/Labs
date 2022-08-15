const express = require("express");
const app = express();
const cors = require("cors")

app.use(express.json());
app.use(cors());

app.get("/api/users", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
});

app.get("/weather/:temperature", (req, res) => {
    const { temperature } = req.params;
    const phrase = `<h3>It was ${temperature} today</h3>`;
    res.status(200).send(phrase);
});

const port = 4000;
app.listen(port, () => console.log(`Server is now running on port ${port}`))