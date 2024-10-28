import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the template parameters
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      to_email: 'kz_abbaci@esi.dz'  // Specify your receiving email here
    };

    emailjs.send('service_mr4onqk', 'template_xwy4kzs', templateParams, 'nSjatl6c_3S-U3Mjt')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to send message, please try again.');
      });
  };

  const contact_info = [
    { logo: "mail", text: "kz_abbaci@esi.dz" },
    { logo: "logo-whatsapp", text: "0793921328" },
    {
      logo: "location",
      text: "Algeria",
    },
  ];

  return (
    <section 
      id="contact" 
      className="flex items-center justify-center min-h-screen py-5 px-3 w-full bg-white/60 text-gray-900 dark:text-white dark:bg-gray-900"
    >
      <div className="text-center mt-8 w-2/3">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-8 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-200 dark:bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              className="rounded-sm px-2 py-1 bg-slate-50 text-cyan-600" 
              value={formData.name} 
              onChange={handleChange} 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email Address" 
              className="rounded-sm px-2 py-1 bg-slate-50 text-cyan-600" 
              value={formData.email} 
              onChange={handleChange} 
            />
            <textarea 
              name="message" 
              placeholder="Your Message" 
              className="rounded-sm px-2 py-1 bg-slate-50 text-cyan-600" 
              rows={10} 
              value={formData.message} 
              onChange={handleChange} 
            ></textarea>
            <button type="submit" className="btn-primary w-fit bg-cyan-600 px-2 py-1 rounded-md">Send Message</button>
          </form>
          <div className="flex flex-col gap-7">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
