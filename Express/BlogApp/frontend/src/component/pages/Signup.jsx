import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  // Use backend model field names: name, email, password
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function formSubmit(e) {
    e.preventDefault();
    console.log(formData);

    try {
      await axios.post("http://localhost:9000/v1/users/register", formData);
      toast.success("Data sent successfully!");

      setFormData({
        name: "",
        email: "",
        password: "",
      });

      navigate("/Login");
    } catch (error) {
      toast.error("Data sending failed!");
    }
  }

  return (
    <div className="h-scree ">
      <header className="flex justify-center  mt-20 ">
        <form className="p-5 h-96 w-85 border rounded-sm bg-white" onSubmit={formSubmit}>
          <h1 className="mx-27 text-xl font-bold text-blue-800 pt-2">Signup</h1>

          <label> Name:</label>
          <input
            type="text"
            placeholder="Enter your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 mt-2 w-full "
          />
          <label> Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 mt-2 w-full"
          />
          <label> Password:</label>
          <input
            type="password"
            placeholder="Enter your Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 mt-2 w-full"
          />
          <input
            type="submit"
            className="border rounded-sm  h-10 w-75 mt-5 bg-blue-600 text-white"
          />
        </form>
      </header>
    </div>
  );
};

export default Signup;
