// src/constants/careers.js

export const CAREERS = [
  {
    id: 1,
    title: "Business Analyst (İş Analisti)",
    icon: "📊",
    shortDesc:
      "İş süreçlerini analiz eder, teknoloji ile iş dünyası arasında köprü kurar.",
    description:
      "Bir İş Analisti, kurumun iş süreçlerini inceler, sorunları belirler ve yazılım ekipleriyle konuşarak bu sorunlara teknolojik çözümler üretilmesini sağlar. Müşterinin ne istediğini yazılımcının anlayacağı dile çeviren kişidir.",
    skills: ["Analitik Düşünme", "İletişim", "Dokümantasyon", "Sunum Becerisi"],
    technologies: [
      "SQL",
      "UML Diyagramları",
      "Jira / Trello",
      "Excel (İleri Düzey)",
      "Power BI",
    ],
    salaryLevel: "Orta - Yüksek",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    icon: "💻",
    shortDesc:
      "Hem ön yüz (Frontend) hem de arka plan (Backend) yazılımlarını geliştirir.",
    description:
      "Web veya mobil uygulamaların hem kullanıcıyla etkileşime giren kısmını (UI) hem de sunucu/veritabanı tarafını kodlayan çok yönlü yazılımcıdır. YBS öğrencileri genelde React ve Node.js ikilisiyle bu yola girer.",
    skills: [
      "Algoritma Mantığı",
      "Problem Çözme",
      "Sürekli Öğrenme",
      "Debugging",
    ],
    technologies: [
      "JavaScript (ES6+)",
      "React.js",
      "Node.js",
      "MongoDB / PostgreSQL",
      "Git",
    ],
    salaryLevel: "Yüksek",
  },
  {
    id: 3,
    title: "Product Owner (Ürün Sahibi)",
    icon: "🚀",
    shortDesc:
      "Ürünün vizyonunu belirler ve geliştirme ekibine öncelikleri verir.",
    description:
      "Scrum/Agile dünyasında ürünün değerini maksimize eden kişidir. Hangi özelliğin önce yapılacağına karar verir, müşteri ihtiyaçlarını takip eder ve ürünü başarıya götüren stratejiyi çizer.",
    skills: ["Liderlik", "Karar Verme", "Agile/Scrum", "Stakeholder Yönetimi"],
    technologies: [
      "Jira / Confluence",
      "Figma (Temel)",
      "Google Analytics",
      "User Stories",
    ],
    salaryLevel: "Yüksek",
  },
  {
    id: 4,
    title: "Data Analyst (Veri Analisti)",
    icon: "📈",
    shortDesc:
      "Ham veriyi işleyerek şirketin stratejik kararlar almasını sağlar.",
    description:
      "Büyük veri setlerini temizler, analiz eder ve görselleştirir. Şirketin 'Geçen ay neden satışlar düştü?' veya 'Gelecek ay ne kadar stok yapmalıyız?' sorularına verilerle cevap verir.",
    skills: ["İstatistik", "Matematiksel Zeka", "Detaycılık", "Raporlama"],
    technologies: [
      "Python (Pandas)",
      "SQL",
      "Tableau / Power BI",
      "Excel",
      "R",
    ],
    salaryLevel: "Orta - Yüksek",
  },
  {
    id: 5,
    title: "SEO & Digital Marketing",
    icon: "📢",
    shortDesc:
      "Markanın dijital dünyadaki görünürlüğünü ve satışlarını artırır.",
    description:
      "Web sitelerinin arama motorlarında üst sıralarda çıkmasını sağlar (SEO) ve dijital reklam kampanyalarını yönetir. YBS'nin pazarlama kanadına yakın olanlar için idealdir.",
    skills: ["Yaratıcılık", "Trend Takibi", "İçerik Üretimi", "Rakip Analizi"],
    technologies: [
      "Google Analytics",
      "SEMrush / Ahrefs",
      "Google Ads",
      "WordPress",
      "HTML/CSS Temel",
    ],
    salaryLevel: "Orta",
  },
  {
    id: 6,
    title: "Project Manager",
    icon: "📅",
    shortDesc:
      "Projelerin zamanında, bütçeye uygun ve kaliteli bitmesini sağlar.",
    description:
      "Yazılım projelerinin planlamasından teslimine kadar olan süreci yönetir. Riskleri öngörür, ekibi motive eder ve müşteri ile ekip arasındaki iletişimi yönetir.",
    skills: [
      "Zaman Yönetimi",
      "Risk Yönetimi",
      "İkna Kabiliyeti",
      "Takım Çalışması",
    ],
    technologies: ["MS Project", "Jira", "Slack / Teams", "Excel", "Miro"],
    salaryLevel: "Yüksek",
  },
];
