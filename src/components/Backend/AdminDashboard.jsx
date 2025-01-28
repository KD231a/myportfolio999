import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // ดึงข้อมูลสมาชิกจาก Backend API
    axios.get("/api/members")
      .then(response => {
        setMembers(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the members!", error);
      });
  }, []);

  const deleteMember = (id) => {
    axios.delete(`/api/members/${id}`)
      .then(response => {
        setMembers(members.filter(member => member.id !== id));
      })
      .catch(error => {
        console.error("There was an error deleting the member!", error);
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Admin Dashboard</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={member.id}>
              <td>{index + 1}</td>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.phone}</td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteMember(member.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
