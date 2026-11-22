// =====================================================================
//  PROFILE — nam, title, contact info, social link, hero ar about section
//  Chobi bodlate: notun chobi public/assets/images/ e rakhun, tarpor
//  ekhane path ta din (path "/assets/..." diye shuru hobe).
// =====================================================================

// Basic info (header, footer, about, contact section e dekhabe)
export const profile = {
  "name": "Sohag Hossain",
  "shortName": "Sohag",
  "title": "Machine Learning Engineer",
  "tagline": "Research & Engineering",
  "email": "moriomkamal9@gmail.com",
  "phone": "+880 1630434000",
  "location": "Dhaka, Bangladesh",
  "logo": "/assets/images/logo.png",
  "resumeUrl": "https://drive.google.com/file/d/1gTgdPq5Tl0oj2bwoXY9P8vn6069wAeye/view?usp=sharing",
  "cvUrl": "https://drive.google.com/file/d/1D2PeH4dfJcxaWRyMMJPNTwwQldTve3UH/view?usp=drive_link",
  // Contact form er message ei email e jabe
  "contactFormEmail": "moriomkamal9@gmail.com"
};

// Hero (prothom screen) section
export const hero = {
  "statusBadge": "Available for Projects",
  "greeting": "Hi, I'm",
  "name": "Sohag Hossain",
  "expertiseLabel": "Expertise in",
  "typingTexts": [
    "Machine Learning",
    "Computer Vision",
    "Deep Learning",
    "Artificial Intelligence",
    "AI Automation",
    "Data Analytics"
  ],
  "image": "/assets/images/hero.png",
  "primaryButton": {
    "label": "About Me",
    "href": "#about"
  },
  "secondaryButton": {
    "label": "Get In Touch",
    "href": "#contact"
  },
  "bottomBadge": {
    "title": "NASA Space Apps",
    "subtitle": "Global Participant"
  },
  "topBadge": {
    "title": "Aspire Leaders",
    "subtitle": "★ Global Leadership Fellow",
    "extra": "mentored by Harvard faculty"
  }
};

// About section
export const about = {
  "tag": "The Story",
  "heading": "Architecting the future with",
  "headingAccent": "Code & Data.",
  "description": "I am a Computer Science and Engineering student and AI/ML researcher working at the intersection of intelligent systems and real-world applications. My research focuses on developing trustworthy, explainable, and privacy-aware AI through Machine Learning, Deep Learning, Computer Vision, Federated Learning, and Multimodal AI. I am particularly interested in AI for healthcare and in translating research ideas into practical, impactful solutions.",
  "image": "/assets/images/profile2.jpg"
};

// Social link — url khali ("") rakhle oi icon ta kothao dekhabe na.
// Kon section e kon icon dekhabe ta components e fixed (original site er moto).
export const socials = {
  "linkedin": "https://linkedin.com/bithee",
  "github": "https://github.com/moriombithee",
  // Niche gulo khali, tai icon dekhabe na. Link thakle boshiye din.
  "twitter": "",
  "orcid": "",
  "whatsapp": "https://wa.me/8801630434000",
  "whatsappLabel": "WhatsApp: 01630434000",
  "telegram": ""
};

// Footer
export const footer = {
  "title": "Sohag's Portfolio",
  "text": "Thank you for visiting my personal portfolio website. Connect with me over socials.",
  "motto": "Keep Rising 🚀",
  "creditName": "Sohag",
  "creditUrl": "https://www.linkedin.com/in/sohag-a5550a374/"
};

// Browser tab title ar Google/social share info
export const seo = {
  // Nijer domain thakle ekhane din (jemon "https://bithi.vercel.app"). Khali rakhle Vercel er URL nije nibe.
  "siteUrl": "",
  "title": "Sohag Hossain | Machine Learning Engineer & Data Scientist",
  "description": "Welcome to Sohag's Portfolio. Data Science and Machine Learning Engineer specializing in Artificial Intelligence, Deep Learning, Computer Vision, and AI Automation.",
  "keywords": [
    "Sohag Hossain",
    "Sohag",
    "Machine Learning Engineer",
    "Data Scientist",
    "Artificial Intelligence",
    "Computer Vision",
    "Deep Learning",
    "Portfolio"
  ],
  "shareDescription": "Personal portfolio showcasing AI, Machine Learning, Data Engineering, Research Publications.",
  "shareImage": "/assets/images/profile2.jpg"
};

// Contact section er lekha
export const contactSection = {
  "heading": "Let's build",
  "headingAccent": "together.",
  "subheading": "Transforming complex data into intelligent solutions.",
  "namePlaceholder": "Sohag Hossain",
  "emailPlaceholder": "sohag@example.com"
};
