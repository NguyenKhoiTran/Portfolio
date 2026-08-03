import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'rag-law-chatbot',
    title: 'Chatbot Hỏi Đáp Pháp Luật sử dụng RAG',
    description: 'Hệ thống chatbot hỗ trợ trả lời các câu hỏi pháp luật dựa trên dữ liệu văn bản pháp luật Việt Nam. Hệ thống sử dụng kỹ thuật Retrieval-Augmented Generation để truy xuất thông tin liên quan trước khi tạo câu trả lời.',
    technologies: ['React', 'Vite', 'FastAPI', 'LangChain', 'Qwen', 'Ollama', 'ChromaDB', 'SQLite'],
    features: [
      'Tìm kiếm ngữ nghĩa (Semantic Search)',
      'Chunk dữ liệu tự động theo cấu trúc Điều và Khoản',
      'Vector Search với độ chính xác cao',
      'Truy xuất Top-K tài liệu liên quan nhất',
      'Sinh câu trả lời tối ưu dựa trên ngữ cảnh',
      'Hiển thị nguồn tham khảo rõ ràng',
      'Lưu lịch sử hội thoại của người dùng',
      'Giao diện tối giản hỗ trợ Dark Mode'
    ],
    challenges: 'Xử lý các văn bản pháp luật tiếng Việt có cấu trúc phức tạp, nhiều phân cấp lồng nhau. Việc phân mảnh dữ liệu (chunking) thông thường dễ làm mất ngữ cảnh. Ngoài ra, việc mô hình ngôn ngữ sinh ra các câu trả lời sai lệch (hallucination) là điều tối kỵ trong tư vấn pháp lý.',
    solutions: 'Thiết kế bộ Custom Parser phân tách văn bản theo phân cấp Chương -> Mục -> Điều -> Khoản. Kết hợp Hybrid Search (Vector Search & BM25 Keyword Search) để tăng độ phủ tài liệu. Áp dụng Strict Prompting buộc LLM chỉ trả lời dựa vào context được trích xuất và hiển thị nguồn trích dẫn cụ thể.',
    results: 'Hệ thống đạt tỷ lệ truy xuất chính xác cao, thời gian phản hồi dưới 2 giây và loại bỏ hoàn toàn các câu trả lời ảo giác không có căn cứ pháp lý, giúp người dùng tra cứu nhanh chóng và đáng tin cậy.',
    githubUrl: 'https://github.com/nguyen/chatbot-law-rag',
    demoUrl: 'https://lawbot.nguyen.dev',
    color: 'hover:border-brandPrimary/30 hover:shadow-brandPrimary/5',
    badgeColor: 'bg-brandPrimary/10 text-brandPrimary border-brandPrimary/20'
  }
];
