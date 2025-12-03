import React, { useState } from 'react';
import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'Enquiry',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';

    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setIsSubmitting(true);

      setTimeout(() => {
        alert('Message sent successfully!');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          subject: 'Enquiry',
          message: ''
        });
        setIsSubmitting(false);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar />

      <div className="w-full min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 md:p-12">

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Get In Touch With Us
            </h1>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Reach out to us with any questions or inquiries and we'll respond as soon as possible.
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-5">

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-3 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  className={`w-full pl-12 pr-4 py-3 bg-slate-50 border ${
                    errors.fullName ? 'border-red-300' : 'border-transparent'
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all`}
                />
              </div>
              {errors.fullName && <p className="text-sm text-red-600 mt-1">{errors.fullName}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-3 h-5 w-5 text-slate-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className={`w-full pl-12 pr-4 py-3 bg-slate-50 border ${
                    errors.email ? 'border-red-300' : 'border-transparent'
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all`}
                />
              </div>
              {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-3 h-5 w-5 text-slate-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+999"
                  className={`w-full pl-12 pr-4 py-3 bg-slate-50 border ${
                    errors.phone ? 'border-red-300' : 'border-transparent'
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all`}
                />
              </div>
              {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
              <div className="relative">
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all cursor-pointer"
                >
                  <option value="Enquiry">Enquiry</option>
                  <option value="Support">Support</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Other">Other</option>
                </select>
                <svg
                  className="absolute right-4 top-3 h-5 w-5 text-slate-400 pointer-events-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
              <div className="relative">
                <MessageSquare className="absolute top-3 left-4 h-5 w-5 text-slate-400" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Hi! We are Lyridia..."
                  className={`w-full pl-12 pr-4 py-3 bg-slate-50 border ${
                    errors.message ? 'border-red-300' : 'border-transparent'
                  } rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all`}
                />
              </div>
              {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-2">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-8 py-3 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-lg shadow-lg shadow-blue-900/30 hover:shadow-xl hover:shadow-blue-900/40 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send your Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
