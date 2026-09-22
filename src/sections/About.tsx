import React from 'react';
import { Container } from '../components/common/Container';
import { Reveal } from '../components/common/Reveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-bgLight relative">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading */}
        <div className="lg:col-span-5">
          <span className="text-xs md:text-sm font-semibold tracking-widest text-brandPrimary uppercase mb-3 block">
            Về bản thân
          </span>
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-textPrimary leading-tight tracking-tight">
              Một Developer yêu thích việc xây dựng các sản phẩm phần mềm hiệu quả và có khả năng mở rộng.

            </h2>
          </Reveal>
        </div>

        {/* Right Column: Paragraphs */}
        <div className="lg:col-span-7 space-y-6 text-base md:text-lg text-textSecondary leading-relaxed">
          <Reveal delay={0.1}>
            <p>
              Tôi tập trung vào việc xây dựng các ứng dụng backend có cấu trúc rõ ràng, dễ bảo trì và có khả năng mở rộng cao. Với nền tảng tư duy logic vững vàng, tôi luôn cố gắng thiết kế các giải pháp hệ thống tối ưu và tinh gọn nhất.
            </p>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p>
              Tôi có kinh nghiệm thực hành phát triển web và xây dựng hệ thống thông qua các công nghệ cốt lõi như <span className="font-semibold text-textPrimary">ASP.NET Core Web API, FastAPI, C# và Python</span>. Đồng thời, tôi làm việc thuần thục với các hệ quản trị cơ sở dữ liệu quan hệ (SQL Server, PostgreSQL) và lưu trữ vector.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p>
              Gần đây, tôi quan tâm sâu sắc đến lĩnh vực trí tuệ nhân tạo, đặc biệt là các ứng dụng Generative AI và kỹ thuật <span className="font-semibold text-textPrimary">Retrieval-Augmented Generation (RAG)</span> sử dụng LangChain. Tôi tự tay xây dựng các chatbot hỏi đáp thông minh có khả năng trích xuất và tham chiếu ngữ cảnh chính xác từ tài liệu pháp lý phức tạp.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <p>
              Mục tiêu nghề nghiệp của tôi là tìm kiếm cơ hội làm việc trong môi trường chuyên nghiệp để cống hiến năng lực kỹ thuật, tiếp tục học hỏi từ các chuyên gia và đóng góp giá trị thực tế vào các sản phẩm phần mềm chất lượng cao.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};
export default About;
