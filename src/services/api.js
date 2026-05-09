// Comprehensive knowledge base built from publicly available Dunaújváros University information
const QA = [

  // ── NEPTUN / Academic Systems ────────────────────────────────────────────
  {
    keywords: ['neptun', 'register', 'course registration', 'sign up for course', 'enrol', 'enroll'],
    answer: 'NEPTUN is the university\'s official student administration system, accessible at neptun.uniduna.hu. Use it to register for courses, view your timetable, check grades, pay tuition, and request official documents. Your login credentials (Neptun code + password) are issued by the Study Office (Tanulmányi Iroda) when you first enrol. Your Neptun code is also printed on your student card.',
    category: 'Academic',
  },
  {
    keywords: ['moodle', 'online', 'e-learning', 'learning platform', 'course material', 'upload', 'assignment'],
    answer: 'The university uses MOODLE as its e-learning platform. Log in at moodle.uniduna.hu with your university credentials to access lecture slides, assignments, reading lists, and online resources for all your enrolled courses. Lecturers often upload weekly materials here. All students also receive Microsoft Office 365 access free of charge — useful for Teams, OneDrive, and the full Office suite.',
    category: 'Academic',
  },
  {
    keywords: ['grade', 'grading', 'marks', 'scale', 'gpa', 'result', 'transcript'],
    answer: 'Hungary uses a 1–5 grading scale: 5 = Excellent (Jeles), 4 = Good (Jó), 3 = Average (Közepes), 2 = Pass (Elégséges), 1 = Fail (Elégtelen). Note this is the reverse of some countries — 1 is the lowest. Your grade point average (GPA) is called "tanulmányi átlag." Official transcripts can be requested through the Study Office or via NEPTUN.',
    category: 'Academic',
  },
  {
    keywords: ['exam', 'exams', 'test', 'finals', 'examination', 'schedule', 'timetable', 'exam period'],
    answer: 'Exam schedules are published in NEPTUN. You must register for each exam individually through NEPTUN within the registration window — failure to register means you cannot sit the exam. The exam period (vizsgaidőszak) runs for approximately 6–7 weeks at the end of each semester. You usually have 3 attempts per subject: a first attempt, one resit, and one final resit during the supplementary period.',
    category: 'Academic',
  },
  {
    keywords: ['ects', 'credit', 'credits', 'credit system', 'course load', 'semester hours'],
    answer: 'DUE uses the European Credit Transfer and Accumulation System (ECTS). A standard full-time semester load is 30 ECTS credits (approximately 60 ECTS per academic year). A Bachelor\'s degree typically requires 180–210 ECTS credits (3–3.5 years). A Master\'s degree requires 120 ECTS credits (2 years). One ECTS credit corresponds to approximately 25–30 hours of total study workload.',
    category: 'Academic',
  },
  {
    keywords: ['thesis', 'dissertation', 'final project', 'graduation project', 'szakdolgozat'],
    answer: 'All Bachelor\'s and Master\'s students must complete a thesis (szakdolgozat) as part of their degree. You choose a topic with a supervisor (consultant), write the thesis according to department guidelines, and defend it before a committee. The thesis topic must be registered in NEPTUN. For BSc students the thesis is usually a practical engineering or business project; for MSc it involves original research. Ask your department secretary for the exact submission deadlines each year.',
    category: 'Academic',
  },
  {
    keywords: ['academic calendar', 'semester', 'semester dates', 'when does', 'start', 'term', 'study period'],
    answer: 'The academic year is divided into two semesters: Autumn Semester (őszi félév) runs from early September to late January, and Spring Semester (tavaszi félév) runs from mid-February to mid-June. Each semester includes a teaching period (~14 weeks), an exam registration period, and an exam period (~6 weeks). Exact dates are published on the university website each year. Orientation for new international students typically takes place in the last week of August.',
    category: 'Academic',
  },
  {
    keywords: ['internship', 'placement', 'work experience', 'industrial training', 'practical'],
    answer: 'Many programs at DUE include a mandatory industrial internship (szakmai gyakorlat). Engineering programs typically require 4–6 weeks of practical training at a company, which can be arranged by the student or through the university\'s industry partners. Internship placements with leading Hungarian and multinational companies are possible — ask your department\'s practicum coordinator for a list of approved partner companies.',
    category: 'Academic',
  },
  {
    keywords: ['programme', 'program', 'course', 'degree', 'bachelor', 'master', 'study', 'what can i study'],
    answer: 'DUE offers the following programs:\n\nBSc/BA Programs: Computer Science Engineering, Business Administration & Management, Mechanical Engineering, Materials Engineering, Engineering Management, Communication & Media Science, Pilot Training + Mechanical Engineering.\n\nMSc/MA Programs: Mechanical Engineering (MSc), Management and Leadership (MSc), Teacher of Engineering (MA).\n\nEnglish-language BSc programs: Computer Science Engineering, Mechanical Engineering, Business Administration.\n\nFor full program descriptions and admission requirements visit uniduna.hu.',
    category: 'Academic',
  },

  // ── Library ──────────────────────────────────────────────────────────────
  {
    keywords: ['library', 'opening', 'hours', 'open', 'close', 'borrow', 'book', 'könyvtár'],
    answer: 'The university library (Könyvtár) is located on campus at Táncsics Mihály u. 1/A. It provides access to books, printed and electronic journals, databases, and research tools. Students can borrow materials with their student card. The library also offers quiet study rooms, computer terminals, and printing services. For current opening hours and to access the online catalogue, visit the university website at uniduna.hu or contact the library directly. Database access (JSTOR, Springer, Elsevier) is available for all enrolled students through the library portal.',
    category: 'Facilities',
  },

  // ── Dormitory / Housing ───────────────────────────────────────────────────
  {
    keywords: ['dormitory', 'dorm', 'accommodation', 'housing', 'hostel', 'room', 'kollegium', 'kollégium'],
    answer: 'Dormitory accommodation is guaranteed for incoming international students at DUE. The on-campus dormitories (kollégium) are well-equipped with furnished rooms, shared kitchen and bathroom facilities, Wi-Fi, laundry rooms, and common areas. Rooms are available in single, double, and triple configurations. Apply for housing as early as possible through the International Office at international@uniduna.hu — the deadline is typically in June/July for the autumn semester. Monthly dormitory fees for international students depend on room type; the International Office provides the current rate sheet.',
    category: 'Housing',
  },

  // ── Fees & Finance ───────────────────────────────────────────────────────
  {
    keywords: ['tuition', 'fee', 'fees', 'cost', 'pay', 'payment', 'price', 'how much'],
    answer: 'Tuition fees vary by programme and nationality. English-language BSc programs typically range from approximately €2,000–€3,500 per semester for self-financed international students. Hungarian-language programs may differ. Fees can be paid via bank transfer or through the NEPTUN system. Students on the Stipendium Hungaricum scholarship pay no tuition and also receive free dormitory accommodation plus a monthly stipend. For the exact fee schedule contact the admissions office at international@uniduna.hu or visit uniduna.hu.',
    category: 'Finance',
  },
  {
    keywords: ['scholarship', 'stipendium', 'hungaricum', 'grant', 'bursary', 'funding', 'financial aid'],
    answer: 'The most significant scholarship available for international students is the Stipendium Hungaricum Scholarship Programme, offered by the Hungarian Government. It covers: full tuition waiver, free dormitory accommodation, monthly stipend (approx. HUF 43,700 for BSc students), and supplementary health insurance. Applications are made through your home country\'s sending partner (usually the Ministry of Education or a designated agency) before the deadline in January/February each year. DUE is an active Stipendium Hungaricum partner institution. Visit stipendiumhungaricum.hu for details.',
    category: 'Finance',
  },
  {
    keywords: ['bank', 'bank account', 'hungarian bank', 'money', 'transfer', 'currency', 'forint'],
    answer: 'The Hungarian currency is the Forint (HUF). The university\'s International Office assists students with setting up a Hungarian bank account, which is strongly recommended for receiving scholarship stipends and paying tuition. OTP Bank, UniCredit, and Raiffeisen have branches in Dunaújváros. You will typically need your passport, residence permit, student card, and address in Hungary to open an account. Contact international@uniduna.hu for step-by-step guidance.',
    category: 'Finance',
  },

  // ── Language ──────────────────────────────────────────────────────────────
  {
    keywords: ['english', 'language', 'instruction', 'taught in', 'language of instruction'],
    answer: 'Several programs are fully taught in English: Computer Science Engineering (BSc), Mechanical Engineering (BSc), and Business Administration (BSc). All lectures, seminars, exams, and thesis work in these programs are conducted in English. The university campus is internationally friendly — staff in the International Office and student services speak English. Hungarian language is not required for English-track students, although free or low-cost Hungarian language courses are available to help you settle in.',
    category: 'Academic',
  },
  {
    keywords: ['hungarian', 'language course', 'learn hungarian', 'magyar', 'language class'],
    answer: 'DUE offers Hungarian language courses specifically designed for international students. These courses are available at beginner and elementary levels and help you navigate daily life in the city. Even basic Hungarian phrases go a long way in shops, transport, and when meeting local students. Enquire at the International Office about current course schedules and whether they are included in your scholarship or require a fee.',
    category: 'Academic',
  },

  // ── Documents & Admin ─────────────────────────────────────────────────────
  {
    keywords: ['student card', 'id card', 'student id', 'diákigazolvány'],
    answer: 'Your student card (diákigazolvány) is issued by the Study Office after you complete enrolment. It grants access to the library, student discounts on public transport, cultural venues, cinemas, and museums across Hungary. Keep it with you at all times on campus. If lost, report it to the Study Office immediately to get a replacement. The card is also linked to your NEPTUN account.',
    category: 'Admin',
  },
  {
    keywords: ['visa', 'residence', 'permit', 'document', 'immigration', 'vízum', 'tartózkodási engedély'],
    answer: 'Non-EU international students must apply for a student residence permit (tartózkodási engedély) within 30 days of arrival in Hungary. The university\'s International Office supports you through the entire process — they provide a letter of enrollment and guide you on the required documents, which typically include: valid passport, acceptance letter, proof of accommodation, proof of financial means, and health insurance. Contact international@uniduna.hu as soon as you receive your acceptance letter to start the process early.',
    category: 'Admin',
  },
  {
    keywords: ['health', 'insurance', 'medical', 'doctor', 'healthcare', 'hospital', 'sick', 'ill'],
    answer: 'Stipendium Hungaricum students receive supplementary health insurance through the Hungarian government. Self-financed EU students are covered by the European Health Insurance Card (EHIC). Non-EU self-financed students must purchase private health insurance — the International Office can recommend providers. The nearest hospital is Dunaújvárosi Dunaferr Kórház. There is also a campus health point for basic medical needs. In an emergency dial 112.',
    category: 'Admin',
  },
  {
    keywords: ['certificate', 'enrollment certificate', 'official document', 'letter', 'igazolás'],
    answer: 'Official enrollment certificates, grade transcripts, and other academic documents can be requested through the NEPTUN system or directly at the Study Office. Processing typically takes 3–5 working days. Some documents require an official stamp and signature from the Office of Educational Affairs. For apostille-certified documents (required for some countries), additional steps apply — consult the Study Office.',
    category: 'Admin',
  },

  // ── Campus Life & Facilities ──────────────────────────────────────────────
  {
    keywords: ['wifi', 'internet', 'network', 'eduroam', 'wi-fi'],
    answer: 'Wi-Fi is available throughout the campus and dormitories via the Eduroam network — the same network used at universities across Europe. Log in using your university email and password. If you experience connection issues contact the IT Help Desk. Microsoft Office 365 (including 1TB OneDrive cloud storage, Teams, Word, Excel, PowerPoint) is provided free of charge to all enrolled students.',
    category: 'Facilities',
  },
  {
    keywords: ['sport', 'sports', 'gym', 'fitness', 'football', 'basketball', 'pool', 'swimming', 'PE'],
    answer: 'DUE has a variety of sports facilities available to all students, including a multi-purpose sports hall, fitness room, football pitch, and tennis courts. There is a swimming pool accessible at preferential student rates nearby. Sports clubs and teams are organised through the Student Union (HÖK) — including football, basketball, volleyball, table tennis, chess, and e-sports. Physical Education (testnevelés) classes are a standard part of the curriculum for most first-year programs.',
    category: 'Facilities',
  },
  {
    keywords: ['cafeteria', 'canteen', 'food', 'eat', 'meal', 'lunch', 'restaurant', 'menza'],
    answer: 'The campus canteen (menza) provides subsidised hot meals Monday to Friday. A full lunch (soup + main course) is available at student prices. Vending machines with snacks and drinks are located around the buildings. There are also several restaurants, bakeries, and fast-food options within walking distance of the campus in the city centre. Stipendium Hungaricum students may receive a meal allowance — check with the International Office.',
    category: 'Facilities',
  },
  {
    keywords: ['print', 'printing', 'copy', 'scan', 'photocopy', 'printer'],
    answer: 'Printing, scanning, and photocopying services are available in the library and in dedicated copy rooms around campus. Students purchase a print quota loaded onto their student card or pay per page. Black-and-white printing is inexpensive; colour printing is available at a higher rate. The library staff can help with binding services for thesis submissions.',
    category: 'Facilities',
  },
  {
    keywords: ['parking', 'car', 'bicycle', 'bike', 'transport on campus'],
    answer: 'A student car parking area is available on campus — display your student card visibly. The campus is compact and walkable. Bicycle racks are available at all main building entrances. Within the city, cycling is a popular and practical way to get around. The main bus station is approximately 1.5 km from campus and connects to all parts of the city.',
    category: 'Facilities',
  },
  {
    keywords: ['lab', 'laboratory', 'computer lab', 'workshop', 'equipment', 'machines'],
    answer: 'DUE has a range of specialist laboratories available to students: Computer labs with modern workstations and licensed software (MATLAB, CAD software, development environments), Materials Science labs with testing equipment, Mechanical Engineering workshops with CNC machines and 3D printers, an Electronics lab, and a dedicated Pilot Training simulator facility. Lab access is typically arranged through your department at the start of each semester.',
    category: 'Facilities',
  },

  // ── International ─────────────────────────────────────────────────────────
  {
    keywords: ['erasmus', 'exchange', 'international', 'partner', 'abroad', 'study abroad'],
    answer: 'DUE participates in the Erasmus+ programme and has 41 bilateral agreements with partner universities across Europe. Students in their 3rd or 4th year of study can apply to spend one or two semesters abroad at a partner institution, fully recognised in their DUE degree. Grants cover travel and living costs. The application deadline is typically in November for the following autumn semester. Contact the International Office for the list of partner universities and application forms.',
    category: 'International',
  },
  {
    keywords: ['international office', 'international student', 'foreign student', 'support for international'],
    answer: 'The International Office (Nemzetközi Iroda) is the dedicated office for all international students. They assist with: pre-arrival guidance, visa and residence permit applications, airport pickup arrangements, orientation week, Hungarian bank account setup, health insurance, accommodation, and ongoing support throughout your studies. Email: international@uniduna.hu. Office location: main campus building, ground floor. Walk-in hours are posted on the university website.',
    category: 'International',
  },
  {
    keywords: ['orientation', 'welcome', 'induction', 'first week', 'arrival', 'when to arrive'],
    answer: 'An Orientation Week (orientációs hét) is organised for all new international students, typically in the last week of August before the autumn semester starts. It covers: campus tour, introduction to NEPTUN and MOODLE, Hungarian language survival guide, city tour of Dunaújváros and a day trip to Budapest, social events, and practical help with registration documents. Attendance is strongly recommended. Details are sent by the International Office before you arrive.',
    category: 'International',
  },

  // ── Student Life & Support ────────────────────────────────────────────────
  {
    keywords: ['mentor', 'tutor', 'help', 'support', 'advisor', 'personal tutor'],
    answer: 'Every student is assigned a mentor teacher (konzulens) who provides academic guidance and pastoral support throughout their studies. For international students, the International Office also assigns a student buddy — a senior student who helps you settle in during your first weeks. The Student Union (Hallgatói Önkormányzat, HÖK) also provides peer support, organises social events, and advocates for student interests.',
    category: 'Academic',
  },
  {
    keywords: ['student union', 'hök', 'hallgatói önkormányzat', 'student government', 'clubs', 'societies'],
    answer: 'The Student Union (Hallgatói Önkormányzat, HÖK) is the official student self-governance body at DUE. It organises events, sports competitions, cultural programs, and excursions. HÖK also runs student clubs (IT club, engineering club, business club, international student club, media club), manages student welfare, and has representatives on university decision-making committees. New students are encouraged to join — it\'s a great way to meet people and get involved.',
    category: 'Admin',
  },
  {
    keywords: ['counseling', 'mental health', 'psychology', 'stress', 'wellbeing', 'psychological'],
    answer: 'DUE offers psychological counselling services for students experiencing stress, academic difficulties, personal challenges, or mental health concerns. The student counsellor (pszichológus) can be accessed through the Student Welfare Office. Appointments are confidential. If you are in crisis, contact the emergency line 112 or go to Dunaújváros Hospital (Dunaferr Kórház) emergency department.',
    category: 'Admin',
  },
  {
    keywords: ['career', 'job', 'employment', 'graduate', 'career centre', 'job fair', 'recruitment'],
    answer: 'The Career Centre (Karrieriroda) at DUE helps students prepare for the job market: CV and cover letter workshops, mock interviews, career fairs with Hungarian and multinational employers, and connections to internship opportunities. Major engineering and technology companies recruit directly from DUE campuses. The annual Career Fair (typically held in spring) is attended by 30+ companies. Alumni of DUE have gone on to careers at Bosch, Samsung SDI, Dunaferr, and many IT companies.',
    category: 'Admin',
  },

  // ── Transport & City ──────────────────────────────────────────────────────
  {
    keywords: ['budapest', 'transport', 'bus', 'train', 'get to', 'travel to', 'how far', 'how to get'],
    answer: 'Budapest is approximately 70–80 km from Dunaújváros. Direct buses run between Dunaújváros bus station (autóbusz-állomás) and Népliget bus terminal in Budapest every 1–2 hours, with the journey taking about 1.5 hours. Trains connect Dunaújváros to Pusztaszabolcs junction, from where you can reach Budapest Keleti station (total journey ~1.5–2 hours). Student discount cards (diákigazolvány) give a 50% reduction on public transport fares across Hungary. Taxis and ride-sharing (Bolt) are also available.',
    category: 'Facilities',
  },
  {
    keywords: ['city', 'dunaujvaros', 'dunaújváros', 'town', 'live', 'living', 'shops', 'supermarket'],
    answer: 'Dunaújváros is a modern, compact city of about 45,000 people situated on the west bank of the Danube, 70 km south of Budapest. It offers everything students need: supermarkets (Aldi, Lidl, Spar, Tesco), shopping centres, pharmacies, banks, restaurants, bars, a cinema (Vörösmarty Cinema), a cultural centre, and a beautiful riverside promenade. The city is safe, affordable, and easy to navigate on foot or by bicycle. Rents outside the dormitory are generally low compared to Budapest.',
    category: 'Facilities',
  },
  {
    keywords: ['airport', 'fly', 'flight', 'arrive', 'get from airport'],
    answer: 'The nearest major airport is Budapest Liszt Ferenc International Airport (BUD), approximately 100 km from Dunaújváros. From the airport, take the 100E bus to Kőbánya-Kispest metro station, then metro M3 to Közvágóhíd, and from there a direct bus towards Dunaújváros (or taxi/shuttle). Total journey from airport to Dunaújváros is approximately 2–2.5 hours by public transport. The International Office can arrange airport pickup for new students — contact them before you arrive.',
    category: 'Facilities',
  },

  // ── Contact & Admin ───────────────────────────────────────────────────────
  {
    keywords: ['contact', 'email', 'office', 'reach', 'international office', 'address', 'phone'],
    answer: 'University of Dunaújváros\nAddress: Táncsics Mihály u. 1/A, H-2400 Dunaújváros, Hungary\nWebsite: uniduna.hu\nInternational Office: international@uniduna.hu\nStudy Office (Tanulmányi Iroda): For NEPTUN and course administration queries, visit in person on campus.\nStudent Union (HÖK): hok@uniduna.hu\nEmergency (Hungary): 112',
    category: 'Admin',
  },
  {
    keywords: ['campus', 'address', 'location', 'where', 'find', 'map', 'how to find'],
    answer: 'The main campus of the University of Dunaújváros is located at Táncsics Mihály u. 1/A, H-2400 Dunaújváros, Hungary. The campus is compact — all main buildings, the library, dormitories, and sports facilities are within easy walking distance of each other. A campus map is available on the university website at uniduna.hu. From the bus station, the campus is about a 15-minute walk or a short taxi/bus ride.',
    category: 'Facilities',
  },
  {
    keywords: ['emergency', '112', 'police', 'fire', 'ambulance', 'help', 'urgent'],
    answer: 'Emergency number in Hungary: 112 (Police, Fire, Ambulance — 24/7, English-speaking operators available).\nPolice (Rendőrség): 107\nAmbulance (Mentők): 104\nFire brigade (Tűzoltóság): 105\nNearest hospital: Dunaújvárosi Dunaferr Kórház (Bajcsy-Zsilinszky u. 18-20)\nNon-emergency university security: contact the main campus reception.',
    category: 'Admin',
  },
  {
    keywords: ['research', 'research centre', 'research lab', 'innovation', 'publication'],
    answer: 'DUE has several active research areas closely tied to its industrial heritage and modern engineering programs: Materials Science & Metallurgy (with links to the Dunaferr steel industry), Mechanical Engineering & Manufacturing, Computer Science & Artificial Intelligence, Business & Economics research, and Environmental Engineering. Students can participate in research projects from their 2nd year onwards — ask your department coordinator about Student Research (TDK) opportunities. The university publishes a research journal and students can present at the national TDK Conference.',
    category: 'Academic',
  },
];

const FALLBACK = 'I\'m sorry, I don\'t have specific information about that yet. For the most accurate answer, please contact the university directly:\n📧 international@uniduna.hu\n🌐 uniduna.hu\n📍 Táncsics Mihály u. 1/A, H-2400 Dunaújváros, Hungary';

export const askQuestion = async (question) => {
  const q = question.toLowerCase();
  const match = QA.find(item => item.keywords.some(k => q.includes(k)));
  return new Promise(resolve =>
    setTimeout(() => resolve({ answer: match ? match.answer : FALLBACK, category: match?.category ?? 'General' }), 650)
  );
};

export const getTrendingQuestions = async () => {
  return [
    {
      question: 'How do I access the NEPTUN system?',
      count: 312,
      answer: 'NEPTUN is the university\'s official student administration system at neptun.uniduna.hu. Use it to register for courses, view your timetable, check grades, pay tuition, and request official documents. Your login credentials (Neptun code + password) are issued by the Study Office when you first enrol. Your Neptun code is also printed on your student card.',
    },
    {
      question: 'What programmes are taught in English?',
      count: 278,
      answer: 'Three BSc programmes are fully taught in English: Computer Science Engineering, Mechanical Engineering, and Business Administration. All lectures, seminars, exams, and thesis work are conducted in English. Hungarian language is not required for English-track students, although free Hungarian language courses are available to help you settle in.',
    },
    {
      question: 'How do I apply for dormitory accommodation?',
      count: 241,
      answer: 'Dormitory accommodation is guaranteed for incoming international students. Apply through the International Office at international@uniduna.hu — the deadline is typically June/July for the autumn semester. Rooms are furnished with Wi-Fi, shared kitchen and bathroom facilities, laundry rooms, and common areas available in single, double, and triple configurations.',
    },
    {
      question: 'What are the tuition fees?',
      count: 198,
      answer: 'English-language BSc programmes typically range from €2,000–€3,500 per semester for self-financed international students. Students on the Stipendium Hungaricum scholarship pay no tuition and also receive free dormitory accommodation plus a monthly stipend. For the exact fee schedule contact the admissions office at international@uniduna.hu.',
    },
    {
      question: 'How do I register for exams on NEPTUN?',
      count: 175,
      answer: 'Exam schedules are published in NEPTUN and you must register for each exam individually within the registration window — failure to register means you cannot sit the exam. You usually have 3 attempts per subject: a first attempt, one resit, and one final resit during the supplementary period at the end of the exam season.',
    },
    {
      question: 'What is the Stipendium Hungaricum scholarship?',
      count: 168,
      answer: 'The Stipendium Hungaricum is a Hungarian Government scholarship covering: full tuition waiver, free dormitory accommodation, monthly stipend (approx. HUF 43,700 for BSc students), and supplementary health insurance. Applications are made through your home country\'s sending partner before the January/February deadline each year. Visit stipendiumhungaricum.hu for full details.',
    },
    {
      question: 'Where is the library and when is it open?',
      count: 154,
      answer: 'The university library (Könyvtár) is located on campus at Táncsics Mihály u. 1/A. It provides books, printed and electronic journals, and database access (JSTOR, Springer, Elsevier), plus quiet study rooms, computer terminals, and printing services. Students can borrow materials with their student card. Check current opening hours at uniduna.hu.',
    },
    {
      question: 'How do I get from Budapest airport to Dunaújváros?',
      count: 143,
      answer: 'From Budapest Liszt Ferenc Airport (BUD): take the 100E bus to Kőbánya-Kispest metro station, then metro M3 to Közvágóhíd, then a direct bus to Dunaújváros. Total journey is approximately 2–2.5 hours by public transport. The International Office can also arrange airport pickup for new students — contact international@uniduna.hu before you arrive.',
    },
    {
      question: 'How do I get my student card?',
      count: 132,
      answer: 'Your student card (diákigazolvány) is issued by the Study Office after you complete enrolment. It grants library access, a 50% discount on public transport across Hungary, and discounts at cultural venues, cinemas, and museums. Keep it with you on campus at all times. If lost, report it to the Study Office immediately for a replacement.',
    },
    {
      question: 'What is the Hungarian grading system?',
      count: 121,
      answer: 'Hungary uses a 1–5 grading scale: 5 = Excellent (Jeles), 4 = Good (Jó), 3 = Average (Közepes), 2 = Pass (Elégséges), 1 = Fail (Elégtelen). Note this is the reverse of some countries — 1 is the lowest. Your GPA is called "tanulmányi átlag." Official transcripts can be requested via NEPTUN or at the Study Office.',
    },
    {
      question: 'What is the MOODLE platform?',
      count: 119,
      answer: 'MOODLE is the university\'s e-learning platform at moodle.uniduna.hu. Log in with your university credentials to access lecture slides, assignments, reading lists, and online resources for all your enrolled courses. All students also receive Microsoft Office 365 (Teams, OneDrive, Word, Excel, PowerPoint) free of charge.',
    },
    {
      question: 'How do I apply for a residence permit?',
      count: 108,
      answer: 'Non-EU international students must apply for a student residence permit (tartózkodási engedély) within 30 days of arrival in Hungary. The International Office guides you through the entire process. Required documents typically include: valid passport, acceptance letter, proof of accommodation, proof of financial means, and health insurance. Contact international@uniduna.hu as soon as you receive your acceptance letter.',
    },
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
