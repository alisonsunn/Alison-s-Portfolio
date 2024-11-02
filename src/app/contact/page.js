"use client";
import { useEffect, useState } from 'react';

export default function Contact() {
  const [text, setText] = useState('');
  const message = "Let's Connect";
  const typingSpeed = 150;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/postEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setStatus('An error occurred. Please try again.');
    }
  };


  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + message[index]);
      index++;
      if (index === message.length - 1) {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-pink-200 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg w-full md:w-10/12 lg:w-8/12 xl:w-6/12 p-10 grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text animate-gradient">
            {text}
          </h1>
          <p className="text-gray-600">
            Fill out the form to get in touch with me :)
          </p>
        </div>

        <form className="space-y-6">
          <div className="flex flex-col">
            <label className="mb-2 text-gray-700">First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-black"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-black"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Type your message here"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-black"
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-pink-400 text-white py-3 rounded-lg hover:bg-pink-500 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
