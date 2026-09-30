const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

// Endpoint: GET /api/users - Find all users (READ)
router.get("/", async function (req, res) {
  try {
    const users = await User.findAll();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Endpoint: GET /api/users/:id - Find single user (READ)
router.get("/:id", async function (req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Endpoint: POST /api/users - Add new user (CREATE)
router.post("/", async function (req, res) {
  try {
    const { username } = req.body;
    if (!username) {
      return res.status(400).json({ success: false, error: 'Field "username" is required.' });
    }

    const insertId = await User.create(req.body);
    const newUser = await User.findById(insertId);

    res.status(201).json({ success: true, data: newUser });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Endpoint: PUT /api/users/:id - Update user (UPDATE)
router.put("/:id", async (req, res) => {
  try {
    const { username } = req.body;
    if (!username) {
      return res.status(400).json({ success: false, error: 'Field "username" is required.' });
    }
    const updated = await User.update(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ success: false, error: "User not found" });
    }
    const updatedUser = await User.findById(req.params.id);
    res.status(200).json({ success: true, data: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// DELETE /api/users/:id - Delete user
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await User.delete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, error: "User not found" });
    }
    res.status(200).json({ success: true, message: "User successfully deleted" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
