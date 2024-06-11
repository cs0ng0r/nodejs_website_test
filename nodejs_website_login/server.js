const { hash } = require("bcrypt");
const express = require("express");
const app = express();

const users = [];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    console.log(salt);
    console.log(hashedPassword);
    const user = { name: req.body.name, password: hashedPassword };
    users.push(user);
    res.status(201).json(user);
  } catch {
    res.status(500).send();
  }
});

app.listen(3000);
