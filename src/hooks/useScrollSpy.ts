import { useState, useEffect } from 'react';

export const useScrollSpy = (ids: string[], offset: number = 160): string => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      // Current scroll position + offset
      const scrollPosition = window.scrollY + offset;

      // Check if we are at the bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
      if (isAtBottom && ids.length > 0) {
        setActiveId(ids[ids.length - 1]);
        return;
      }

      // Find active section
      for (let i = ids.length - 1; i >= 0; i--) {
        const id = ids[i];
        const element = document.getElementById(id);

        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveId(id);
            return;
          }
        }
      }

      // Default to first section when at top
      if (window.scrollY < 50 && ids.length > 0) {
        setActiveId(ids[0]);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial run

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ids, offset]);

  return activeId;
};
export default useScrollSpy;
