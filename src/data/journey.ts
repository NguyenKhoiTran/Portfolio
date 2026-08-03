import type { JourneyMilestone } from '../types';

export const journeyData: JourneyMilestone[] = [
  {
    id: 'milestone-1',
    date: '2022 - 2024',
    title: 'Xây dựng nền tảng kiến thức',
    description: 'Học lập trình cơ bản, cấu trúc dữ liệu và giải thuật, cơ sở dữ liệu (SQL Server, PostgreSQL), phát triển ứng dụng web và các kiến thức nền tảng vững chắc về kỹ nghệ phần mềm.'
  },
  {
    id: 'milestone-2',
    date: '2025',
    title: 'Phát triển Job Portal Website',
    description: 'Thiết kế và xây dựng website tìm kiếm việc làm sử dụng ASP.NET Core và SQL Server. Triển khai các chức năng đăng ký, đăng nhập, phân quyền ứng viên/nhà tuyển dụng, quản lý hồ sơ và tin tuyển dụng, tìm kiếm và lọc việc làm, ứng tuyển trực tuyến, theo dõi trạng thái hồ sơ và lưu công việc yêu thích.'
  },
  {
    id: 'milestone-3',
    date: '2026',
    title: 'Phát triển Chatbot Pháp Luật sử dụng RAG',
    description: 'Nghiên cứu sâu về Generative AI và xây dựng hệ thống chatbot hỏi đáp pháp luật thông minh sử dụng kỹ thuật RAG. Kết hợp các công nghệ FastAPI, LangChain, Qwen, Ollama và Vector Database ChromaDB.'
  }
];
