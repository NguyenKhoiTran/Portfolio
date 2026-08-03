import React, { useState } from 'react';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { projectsData } from '../data/projects';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Reveal } from '../components/common/Reveal';
import { Github, ExternalLink, ChevronDown, ChevronUp, Check, AlertCircle, Wrench, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import chatbotImg from '../assets/images/chatbot.png';
import garageImg from '../assets/images/garage.png';
import ecommerceImg from '../assets/images/ecommerce.png';

const imageMap: Record<string, string> = {
  'rag-law-chatbot': chatbotImg,
  'smart-garage-management': garageImg,
  'e-commerce-website': ecommerceImg,
};

export const Projects: React.FC = () => {
  // Store IDs of expanded project details
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="projects" className="py-24 md:py-32 bg-bgLight/40 relative border-y border-borderLight/30">
      {/* Decorative dot background */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--color-borderLight)_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          title="Một vài sản phẩm nổi bật"
          subtitle="Dự án cá nhân"
          description="Các dự án tiêu biểu minh họa năng lực lập trình backend, tối ưu hóa cơ sở dữ liệu và tích hợp giải pháp AI."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {projectsData.map((project, idx) => {
            const isFeatured = idx === 0; // First project is featured (full-width)
            const isExpanded = !!expandedIds[project.id];
            const projectImg = imageMap[project.id];

            return (
              <div
                key={project.id}
                className={`${isFeatured ? 'lg:col-span-12' : 'lg:col-span-6'} w-full`}
              >
                <Reveal delay={idx * 0.1}>
                  <Card
                    hoverEffect={true}
                    className={`bg-surfaceLight border-borderLight shadow-soft transition-all duration-300 hover:shadow-soft-hover p-0 md:p-0 overflow-hidden ${project.color}`}
                  >
                    <div className={`grid grid-cols-1 ${isFeatured ? 'lg:grid-cols-12' : ''} h-full`}>
                      {/* Image Thumbnail Panel */}
                      <div className={`relative ${isFeatured ? 'lg:col-span-5 h-[260px] lg:h-auto' : 'h-[240px]'} overflow-hidden bg-bgLight`}>
                        <img
                          src={projectImg}
                          alt={project.title}
                          className="w-full h-full object-cover select-none transition-transform duration-500 hover:scale-[1.025]"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-textPrimary/10 to-transparent pointer-events-none" />
                      </div>

                      {/* Content Panel */}
                      <div className={`p-6 md:p-8 flex flex-col justify-between ${isFeatured ? 'lg:col-span-7' : ''}`}>
                        <div>
                          {/* Title & Badge */}
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <h3 className="text-2xl font-bold font-heading text-textPrimary leading-snug">
                              {project.title}
                            </h3>
                          </div>

                          <p className="text-textSecondary text-sm md:text-base leading-relaxed mb-5">
                            {project.description}
                          </p>

                          {/* Tech Badges */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map(tech => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className={`text-[11px] font-semibold tracking-wide ${project.badgeColor}`}
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-borderLight/50">
                          <div className="flex gap-3">
                            {project.githubUrl && (
                              <Button
                                variant="outline"
                                size="sm"
                                asLink={true}
                                href={project.githubUrl}
                                target="_blank"
                                icon={<Github className="w-4 h-4" />}
                              >
                                GitHub
                              </Button>
                            )}
                            {project.demoUrl && (
                              <Button
                                variant="ghost"
                                size="sm"
                                asLink={true}
                                href={project.demoUrl}
                                target="_blank"
                                icon={<ExternalLink className="w-4 h-4" />}
                              >
                                Demo
                              </Button>
                            )}
                          </div>

                          <button
                            onClick={() => toggleExpand(project.id)}
                            className="flex items-center gap-1.5 text-sm font-bold text-brandPrimary hover:text-brandHover transition-colors cursor-pointer p-1"
                          >
                            <span>{isExpanded ? 'Ẩn chi tiết' : 'Xem chi tiết'}</span>
                            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Smooth Expansive Technical Case Study */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="border-t border-borderLight/60 bg-bgLight/30"
                        >
                          <div className="p-6 md:p-8 space-y-6 text-sm md:text-base">
                            {/* Features list */}
                            <div>
                              <h4 className="font-heading font-bold text-textPrimary text-base mb-3 flex items-center gap-2">
                                <Check className="w-4 h-4 text-brandPrimary" />
                                <span>Tính năng chính</span>
                              </h4>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-textSecondary pl-6 list-disc">
                                {project.features.map((feat, fidx) => (
                                  <li key={fidx}>{feat}</li>
                                ))}
                              </ul>
                            </div>

                            {/* Challenges & Solutions */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-borderLight/40">
                              <div>
                                <h4 className="font-heading font-bold text-textPrimary text-base mb-2 flex items-center gap-2">
                                  <AlertCircle className="w-4 h-4 text-amber-500" />
                                  <span>Thách thức</span>
                                </h4>
                                <p className="text-textSecondary leading-relaxed pl-6">
                                  {project.challenges}
                                </p>
                              </div>
                              <div>
                                <h4 className="font-heading font-bold text-textPrimary text-base mb-2 flex items-center gap-2">
                                  <Wrench className="w-4 h-4 text-brandPrimary" />
                                  <span>Giải pháp</span>
                                </h4>
                                <p className="text-textSecondary leading-relaxed pl-6">
                                  {project.solutions}
                                </p>
                              </div>
                            </div>

                            {/* Results */}
                            <div className="pt-4 border-t border-borderLight/40">
                              <h4 className="font-heading font-bold text-textPrimary text-base mb-2 flex items-center gap-2">
                                <Award className="w-4 h-4 text-brandPrimary animate-pulse" />
                                <span>Kết quả đạt được</span>
                              </h4>
                              <p className="text-textSecondary leading-relaxed pl-6">
                                {project.results}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </Reveal>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
export default Projects;
