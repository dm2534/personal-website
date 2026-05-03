"use client";

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
        Contact Me
      </h1>
      <p className="text-gray-300 mb-8">
        Let's connect! Reach out for collaborations, consulting, or just to chat about GCP and AI.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-800 border border-purple-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-800 border border-purple-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-3 py-2 bg-gray-800 border border-purple-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-fuchsia-500 px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
        >
          Send Message
        </button>
      </form>
      <div className="mt-8 text-center">
        <p className="text-gray-400">Or connect with me on:</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://linkedin.com" className="text-purple-400 hover:text-purple-300">LinkedIn</a>
          <a href="https://github.com" className="text-purple-400 hover:text-purple-300">GitHub</a>
          <a href="mailto:your.email@example.com" className="text-purple-400 hover:text-purple-300">Email</a>
        </div>
      </div>
    </div>
  );
}