import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-dark/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-highlight font-mono text-xl">&lt;AKT /&gt;</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-highlight transition-colors"> Home </a>
            <a href="#about" className="hover:text-highlight transition-colors">About</a>
            <a href="#skills" className="hover:text-highlight transition-colors">Skills</a>
            <a href="#education" className="hover:text-highlight transition-colors">Education</a>
            <a href="#projects" className="hover:text-highlight transition-colors">Projects</a>
            <a href="#contact" className="hover:text-highlight transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block hover:text-highlight transition-colors py-2">Home</a>
              <a href="#about" className="block hover:text-highlight transition-colors py-2">About</a>
              <a href="#skills" className="block hover:text-highlight transition-colors py-2">Skills</a>
              <a href="#education" className="block hover:text-highlight transition-colors py-2">Education</a>
              <a href="#projects" className="block hover:text-highlight transition-colors py-2">Projects</a>
              <a href="#contact" className="block hover:text-highlight transition-colors py-2">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 