import { useState, useEffect } from 'react';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar fixed py-7 top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-4 bg-black/80 backdrop-blur-md shadow-lg' 
        : 'py-7 bg-transparent'
    } flex justify-between items-center px-4 lg:px-8`}>
      <div className="logo">
        <h1 className={`text-3xl font-bold transition-all duration-300 ${
          scrolled 
            ? 'text-white' 
            : 'bg-white text-black p-1 md:bg-transparent md:text-white'
        }`}>
          Portofolio
        </h1>
      </div>
      
      {/* Mobile menu toggle */}
      <button 
        className="md:hidden flex flex-col gap-1 z-60"
        onClick={() => setActive(!active)}
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${
          active ? 'rotate-45 translate-y-1.5' : ''
        }`}></span>
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${
          active ? 'opacity-0' : ''
        }`}></span>
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${
          active ? '-rotate-45 -translate-y-1.5' : ''
        }`}></span>
      </button>

      <ul className={`menu flex items-center lg:gap-10 md:gap-8 gap-4 
        md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 
        md:opacity-100 md:bg-transparent transition-all duration-300 z-50
        ${active 
          ? "top-20 opacity-100 bg-black/90 backdrop-blur-md p-6 rounded-2xl" 
          : "-top-20 opacity-0 md:opacity-100 md:top-0"
        } 
        ${scrolled && !active 
          ? 'md:bg-transparent' 
          : ''
        }`}>
        <li>
          <a 
            href="#beranda" 
            className="text-base lg:text-lg font-medium text-white hover:text-blue-400 transition-colors duration-200"
            onClick={() => setActive(false)}
          >
            Beranda
          </a>
        </li>
        <li>
          <a 
            href="#tentang" 
            className="text-base lg:text-lg font-medium text-white hover:text-blue-400 transition-colors duration-200"
            onClick={() => setActive(false)}
          >
            Tentang
          </a>
        </li>
        <li>
          <a 
            href="#proyek" 
            className="text-base lg:text-lg font-medium text-white hover:text-blue-400 transition-colors duration-200"
            onClick={() => setActive(false)}
          >
            Proyek
          </a>
        </li>
        <li>
          <a 
            href="#kontak" 
            className="text-base lg:text-lg font-medium text-white hover:text-blue-400 transition-colors duration-200"
            onClick={() => setActive(false)}
          >
            Kontak
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;