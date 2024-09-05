import React, { createContext, useState } from "react";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("Eng");
  const languageOptions = ["Eng", "አማ"];
  const labelLanguage = {
    Eng: [
      "Sector:",
      "Office:",
      "Desk:",
      "Rating:",
      "Do you want to share your phone number?",
      "Comment:",
      "Send Comment",
      "Feedback",
      "Bad",
      "Average",
      "Good",
      "Very Good",
      "Select Sector",
      "Select Office",
      "Select Desk",
      "Anti-Corruption",
      "Write A Complaint Here:",
      "If you have any complaint share us your idea! ",
      "Send Complaint",
      " Feedback System ",
      "Feedback",
      "Anti-Corruption",
      "Complaint Admin",
      "Home",
      "If you have an idea comment here.",
      "Sector is required!",
      "Please choose an Office!",
      "Please choose Desk!",
      "Ministry Of Innovation And Technology",
      "Feedback and Anti-Corruption Giving System",
      "The Ministry Of Innovation And Technology is one of the 19 ministerial offices re-organize in a new manner by being accountable to the office of the prime minister after duly established as per Article 55 Sub Article 1 of the FDRE Proclamation No. 1097/2018.",
      "Contact Us",
      "Phone:",
      "Location",
      "Addis Ababa, Ethiopia",
      "Go to Main Website",
      "Please choose Rating!",
      "Comment is empty",
    ],
    አማ: [
      "ዘርፍ:",
      "ስራ አስፈጻሚ:",
      "ዴስክ:",
      "ደረጃ ይስጡ:",
      "ስልክ ቁጥርህን ማጋራት ትፈልጋለህ?",
      "አስተያየት ጻፍ",
      "አስተያየት ላክ",
      "ግብረ መልስ ይጻፉ",
      "መጥፎ",
      "መካከለኛ",
      "ጥሩ",
      "በጣም ጥሩ",
      "ዘርፍ ይምረጡ",
      "ቢሮ ይምረጡ",
      "ዴስክ ይምረጡ",
      "የፀረ-ሙስና ቅፅ",
      "ቅሬታህን እዚህ ጻፍ",
      "ቅሬታ ካሎት ሀሳብዎን ያካፍሉን!",
      "ቅሬታ ላክ",
      "የግብረመልስ ስርዓት",
      "መልካም አስተዳደር",
      "ፀረ-ሙስና",
      "ቅሬታ አስተዳዳሪ",
      "መነሻ ገጽ",
      "ሀሳብ ካሎት እዚህ አስተያየት ይስጡ",
      "እባክዎ ዝርፍ ይምረጡ!",
      "እባክዎ ቢሮ ይምረጡ!",
      "እባክዎ ዴስክ ምረጥ!",
      "የኢኖቬሽን እና ቴክኖሎጂ ሚኒስቴር",
      "ግብረመልስ እና ፀረ-ሙስና አሰጣጥ ስርዓት",
      "በኢፌዴሪ አዋጅ ቁጥር 1097/2018 አንቀጽ 55 ንኡስ አንቀጽ 1 መሰረት ተጠሪነቱ ለጠቅላይ ሚኒስትር ፅህፈት ቤት በአዲስ መልክ ከተደራጁ 19 የሚኒስቴር መስሪያ ቤቶች መካከል የኢኖቬሽንና ቴክኖሎጂ ሚኒስቴር አንዱ ነው።",
      "አግኙን",
      "ስልክ ቁጥር:",
      "አካባቢ",
      "አዲስ አበባ፣ ኢትዮጵያ",
      "ወደ ዋናው ድር ጣቢያ ይሂዱ",
      "እባክዎ ደረጃ ይስጡ!",
      "አስተያየት ባዶ ነው።",
    ],
  };

  const updateLanguage = (language) => {
    setSelectedLanguage(language);
  };
  const sector = {
    Eng: [
      "Minister Office",
      "Innovation & Technology Partnership and Alliance Affairs Office",
      "Inovatation and Reserch Sector",
      "ICT and Digital Economy Sector",
      "Administration Office",
      "Policy & Strategy Studies Research Executive",
      "Innovation Fund Office",
    ],
    አማ: [
      "ሚኒስቴር ኃላፊ ጽሕፈት ቤት",
      "የኢኖቬሽንና ቴክኖሎጂ የትብብርና ትስስር ጉዳዮች መሪ ስራ አስፈጻሚ",
      "ኢኖቬሽን ምርምር ዘርፍ",
      "አይሲቲ እና ዲጂታል ኢኮኖሚ ዘርፍ",
      "የሥራ አመራር ዋና ሥራ አስፈጻሚ",
      "የፖሊሲና ስትራቴጂ ጥናትና ምርምር ሥራ አስፈጻሚ",
      "የኢኖቬሽን ፈንድ ጽሕፈት ቤት",
    ],
  };
  const office = {
    Eng: {
      "Minister Office": [
        "Legal Service Office",
        "Audit Service Office",
        "Institutional Transition Office",
        "Ethics and Anti-Corruption Office",
        "Public relations and Communication Office",
        "Public Relations & Communication Team",
        "Women and Social Affairs Office",
      ],
      "Innovation & Technology Partnership and Alliance Affairs Office": [
        "International Relations & Cooperation Desk",
        "Sector & Regional Councils Desk",
        "Private Sector Industries Technology Desk",
      ],

      "Inovatation and Reserch Sector": [
        "National Research Office",
        "Technology Transformation Office",
        "Technology Innovation and Management Office",
      ],
      "ICT and Digital Economy Sector": [
        "National E-Government Services Office",
        "ICT Infrastructure Development and Management Office",
        "Digital Economy Development Sector Office",
      ],
      "Administration Office": [
        "Strategic Affairs Office",
        "Finance & Procurement Office",
        "Human Resource Competency & Management Office",
        "Information Communication Technology Office",
        "Facilities Management Office",
      ],
      "Policy & Strategy Studies Research Executive": [
        "Policy & Strategy Studies Research Executive",
      ],
      "Innovation Fund Office": ["Innovation Fund Office"],
    },
    አማ: {
      "ሚኒስቴር ኃላፊ ጽሕፈት ቤት": [
        "የሕግ አገልግሎት ሥራ አስፈጻሚ",
        "የኦዲት ሥራ አስፈጻሚ",
        "የተቋማዊ ለውጥ ሥራ አስፍጻሚ",
        "የሥነምግባርና ፀረሙስና ሥራ አስፈጻሚ",
        "የህዝብ ግንኙነትና ኮሙኒኬሽን ሥራ አስፈጻሚ",
        "የሴቶችና የማህበራዊ ጉዳዮች አካቶ ትግበራ ሥራ አስፈጻሚ",
      ],
      "የኢኖቬሽንና ቴክኖሎጂ የትብብርና ትስስር ጉዳዮች መሪ ስራ አስፈጻሚ": [
        "የአለም ዓቀፍ ግንኙነትና ትብብር ዴስክ",
        "የዘርፍ ካውንስሎችና የክልሎች ዴስክ",
        "የግል ዘርፍ ኢንዱስትሪዎች ቴክኖሎጂ ዴስክ",
      ],
      "ኢኖቬሽን ምርምር ዘርፍ": [
        "ሀገራዊ የምርምር ልማት መሪ ሥራ አስፈጻሚ",
        "የቴክኖሎጂ ሽግግርና ልማት መሪ ሥራ አስፈጻሚ",
        "የኢኖቬሽን ቴክኖሎጂ መረጃ ልማትና አስተዳደር ዴስክ",
      ],
      "አይሲቲ እና ዲጂታል ኢኮኖሚ ዘርፍ": [
        "የብሄራዊ የኤሌክትሮኒክ መንግስት ልማት መሪ ሥራ አስፈጻሚ",
        "የአይሲቲ መሰረተ ልማት ግንባታ እና አስተዳደር መሪ ሥራ አስፈጻሚ",
        "የዲጂታል ኢኮኖሚ ልማት ዘርፍ መሪ ሥራ አስፈጻሚ",
      ],
      "የሥራ አመራር ዋና ሥራ አስፈጻሚ": [
        "የስትራቴጂክ ጉዳዮች ሥራ አስፈጻሚ",
        "የግዢና ፋይናንስ ሥራ አስፈጻሚ",
        "የብቃትና የሰው ሀይል አስተዳደር ሥራ አስፈጻሚ",
        "የኢንፎርሜሽን ኮሚኒኬሽን ቴክኖሎጂ ሥራ አስፈጻሚ",
        "የመሠረታዊ አገልግሎት ሥራ አስፈጻሚ",
      ],
      "የፖሊሲና ስትራቴጂ ጥናትና ምርምር ሥራ አስፈጻሚ": ["የፖሊሲና ስትራቴጂ ጥናትና ምርምር ሥራ አስፈጻሚ"],
      "የኢኖቬሽን ፈንድ ጽሕፈት ቤት": ["የኢኖቬሽን ፈንድ ጽሕፈት ቤት"],
    },
  };

  const desk = {
    Eng: {
      "Legal Service Office": ["Legal Service Office"],
      "Audit Service Office": ["Audit Service Office"],
      "Institutional Transition Office": ["Institutional Transition Office"],
      "Ethics and Anti-Corruption Office": [
        "Ethics and Anti-Corruption Office",
      ],
      "Public relations and Communication Office": [
        "Public relations and Communication Office",
      ],
      "Public Relations & Communication Team": [
        "Public Relations & Communication Team",
      ],
      "Women and Social Affairs Office": ["Women and Social Affairs Office"],
      "Innovation Fund Office": ["Innovation Fund Office"],

      "International Relations & Cooperation Desk": [
        "International Relations & Cooperation Desk",
      ],
      "Sector & Regional Councils Desk": ["Sector & Regional Councils Desk"],
      "Private Sector Industries Technology Desk": [
        "Private Sector Industries Technology Desk",
      ],

      "Policy & Strategy Studies Research Executive": [
        "Policy & Strategy Studies Research Executive",
      ],

      "National Research Office": [
        "National Research Development Desk",
        "National Research Infrastructure Development Desk",
        "National Research Ethics and Methodology Development Desk",
      ],

      "Technology Transformation Office": [
        "Innovation & Information Technology Development & Management Desk",
        "TechnologIcal Transformation and Collaboration Desk",
        "Indigenous Technology Development Desk",
      ],

      "Technology Innovation and Management Office": [
        "Innovation Development Desk",
        "Innovation Infrastructure Development Desk",
        "Starap & Innovative Enterprise Development Desk 1",
        "Starap & Innovative Enterprise Development Desk 2",
      ],
      "National E-Government Services Office": [
        "National E-Government Services Development & Management Desk",
        "National E-Government Strategy Coordination Desk",
        "National Data Development Coordination Desk",
      ],
      "ICT Infrastructure Development and Management Office": [
        "National Data Center Management Desk",
        "Cyber Security Desk",
        "National ICT Infrastructure Development Desk",
      ],
      "Digital Economy Development Sector Office": [
        "Digital Economy Development Standards & Control Desk",
        "Digital Industry Development Desk",
        "Digital Society Development Desk",
      ],
      "Strategic Affairs Office": [
        "Planning & Budget Preparation, Monitoring & Evaluation Team",
      ],
      "Finance & Procurement Office": ["Procurement Team", "FInance Team"],
      "Human Resource Competency & Management Office": [
        "Human Resource Administration Team ",
        "Human Recourse Competency Development & Management Team",
        "Records Management Team",
      ],
      "Information Communication Technology Office": [
        "Information Communication Technology Office",
      ],
      "Facilities Management Office": [
        "Property Management Team",
        "Property Treasury Team",
        "General Services Team",
        "Transport Deployment Service Team",
      ],
    },
    አማ: {
      "የሕግ አገልግሎት ሥራ አስፈጻሚ": ["የህግ አገልግሎት ቢሮ"],
      "የኦዲት ሥራ አስፈጻሚ": ["የኦዲት ሥራ አስፈጻሚ"],
      "የተቋማዊ ለውጥ ሥራ አስፍጻሚ": ["የተቋማዊ ለውጥ ሥራ አስፍጻሚ"],
      "የሥነምግባርና ፀረሙስና ሥራ አስፈጻሚ": ["የሥነ-ምግባር እና ፀረ-ሙስና ጽሕፈት ቤት"],
      "የህዝብ ግንኙነትና ኮሙኒኬሽን ሥራ አስፈጻሚ": ["የህዝብ ግንኙነት እና ኮሙኒኬሽን ቡድን"],
      "የሴቶችና የማህበራዊ ጉዳዮች አካቶ ትግበራ ሥራ አስፈጻሚ": ["የሴቶችና ማህበራዊ ጉዳይ ጽ/ቤት"],
      "የኢኖቬሽን ፈንድ ጽሕፈት ቤት": ["የኢኖቬሽን ፈንድ ቢሮ"],

      "የአለም ዓቀፍ ግንኙነትና ትብብር ዴስክ": ["ዓለም አቀፍ ግንኙነት እና ትብብር ዴስክ"],
      "የዘርፍ ካውንስሎችና የክልሎች ዴስክ": ["የሴክተር እና የክልል ምክር ቤቶች ዴስክ"],
      "የግል ዘርፍ ኢንዱስትሪዎች ቴክኖሎጂ ዴስክ": ["የግል ዘርፍ ኢንዱስትሪዎች ቴክኖሎጂ ዴስክ"],

      "የፖሊሲና ስትራቴጂ ጥናትና ምርምር ሥራ አስፈጻሚ": ["የፖሊሲ እና የስትራቴጂ ጥናቶች ጥናት አስፈፃሚ"],
      ///////
      "ሀገራዊ የምርምር ልማት መሪ ሥራ አስፈጻሚ": [
        "ብሔራዊ የምርምር ልማት ዴስክ",
        "ብሔራዊ የምርምር መሰረተ ልማት ልማት ዴስክ",
        "የአገራዊ የምርምር ስነ-ምግባር እና ዘዴ ልማት ዴስክ",
      ],

      "የቴክኖሎጂ ሽግግርና ልማት መሪ ሥራ አስፈጻሚ": [
        "ኢኖቬሽን እና ኢንፎርሜሽን ቴክኖሎጂ ልማት እና አስተዳደር ዴስክ",
        "ቴክኖሎጂካል ትራንስፎርሜሽን እና የትብብር ዴስክ",
        "የአገር በቀል ቴክኖሎጂ ልማት ዴስክ",
      ],

      "የኢኖቬሽን ቴክኖሎጂ መረጃ ልማትና አስተዳደር ዴስክ": [
        "የፈጠራ ልማት ዴስክ",
        "የኢኖቬሽን መሠረተ ልማት ልማት ዴስክ",
        "ስታራፕ እና ፈጠራ ኢንተርፕራይዝ ልማት ዴስክ 1",
        "ስታራፕ እና ፈጠራ ኢንተርፕራይዝ ልማት ዴስክ 2",
      ],

      "የብሄራዊ የኤሌክትሮኒክ መንግስት ልማት መሪ ሥራ አስፈጻሚ": [
        "ብሔራዊ ኢ-መንግስት አገልግሎቶች ልማት እና አስተዳደር ዴስክ",
        "የብሔራዊ ኢ-መንግስት ስትራቴጂ ማስተባበሪያ ዴስክ",
        "የብሔራዊ መረጃ ልማት ማስተባበሪያ ዴስክ",
      ],
      "የአይሲቲ መሰረተ ልማት ግንባታ እና አስተዳደር መሪ ሥራ አስፈጻሚ": [
        "ብሔራዊ የውሂብ ማዕከል አስተዳደር ዴስክ",
        "የሳይበር ደህንነት ዴስክ",
        "ብሔራዊ የአይሲቲ መሠረተ ልማት ልማት ዴስክ",
      ],

      "የዲጂታል ኢኮኖሚ ልማት ዘርፍ መሪ ሥራ አስፈጻሚ": [
        "ዲጂታል ኢኮኖሚ ልማት ደረጃዎች እና ቁጥጥር ዴስክ",
        "ዲጂታል ኢንዱስትሪ ልማት ዴስክ",
        "የዲጂታል ማህበረሰብ ልማት ዴስክ",
      ],

      "የስትራቴጂክ ጉዳዮች ሥራ አስፈጻሚ": ["የእቅድ እና የበጀት ዝግጅት፣ ክትትል እና ግምገማ ቡድን"],
      "የግዢና ፋይናንስ ሥራ አስፈጻሚ": ["የግዥ ቡድን", "የፋይናንስ ቡድን"],
      "የብቃትና የሰው ሀይል አስተዳደር ሥራ አስፈጻሚ": [
        "የሰው ሀብት አስተዳደር ቡድን",
        "የሰው ጥቅም ብቃት ልማት እና አስተዳደር ቡድን",
        "የመዝገብ አስተዳደር ቡድን",
      ],
      "የኢንፎርሜሽን ኮሚኒኬሽን ቴክኖሎጂ ሥራ አስፈጻሚ": ["የኢንፎርሜሽን ኮሙኒኬሽን ቴክኖሎጂ ቢሮ"],
      "የመሠረታዊ አገልግሎት ሥራ አስፈጻሚ": [
        "የንብረት አስተዳደር ቡድን",
        "የንብረት ግምጃ ቤት ቡድን",
        "አጠቃላይ አገልግሎቶች ቡድን",
        "የትራንስፖርት ማሰማራት አገልግሎት ቡድን",
      ],
    },
  };
  return (
    <LanguageContext.Provider
      value={{
        sector,
        office,
        desk,
        selectedLanguage,
        languageOptions,
        labelLanguage,
        updateLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
