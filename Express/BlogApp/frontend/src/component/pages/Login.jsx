import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // Use backend model field names: email, password
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function formSubmit(e) {
    e.preventDefault();
    try {
      // Use withCredentials to allow cookies (for httpOnly cookie set by backend)
      const response = await axios.post("http://localhost:9000/v1/users/login", formData, {
        withCredentials: true,
      });

      if (response.data && response.data.success) {
        toast.success("Login successful!");
        setFormData({
          email: "",
          password: "",
        });
        navigate("/"); // Redirect to home or dashboard after login
      } else {
        toast.error(response.data?.message || "Login failed!");
      }
    } catch (error) {
      // Show backend error message if available
      const msg = error.response?.data?.message || error.response?.data?.error || "Login failed!";
      toast.error(msg);
    }
  }

  return (
    <div className="h-scree ">
      <header className="flex justify-center  mt-20  ">
        <form className="p-5 h-80 w-85 border rounded-sm bg-white" onSubmit={formSubmit}>
          <h1 className="mx-27 text-2xl font-bold  text-blue-800 pt-2">Login</h1>

          <label> Email:</label>
          <input
            type="email"
            placeholder="Enter your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 mt-2 w-full "
            required
          />

          <label> Password:</label>
          <input
            type="password"
            placeholder="Enter your Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 mt-2 w-full"
            required
          />
          <input
            type="submit"
            className="border rounded-sm  h-10 w-74 mt-7  bg-blue-600 text-white"
            value="Login"
          />
        </form>
      </header>
    </div>
  );
};

export default Login;
