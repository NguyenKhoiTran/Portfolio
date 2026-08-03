import React from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  dark?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverEffect = true,
  dark = false,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        'rounded-premium border p-6 md:p-8 transition-all duration-300',
        dark
          ? 'bg-surfaceDark border-borderDark text-bgLight shadow-dark-soft'
          : 'bg-surfaceLight border-borderLight text-textPrimary shadow-soft',
        hoverEffect && (dark ? 'hover:-translate-y-1.5 hover:shadow-dark-soft-hover hover:border-brandPrimary/30' : 'hover:-translate-y-1.5 hover:shadow-soft-hover hover:border-brandPrimary/20'),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
export default Card;
