import React from "react";
import { useParams } from "react-router-dom";

function Portfolio() {
  const { category } = useParams(); // รับพารามิเตอร์จาก URL

  // ข้อมูลตัวอย่างสำหรับแต่ละประเภท
  const data = {
    all_certificates: [
      "Certificate A",
      "Certificate B",
      "Certificate C",
    ],
    best_certificates: ["Best Certificate A", "Best Certificate B"],
    profiles_student: ["Profile: Student A", "Profile: Student B"],
    complete_project_certificates: [
      "Project A",
      "Project B",
      "Project C",
    ],
  };

  // ตรวจสอบว่า category มีข้อมูลหรือไม่
  const certificates = data[category] || [];

  return (
    <div className="portfolio-container">
      <div className="container mt-5">
        <h1>{category.replace(/_/g, " ").toUpperCase()}</h1>
        {certificates.length > 0 ? (
          <ul>
            {certificates.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>ไม่มีข้อมูลสำหรับหมวดหมู่นี้</p>
        )}
      </div>
    </div>
  );
}

export default Portfolio;
