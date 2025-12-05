import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";

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

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      to_email: 'kz_abbaci@esi.dz'
    };

    emailjs.send('service_mr4onqk', 'template_xwy4kzs', templateParams, 'nSjatl6c_3S-U3Mjt')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to send message, please try again.');
      });
  };

  const contact_info = [
    { logo: "mail", text: "kz_abbaci@esi.dz" },
    { logo: "logo-whatsapp", text: "(+213) 793921328" },
    { logo: "location", text: "Algeria" },
  ];

  return (
  <section
    id="contact"
    className="relative flex items-center justify-center min-h-screen px-4 py-16 bg-gradient-to-br from-white via-cyan-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-900 dark:text-white overflow-hidden"
  >

    {/* BACKGROUND GLOW */}
    <div className="absolute top-[-120px] right-[-120px] w-[380px] h-[380px] bg-cyan-500/20 blur-[140px] rounded-full"></div>
    <div className="absolute bottom-[-120px] left-[-120px] w-[380px] h-[380px] bg-purple-500/10 blur-[140px] rounded-full"></div>

    <div className="relative z-10 w-full max-w-6xl mx-auto">

      {/* HEADER */}
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-5xl font-bold tracking-wide"
      >
        Contact <span className="text-cyan-600">Me</span>
      </motion.h3>

      <p className="text-center text-gray-600 dark:text-gray-400 mt-3">
        Let's build something great together
      </p>

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
          mt-12 flex flex-col md:flex-row gap-10
          bg-white/70 dark:bg-gray-800/60
          backdrop-blur-2xl
          border border-gray-200 dark:border-gray-700
          rounded-3xl p-8 shadow-xl
        "
      >

        {/* FORM */}
        <form className="flex flex-col flex-1 gap-6" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="
              px-4 py-3 rounded-lg
              bg-white dark:bg-gray-900
              border border-gray-300 dark:border-gray-600
              text-gray-800 dark:text-cyan-400
              focus:ring-2 focus:ring-cyan-500
              outline-none transition
            "
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="
              px-4 py-3 rounded-lg
              bg-white dark:bg-gray-900
              border border-gray-300 dark:border-gray-600
              text-gray-800 dark:text-cyan-400
              focus:ring-2 focus:ring-cyan-500
              outline-none transition
            "
          />

          <textarea
            rows={7}
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="
              px-4 py-3 rounded-lg
              bg-white dark:bg-gray-900
              border border-gray-300 dark:border-gray-600
              text-gray-800 dark:text-cyan-400
              focus:ring-2 focus:ring-cyan-500
              outline-none transition
            "
          />

          <motion.button
            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 30px rgba(34,211,238,0.6)"
            }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="
              self-start mt-2
              px-7 py-3 rounded-full
              bg-cyan-600 hover:bg-cyan-500
              text-white font-semibold
              shadow-lg transition
            "
          >
            Send Message
          </motion.button>

        </form>

        {/* CONTACT INFO */}
        <div className="flex flex-col gap-7 justify-center">

          {contact_info.map((contact, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex items-center gap-5"
            >
              <div className="
                w-14 h-14
                flex items-center justify-center
                text-white text-2xl
                rounded-full
                bg-gradient-to-br from-cyan-500 to-blue-600
                shadow-lg
                hover:shadow-cyan-400/40 transition
              ">
                <ion-icon name={contact.logo}></ion-icon>
              </div>

              <p className="text-gray-700 dark:text-gray-300 tracking-wide">
                {contact.text}
              </p>
            </motion.div>
          ))}

        </div>

      </motion.div>
    </div>
  </section>
);

}
