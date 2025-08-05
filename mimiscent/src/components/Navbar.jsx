// src/components/Navbar.jsx
import { FaShoppingCart, FaSearch } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="bg-primary text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold">
          Blue<span className="text-accent">Man</span>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li><a href="#" className="hover:text-accent">Home</a></li>
          <li><a href="#" className="hover:text-accent">Perfume</a></li>
          <li><a href="#" className="hover:text-accent">Brands</a></li>
          <li><a href="#" className="hover:text-accent">Guides</a></li>
        </ul>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          <FaSearch className="cursor-pointer hover:text-accent" />
          <FaShoppingCart className="cursor-pointer hover:text-accent" />
          <button className="bg-white text-black px-4 py-1 rounded hover:bg-accent hover:text-white transition-all">
            Contact us
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
