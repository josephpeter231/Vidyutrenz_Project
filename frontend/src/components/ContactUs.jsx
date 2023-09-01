import  { useState } from 'react';
import emailjs from 'emailjs-com';
import "../pages/Contact.css";

const ContactUS = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    message: '',
  });

  emailjs.init('YOUR_USER_ID');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fin29in', 'template_3n419fs', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log('Email sent successfully:', result);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <form className='rounded-lg blur-form' onSubmit={handleSubmit}>
        <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-white">Contact Us Form</h1>
        <div className="p-8 flex flex-col items-center md:flex-row md:space-x-24 mb ">
          <div className="text-white flex flex-col mb-4 md:mb-0 ">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="input custom-input"
              value={formData.fullName}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="input custom-input"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile"
              required
              className="input custom-input"
              value={formData.mobile}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Enter Your Queries"
              required
              value={formData.message}
              onChange={handleChange}
              className="input custom-input"
              style={{ resize: 'none' }}
            />
            <button type="submit" className="bg-gray-900 text-white md:w-auto">
              Send
            </button>
          </div>
          <div className="flex flex-col space-y-4 mb-12">
            <p className="bg-black bg-opacity-50 px-4 py-2 rounded-lg">President: 154</p>
            <p className="bg-black bg-opacity-50 px-4 py-2 rounded-lg">Jees: 456</p>
            <p className="bg-black bg-opacity-50 px-4 py-2 rounded-lg">Hari: 54578</p>
            <p className="bg-black bg-opacity-50 px-4 py-2 rounded-lg">President: 154</p>
            <p className="bg-black bg-opacity-50 px-4 py-2 rounded-lg">Jees: 456</p>
            <p className="bg-black bg-opacity-50 px-4 py-2 rounded-lg">Hari: 54578</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUS;
