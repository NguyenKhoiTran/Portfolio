import React from 'react';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = 'outline',
}) => {
  const baseStyles = 'inline-flex items-center px-3.5 py-1 text-xs font-medium rounded-full border transition-all duration-200';
  
  const variants = {
    primary: 'bg-brandPrimary/10 text-brandPrimary border-brandPrimary/20 dark:bg-brandPrimary/20 dark:text-accentTeal dark:border-brandPrimary/30',
    secondary: 'bg-accentTeal text-brandPrimary border-accentTeal dark:bg-brandPrimary/20 dark:text-accentTeal dark:border-brandPrimary/30',
    outline: 'bg-transparent text-textSecondary border-borderLight dark:border-borderDark dark:text-textSecondary/80',
  };

  return (
    <span className={twMerge(baseStyles, variants[variant], className)}>
      {children}
    </span>
  );
};
export default Badge;
