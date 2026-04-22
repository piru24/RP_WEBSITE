export const site = {
  name: 'BioMentor',
  tagline: 'Biology Made Brilliant',
  headline: 'Smarter Tools, Better Grades',
  intro:
    'BioMentor personalizes education using intelligent summarization, adaptive quizzes, answer evaluation, and spaced repetition - built for smarter biology learning.',
  footer: 'Empowering A/L Biology learning with AI',
};

export const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Domain', href: '#domain' },
  { label: 'Research', href: '#research' },
  { label: 'Features', href: '#features' },
  { label: 'Tools', href: '#tools' },
  { label: 'Milestones', href: '#milestones' },
  { label: 'Docs', href: '#documents' },
  { label: 'Team', href: '#team' },
];

export const aboutCards = [
  {
    title: 'Intelligent Summarization',
    description:
      'Utilizes Retrieval-Augmented Generation (RAG) to convert lengthy content into digestible summaries.',
  },
  {
    title: 'Adaptive Assessments',
    description:
      'Generates MCQs and quizzes dynamically based on student performance using Item Response Theory (IRT).',
  },
  {
    title: 'Answer Evaluation',
    description:
      'Evaluates student responses using large language models and semantic similarity scoring.',
  },
  {
    title: 'Spaced Repetition',
    description:
      'Improves retention using the SM-2 algorithm, optimizing review intervals based on recall difficulty.',
  },
];

export const domainTabs = [
  {
    label: 'Background',
    paragraphs: [
      'A/L Biology students in Sri Lanka face challenges with memorizing complex terms, understanding long texts, and getting personalized feedback. Traditional tools do not support diverse learning styles or adapt to individual needs.',
      'BioMentor was created to solve these problems. It is a personalized e-learning platform that uses spaced repetition, adaptive quizzes, summaries, and answer evaluation to help students learn more effectively using government-approved content.',
    ],
  },
  {
    label: 'Research Gap',
    paragraphs: [
      'Despite the rise of digital education platforms in Sri Lanka, A/L Biology students still face significant challenges due to the lack of personalized and adaptive learning tools. Existing platforms are often static, offering limited support for vocabulary retention, comprehension of large volumes of text, or development of exam-oriented answering skills. They do not adapt to a student individual performance or provide detailed feedback, making it difficult for learners to identify and improve weak areas.',
      'There is minimal integration of features that support auditory learners, topic-specific summaries, or structured answer evaluation, all of which are crucial for mastering A/L Biology. This gap calls for a holistic solution aligned with the local syllabus, diverse learning styles, and real-time actionable insights.',
    ],
  },
  {
    label: 'Research Problem',
    cards: [
      {
        title: 'AI Summarization',
        description:
          'How can we generate concise, exam-relevant summaries from A/L Biology materials using customizable lengths and voice support, while ensuring alignment with the national syllabus?',
      },
      {
        title: 'Adaptive Quizzes',
        description:
          'How can we create a dynamic quiz system that adjusts MCQ difficulty based on student performance and accurately identifies learning gaps through real-time feedback?',
      },
      {
        title: 'Answer Evaluation',
        description:
          'How can we assist students in improving structured and essay-type answers by evaluating responses using semantic scoring and actionable feedback aligned with curriculum standards?',
      },
      {
        title: 'Spaced Repetition',
        description:
          'How can we optimize vocabulary memorization in biology by customizing spaced review intervals based on term difficulty and student recall performance?',
      },
    ],
  },
  {
    label: 'Research Objectives',
    cards: [
      {
        title: 'AI Summarization',
        description:
          'To develop a summarization tool that generates clear, concise, and customizable summaries from A/L Biology materials, with voice output and support for multiple learning styles.',
      },
      {
        title: 'Adaptive Quizzes',
        description:
          'To create a quiz platform that adapts MCQ difficulty in real time based on student performance and provides detailed feedback and analytics to support targeted learning.',
      },
      {
        title: 'Answer Evaluation',
        description:
          'To build a system that evaluates student-written structured and essay-type answers, offers improvement suggestions, and tracks individual progress using relevant scoring models.',
      },
      {
        title: 'Spaced Repetition',
        description:
          'To implement a vocabulary learning tool using the SM-2 algorithm that adjusts review intervals based on recall difficulty, helping students retain complex biology terms effectively.',
      },
    ],
  },
];

export const researchHighlights = [
  {
    title: 'Summarization',
    description:
      'Uses Retrieval-Augmented Generation (RAG) and Flan-T5 to summarize educational content into concise, structured formats.',
  },
  {
    title: 'Adaptive Quiz',
    description:
      'Dynamically adjusts difficulty levels using Item Response Theory (IRT) for personalized learning.',
  },
  {
    title: 'Answer Evaluation',
    description:
      'Leverages LLaMA 3 and semantic similarity to score structured and essay-type answers with adaptive feedback.',
  },
  {
    title: 'Spaced Repetition',
    description:
      'Incorporates SM-2 algorithm to enhance long-term memory retention through spaced learning intervals.',
  },
];

export const features = [
  {
    title: 'AI Summarization',
    description:
      'Developed and analyzed in both monolithic and microservices architectures, this tool uses the Flan-T5 base model with RAG to generate structured summaries and notes with voice output. Notes are available in English, Tamil, and Sinhala.',
  },
  {
    title: 'Adaptive Quizzes',
    description:
      'Generates MCQs dynamically and adjusts difficulty in real time using Item Response Theory (IRT), student performance tracking, and semantic filtering to enhance personalized practice.',
  },
  {
    title: 'Answer Evaluation',
    description:
      'Evaluates structured and essay-type responses using semantic similarity, grammar scoring, and curriculum-aligned model answers to provide personalized feedback and performance insights.',
  },
  {
    title: 'Spaced Repetition',
    description:
      'Uses the SM-2 algorithm to schedule personalized vocabulary reviews based on recall performance, with daily flashcards, pronunciation support, and progress tracking.',
  },
];

export const tools = [
  { name: 'React', description: 'Frontend UI development' },
  { name: 'Tailwind CSS', description: 'Modern utility-first CSS' },
  { name: 'TypeScript', description: 'Static typing for JavaScript' },
  { name: 'Python', description: 'AI/ML backend services' },
  { name: 'TensorFlow', description: 'Model training and evaluation' },
  { name: 'HuggingFace Transformers', description: 'LLM fine-tuning and inference' },
  { name: 'MongoDB', description: 'NoSQL database for analytics' },
  { name: 'FastAPI', description: 'Lightweight Python backend' },
  { name: 'Vite', description: 'Blazing fast dev server for React' },
  { name: 'Azure', description: 'Cloud hosting and deployment (CI/CD)' },
  { name: 'GitHub Actions', description: 'Automation workflows for building, testing, deploying' },
  { name: 'OCR (Tesseract)', description: 'Text extraction from scanned content and images' },
];

export const milestones = [
  {
    title: 'Project Topic Assessment',
    date: 'July 2024',
    description: 'Initial topic assessment document submitted. Included research problem, objectives, and task breakdown.',
  },
  {
    title: 'Project Proposal Presentation',
    date: 'August 2024',
    description: 'Presented the proposed research to a panel of judges.',
  },
  {
    title: 'Project Proposal Report',
    date: 'August 2024',
    description: 'In-depth analysis and proposed solution submitted as a formal report.',
  },
  {
    title: 'Progress Presentation 1',
    date: 'December 2024',
    description: 'Evaluation of 50% completion of the proposed solution.',
  },
  {
    title: 'Research Paper Draft',
    date: 'February 2025',
    description: 'Submitted draft research paper for supervisor review.',
  },
  {
    title: 'Final Thesis Submission',
    date: 'March 2025',
    description: 'Group and individual thesis documents submitted for evaluation.',
  },
  {
    title: 'Progress Presentation 2',
    date: 'March 2025',
    description: 'Evaluation of 90% project completion.',
  },
  {
    title: 'Website Assessment',
    date: 'May 2025',
    description: 'Research website submitted for review.',
  },
  {
    title: 'Final Presentation & Viva',
    date: 'May 2025',
    description: 'Final evaluation of the completed product by judges.',
  },
];

export const documents = [
  {
    category: 'Project Proposal',
    files: [
      { name: 'Proposal Report - IT21375132', file: '/assets/Clinical%20Risk%20Dr.pdf' },
      { name: 'Proposal Report - IT21068478', file: '' },
      { name: 'Proposal Report - IT21264634', file: '' },
      { name: 'Proposal Report - IT21204302', file: '' },
    ],
  },
  {
    category: 'Final Reports',
    files: [
      { name: 'Final Report - IT21375132', file: '' },
      { name: 'Final Report - IT21068478', file: '' },
      { name: 'Final Report - IT21264634', file: '' },
      { name: 'Final Report - IT21204302', file: '' },
      { name: 'Final Group Report', file: '' },
    ],
  },
  {
    category: 'Presentations',
    files: [
      { name: 'Proposal Presentation', file: '' },
      { name: 'Progress Presentation 1', file: '' },
      { name: 'Progress Presentation 2', file: '' },
      { name: 'Final Presentation', file: '' },
    ],
  },
  { category: 'Research Paper', files: [{ name: 'Research Paper', file: '' }] },
  { category: 'Deployment Documents', files: [{ name: 'Deployment Report', file: '' }] },
  { category: 'Registration Docs', files: [{ name: 'Topic Assessment', file: '' }] },
];

export const team = [
  { name: 'Dr. Sanvitha Kasthuriarachchi', role: 'Supervisor', email: 'sanvitha.k@sliit.lk' },
  { name: 'Karthiga Rajendran', role: 'Co-Supervisor', email: 'karthiga.r@sliit.lk' },
  { name: 'Gokul Abisheak', role: 'Team Leader', email: 'gokulabisheak12@gmail.com' },
  { name: 'Sajeevan S', role: 'Member', email: 'sajeesiva12@gmail.com' },
  { name: 'Dharane S', role: 'Member', email: 'dharanesegar08@gmail.com' },
  { name: 'Sujitha S', role: 'Member', email: 'sujithasrikanthan@gmail.com' },
];

export const projectLinks = [
  {
    title: 'GitHub Repository',
    label: 'View Repository',
    href: 'https://github.com/Y3S1-GRP22/BioMentor-Personalized-E-Learning-Platform',
  },
  {
    title: 'Frontend Deployment',
    label: 'Visit Website',
    href: 'http://20.193.152.91/',
  },
];

export const references = [
  'D. Sudharson et al., "An Abstractive Summarization and Conversation Bot Using T5 and its Variants," ICAICCIT 2023, IEEE, pp. 431-437.',
  'K. Maurya et al., "NLP-Enhanced Long Document Summarization: A Comprehensive Approach for Information Condensation," 2024 2nd Int. Conf. on Advancement in Computation & Computer Technologies, pp. 187-192.',
  'M. Ramina et al., "Topic Level Summary Generation Using BERT-Induced Abstractive Summarization Model," Proc. ICICCS 2020, IEEE, pp. 747-752.',
  'A. Goyal et al., "TalkifyPy: The Pythonic Voice Assistant," 2024 1st Int. Conf. on Advanced Computing and Emerging Technologies.',
  'J. Christian et al., "Analyzing Microservices and Monolithic Systems: Key Factors in Architecture, Development, and Operations," IC2IE 2023, IEEE, pp. 64-69.',
  'Devlin, J., Chang, M.-W., Lee, K., & Toutanova, K. (2019). "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding."',
  'Brown, T., Mann, B., Ryder, N., et al. (2020). "Language Models are Few-Shot Learners." NeurIPS 2020.',
  'Dutta, H. S., & Das, B. (2020). "Hybrid AI Models for Educational Applications." Journal of Artificial Intelligence Research.',
  'A. S. K. Shukla, D. Arora, and A. K. Sharma, "Automatic Question Answer Generation Using T5 and NLP," IEEE ICCCA, 2019.',
  'P. Kumar, N. Agarwal, and R. Nath, "Generation of Multiple-Choice Questions From Textbook Contents of School-Level Subjects," IEEE ICCCA, 2019.',
  'S. Kumar and M. Gupta, "Automatic Question Generation for Intelligent Tutoring Systems," IEEE ICCCA, 2019.',
  'A. R. Patel, P. K. Jha, and S. Roy, "MCQGen: A Large Language Model-Driven MCQ Generator for Personalized Learning," IEEE ICCCA, 2019.',
  'R. Sharma and K. Singh, "Generation of Multiple-Choice Questions From Indian Educational Text," IEEE ICET, 2023.',
  'N. J. Cepeda, H. Pashler, E. Vul, J. T. Wixted, and D. Rohrer, "Distributed practice in verbal recall tasks," Psychological Bulletin, 2006.',
  'H. L. Roediger and A. C. Butler, "The critical role of retrieval practice in long-term retention," Trends in Cognitive Sciences, 2011.',
  'P. Pavlik and J. R. Anderson, "Using a model to compute the optimal schedule of practice," Journal of Experimental Psychology: Applied, 2008.',
  'S. H. Kang, "Spaced repetition promotes efficient and effective learning," Policy Insights from the Behavioral and Brain Sciences, 2016.',
  'J. D. Karpicke and A. Bauernschmidt, "Spaced retrieval: Absolute spacing enhances learning regardless of relative spacing," Journal of Experimental Psychology, 2011.',
  'Y. Tomikawa, A. Suzuki, and M. Uto, "Adaptive Question-Answer Generation With Difficulty Control Using Item Response Theory and Pretrained Transformer Models," IEEE Transactions on Learning Technologies.',
];
