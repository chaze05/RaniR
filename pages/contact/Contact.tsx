import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full bg-slate-800/80 px-4 py-2 text-sm uppercase tracking-[0.2em] text-slate-300 mb-6">
            Get in touch
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's Build Something
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent pb-5">
              Amazing Together
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-300 leading-8">
            Ready to bring your ideas to life? Whether it's a new project, collaboration, or just a chat about technology,
            I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="rounded-[32px] bg-slate-900/80 border border-slate-700/80 p-8 shadow-2xl backdrop-blur-xl">
              <h2 className="text-2xl font-semibold text-white mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-600 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-600 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-600 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full rounded-xl border border-slate-600 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="rounded-[32px] bg-slate-900/80 border border-slate-700/80 p-8 shadow-2xl backdrop-blur-xl">
                <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-cyan-400">
                      <FaEnvelope className="text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Email</p>
                      <p className="text-white">rani@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-cyan-400">
                      <FaPhone className="text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Phone</p>
                      <p className="text-white">+63 123 456 7890</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-cyan-400">
                      <FaMapMarkerAlt className="text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Location</p>
                      <p className="text-white">Philippines</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] bg-slate-900/80 border border-slate-700/80 p-8 shadow-2xl backdrop-blur-xl">
                <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
                <p className="text-slate-300 mb-6">
                  Stay connected and follow my journey in web development and technology.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-slate-300 transition-all duration-300 hover:bg-slate-700 hover:text-white hover:scale-110"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                  <a
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-slate-300 transition-all duration-300 hover:bg-slate-700 hover:text-white hover:scale-110"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-slate-300 transition-all duration-300 hover:bg-slate-700 hover:text-white hover:scale-110"
                  >
                    <FaTwitter className="text-xl" />
                  </a>
                </div>
              </div>

              <div className="rounded-[32px] bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/80 p-8 shadow-2xl">
                <h3 className="text-xl font-semibold text-white mb-4">Quick Response</h3>
                <p className="text-slate-300 leading-6">
                  I typically respond to messages within 24 hours. For urgent inquiries,
                  feel free to call or connect on LinkedIn for faster communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;