// Knowledge base built from uniduna.hu
const QA = [
  {
    keywords: ['neptun', 'register', 'course registration', 'sign up for course'],
    answer: 'NEPTUN is the university\'s official student administration system. You can access it at neptun.uniduna.hu. Use it to register for courses, view your timetable, check grades, and manage tuition payments. Your login credentials are provided by the Study Office when you enrol.',
    category: 'Academic',
  },
  {
    keywords: ['library', 'opening', 'hours', 'open', 'close', 'borrow', 'book'],
    answer: 'The university library is located on campus at Táncsics Mihály u. 1/A. It provides access to books, journals, and digital resources. Students can borrow materials with their student card. For current opening hours contact the library directly or check the university website at uniduna.hu.',
    category: 'Facilities',
  },
  {
    keywords: ['moodle', 'online', 'e-learning', 'learning platform', 'course material'],
    answer: 'The university uses MOODLE as its e-learning platform. Log in with your university credentials to access lecture materials, assignments, and online resources for all your enrolled courses. All students also receive Microsoft Office 365 access for free.',
    category: 'Academic',
  },
  {
    keywords: ['dormitory', 'dorm', 'accommodation', 'housing', 'hostel', 'room'],
    answer: 'Dormitory accommodation is guaranteed for international students at the University of Dunaújváros. The well-equipped dormitories are located on or near campus. Apply for housing through the international office at international@uniduna.hu as early as possible since places are limited.',
    category: 'Housing',
  },
  {
    keywords: ['tuition', 'fee', 'fees', 'cost', 'pay', 'payment', 'price'],
    answer: 'Tuition fees vary by programme. Bachelor programmes in Computer Science Engineering, Mechanical Engineering, and Business Administration are offered in English. For the exact fee schedule contact the admissions office at international@uniduna.hu or visit uniduna.hu. Fees can be paid via bank transfer or through the NEPTUN system.',
    category: 'Finance',
  },
  {
    keywords: ['programme', 'program', 'course', 'degree', 'bachelor', 'master', 'study'],
    answer: 'The university offers Bachelor (BSc/BA) programmes in: Computer Science Engineering, Business Administration & Management, Mechanical Engineering, Materials Engineering, Engineering Management, Communication & Media Science, and Pilot Training + Mechanical Engineering. Master (MSc/MA) programmes include Mechanical Engineering and Teacher of Engineering.',
    category: 'Academic',
  },
  {
    keywords: ['english', 'language', 'instruction', 'taught in'],
    answer: 'Several programmes are fully taught in English, including Computer Science Engineering, Mechanical Engineering, and Business Administration. The university hosts students from over 42 countries, making it an internationally friendly environment.',
    category: 'Academic',
  },
  {
    keywords: ['exam', 'exams', 'test', 'finals', 'examination', 'schedule', 'timetable'],
    answer: 'Exam schedules are published on the NEPTUN system. You must register for each exam through NEPTUN within the registration window. Check your NEPTUN account regularly for exam dates and any changes to your timetable.',
    category: 'Academic',
  },
  {
    keywords: ['sport', 'sports', 'gym', 'fitness', 'football', 'basketball', 'pool'],
    answer: 'The university has sports facilities available to all students. Various sports clubs and activities are organised through the Student Union. Check with the Student Union or campus reception for the current schedule of available sports and facilities.',
    category: 'Facilities',
  },
  {
    keywords: ['student card', 'id card', 'student id'],
    answer: 'Your student card is issued by the Study Office after enrolment. It gives you access to the library, student discounts (transport, cultural events), and campus facilities. Keep it with you at all times on campus.',
    category: 'Admin',
  },
  {
    keywords: ['health', 'insurance', 'medical', 'doctor', 'healthcare'],
    answer: 'The university provides support for obtaining health insurance. International students should contact the international office (international@uniduna.hu) for guidance on health insurance options, including scholarship-covered and self-financed plans. Medical care services are available on or near campus.',
    category: 'Admin',
  },
  {
    keywords: ['bank', 'bank account', 'hungarian bank', 'money', 'transfer'],
    answer: 'The university\'s international office assists students with setting up a Hungarian bank account, which is recommended for paying tuition and managing living expenses. Contact international@uniduna.hu for guidance on the process.',
    category: 'Finance',
  },
  {
    keywords: ['visa', 'residence', 'permit', 'document', 'immigration'],
    answer: 'The university supports international students with residence permit applications and other immigration documents. Contact the international office as soon as you receive your acceptance letter: international@uniduna.hu.',
    category: 'Admin',
  },
  {
    keywords: ['erasmus', 'exchange', 'international', 'partner', 'abroad'],
    answer: 'The University of Dunaújváros is part of 41 Erasmus partnerships and maintains agreements with 24 universities worldwide. For Erasmus exchange opportunities, contact the international office at international@uniduna.hu.',
    category: 'International',
  },
  {
    keywords: ['campus', 'address', 'location', 'where', 'find', 'map'],
    answer: 'The university is located at Táncsics Mihály u. 1/A, H-2400 Dunaújváros, Hungary. Dunaújváros is a peaceful town with easy access to Budapest by train or bus. A campus map is available on the university website at uniduna.hu.',
    category: 'Facilities',
  },
  {
    keywords: ['contact', 'email', 'office', 'reach', 'international office'],
    answer: 'International Office: international@uniduna.hu | Address: Táncsics Mihály u. 1/A, H-2400 Dunaújváros, Hungary. The Study Office handles NEPTUN, grades, and course administration. The Student Union can help with campus life and activities.',
    category: 'Admin',
  },
  {
    keywords: ['wifi', 'internet', 'network', 'eduroam'],
    answer: 'Wi-Fi is available throughout the campus via the Eduroam network. Log in using your university email credentials. Microsoft Office 365 is provided free of charge to all enrolled students.',
    category: 'Facilities',
  },
  {
    keywords: ['mentor', 'tutor', 'help', 'support', 'advisor'],
    answer: 'Every student is assigned a mentor teacher who provides academic and personal guidance throughout their studies. You can also access career services and the Student Union for additional support.',
    category: 'Academic',
  },
];

const FALLBACK = 'I\'m sorry, I don\'t have specific information about that yet. For the most accurate answer, please contact the university directly at international@uniduna.hu or visit uniduna.hu.';

export const askQuestion = async (question) => {
  const q = question.toLowerCase();
  const match = QA.find(item => item.keywords.some(k => q.includes(k)));
  return new Promise(resolve =>
    setTimeout(() => resolve({ answer: match ? match.answer : FALLBACK, category: match?.category ?? 'General' }), 600)
  );
};

export const getTrendingQuestions = async () => {
  return [
    { question: 'How do I access the NEPTUN system?', count: 312 },
    { question: 'What programmes are taught in English?', count: 278 },
    { question: 'How do I apply for dormitory accommodation?', count: 241 },
    { question: 'What are the tuition fees?', count: 198 },
    { question: 'How do I register for exams on NEPTUN?', count: 175 },
    { question: 'Where is the library and when is it open?', count: 154 },
    { question: 'How do I get my student card?', count: 132 },
    { question: 'What is the MOODLE platform?', count: 119 },
  ];
};

export const getCategoryStats = async () => {
  return [
    { category: 'Academic', count: 487 },
    { category: 'Facilities', count: 243 },
    { category: 'Finance', count: 198 },
    { category: 'Housing', count: 165 },
    { category: 'Admin', count: 142 },
    { category: 'International', count: 98 },
  ];
};
