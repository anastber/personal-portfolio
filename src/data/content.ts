export interface Experience {
  period: string;
  title: string;
  company: string;
  description: string;
  stack: string[];
}

export interface Project {
  year: string;
  title: string;
  url: string;
  demo?: string;
  description: string;
  ongoing?: string;
  stack: string[];
}

export const links = {
  email: 'anas.tber@etu.ec-lyon.fr',
  github: 'https://github.com/anastber',
  linkedin: 'https://www.linkedin.com/in/anas-tber-99b994222/',
  resume: '/assets/documents/Resume-Anas-Tber.pdf',
};

export const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const rotatingWords = ['ML systems', 'LLM products', 'data pipelines', 'AI tools'];

export const experiences: Experience[] = [
  {
    period: 'Jan – Jul 2026',
    title: 'Data Scientist Intern',
    company: 'BNP Paribas CIB',
    description:
      'Designed and shipped a regulator-approved AML platform. On the modelling side, graph cycle detection and an Isolation Forest with SHAP explanations rank suspicious communities. On the engineering side, a lazy Polars/PyArrow pipeline over 40M+ transactions, plus LLM risk summaries and an investigation chatbot in the app. Sole owner of the codebase through the refactor and handover.',
    stack: ['Python', 'Polars', 'NetworkX', 'SHAP', 'LLMs', 'Streamlit'],
  },
  {
    period: 'Apr – Nov 2025',
    title: 'Tech & Operations Intern',
    company: 'Gentle Mates',
    description:
      'Trained a YOLO logo detector on a dataset I built myself, then built the analytics tool around it, with NLP brand-mention tracking and a dashboard on top. Contributed to the development of other impactful software and AI internal tools for analytics, monitoring, and operations',
    stack: ['Python', 'YOLO', 'Computer Vision', 'APIs', 'Web Scraping', 'Supabase', 'React'],
  },
  {
    period: '2023 – 2025',
    title: 'Founding Engineer',
    company: 'FreyIA',
    description:
      'Built the full-stack platform, the PostgreSQL schema and the REST and WebSocket APIs for connected bins, taking an AI waste-sorting project to an award-winning startup.',
    stack: ['PostgreSQL', 'REST', 'WebSockets'],
  },
];

export const projects: Project[] = [
  {
    year: '2026',
    title: 'AirKeys',
    url: 'https://github.com/anastber/air-keys',
    demo: 'https://air-keys-delta.vercel.app/',
    description:
      'A gesture instrument that runs entirely in the browser, with new gestures taught live by a from-scratch k-NN. I re-evaluated the models on thousands of unseen hands from the public HaGRID dataset: a model trained on many people reaches 98% accuracy on people it never saw.',
    ongoing:
      "Teaching the model to ignore resting or half-formed hands so they don't play wrong notes, then calibrating its confidence and smoothing predictions over time.",
    stack: ['scikit-learn', 'MediaPipe', 'TypeScript', 'Next.js'],
  },
  {
    year: '2026',
    title: 'arXiv Research Radar',
    url: 'https://github.com/anastber/arxiv-research-radar',
    description:
      'A RAG service built like a product: section-aware chunking and FAISS retrieval with a relevance threshold, a citation for every claim, and a FastAPI backend with rate limiting, a daily cost cap and a weekly ingestion pipeline in CI.',
    ongoing:
      'Building an evaluation framework to measure retrieval and answer quality, before improving retrieval with hybrid search and reranking.',
    stack: ['RAG', 'FAISS', 'FastAPI', 'GitHub Actions'],
  },
  {
    year: '2025',
    title: 'YouTube Sentiment Analyzer',
    url: 'https://github.com/anastber/youtube-sentiment-analysis',
    description:
      'Compared RoBERTa and BERT on YouTube comment sentiment and served the results in a Streamlit app with Plotly views.',
    stack: ['Transformers', 'Plotly'],
  },
  {
    year: '2024',
    title: 'Ant Colony Optimization',
    url: 'https://github.com/anastber/ant-colony-optimization',
    description: 'Shortest-path search by ant colony optimisation, visualised live in Tkinter.',
    stack: ['Python', 'Algorithms'],
  },
];
