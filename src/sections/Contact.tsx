import React from 'react';
import { Container } from '../components/common/Container';
import { Card } from '../components/common/Card';
import { Reveal } from '../components/common/Reveal';
import { Button } from '../components/common/Button';
import { Mail, Phone, Github, ArrowRight, FileText } from 'lucide-react';
import cvPdf from '../assets/documents/CV_TranKhoiNguyen.pdf';

export const Contact: React.FC = () => {
  const contactLinks = [
    {
      label: 'Email',
      value: 'trankhoinguyen264@gmail.com',
      href: 'mailto:trankhoinguyen264@gmail.com',
      icon: Mail,
    },
    {
      label: 'Số điện thoại',
      value: '0976 581 065',
      href: 'tel:+84976581065',
      icon: Phone,
    },
    {
      label: 'GitHub',
      value: 'github.com/NguyenKhoiTran',
      href: 'https://github.com/NguyenKhoiTran',
      icon: Github,
      isExternal: true,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-bgLight relative">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column */}
        <div className="lg:col-span-5">
          <span className="text-xs md:text-sm font-semibold tracking-widest text-brandPrimary uppercase mb-3 block">
            Liên hệ
          </span>
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-textPrimary leading-tight tracking-tight mb-4">
              Mình sẵn sàng kết nối.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-textSecondary text-base md:text-lg leading-relaxed mb-8">
              Nếu bạn quan tâm đến các dự án của mình, có nhu cầu tuyển dụng hoặc muốn trao đổi về cơ hội hợp tác phát triển phần mềm, hãy kết nối ngay với mình nhé.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            {/* CV Download Action */}
            <div className="p-5 bg-surfaceLight rounded-xl border border-borderLight shadow-soft flex items-center justify-between gap-4 max-w-sm">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-brandPrimary/10 text-brandPrimary rounded-lg">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-textPrimary font-heading">CV / Resume</h4>
                  <p className="text-xs text-textSecondary">Bản tiếng Việt & tiếng Anh</p>
                </div>
              </div>
              <Button
                variant="primary"
                size="sm"
                asLink={true}
                href={cvPdf}
                download="CV_TranKhoiNguyen.pdf"
                target="_blank"
              >
                Tải CV
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Contact Cards Grid */}
        <div className="lg:col-span-7 space-y-4">
          {contactLinks.map((item, idx) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.label} delay={idx * 0.08}>
                <a
                  href={item.href}
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  className="group block"
                >
                  <Card
                    hoverEffect={false}
                    className="p-5 md:p-6 bg-surfaceLight border-borderLight hover:border-brandPrimary/30 hover:shadow-soft-hover transition-all duration-300 flex items-center justify-between group-hover:translate-x-2 shadow-soft"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3.5 bg-bgLight group-hover:bg-accentTeal group-hover:text-brandPrimary rounded-xl transition-colors duration-300 text-textSecondary">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-textSecondary block font-semibold mb-0.5">
                          {item.label}
                        </span>
                        <span className="text-sm md:text-base font-bold text-textPrimary group-hover:text-brandPrimary transition-colors">
                          {item.value}
                        </span>
                      </div>
                    </div>

                    <ArrowRight className="w-5 h-5 text-textSecondary/40 group-hover:text-brandPrimary group-hover:translate-x-1.5 transition-all duration-300" />
                  </Card>
                </a>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
export default Contact;
