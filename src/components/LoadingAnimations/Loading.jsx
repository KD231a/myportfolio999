import React from "react";
import "./Loading.css"; // สร้างไฟล์ CSS สำหรับการออกแบบ

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
