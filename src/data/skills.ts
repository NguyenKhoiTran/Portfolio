import type { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    title: 'Backend',
    icon: 'Server',
    index: '01',
    skills: [
      'C#',
      'ASP.NET Core',
      'ASP.NET Core Web API',
      'Python',
      'FastAPI',
      'REST API',
      'Entity Framework',
      'JWT Authentication'
    ]
  },
  {
    title: 'Frontend',
    icon: 'Layout',
    index: '02',
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Vite'
    ]
  },
  {
    title: 'Database & Tools',
    icon: 'Database',
    index: '03',
    skills: [
      'SQL Server',
      'PostgreSQL',
      'SQLite',
      'ChromaDB',
      'Git',
      'GitHub',
      'Docker',
      'Postman'
    ]
  },
  {
    title: 'AI & LLM',
    icon: 'Cpu',
    index: '04',
    skills: [
      'RAG',
      'LangChain',
      'Qwen',
      'Ollama',
      'Embedding',
      'Vector Database',
      'Prompt Engineering'
    ]
  }
];
