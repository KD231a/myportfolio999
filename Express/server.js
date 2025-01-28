const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const port = 5000;

// ตั้งค่าการเชื่อมต่อกับฐานข้อมูล
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // ปรับตามการตั้งค่าของคุณ
  password: "",
  database: "members_db",
});

// ใช้งาน JSON parsing และ CORS
app.use(express.json());
app.use(cors());

// API ดึงข้อมูลสมาชิกทั้งหมด
app.get("/api/members", (req, res) => {
  db.query("SELECT * FROM members", (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving members");
    } else {
      res.json(result);
    }
  });
});

// API ดึงข้อมูลสมาชิกที่เข้าสู่ระบบ
app.get("/api/member", (req, res) => {
  // สมมติว่าใช้ session หรือ JWT ในการตรวจสอบสถานะการเข้าสู่ระบบ
  const userId = 1; // ปรับตาม ID ของผู้ใช้งานที่เข้าสู่ระบบ
  db.query("SELECT * FROM members WHERE id = ?", [userId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving member data");
    } else {
      res.json(result[0]);
    }
  });
});

// API อัพเดทข้อมูลสมาชิก
app.put("/api/member", (req, res) => {
  const { name, phone } = req.body;
  const userId = 1; // สมมติว่าใช้ session หรือ JWT ในการตรวจสอบสถานะการเข้าสู่ระบบ
  db.query(
    "UPDATE members SET name = ?, phone = ? WHERE id = ?",
    [name, phone, userId],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error updating member data");
      } else {
        res.send("Profile updated successfully");
      }
    }
  );
});

// API ลบสมาชิก
app.delete("/api/members/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM members WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error deleting member");
    } else {
      res.send("Member deleted successfully");
    }
  });
});

// เริ่มต้นเซิร์ฟเวอร์
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
