import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
];

const Navigation = ({ isMobile, closeMenu }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <ul 
      className={
        isMobile 
          ? "flex flex-col items-center gap-6 py-6" 
          : "flex items-center gap-2 relative z-20"
      }
      onMouseLeave={() => !isMobile && setHoveredIndex(null)}
    >
      {navItems.map((item, index) => (
        <li 
          key={index} 
          className="relative px-4 py-2 list-none cursor-pointer"
          onMouseEnter={() => !isMobile && setHoveredIndex(index)}
        >
          <a 
            href={item.href} 
            onClick={isMobile ? closeMenu : undefined}
            className="text-lg md:text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200 block z-10 relative"
          >
            {item.name}
          </a>
          
          {/* Hover sliding pill indicator */}
          {!isMobile && hoveredIndex === index && (
            <motion.div
              layoutId="hoverActivePill"
              className="absolute inset-0 bg-white/10 rounded-full -z-10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 w-full backdrop-blur-md bg-primary/40 border-b border-white/5 shadow-2xl">
      <div className="mx-auto max-w-7xl c-space">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-black tracking-widest bg-gradient-to-r from-aqua via-lavender to-coral bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(122,87,219,0.35)] hover:brightness-125 transition-all duration-300"
          >
            Abhay
          </motion.a>

          {/* SVG Animated Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-neutral-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-lavender sm:hidden transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="w-5 h-5 fill-none stroke-current"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <motion.line
                x1="4"
                y1="6"
                x2="20"
                y2="6"
                animate={isOpen ? { rotate: 45, y: 6, x: 2 } : { rotate: 0, y: 0, x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.line
                x1="4"
                y1="12"
                x2="20"
                y2="12"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.line
                x1="4"
                y1="18"
                x2="20"
                y2="18"
                animate={isOpen ? { rotate: -45, y: -6, x: 2 } : { rotate: 0, y: 0, x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex">
            <Navigation isMobile={false} />
          </nav>
        </div>
      </div>

      {/* Mobile Drawer Navigation with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="block overflow-hidden sm:hidden bg-midnight/95 backdrop-blur-xl border-t border-white/5"
          >
            <nav className="c-space">
              <Navigation isMobile={true} closeMenu={() => setIsOpen(false)} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;