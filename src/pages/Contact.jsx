import React, { useState } from "react";
import img from "../assets/images/vector-contact-us-background.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className=" container Contact">
      <form onSubmit={handleSubmit}>
        <h1>Contact Me!</h1>
        <div className="top">
          <input
            type="text"
            name="name"
            id=""
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
          <input
            type="text"
            name="email"
            id=""
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
          <textarea
            name="message"
            id=""
            value={formData.message}
            onChange={handleChange}
            p
          ></textarea>
        </div>
        <div className="btm">
          <button type="submit">Send Message</button>
        </div>
      </form>
      <div className="main-img">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Contact;
