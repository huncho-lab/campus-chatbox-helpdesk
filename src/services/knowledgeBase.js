// ─── University of Dunaújváros — RAG Knowledge Base ──────────────────────────
// Source: university_knowledge.txt (crawled March 2026), neptun_guide.docx,
//         university_contacts.txt
// Each entry: id, category, keywords[], text

export const knowledgeBase = [

  // ══ CONTACTS ══════════════════════════════════════════════════════════════

  {
    id: "contact-001",
    category: "contacts",
    keywords: ["contact", "email", "phone", "office", "international", "iro", "reach", "address"],
    text: "International Relations Office (IRO): Email international@uniduna.hu for all international student enquiries including admissions, Erasmus, visa support, and residence permits. Located at Tancsics Mihaly utca 1/A, H-2400 Dunaujvaros. Staff: Katalin Gyongyossy (+36 25 551-246), Daniel Arpad Kiss (+36 25 551-162), Edina Szilardi (+36 25 551-165), Jozsef Vago (+36 25 551-288), Szabolcs Tiger (+36 25 551-211).",
  },
  {
    id: "contact-002",
    category: "contacts",
    keywords: ["study office", "sio", "course", "registration", "transcript", "student card", "grade admin", "tanulmányi"],
    text: "Student Information Office (Study Office / Tanulmanyi Iroda): Handles course registration, NEPTUN administration, student cards, credit and grade administration, transcripts and enrolment certificates. Located in Building A, 1st Floor, Room 103. Opening hours: Monday-Thursday 9:00-13:00, Friday 9:00-11:00.",
  },
  {
    id: "contact-003",
    category: "contacts",
    keywords: ["finance office", "fees office", "payment office", "invoice", "refund"],
    text: "Finance and Fees Office: Handles tuition fee payments, invoices, scholarships, and refunds. Located in Building A, Ground Floor, Room 008. Opening hours: Monday-Friday 9:00-12:00.",
  },
  {
    id: "contact-004",
    category: "contacts",
    keywords: ["it", "helpdesk", "wifi", "email", "vpn", "office 365", "microsoft", "software", "computer", "internet", "it support"],
    text: "IT Helpdesk: Supports university email, WiFi, VPN, Office 365, software and hardware. Email: it@uniduna.hu. Located in Building C, 2nd Floor, Room 201. Opening hours: Monday-Friday 8:00-16:00. Microsoft Office 365 is free for all students — contact IT Helpdesk to activate your university Microsoft account.",
  },
  {
    id: "contact-005",
    category: "contacts",
    keywords: ["library", "opening hours", "library hours", "when open", "close", "library open"],
    text: "Library: Located in Building B, 1st Floor. Opening hours: Monday-Friday 8:00-18:00, Saturday 9:00-13:00.",
  },

  // ══ NEPTUN SYSTEM ═════════════════════════════════════════════════════════

  {
    id: "neptun-001",
    category: "neptun",
    keywords: ["neptun", "login", "password", "neptun code", "log in", "access", "student system", "portal", "first login"],
    text: "NEPTUN is the official university management system at UOD. Login at neptun.uniduna.hu using your Neptun code (a 6-character code like ABC123) and your password provided at enrolment. Change your password immediately after first login. Your Neptun code is NOT the same as your student ID card number. If you forget your password, visit the Study Office in person with your student ID. Do NOT share your Neptun credentials. Everything official happens in NEPTUN — if it is not in NEPTUN, it does not count.",
  },
  {
    id: "neptun-002",
    category: "neptun",
    keywords: ["neptun english", "language", "switch", "hungarian", "change language", "magyar"],
    text: "To switch NEPTUN to English: Log in at neptun.uni-duna.hu, look for the language selector in the top-right corner, click the dropdown showing 'Magyar', and select 'English'. The page reloads in English. NEPTUN is in Hungarian by default but fully supports English.",
  },
  {
    id: "neptun-003",
    category: "neptun",
    keywords: ["course registration", "register course", "subject", "enroll course", "sign up", "timetable", "semester registration", "tárgy", "tárgyfelvétel"],
    text: "Course Registration in NEPTUN: Go to Subjects (Targyak) then Subject registration (Targyfelvétel). Select the correct semester (e.g. '2024/25/1' = autumn semester). Find courses by name or code. Green means space available, red means full. Click the course, select your time slot (eloadás = lecture, gyakorlat = practical), click Register (Felvétel), then verify in 'My subjects' (Felvett targyaim). Registration period: Autumn — late August to mid-September; Spring — late January to mid-February. Missing this window means you cannot attend that course officially.",
  },
  {
    id: "neptun-004",
    category: "neptun",
    keywords: ["exam registration", "register exam", "sit exam", "exam sign up", "vizsgajelentkezés", "vizsga"],
    text: "Exam Registration in NEPTUN: You MUST register for each exam individually — you cannot just show up without registering. Go to Exams (Vizsak) then Exam registration (Vizsgajelentkezes), select your semester, choose your exam date, and click Register (Jelentkezes). Registration opens 2 weeks before the exam period and closes 3 days before the exam. You can deregister up to 24 hours before. Save your confirmation. If you are NOT registered, you will NOT be allowed to sit the exam.",
  },
  {
    id: "neptun-005",
    category: "neptun",
    keywords: ["pay fees neptun", "pénzügyek", "payment neptun", "online payment", "fee items", "outstanding fees", "befizetés"],
    text: "Paying Fees in NEPTUN: Go to Finances (Penzugyek) then Payment (Befizetes) or Fee items (Dijtetelek). Select the fee item(s) and click 'Pay online' (Online fizetes). Pay by card (Visa/Mastercard accepted). A receipt appears under Payments made (Befizeteseк) — save it as proof. Allow up to 2 business days for confirmation. Stipendium Hungaricum students have tuition pre-paid and only pay retake fees. Unpaid fees result in de-registration from courses or blocked NEPTUN access. Never pay cash to any individual.",
  },
  {
    id: "neptun-006",
    category: "neptun",
    keywords: ["grades neptun", "results neptun", "transcript neptun", "check grades", "academic record", "tanulmányok", "jegyek"],
    text: "Grades and Transcript in NEPTUN: Go to Studies (Tanulmanyok) then Grades (Jegyek) or Study results (Tanulmanyi eredmenyek), select semester to see all grades. Download unofficial transcript: Studies then Study results then Print or Export for PDF. For an official certified transcript, apply in person at the Study Office (fee applies).",
  },
  {
    id: "neptun-007",
    category: "neptun",
    keywords: ["neptun messages", "announcements", "notifications", "email forwarding", "üzenetek", "important notice"],
    text: "NEPTUN Messages: Important university communications come through NEPTUN messages — NOT email. Check NEPTUN regularly or you will miss deadlines. To set up email forwarding: Settings (Beallitasok) then Email notification then enter your personal email address. Messages include: registration period announcements, exam schedule changes, fee payment reminders, scholarship notifications, dormitory allocation results, subject cancellations or room changes.",
  },
  {
    id: "neptun-008",
    category: "neptun",
    keywords: ["retake", "failed exam", "resit", "repeat exam", "fail", "retake fee", "3 attempts"],
    text: "Failed Exams and Retakes: You get 2 retake opportunities per subject per semester (3 attempts total). Register for the retake in NEPTUN the same way as the original exam. If you fail all 3 attempts, you must re-register for the subject next semester. Some retakes require a fee — check under Finances (Penzugyek) in NEPTUN before registering.",
  },
  {
    id: "neptun-009",
    category: "neptun",
    keywords: ["neptun not working", "neptun problem", "browser", "login issue", "cache", "troubleshoot neptun"],
    text: "NEPTUN Troubleshooting: Try logging out and back in first — many issues are session-related. Try a different browser (Chrome recommended, avoid Internet Explorer). Clear your browser cache and cookies. If the problem persists, contact the IT Helpdesk at it@uniduna.hu or visit Building C, 2nd Floor, Room 201, Mon-Fri 8:00-16:00. For academic registration questions, contact the Study Office.",
  },

  // ══ FEES & FINANCES ═══════════════════════════════════════════════════════

  {
    id: "fees-001",
    category: "fees",
    keywords: ["tuition fee", "how much", "cost", "bank transfer", "iban", "swift", "registration fee", "application fee", "pay tuition"],
    text: "Tuition Fee Payment: After admission, the IRO provides your Application Acceptance Letter with fees and bank details. Bank: Account Holder: Dunaujvarosi Egyetem, IBAN: HU26 1030 0002 1326 1517 0002 4886, SWIFT: MKKBHUHB, Bank: MBH Bank, Budapest. Payment reference must state: 'Registration fee + your DreamApply Applicant ID and your name' (e.g. 'Registration fee ID260 JANE DOE'). The registration fee is non-refundable. Fees cannot be paid in instalments.",
  },
  {
    id: "fees-002",
    category: "fees",
    keywords: ["stipendium hungaricum", "sh scholarship", "free tuition", "government scholarship", "living allowance", "funded"],
    text: "Stipendium Hungaricum (SH) Scholarship: Covers free tuition, free health insurance, monthly accommodation support, and a living allowance. UOD has participated since 2015. Main SH coordinator: Ms. Maria Kerekgyarto (international@uniduna.hu). For next application cycle: stipendiumhungaricum.hu. SH students only pay retake exam fees through NEPTUN.",
  },
  {
    id: "fees-003",
    category: "fees",
    keywords: ["scyp", "christian scholarship", "hungary helps", "scholarship christian", "religious persecution"],
    text: "Scholarship for Christian Young People (SCYP): Hungarian Government scholarship for Christian youth from crisis regions. Covers: tuition-free education, monthly living allowance, free accommodation (or accommodation support), travel cost reimbursement up to 200,000 HUF/year, and medical insurance. Visa and residence permit extension are free for scholarship holders. Info: hungaryhelps.gov.hu/scyp.",
  },
  {
    id: "fees-004",
    category: "fees",
    keywords: ["living cost", "how much money", "budget", "monthly", "expensive", "cheap", "cost of living", "huf", "forint", "eur"],
    text: "Cost of Living in Dunaujvaros: Minimum monthly budget approximately HUF 150,000 (EUR 400) to cover hostel, food, and occasional outings. Dormitory: ~40,000 HUF/month. Private flat: 90,000-160,000 HUF/month. Food prices: restaurant meal 4,000-6,000 HUF, coffee 580-900 HUF, pizza 2,400-4,000 HUF, milk 430 HUF/litre, sandwich 600-900 HUF. Transport: bus kiosk ticket 400 HUF, bus to Budapest 745 HUF (student), taxi in city 1,600-3,000 HUF. Cinema: 2,500-3,400 HUF (student discount). Currency: Hungarian Forint (HUF). Most places accept Visa/Mastercard.",
  },

  // ══ REGISTRATION & ADMISSION ═══════════════════════════════════════════════

  {
    id: "reg-001",
    category: "registration",
    keywords: ["apply", "application", "how to apply", "dreamapply", "admission", "how to enroll", "start studying"],
    text: "How to Apply to UOD: Applications are submitted through DreamApply online. English-taught programs start in September only — there is no February intake for bachelor or master programs. After a positive admission decision, the IRO provides an Application Acceptance Letter containing your Neptun code. Contact international@uniduna.hu for questions. Details at uniduna.hu/en/application/application-process.",
  },
  {
    id: "reg-002",
    category: "registration",
    keywords: ["grading system", "grade", "marks", "gpa", "pass", "fail", "percentage", "jeles", "elégtelen", "hungarian grades"],
    text: "Hungarian Grading System: 5 (Jeles/Excellent): 91-100%. 4 (Jo/Good): 81-90%. 3 (Kozepes/Satisfactory): 66-80%. 2 (Elegsеges/Pass): 51-65% — minimum passing grade. 1 (Elegtelen/Fail): 0-50% — must repeat exam. Percentages may vary by lecturer and subject.",
  },
  {
    id: "reg-003",
    category: "registration",
    keywords: ["preparatory year", "language requirement", "ielts", "english level", "foundation year", "b2", "b1", "english course"],
    text: "Preparatory Year Program: For applicants with English proficiency below IELTS 5.5 / CEFR B2. Duration: 1 or 2 semesters. Tuition: 4,100 EUR (3,950 EUR tuition + 150 EUR course materials). Minimum to apply: IELTS 4.0 / CEFR B1 or equivalent (EF SET, TOEFL, TOEIC, Duolingo accepted). Prepares students for bachelor/master study and includes introduction to Hungarian culture and campus life.",
  },

  // ══ ACCOMMODATION ═════════════════════════════════════════════════════════

  {
    id: "accom-001",
    category: "accommodation",
    keywords: ["dormitory", "hostel", "dorm", "accommodation", "room", "where to stay", "housing", "student hostel", "guaranteed accommodation"],
    text: "Student Accommodation: Every international student is GUARANTEED accommodation in the university dormitory on campus. Rooms are 2 or 3 beds with a private bathroom. Each floor has a shared kitchen and laundry room. Dormitory cost: approximately 40,000 HUF/month. Stipendium Hungaricum and SCYP scholarship students receive free accommodation or accommodation support. Newly renovated hostels are on campus.",
  },

  // ══ VISA & LEGAL ══════════════════════════════════════════════════════════

  {
    id: "visa-001",
    category: "visa",
    keywords: ["visa", "d visa", "student visa", "residence permit", "how to get visa", "non-eu", "outside eu", "consulate"],
    text: "Visa for Non-EU/EEA Students: You need a long-term 'D' type visa for study from the Hungarian Consulate in your country. Book an appointment early — the process can take up to 3 months. Required documents: completed application form, valid passport (validity must exceed visa by 3 months), one passport photo (max 3 months old), Letter of Acceptance from UOD, visa fee (~60 EUR), proof of address in Hungary (your Letter of Acceptance serves this), proof of subsistence (bank statement, parental declaration, or scholarship document), and travel insurance. After arriving, arrange your residence permit at the Immigration Office (BMH Regional Directorate in Szekesfehervar).",
  },
  {
    id: "visa-002",
    category: "visa",
    keywords: ["eu student", "eea", "european citizen", "registration card", "no visa needed", "eu no visa"],
    text: "EU/EEA Students: Citizens of EU/EEA countries (EU member states plus Norway, Switzerland, Iceland, Liechtenstein) do NOT need a study visa for Hungary. However, they must obtain a registration card for the duration of their studies. Arrange the registration card at the Immigration Office (BMH Regional Directorate in Szekesfehervar) after arriving in Hungary.",
  },

  // ══ HEALTH INSURANCE ══════════════════════════════════════════════════════

  {
    id: "health-001",
    category: "health",
    keywords: ["health insurance", "insurance", "medical", "generali", "sick", "doctor", "hospital", "coverage", "red card", "105000"],
    text: "Health Insurance for Self-Financed Students: Required for your residence permit. The university offers Generali Studium health insurance upon enrolment. Cost: 105,000 HUF/year (2024), valid 1 September to 31 August. Covers 50% of outpatient and hospital treatment costs in Hungary for illness or accidents. Does NOT cover: dental treatment (except emergencies), pregnancy hospitalization, cosmetic/rehabilitation treatment, alcohol/narcotic detox. To apply: visit the IRO, fill in the registration form, pay at Raiffeisen Bank (Vasmu ut 39, Dunaujvaros) by cheque from IRO, bring invoice back to IRO to receive your Red Insurance Card (valid with passport only). SH and SCYP students have separate insurance arrangements.",
  },

  // ══ CAMPUS & FACILITIES ════════════════════════════════════════════════════

  {
    id: "campus-001",
    category: "campus",
    keywords: ["campus", "buildings", "facilities", "lab", "laboratories", "sports hall", "gym", "bowling", "squash", "sports centre"],
    text: "UOD Campus: 15 buildings on a modern campus in central Dunaujvaros. Facilities include modern classrooms, lecture halls, public library (Building B), professional laboratories, a large sports hall, sports centre with fitness gym, squash courts, bowling alleys, snooker tables, grass football pitch, and athletics track. Nearby (discounted for students): indoor swimming pools and ice rink. A large public park with fountain and bio-pond is in front of the main building.",
  },
  {
    id: "campus-002",
    category: "campus",
    keywords: ["budapest", "travel", "bus", "train", "transport", "how to get", "distance", "getting there", "from budapest"],
    text: "Travel to UOD: Dunaujvaros is 70 km south of Budapest. Bus or train takes just over 1 hour. Bus to Budapest: 1,490 HUF full price or 745 HUF student discount. Local bus in Dunaujvaros: 400 HUF from kiosk or 600-700 HUF from driver. Taxi within city: 1,600-3,000 HUF. The campus is in the city centre, close to banks, shops, a hospital, polyclinic, the central bus station, and a swimming pool complex.",
  },
  {
    id: "campus-003",
    category: "campus",
    keywords: ["student life", "events", "cultural", "student union", "mentor", "excursion", "activities", "social", "parties"],
    text: "Student Life at UOD: The university offers welcome events and intercultural evenings. The IRO organises trips for international students across Hungary. The Student Union organises events, excursions, and parties and enforces student rights. Hungarian student mentors are assigned to help international students integrate. Student magazine: XIT Magazine.",
  },

  // ══ DEGREE PROGRAMMES ═════════════════════════════════════════════════════

  {
    id: "prog-001",
    category: "programmes",
    keywords: ["programmes", "courses", "degrees", "bsc", "msc", "bachelor", "master", "engineering", "computer science", "business", "what to study", "study programme"],
    text: "English-Language Degree Programmes at UOD: Bachelor programmes: Mechanical Engineering BSc (Mechatronics), Materials Engineering BSc (Metal Technologies), Computer Science Engineering BSc, Business Administration and Management BA, Communication and Media Science BA, ATPL and Mechanical Engineering BSc. Master programmes: Mechanical Engineering MSc (Lifetime Management), Teacher of Engineering MA. All English programs start in September. UOD holds ISO 9001-2000 quality certification.",
  },
  {
    id: "prog-002",
    category: "programmes",
    keywords: ["summer school", "summer course", "ects", "short course", "july", "1500 eur"],
    text: "Summer Schools: UOD offers summer schools including 'Communicating in a Multicultural Society', held 6-17 July, worth 5 ECTS credits. Fee: 1,500 EUR + 100 EUR registration. Includes all tuition, assessment, transcript, accommodation at student hostel, breakfast and lunch, and social activities/excursions in Hungary. Apply by email to the organizing unit. Info: uniduna.hu/en/summer-school.",
  },
  {
    id: "prog-003",
    category: "programmes",
    keywords: ["erasmus", "exchange", "international programme", "partner university", "abroad", "double degree", "internship", "industrial"],
    text: "International Opportunities at UOD: Erasmus exchange partnerships and double degree programs available (e.g. with University of International Business). Students from 38 countries across 4 continents study at UOD. Industrial partners offering internships include Tungsram, Paks Nuclear Power Plant, MÁV Group, HANKOOK Tire, Apple, Mozilla Foundation, Siemens, FESTO, SKF, and CISCO. Contact the IRO (international@uniduna.hu) for Erasmus and exchange opportunities.",
  },

  // ══ RULES & REGULATIONS ═══════════════════════════════════════════════════

  {
    id: "rules-001",
    category: "rules",
    keywords: ["rules", "regulations", "conduct", "disciplinary", "rights", "obligations", "student rules", "policy", "complaints"],
    text: "Student Rules and Regulations at UOD: Two key regulations apply: (1) Examination and Study Regulations covering educational issues, student requirements, and compensation rules. (2) Disciplinary and Compensation Regulations for conduct. There is also an Institutional Complaints Handling Procedure, Data Processing Information Sheet, and separate Student Hostel Regulations including house rules. Full documents available at uniduna.hu/en/for-students/rules-and-regulations.",
  },
];

// ─── RAG retrieval function ───────────────────────────────────────────────────
export function retrieveContext(query, topN = 3) {
  const q = query.toLowerCase();
  const scored = knowledgeBase.map((entry) => {
    let score = 0;
    for (const kw of entry.keywords) {
      if (q.includes(kw)) score += 3;
    }
    const words = q.split(/\s+/);
    for (const word of words) {
      if (word.length > 3 && entry.text.toLowerCase().includes(word)) score += 1;
    }
    return { ...entry, score };
  });
  return scored
    .filter((e) => e.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topN);
}

// ─── Category detection ───────────────────────────────────────────────────────
export function detectCategory(query) {
  const q = query.toLowerCase();
  const categoryMap = {
    neptun:        ["neptun", "course registration", "exam registration", "tárgyfelvétel", "vizsgajelentkezés", "login neptun", "pénzügyek"],
    fees:          ["fee", "tuition", "pay", "iban", "bank", "scholarship", "stipendium", "scyp", "living cost", "budget", "forint", "huf", "eur 400"],
    contacts:      ["contact", "email", "phone", "office", "iro", "study office", "it helpdesk", "library hours", "where is", "how to reach"],
    registration:  ["apply", "application", "dreamapply", "admission", "grade", "grading", "ielts", "preparatory", "enrol"],
    accommodation: ["dormitory", "hostel", "dorm", "room", "housing", "accommodation", "where to stay"],
    visa:          ["visa", "residence permit", "eu student", "non-eu", "d visa", "immigration", "consulate"],
    health:        ["health insurance", "insurance", "generali", "sick", "doctor", "medical", "coverage", "red card"],
    campus:        ["campus", "building", "sport", "gym", "pool", "budapest", "travel", "student life", "excursion", "facilities"],
    programmes:    ["programme", "course", "degree", "bsc", "msc", "bachelor", "master", "summer school", "erasmus", "internship"],
    rules:         ["rule", "regulation", "conduct", "disciplinary", "policy", "rights", "complaints"],
  };

  let best = { category: "general", score: 0 };
  for (const [cat, keywords] of Object.entries(categoryMap)) {
    const score = keywords.filter((kw) => q.includes(kw)).length;
    if (score > best.score) best = { category: cat, score };
  }
  return best.category;
}