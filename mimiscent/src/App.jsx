import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './section/Hero'
import Products from './section/Products'
import SpecialProduct from './section/SpecialProduct';
import PopularProduct from './section/PopularProduct';




function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={theme}>
      <Navbar />
      <Hero />
      <Products />
      <SpecialProduct />
      <PopularProduct />


    </div>
  )
}

export default App
