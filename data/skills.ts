import { Skill } from '../types';

export const skills: Skill[] = [
  {
    category: 'Frontend',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Angular',
      'Tailwind CSS',
      'ShadCN UI',
    ],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'MySQL', 'MongoDB', 'GraphQL', 'REST APIs'],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      'AWS (S3, Lambda, CloudFront)',
      'Docker',
      'CI/CD',
      'CloudFront',
      'Serverless',
    ],
  },
  {
    category: 'Architecture',
    skills: [
      'Micro-frontends',
      'Microservices',
      'Event-driven Architecture',
      'Scalable Systems',
    ],
  },
  {
    category: 'AI / GenAI',
    skills: [
      'OpenAI APIs',
      'LangChain',
      'RAG / Embedding search',
      'LLM integrations',
    ],
  },
];
