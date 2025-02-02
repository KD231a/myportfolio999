import React from "react";
import "./loadingpages.css"; // ใช้ไฟล์ CSS สำหรับสไตล์ของสปินเนอร์

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
