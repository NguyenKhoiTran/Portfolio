import React from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  dark?: boolean;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  description,
  dark = false,
  align = 'left',
}) => {
  return (
    <div className={`mb-12 md:mb-16 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}>
      {subtitle && (
        <Reveal>
          <span className={`text-xs md:text-sm font-semibold tracking-widest uppercase mb-3 block ${
            dark ? 'text-accentTeal/80' : 'text-brandPrimary'
          }`}>
            {subtitle}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-tight ${
          dark ? 'text-bgLight' : 'text-textPrimary'
        }`}>
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p className={`mt-4 text-base md:text-lg leading-relaxed ${
            dark ? 'text-textSecondary/70' : 'text-textSecondary'
          }`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
};
export default SectionHeading;
