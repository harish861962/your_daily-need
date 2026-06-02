
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Userdetails() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone: "",
    address: ""
  });

  // 🔹 GET USERS
  function getUsers() {
    fetch("http://localhost:3000/users")
      .then(res =>
         res.json())
      .then(data => 
        setUsers(data));
  }

  useEffect(() => {
    getUsers();
  }, []);

  // 🔹 DELETE
  async function deleteUser(id) {
    await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE"
    });
    toast.success("Deleted");
    getUsers();
  }

  // 🔹 EDIT OPEN
  function handleEdit(user) {
    setEditingUser(user._id);
    setFormData({
      email: user.email,
      password: user.password,
      phone: user.phone,
      address: user.address
    });
  }

  // 🔹 INPUT CHANGE
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  // 🔹 UPDATE
  async function updateUser() {
    await fetch(`http://localhost:3000/users/${editingUser}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    toast.success("Updated Successfully ✅");

    setEditingUser(null);
    setFormData({
      email: "",
      password: "",
      phone: "",
      address: ""
    });

    getUsers();
  }

  return (<>
      <h2 style={{textAlign:"center", margin:20}}>SignUp User Details</h2>
    <div className="container">

      {/* 🔹 TABLE */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Password</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td>{u._id}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
              <td>{u.password}</td>
              <td>{u.address}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(u)}>Edit</button>
                <button className="delete-btn" onClick={() => deleteUser(u._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

  

      {/* 🔹 EDIT FORM */}
      {editingUser && (
        <div className="form-container">
          <h3>Edit User</h3>

          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />

          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
          />

          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
          />

          <div className="form-buttons">
            <button className="save-btn" onClick={updateUser}>Save</button>
            <button className="cancel-btn" onClick={() => setEditingUser(null)}>Cancel</button>
          </div>
        </div>

      )}
      
    </div>
    </>
  );
}