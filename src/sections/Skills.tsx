import React from 'react';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { skillsData } from '../data/skills';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Reveal } from '../components/common/Reveal';
import * as Icons from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-bgDark text-bgLight relative">
      {/* Subtle background detail */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(23,110,105,0.08)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          title="Bộ kỹ năng chuyên môn đang phát triển"
          subtitle="Kỹ năng chuyên môn"
          dark={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, idx) => {
            // Dynamically resolve Lucide icon component
            const IconComponent = (Icons as any)[category.icon] || Icons.Code;

            return (
              <Reveal key={category.title} delay={idx * 0.1}>
                <Card
                  dark={true}
                  hoverEffect={true}
                  className="h-full relative overflow-hidden group flex flex-col justify-between border-borderDark/60 bg-surfaceDark/40"
                >
                  {/* Number Watermark */}
                  <span className="absolute -right-2 -top-4 text-7xl font-extrabold font-heading text-bgLight/[0.02] select-none group-hover:text-brandPrimary/[0.08] transition-colors duration-500">
                    {category.index}
                  </span>

                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3.5 mb-6">
                      <div className="p-3 rounded-xl bg-brandPrimary/10 text-brandPrimary group-hover:bg-brandPrimary group-hover:text-surfaceLight transition-all duration-300">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold font-heading text-bgLight">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="bg-surfaceDark/50 border-borderDark/50 text-bgLight/85 hover:border-brandPrimary/30 hover:text-brandPrimary"
                        >
                          <span className="w-1 h-1 rounded-full bg-brandPrimary/60 mr-1.5" />
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
export default Skills;
