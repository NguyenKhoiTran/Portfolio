import React from 'react';
import { Container } from '../common/Container';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bgLight dark:bg-bgDark py-12 border-t border-borderLight dark:border-borderDark transition-colors duration-300">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-textSecondary dark:text-textSecondary/70 font-semibold">
          &copy; 2026 Trần Khôi Nguyên. Built with React & Tailwind.
        </p>
        <a
          href="#top"
          onClick={scrollToTop}
          className="text-sm font-bold text-brandPrimary hover:text-brandHover flex items-center gap-1.5 transition-colors cursor-pointer group"
        >
          <span>Lên đầu trang</span>
          <ArrowUp className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-200" />
        </a>
      </Container>
    </footer>
  );
};
export default Footer;
