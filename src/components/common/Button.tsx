import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  asLink = false,
  href,
  target,
  rel,
  download,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-premium focus:outline-none focus:ring-2 focus:ring-brandPrimary/50 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] cursor-pointer';
  
  const variants = {
    primary: 'bg-brandPrimary text-surfaceLight hover:bg-brandHover shadow-soft hover:shadow-soft-hover',
    secondary: 'bg-accentTeal text-brandPrimary hover:bg-brandPrimary hover:text-surfaceLight shadow-sm',
    outline: 'border border-borderLight text-textPrimary hover:bg-surfaceLight/80 hover:border-textPrimary/30 dark:border-borderDark dark:text-bgLight dark:hover:bg-surfaceDark',
    ghost: 'text-textPrimary hover:bg-surfaceLight/80 dark:text-bgLight dark:hover:bg-surfaceDark'
  };

  const sizes = {
    sm: 'px-4 py-2.5 text-sm',
    md: 'px-6 py-3.5 text-base',
    lg: 'px-8 py-4.5 text-lg'
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2 inline-flex items-center">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2 inline-flex items-center">{icon}</span>}
    </>
  );

  const classes = twMerge(baseStyles, variants[variant], sizes[size], className);

  if (asLink && href) {
    return (
      <a 
        href={href} 
        target={target} 
        rel={target === '_blank' ? 'noopener noreferrer' : rel} 
        download={download}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
};
export default Button;
