const express = require("express");
const router = express.Router();

let users = [
  { id: 1, name: "Mudasir", role: "DevOps Student" },
  { id: 2, name: "Ali", role: "Developer" }
];

router.get("/", (req, res) => {
  res.json({
    success: true,
    count: users.length,
    users
  });
});

router.post("/", (req, res) => {
  const { name, role } = req.body;

  if (!name || !role) {
    return res.status(400).json({
      success: false,
      message: "Name and role are required"
    });
  }

  const newUser = {
    id: users.length + 1,
    name,
    role
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    message: "User added successfully",
    user: newUser
  });
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  users = users.filter(user => user.id !== id);

  res.json({
    success: true,
    message: "User deleted successfully"
  });
});

module.exports = router;
