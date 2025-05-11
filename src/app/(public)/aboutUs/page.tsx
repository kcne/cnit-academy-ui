"use client";

import { motion } from "framer-motion";
import { FaRocket, FaHandshake, FaLightbulb } from "react-icons/fa";
// import Image from "next/image";

const team = [
  {
    name: "Mark Peterson",
    title: "SEO Specialist",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description:
      "Helps businesses rank higher on Google using modern SEO techniques.",
  },
  {
    name: "Jessica Lee",
    title: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    description:
      "Designs clean and user-friendly interfaces using Figma and Tailwind CSS.",
  },
  {
    name: "Nicholas Johnson",
    title: "Digital Strategist",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    description:
      "Builds data-driven growth strategies for web products using Next.js.",
  },
];

const values = [
  {
    icon: (
      <div className="w-full flex justify-center md:justify-start">
        <FaRocket className="text-gray-800 text-3xl mb-2" />
      </div>
    ),
    title: "Innovation",
    desc: "We constantly explore new tools and Next.js features to stay ahead.",
  },
  {
    icon: (
      <div className="w-full flex justify-center md:justify-start">
        <FaHandshake className="text-gray-800 text-3xl mb-2" />
      </div>
    ),
    title: "Trust",
    desc: "We build long-term relationships through transparent collaboration.",
  },
  {
    icon: (
      <div className="w-full flex justify-center md:justify-start">
        <FaLightbulb className="text-gray-800 text-3xl mb-2" />
      </div>
    ),
    title: "Creativity",
    desc: "Every project is approached with fresh ideas and custom solutions.",
  },
];

const testimonials = [
  {
    name: "Anna M.",
    feedback:
      "Thanks to their Next.js expertise, my website loads twice as fast and ranks higher!",
  },
  {
    name: "Ryan T.",
    feedback:
      "Amazing team! Our web app was built quickly, cleanly, and with a clear SEO structure.",
  },
];

const AboutPage = () => {
  return (
    <main className="bg-white min-h-screen px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
        >
          The dream team of Next.js developers.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-500 text-lg mb-8"
        >
          We scale digital products using the power of React and Next.js.
        </motion.p>

        <a
          href="/contact"
          className="inline-block bg-gray-800 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition mb-16"
        >
          Contact Us
        </a>

        <div className="grid gap-8 md:grid-cols-3 mb-20">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-800 mb-2">{member.title}</p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 ">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8 ">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {value.icon}
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl py-10 px-6">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-lg shadow"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.3 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-700 italic">
                  &quot;{item.feedback}&quot;
                </p>
                <p className="mt-4 font-semibold text-gray-900">
                  — {item.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
