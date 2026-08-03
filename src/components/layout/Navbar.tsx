import React, { useState, useEffect } from 'react';
import { Container } from '../common/Container';
import { Menu, X, Globe } from 'lucide-react';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Giới thiệu', id: 'about' },
    { label: 'Kỹ năng', id: 'skills' },
    { label: 'Kinh nghiệm', id: 'experience' },
    { label: 'Dự án', id: 'projects' },
    { label: 'Hành trình', id: 'journey' },
    { label: 'Liên hệ', id: 'contact' },
  ];

  const sectionIds = menuItems.map(item => item.id);
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90; // Height of navbar
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? 'glass-nav py-4 shadow-soft' 
            : 'bg-transparent py-7'
        }`}
      >
        <Container className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-heading font-bold text-xl md:text-2xl text-brandPrimary tracking-tight flex items-center gap-1 group cursor-pointer"
          >
            <span>Khôi</span>
            <span className="text-textPrimary group-hover:text-brandPrimary transition-colors duration-200">Nguyên</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`text-sm font-semibold transition-colors duration-200 hover:text-brandPrimary relative py-1 cursor-pointer ${
                      activeSection === item.id ? 'text-brandPrimary font-bold' : 'text-textSecondary'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brandPrimary rounded-full" />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* Language Selection */}
            <div className="flex items-center gap-4 pl-4 border-l border-borderLight dark:border-borderDark">
              <button className="text-xs font-bold flex items-center gap-1 text-textSecondary hover:text-brandPrimary transition-colors cursor-pointer">
                <Globe className="w-3.5 h-3.5" />
                <span>VN</span>
              </button>
            </div>
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3 md:hidden">
            <button className="text-xs font-bold flex items-center gap-1 text-textSecondary mr-2 cursor-pointer">
              <Globe className="w-3.5 h-3.5" />
              <span>VN</span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-textPrimary hover:text-brandPrimary transition-colors cursor-pointer p-1"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile menu overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        menuItems={menuItems}
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />
    </>
  );
};
export default Navbar;
