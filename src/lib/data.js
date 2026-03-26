export const personal = {
  name: 'Rupesh Kumar',
  title: 'Aspiring Cloud Engineer',
  tagline: 'Turning ideas into scalable web and cloud-based solutions.',
  email: 'rupeshltr009@gmail.com',
  location: 'Phagwara Punjab, India',
  github: 'https://github.com/SJRVedRupesh',
  linkedin: 'https://www.linkedin.com/in/sjvedupesh',
  twitter: 'https://x.com/RupeshK89759372',
  resumeUrl: 'RupeshKumarCV.pdf',
  bio1: "I'm a Third Year Student persuing  Computer Science  at Lovely Professional University with a deep passion to be a cloud engineer. I am passionate about building scalable and efficient solutions using modern cloud technologies.",
  bio2: "I'm exploring cloud technologies like AWS and Azure, experimenting with new tools, and learning how to design scalable, real-world solutions.",
  objective: 'To obtain a position as a Cloud Engineer with a focus on Cloud Engineering, where I can leverage my knowledge of AWS and Microsoft Azure to build scalable, efficient solutions while continuously learning and contributing to innovative projects.',
  typingWords: ['Problem Solver', 'Aspiring Cloud Engineer', 'AWS & Azure Learner'],
}

export const skillCategories = [
  {
    label: 'Cloud & DevOps',
    icon: '☁️',
    skills: [
      { name: 'AWS (EC2, S3, Lambda)' },
      { name: 'Docker' },
      { name: 'GitHub Actions' },
      { name: 'Vercel / Netlify' },
      { name: 'Azure(RG,Vm,SA)' },
    ],
  },
  {
    label: 'Tools & Others',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'Linux / Bash' },
      { name: 'Maven' },
      { name: 'REST ' },
      { name: 'Docker & Docker Hub' },
    ],
  },
]

export const projects = [
  {
    title: '1st-Aid Fire India',
    description: 'A Fire-Safety Solutions Provider dedicated to protecting lives, property, and the environment with modern and reliable safety technologies.',
    emoji: '💻',
    gradient: 'from-teal-500 to-cyan-500',
    tags: ['Node.js', 'HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://www.1staidfireindia.com/',
    githubUrl: 'https://github.com/SJRVedRupesh/1st-Aid',
    featured: true,
  },
  {
    title: 'Glam-Guru',
    description: 'Glam-Guru is a personalized makeup assistant web app that helps users discover suitable products, learn techniques through tutorials, and get customized beauty advice.',
    emoji: '🛍️',
    gradient: 'from-orange-500 to-pink-500',
    tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'Redis', 'Stripe'],
    liveUrl: 'https://glamour-jet.vercel.app/',
    githubUrl: 'https://github.com/SJRVedRupesh/Glamour',
    featured: true,
  },
  {
    title: 'Fairy Kids',
    description: 'Fairy Kids is an interactive storytelling chatbot designed for children that generates engaging stories, answers questions, and enhances learning through AI-powered conversations.',
    emoji: '📋',
    gradient: 'from-violet-500 to-teal-500',
    tags: ['React', 'Express', 'MongoDB', 'JWT', 'DnD Kit'],
    liveUrl: 'https://github.com/SJRVedRupesh/FairyKids',
    githubUrl: 'https://github.com/SJRVedRupesh/FairyKids',
    featured: false,
  },
  
]

export const timeline = [
  // {
  //   type: 'work',
  //   title: 'Software Engineering Intern',
  //   org: 'TechNova Solutions',
  //   location: 'Bangalore, India (Remote)',
  //   period: 'May 2024 – Aug 2024',
  //   desc: 'Developed RESTful microservices using Node.js and Express for a fintech SaaS platform. Optimized PostgreSQL queries reducing API response time by 40%. Integrated AWS S3 for file storage and Lambda for serverless workflows.',
  //   tags: ['Node.js', 'PostgreSQL', 'AWS', 'Docker'],
  //   icon: '💼',
  // },
  // {
  //   type: 'work',
  //   title: 'Frontend Developer Intern',
  //   org: 'Startup Nexus',
  //   location: 'Chandigarh, India',
  //   period: 'Dec 2023 – Feb 2024',
  //   desc: 'Built and maintained React components for a B2B SaaS dashboard. Implemented responsive designs from Figma mockups and improved Lighthouse performance scores from 62 to 94.',
  //   tags: ['React', 'Tailwind CSS', 'Figma', 'Vite'],
  //   icon: '🖥️',
  // },
  {
    type: 'education',
    title: 'B.Tech — Computer Science & Engineering',
    org: 'Lovely Professional University',
    location: 'Phagwara Punjab, India',
    period: '2023 – Present',
    desc: 'CGPA: 6.92/10. Core coursework: Data Structures & Algorithms, Operating Systems, Computer Networks, Cloud $ Devops.',
    tags: ['CGPA 6.92', 'Third Year'],
    icon: '🎓',
  },
  {
    type: 'education',
    title: 'Class X — CBSE',
    org: 'BP DAV Public School',
    location: 'Garhwa Jharkhand, India',
    period: '2019 – 2020',
    desc: 'Completed secondary education under CBSE curriculum with strong academic performance',
    tags: ['89%', 'Science, Mathematics, English, Social Studies,Hindi, Sanskrit'],
    icon: '🏫',
  },
  {
    type: 'education',
    title: 'Class XII — CBSE',
    org: 'Kemdriya Vidyalaya',
    location: 'Latehar Jharkhand, India',
    period: '2021 – 2022',
    desc: 'Scored 74% in PCM + Computer Science. Good in Computer Science subject.',
    tags: ['74%', 'PCM + CS'],
    icon: '🏫',
  },
]

export const achievements = [
  {
    title: 'Data Structures & Algorithms ',
    issuer: 'CypherSchools',
    date: 'July 2025',
    emoji: '📜',
    gradient: 'from-orange-400 to-yellow-400',
    link: '/certificates/dsa.pdf'
  },
  {
    title: 'Privacy And Security In Online Social Media ',
    issuer: 'NPTEL',
    date: 'Jan 2025',
    emoji: '📜',
    gradient: 'from-blue-400 to-cyan-400',
    link: '/certificates/media.pdf'
  },
  {
    title: 'ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM ',
    issuer: 'Infosys Springboard',
    date: 'September 2025',
    emoji: '📜',
    gradient: 'from-teal-400 to-emerald-400',
    link: '/certificates/gpt.pdf'
  },
  {
    title: 'Build Generative AI Apps & Solution With No-Code Tools ',
    issuer: 'Infosys Springboard',
    date: 'September 2025',
    emoji: '📜',
    gradient: 'from-green-400 to-teal-400',
    link: '/certificates/genai.pdf'
  },
  {
    title: 'Object- Oriented Programming',
    issuer: 'NeoColab',
    date: 'December 2024',
    emoji: '📜',
    gradient: 'from-yellow-400 to-orange-400',
    link: '/certificates/oops.pdf'
  },
  {
    title: 'Java Programming ',
    issuer: 'NeoColab',
    date: 'May 2025',
    emoji: '📜',
    gradient: 'from-slate-400 to-teal-400',
        link: '/certificates/java.pdf'
  },
]

export const navLinks = [
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact',      href: '#contact' },
]
