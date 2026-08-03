import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  as: Component = 'div',
}) => {
  return (
    <Component className={twMerge('max-w-[1240px] mx-auto px-6 md:px-10 lg:px-12 w-full', className)}>
      {children}
    </Component>
  );
};
