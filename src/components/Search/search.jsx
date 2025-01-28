import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // เพิ่ม React Router
import "./search.css";

function Search() {
  const [searchTerm, setSearchTerm] = useState(""); // เก็บคำที่พิมพ์
  const [suggestions, setSuggestions] = useState([]); // เก็บคำแนะนำ
  const [activeSuggestion, setActiveSuggestion] = useState(0); // ตำแหน่งคำแนะนำที่เลือก
  const [showSuggestions, setShowSuggestions] = useState(false); // การแสดง dropdown
  const [error, setError] = useState(""); // การแจ้งเตือนเมื่อคลิกไม่สำเร็จ
  const navigate = useNavigate(); // ใช้สำหรับนำทาง

  // ฟังก์ชันเมื่อมีการพิมพ์ในช่องค้นหา
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value.length > 0) {
      setShowSuggestions(true); // แสดง dropdown เมื่อมีการพิมพ์
      filterSuggestions(value);
    } else {
      setShowSuggestions(false); // ซ่อน dropdown เมื่อช่องค้นหาว่าง
    }
  };

  // ฟังก์ชันกรองคำแนะนำตามคำที่พิมพ์
  const filterSuggestions = (query) => {
    const data = [
      { label: "ผลงานของฉัน", path: "/all_certificates" },
      { label: "ผลงานดีเด่น", path: "/best_certificates" },
      { label: "โปรไฟล์ส่วนตัว", path: "/profiles_student" },
      { label: "โปรเจคที่สำเร็จ", path: "/project_certificates" },
    ];

    const filtered = data.filter((item) =>
      item.label.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestions(filtered);
  };

  // ฟังก์ชันเมื่อคลิกคำแนะนำ
  const handleSuggestionClick = (suggestion) => {
    try {
      setSearchTerm(suggestion.label);
      setShowSuggestions(false); // ซ่อน dropdown หลังจากคลิก
      navigate(suggestion.path); // นำทางไปยังหน้าเป้าหมาย
    } catch (error) {
      setError("ไม่สามารถไปยังหน้านั้นได้!"); // แจ้งข้อผิดพลาด
    }
  };

  // ฟังก์ชันสำหรับการกดปุ่ม Enter หรือคลิกคำแนะนำ
  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      if (activeSuggestion < suggestions.length - 1) {
        setActiveSuggestion(activeSuggestion + 1);
      }
    } else if (event.key === "ArrowUp") {
      if (activeSuggestion > 0) {
        setActiveSuggestion(activeSuggestion - 1);
      }
    } else if (event.key === "Enter") {
      const selectedSuggestion = suggestions[activeSuggestion];
      handleSuggestionClick(selectedSuggestion);
    }
  };

  // ฟังก์ชันเมื่อคลิกช่องค้นหา (ให้แสดง dropdown)
  const handleFocus = () => {
    if (searchTerm.length === 0) {
      setShowSuggestions(true); // แสดง dropdown ถ้าช่องค้นหาว่าง
      filterSuggestions(""); // แสดงคำแนะนำทั้งหมด
    }
  };

  // ฟังก์ชันเมื่อออกจากช่องค้นหา (ซ่อน dropdown)
  const handleBlur = () => {
    setShowSuggestions(false); // ซ่อน dropdown เมื่อออกจากช่องค้นหา
  };

  return (
    <div className="search-container" style={{ position: "relative" }}>
      <form onSubmit={(e) => e.preventDefault()} className="d-flex">
        <input
          type="text"
          className="form-control me-2"
          placeholder="ค้นหา..."
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus} // เมื่อคลิกช่องค้นหา
          onBlur={handleBlur} // เมื่อออกจากช่องค้นหา
        />
        <button type="submit" className="btn btn-outline-primary">
          ค้นหา
        </button>
      </form>

      {/* แสดงคำแนะนำเมื่อมีการพิมพ์และมีคำแนะนำ */}
      {showSuggestions && suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className={`suggestion-item ${
                activeSuggestion === index ? "active" : ""
              }`}
            >
              {suggestion.label}
            </li>
          ))}
        </ul>
      )}

      {/* การแจ้งข้อผิดพลาด */}
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

export default Search;
