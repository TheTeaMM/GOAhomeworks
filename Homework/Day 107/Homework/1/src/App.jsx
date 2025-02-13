import React from "react";

const Header = () => (
  <header className="bg-blue-600 text-white p-4">
    <h1 className="text-2xl font-bold">My Website</h1>
    <nav>
      <ul className="flex space-x-4">
        <li><a href="#hero" className="hover:underline">Home</a></li>
        <li><a href="#contacts" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  </header>
);

const Hero = () => (
  <section id="hero" className="bg-gray-100 p-10 text-center">
    <h2 className="text-4xl font-bold mb-4">Welcome to My Website</h2>
    <p className="text-lg">This is a hero section with a modern design.</p>
  </section>
);

const Contacts = () => (
  <section id="contacts" className="p-10 bg-white">
    <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
    <form className="flex flex-col space-y-4">
      <input type="text" placeholder="Your Name" className="border p-2" />
      <input type="email" placeholder="Your Email" className="border p-2" />
      <textarea placeholder="Your Message" className="border p-2"></textarea>
      <button className="bg-blue-600 text-white py-2 px-4">Submit</button>
    </form>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white p-4 text-center">
    <p>&copy; 2025 My Website. All rights reserved.</p>
  </footer>
);

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
