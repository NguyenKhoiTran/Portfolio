import React from 'react';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { experienceData } from '../data/experience';
import { Card } from '../components/common/Card';
import { Reveal } from '../components/common/Reveal';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-bgLight relative">
      <Container>
        <SectionHeading
          title="Kinh nghiệm làm việc chuyên môn"
          subtitle="Kinh nghiệm"
        />

        <div className="space-y-8">
          {experienceData.map((exp, idx) => (
            <Reveal key={exp.id} delay={idx * 0.1}>
              <Card
                hoverEffect={true}
                className="bg-surfaceLight border-borderLight shadow-soft hover:shadow-soft-hover"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                  {/* Left Column: Duration & Company Info */}
                  <div className="lg:col-span-4 flex flex-col justify-between">
                    <div>
                      <span className="text-xs md:text-sm font-semibold tracking-widest text-brandPrimary uppercase block mb-1">
                        {exp.duration}
                      </span>
                      <h3 className="text-2xl font-bold font-heading text-textPrimary mb-1">
                        {exp.company}
                      </h3>
                      <p className="text-base font-semibold text-textSecondary">
                        {exp.position}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Work Description */}
                  <div className="lg:col-span-8 border-t lg:border-t-0 lg:border-l border-borderLight/80 pt-6 lg:pt-0 lg:pl-8">
                    <ul className="space-y-3.5">
                      {exp.description.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3.5 text-textSecondary text-sm md:text-base leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-brandPrimary mt-2 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Experience;
