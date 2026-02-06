import React from "react";

const About = () => {
  return (
    <div style={styles.pageContainer}>
      {/* 1. Hero / Profil Bölümü */}
      <section style={styles.heroSection}>
        <div className="container" style={styles.heroContent}>
          {/* Profil Fotoğrafı Alanı (Placeholder) */}
          <div style={styles.avatarContainer}>
            <span style={{ fontSize: "4rem" }}>👨‍💻</span>
          </div>
          <h1 style={styles.name}>Kubilay Taşkafa</h1>
          <h2 style={styles.title}>
            YBS Öğrencisi &{" "}
            <span style={{ color: "var(--secondary)" }}>
              Full Stack Developer
            </span>
          </h2>
          <p style={styles.bioShort}>
            "Kod yazmayı seven bir iş analisti mi, yoksa iş dünyasını anlayan
            bir yazılımcı mı? Ben her ikisi olmaya çalışan bir{" "}
            <strong>Yönetim Bilişim Sistemleri</strong> öğrencisiyim."
          </p>
        </div>
      </section>

      {/* 2. Detaylı Hikaye ve Vizyon */}
      <section style={styles.storySection}>
        <div className="container" style={styles.storyGrid}>
          {/* Sol Kolon: Kimim Ben? */}
          <div style={styles.storyCard}>
            <h3 style={styles.cardHeader}>🎓 Akademik Yolculuk</h3>
            <p style={styles.text}>
              Necmettin Erbakan Üniversitesi (NEÜ) Yönetim Bilişim Sistemleri 3.
              sınıf öğrencisiyim. Bölümüm gereği hem işletme stratejilerine hem
              de yazılım mühendisliği disiplinlerine hakimim.
              <br />
              <br />
              Okulda teorik bilgi alırken, kendi projelerimle (TOY,
              EnglishExpert gibi) pratik yaparak sektöre hazırlanıyorum.
              Hedefim, teknik bilgimi iş zekasıyla birleştirerek değer yaratan
              ürünler ortaya koymak.
            </p>
          </div>

          {/* Sağ Kolon: Neden Bu Proje? */}
          <div style={styles.storyCard}>
            <h3 style={styles.cardHeader}>🚀 Neden YBS Kılavuz?</h3>
            <p style={styles.text}>
              YBS bölümünü tercih ederken ve okurken doğru bilgiye ulaşmanın ne
              kadar zor olduğunu fark ettim. Puanlar, sıralamalar her yerde var
              ama "Hangi okulun eğitimi daha teknik?", "Kampüs ortamı nasıl?"
              gibi soruların cevabı yoktu.
              <br />
              <br />
              Bu sorunu çözmek için Business Analyst şapkamı taktım, ihtiyaçları
              analiz ettim; Developer şapkamı taktım ve bu platformu kodladım.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Yetenekler (Tech Stack) */}
      <section style={styles.skillSection}>
        <div className="container">
          <h3
            style={{
              textAlign: "center",
              marginBottom: "30px",
              color: "var(--text-main)",
            }}
          >
            Teknik Yetkinlikler & İlgi Alanları
          </h3>

          <div style={styles.skillGrid}>
            {/* Frontend */}
            <div style={styles.skillBox}>
              <h4 style={styles.skillTitle}>Frontend Development</h4>
              <div style={styles.tags}>
                <span style={styles.tag}>React.js</span>
                <span style={styles.tag}>JavaScript (ES6+)</span>
                <span style={styles.tag}>HTML5/CSS3</span>
                <span style={styles.tag}>UI/UX Design</span>
              </div>
            </div>

            {/* Backend & Database */}
            <div style={styles.skillBox}>
              <h4 style={styles.skillTitle}>Backend & Data</h4>
              <div style={styles.tags}>
                <span style={styles.tag}>Node.js</span>
                <span style={styles.tag}>Express</span>
                <span style={styles.tag}>MongoDB</span>
                <span style={styles.tag}>Go (Learning)</span>
                <span style={styles.tag}>SQL</span>
              </div>
            </div>

            {/* Business & Tools */}
            <div style={styles.skillBox}>
              <h4 style={styles.skillTitle}>Business & Tools</h4>
              <div style={styles.tags}>
                <span style={styles.tag}>Business Analysis</span>
                <span style={styles.tag}>Git/GitHub</span>
                <span style={styles.tag}>Agile/Scrum</span>
                <span style={styles.tag}>Product Management</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. İletişim / Call to Action */}
      <section style={styles.contactSection}>
        <div className="container" style={{ textAlign: "center" }}>
          <h3 style={{ color: "#fff", marginBottom: "1rem" }}>
            Bir Fikrin mi Var?
          </h3>
          <p style={{ color: "#94A3B8", marginBottom: "2rem" }}>
            Proje hakkında geri bildirim vermek veya tanışmak istersen bana
            ulaşabilirsin.
          </p>
          <div style={styles.socialLinks}>
            <a
              href="https://github.com/kubilaytaskafa"
              target="_blank"
              rel="noreferrer"
              style={styles.socialBtn}
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/kubilaytaskafa"
              target="_blank"
              rel="noreferrer"
              style={styles.socialBtn}
            >
              LinkedIn
            </a>
            <a
              href="mailto:info.kubilay0@gmail.com"
              style={{
                ...styles.socialBtn,
                backgroundColor: "var(--secondary)",
              }}
            >
              E-Mail Gönder
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  pageContainer: {
    backgroundColor: "var(--bg-color)",
  },
  heroSection: {
    backgroundColor: "var(--white)",
    padding: "80px 0 60px",
    textAlign: "center",
    borderBottom: "1px solid #eee",
  },
  heroContent: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  avatarContainer: {
    width: "120px",
    height: "120px",
    backgroundColor: "#EFF6FF",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
    border: "4px solid var(--primary)",
  },
  name: {
    fontSize: "2.5rem",
    color: "var(--text-main)",
    marginBottom: "10px",
    fontWeight: "800",
  },
  title: {
    fontSize: "1.5rem",
    color: "#64748B",
    fontWeight: "500",
    marginBottom: "20px",
  },
  bioShort: {
    fontSize: "1.1rem",
    color: "#475569",
    lineHeight: "1.6",
    fontStyle: "italic",
  },

  storySection: {
    padding: "60px 0",
  },
  storyGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "40px",
  },
  storyCard: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.04)",
    borderTop: "4px solid var(--primary)",
  },
  cardHeader: {
    fontSize: "1.4rem",
    color: "var(--primary)",
    marginBottom: "15px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  text: {
    color: "#475569",
    lineHeight: "1.7",
    fontSize: "1rem",
  },

  skillSection: {
    padding: "40px 0 80px",
    backgroundColor: "#F1F5F9", // Hafif gri arka plan
  },
  skillGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  skillBox: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
  },
  skillTitle: {
    color: "var(--text-main)",
    marginBottom: "15px",
    borderBottom: "2px solid #eee",
    paddingBottom: "10px",
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  tag: {
    backgroundColor: "#EFF6FF",
    color: "#1E40AF",
    padding: "5px 12px",
    borderRadius: "20px",
    fontSize: "0.85rem",
    fontWeight: "600",
  },

  contactSection: {
    backgroundColor: "#1E293B",
    padding: "60px 0",
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  socialBtn: {
    padding: "10px 25px",
    backgroundColor: "rgba(255,255,255,0.1)",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "500",
    transition: "all 0.3s ease",
    border: "1px solid rgba(255,255,255,0.1)",
  },
};

export default About;
