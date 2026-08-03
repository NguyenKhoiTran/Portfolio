import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { ArrowRight, MapPin, Briefcase, Code } from 'lucide-react';
import heroImg from '../assets/images/hero.png';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, damping: 26, stiffness: 120 },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden bg-bgLight"
    >
      {/* Subtle dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--color-borderLight)_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center pt-28 md:pt-36 pb-16 md:pb-24">

        {/* ── LEFT: Text content ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col space-y-7"
        >
          {/* Label */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brandPrimary animate-pulse" />
            <span className="text-xs font-semibold tracking-widest text-brandPrimary uppercase">
              Xin chào, mình là
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight leading-[1.08] text-textPrimary"
          >
            Trần Khôi <br />
            <span className="text-brandPrimary">Nguyên</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-textSecondary max-w-md leading-relaxed"
          >
            Mình là{' '}
            <span className="font-semibold text-textPrimary">
              Backend Developer &amp; AI Engineer
            </span>
            , tập trung xây dựng RESTful API, phát triển hệ thống có khả năng mở rộng và ứng dụng các công nghệ AI hiện đại.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-1">
            <Button
              variant="primary"
              icon={<ArrowRight className="w-4 h-4" />}
              onClick={() => handleScrollTo('projects')}
            >
              Xem dự án
            </Button>
            <Button variant="outline" onClick={() => handleScrollTo('contact')}>
              Kết nối
            </Button>
          </motion.div>

          {/* Info cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-3 pt-4 border-t border-borderLight/60"
          >
            {[
              { icon: Briefcase, label: 'Vai trò',   value: 'Backend & AI' },
              { icon: MapPin,    label: 'Địa điểm',  value: 'Hồ Chí Minh, Việt Nam' },
              { icon: Code,      label: 'Trọng tâm', value: 'C#, Python, RAG' },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex flex-col gap-1 p-3 bg-surfaceLight/60 rounded-xl border border-borderLight/40 hover:border-brandPrimary/20 hover:bg-surfaceLight transition-all duration-300"
              >
                <span className="text-[10px] text-textSecondary font-semibold uppercase tracking-wider flex items-center gap-1">
                  <Icon className="w-3 h-3 text-brandPrimary shrink-0" />
                  {label}
                </span>
                <span className="text-xs font-bold text-textPrimary leading-snug">{value}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Hero image ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex justify-end items-center"
        >
          <div className="relative w-full max-w-[520px] aspect-[4/3] rounded-[2rem] overflow-hidden border border-borderLight/60 shadow-soft group">
            <motion.img
              src={heroImg}
              alt="Không gian làm việc của Trần Khôi Nguyên"
              className="w-full h-full object-cover select-none"
              loading="eager"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.5 }}
            />
            {/* Soft vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-bgLight/20 via-transparent to-transparent pointer-events-none" />

            {/* Floating status badge */}
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute bottom-5 left-5 right-5 px-4 py-3 rounded-2xl glass-nav border border-white/25 shadow-lg flex items-center justify-between"
            >
              <div>
                <p className="text-xs font-bold text-textPrimary font-heading">Trần Khôi Nguyên</p>
                <p className="text-[10px] text-textSecondary">Backend Developer &amp; AI Engineer</p>
              </div>
              <div className="flex items-center gap-1.5 bg-brandPrimary/15 border border-brandPrimary/20 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-brandPrimary animate-ping" />
                <span className="text-[9px] font-bold text-brandPrimary uppercase tracking-wider">
                  Available
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </Container>
    </section>
  );
};
export default Hero;
