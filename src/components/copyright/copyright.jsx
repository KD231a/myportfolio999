import React from "react";
import "./copyright.css"; // ถ้าต้องการเพิ่ม CSS เฉพาะสำหรับ Footer

function Copyright() {
  return (
    <footer className="footer bg-light text-center py-3">
      <div className="container">
        <p className="mb-0">
           © {new Date().getFullYear()} จัดทำโดย PraiwanX. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Copyright;
