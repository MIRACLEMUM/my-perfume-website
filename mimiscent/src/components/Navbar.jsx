import { useContext, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { FaSun, FaMoon, FaShoppingCart, FaSearch, FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-primary text-white dark:bg-white dark:text-black px-6 py-4 shadow-md font-body transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-heading font-bold">
          Mimi<span className="text-accent">Scent</span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li><a href="#" className="hover:text-accent transition">Home</a></li>
          <li><a href="#" className="hover:text-accent transition">Perfume</a></li>
          <li><a href="#" className="hover:text-accent transition">Brands</a></li>
          <li><a href="#" className="hover:text-accent transition">Guides</a></li>
        </ul>

        {/* Icons and Theme Toggle */}
        <div className="flex items-center gap-4">

          <button onClick={toggleTheme} className="text-xl hover:text-accent transition">
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>

          <a
       href="#contact"
      className="hidden md:inline border   px-4 py-1 rounded-full font-medium hover:bg-accent hover:text-black transition"
>
  Contact us
</a>


          {/* Hamburger Icon */}
          <button onClick={toggleMenu} className="md:hidden text-xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3 text-center font-medium">
          <a href="#" className="block hover:text-accent">Home</a>
          <a href="#" className="block hover:text-accent">Perfume</a>
          <a href="#" className="block hover:text-accent">Brands</a>
          <a href="#" className="block hover:text-accent">Guides</a>
          <a href="#contact" className="block hover:text-accent">Contact us</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
