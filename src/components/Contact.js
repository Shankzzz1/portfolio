import React, { useState } from "react";
import emailIcon from "../Images/email.png";
import phoneIcon from "../Images/phone.png";
import locationIcon from "../Images/placeholder.png";
import instagramIcon from "../Images/instagram.png";
import linkedinIcon from "../Images/linkedin.png";
import twitterIcon from "../Images/twitter.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" }); // Reset form
      } else {
        alert("Error submitting form");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form");
    }
  };

  return (
    <div className="h-auto p-12 bg-black text-white">
      <div className="flex flex-col md:flex-row">
        {/* Main content div with vertical centering */}
        <div className="w-full md:w-1/2 flex flex-col justify-center h-full">
          <p className="text-3xl font-bold mb-6 text-green-500">Get In Touch</p>
          <div className="p-20">
            <p className="mb-4">
              If you have a groundbreaking idea or brand you'd like to develop,
              I'm here to help! Whether it's a startup, a personal project, or
              anything in between, I’d love to hear about your vision. 
            </p>
            <p>Let’s collaborate to bring your project to life.</p>
            <p className="mb-8">
              Make your concept a reality! Feel free to reach out, and let's
              discuss how we can work together.
            </p>
          </div>

          <div className="space-y-4 m-14">
            <div className="flex items-center">
              <img src={emailIcon} alt="email" className="w-6 h-6 mr-3 filter invert" />
              <span>shashankmgavale2004@gmail.com</span>
            </div>
            <div className="flex items-center">
              <img src={phoneIcon} alt="phone" className="w-6 h-6 mr-3 filter invert" />
              <span>9834431768</span>
            </div>
            <div className="flex items-center">
              <img src={locationIcon} alt="location" className="w-6 h-6 mr-3 filter invert" />
              <span>Pune, India</span>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center justify-center space-x-8 ">
              <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" className="w-10 h-10 filter invert" />
              </a>
              <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" className="w-10 h-10 filter invert" />
              </a>
              <a href="https://www.twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <img src={twitterIcon} alt="Twitter" className="w-10 h-10 filter invert" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact form in the second div with rounded corners */}
        <div className="w-full md:w-1/2 p-6 md:p-12 rounded-lg bg-white text-black">
          <p className="text-xl font-semibold mb-4 text-green-500">Contact Form</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-2 border-2 border-black rounded text-black outline-none focus:ring-2 focus:ring-green-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-2 border-2 border-black rounded text-black outline-none focus:ring-2 focus:ring-green-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="phone">Phone No</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full p-2 border-2 border-black rounded text-black outline-none focus:ring-2 focus:ring-green-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
                className="w-full p-2 border-2 border-black rounded text-black outline-none focus:ring-2 focus:ring-green-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="w-full p-2 border-2 border-black rounded text-black outline-none focus:ring-2 focus:ring-green-300"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full mt-4 bg-green-500 hover:bg-green-600 text-black py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
