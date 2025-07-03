import { useState, useEffect } from 'react';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        {/* Logo */}
        <h1
          className={`text-2xl font-bold transition-all duration-300 ${
            scrolled
              ? 'text-white'
              : 'bg-white text-black px-2 py-1 rounded md:bg-transparent md:text-white'
          }`}
        >
          Satya Bintang
        </h1>

        {/* Hamburger menu */}
        <button
          className="md:hidden flex flex-col gap-1 absolute right-4 top-1/2 -translate-y-1/2"
          onClick={() => setActive(!active)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
              active ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${
              active ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
              active ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </button>

        {/* Navigation */}
        <nav>
          <ul
            className={`flex flex-col md:flex-row md:gap-8 gap-4 md:static absolute top-full right-4 md:right-auto transition-all duration-300 z-40
              ${
                active
                  ? 'opacity-100 bg-black/90 backdrop-blur-xl p-4 rounded-xl w-[40vw] mt-2'
                  : 'opacity-0 pointer-events-none top-[-200px] md:opacity-100 md:pointer-events-auto md:top-0'
              }
            `}
          >
            {['beranda', 'tentang', 'proyek', 'kontak'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="block text-base lg:text-lg font-medium text-white hover:text-violet-400 transition-colors duration-200"
                  onClick={() => setActive(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
