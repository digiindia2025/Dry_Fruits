"use client";
import { useState } from "react";
import Image from "next/image";

// Sidebar Options
const sidebarOptions = [
  { id: "contact", title: "Contact Us", content: "" }, // Contact Us is default now
  { id: "about", title: "About Us", content: "We are a leading dry fruit e-commerce brand, providing premium quality organic products to customers worldwide." },
  { id: "why-choose", title: "Why Choose Us?", content: "We provide 100% organic and fresh dry fruits, sourced from the best farms worldwide." },
  { id: "products", title: "Our Products", content: "" }, // Products displayed dynamically
];

// Products Data
const products = [
  { id: 1, name: "Premium Almonds", price: 499, image: "/images/almonds.jpg", description: "Fresh and crunchy premium quality almonds." },
  { id: 2, name: "Cashew Nuts", price: 599, image: "/images/cashews.jpg", description: "Rich and creamy cashew nuts, perfect for snacking." },
  { id: 3, name: "Walnuts", price: 699, image: "/images/walnuts.jpg", description: "Organic walnuts with amazing health benefits." },
  { id: 4, name: "Pistachios", price: 649, image: "/images/pistachios.jpg", description: "Salted and roasted pistachios for an irresistible taste." },
];

export default function SidebarExample() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(sidebarOptions.find(option => option.id === "contact")); // Default "Contact Us"

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-6 relative">
      {/* Mobile Sidebar Button */}
      <button className="md:hidden bg-blue-600 text-white px-4 py-2 rounded-md mb-4" onClick={() => setSidebarOpen(true)}>
        Open Menu
      </button>

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg border-r border-gray-200 p-6 transition-transform duration-300 md:relative md:w-1/4 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Menu</h2>
          <button className="md:hidden text-red-600 text-lg font-bold" onClick={() => setSidebarOpen(false)}>✖</button>
        </div>
        <ul className="space-y-2">
          {sidebarOptions.map((option) => (
            <li key={option.id} className={`cursor-pointer px-4 py-2 rounded-md transition-all ${selectedOption.id === option.id ? "bg-blue-600 text-white font-semibold shadow-md" : "text-gray-700 hover:bg-gray-100"}`} onClick={() => {
              setSelectedOption(option);
              setSidebarOpen(false); // Close sidebar on mobile
            }}>
              {option.title}
            </li>
          ))}
        </ul>
      </aside>

      {/* Overlay for Mobile */}
      {isSidebarOpen && <div className="fixed inset-0 bg-black opacity-40 md:hidden" onClick={() => setSidebarOpen(false)}></div>}

      {/* Dynamic Content */}
      <section className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800">{selectedOption.title}</h1>

        {/* Contact Us Section (Default Open) */}
        {selectedOption.id === "contact" ? (
          <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions, feel free to contact us. Our support team is available 24/7 to assist you.
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold">Full Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your full name" required />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">Email Address</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" required />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">Phone Number</label>
                <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your phone number" required />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">Subject</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter the subject" required />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">Message</label>
                <textarea className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" rows="5" placeholder="Enter your message" required></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                Send Message
              </button>
            </form>

            {/* Contact Details */}
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Contact Details</h2>
              <p className="text-gray-600"><strong>Email:</strong> support@dryfruits.com</p>
              <p className="text-gray-600"><strong>Phone:</strong> +91 98765 43210</p>
              <p className="text-gray-600"><strong>Address:</strong> 123, Green Street, Mumbai, India</p>
            </div>

            {/* Google Maps (Optional) */}
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">Find Us on Google Maps</h2>
              <iframe className="w-full h-64 rounded-lg shadow-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.091882423696!2d144.96315781531568!3d-37.81627997975166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f70c81%3A0x4091f0d6a7d11a06!2s123%20Green%20St%2C%20Mumbai%2C%20India!5e0!3m2!1sen!2sin!4v1614010015762!5m2!1sen!2sin" allowFullScreen loading="lazy"></iframe>
            </div>
          </div>
        ) : (
          <p className="text-gray-600 mt-4">{selectedOption.content}</p>
        )}
      </section>
    </main>
  );
}
