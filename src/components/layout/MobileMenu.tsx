import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe } from 'lucide-react';

interface MenuItem {
  label: string;
  id: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
  activeSection: string;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  menuItems,
  activeSection,
  onNavClick,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-textPrimary/40 backdrop-blur-sm z-40 md:hidden"
            onClick={onClose}
          />

          {/* Slide-out Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 220 }}
            className="fixed right-0 top-0 bottom-0 w-[80%] max-w-[320px] bg-bgLight dark:bg-bgDark z-50 p-8 shadow-2xl flex flex-col justify-between md:hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-12">
                <span className="font-heading font-bold text-xl text-brandPrimary tracking-tight">Menu</span>
                <button
                  onClick={onClose}
                  className="p-1 text-textPrimary dark:text-bgLight hover:text-brandPrimary transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {menuItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => onNavClick(e, item.id)}
                    className={`text-lg font-heading font-semibold transition-colors py-2 block ${
                      activeSection === item.id
                        ? 'text-brandPrimary'
                        : 'text-textSecondary hover:text-textPrimary'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="border-t border-borderLight dark:border-borderDark pt-6">
              <span className="text-xs text-textSecondary block mb-3 font-semibold uppercase tracking-wider">Ngôn ngữ / Language</span>
              <button className="flex items-center gap-2 text-sm font-semibold text-brandPrimary cursor-pointer">
                <Globe className="w-4 h-4" />
                <span>Tiếng Việt (VN)</span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
export default MobileMenu;
