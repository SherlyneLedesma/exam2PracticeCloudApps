const db = require("../config/db");

const User = {
  // Create
  async create(userData) {
    const { username, lastname, firstname, passwd, email, urole } = userData;
    const sql = `INSERT INTO users (username, lastname, firstname, passwd, email, urole) VALUES (?, ?, ?, ?, ?, ?)`;
    const [result] = await db.execute(sql, [username, lastname, firstname, passwd, email, urole]);
    return result.insertId;
  },

  // Read All
  async findAll() {
    const sql = `SELECT userID, username, lastname, firstname, email, urole, lastModified FROM users`;
    const [rows] = await db.execute(sql);
    return rows;
  },

  // Read One by ID
  async findById(id) {
    const sql = `SELECT userID, username, lastname, firstname, email, urole, lastModified FROM users WHERE userID = ?`;
    const [rows] = await db.execute(sql, [id]);
    return rows[0] || null;
  },

  // Update
  async update(id, userData) {
    const { username, lastname, firstname, passwd, email, urole } = userData;
    const sql = `UPDATE users SET username = ?, lastname = ?, firstname = ?, passwd = ?, email = ?, urole = ? WHERE userID = ?`;
    const [result] = await db.execute(sql, [username, lastname, firstname, passwd, email, urole, id]);
    return result.affectedRows > 0;
  },

  // Delete
  async delete(id) {
    const sql = `DELETE FROM users WHERE userID = ?`;
    const [result] = await db.execute(sql, [id]);
    return result.affectedRows > 0;
  },
};

module.exports = User;
