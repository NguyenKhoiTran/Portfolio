import React, { useRef } from 'react';
import { Container } from '../components/common/Container';
import { Reveal } from '../components/common/Reveal';
import { journeyData } from '../data/journey';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Journey: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of the section to fill the line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  // Scale Y of the primary colored scroll tracker
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} id="journey" className="py-24 md:py-32 bg-bgDark text-bgLight relative overflow-hidden">
      {/* Decorative dots grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(23,110,105,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Title Summary */}
        <div className="lg:col-span-5 lg:sticky lg:top-36 h-fit">
          <span className="text-xs md:text-sm font-semibold tracking-widest text-accentTeal/80 uppercase mb-3 block">
            Hành trình
          </span>
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-bgLight leading-tight tracking-tight mb-4">
              Chặng đường phát triển & học hỏi.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-textSecondary/80 text-base md:text-lg leading-relaxed">
              Nhìn lại những cột mốc quan trọng, từ việc làm quen với những dòng code đầu tiên đến việc nghiên cứu và triển khai các hệ thống backend và ứng dụng AI phức tạp.
            </p>
          </Reveal>
        </div>

        {/* Right Column: Timeline */}
        <div className="lg:col-span-7 relative pl-8 md:pl-10">
          {/* Vertical Track Base */}
          <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-borderDark/40 rounded-full" />
          
          {/* Filled Vertical Track */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-0 top-2 bottom-2 w-[2px] bg-brandPrimary origin-top rounded-full shadow-[0_0_8px_rgba(23,110,105,0.6)]"
          />

          <div className="space-y-12">
            {journeyData.map((milestone, idx) => (
              <div key={milestone.id} className="relative group">
                {/* Bullet node on the track */}
                <div className="absolute -left-[37px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full border-2 border-borderDark bg-bgDark flex items-center justify-center transition-all duration-300 group-hover:border-brandPrimary group-hover:scale-110">
                  <div className="w-1.5 h-1.5 rounded-full bg-borderDark/60 group-hover:bg-brandPrimary transition-colors" />
                </div>

                <Reveal delay={idx * 0.1} yOffset={20}>
                  <div className="space-y-2">
                    <span className="text-xs md:text-sm font-bold text-brandPrimary tracking-wider uppercase bg-brandPrimary/10 border border-brandPrimary/20 px-3 py-1 rounded-full w-fit block">
                      {milestone.date}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold font-heading text-bgLight group-hover:text-brandPrimary transition-colors duration-300 pt-1">
                      {milestone.title}
                    </h3>
                    <p className="text-textSecondary/80 text-sm md:text-base leading-relaxed max-w-xl">
                      {milestone.description}
                    </p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Journey;
