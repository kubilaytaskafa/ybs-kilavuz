import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div className="container" style={{ textAlign: "center" }}>
          <h1 style={styles.heroTitle}>
            Yönetim Bilişim Sistemleri <br />
            <span style={{ color: "var(--secondary)" }}>
              Rehberine Hoş Geldin
            </span>
          </h1>
          <p style={styles.heroSubtitle}>
            Türkiye'deki YBS bölümlerini haritada keşfet, öğrenci yorumlarını
            oku ve doğru tercihi yap.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <Link
              to="/kesfet"
              className="btn btn-primary"
              style={{ marginRight: "10px" }}
            >
              Üniversiteleri İncele
            </Link>
            <a
              href="#ybs-nedir"
              className="btn"
              style={{
                border: "1px solid var(--text-light)",
                color: "var(--text-main)",
              }}
            >
              YBS Nedir?
            </a>
          </div>
        </div>
      </section>

      {/* Hakkımda (Personal) Section */}
      <section style={styles.sectionAlt}>
        <div className="container">
          <div style={styles.profileCard}>
            <div style={styles.profileContent}>
              <h2 style={{ color: "var(--primary)" }}>
                Merhaba, Ben Kubilay Taşkafa 👋
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-main)" }}>
                <strong>Necmettin Erbakan Üniversitesi</strong> Yönetim Bilişim
                Sistemleri (YBS) 3. sınıf öğrencisiyim.
              </p>
              <p style={{ color: "var(--text-light)" }}>
                Yazılım geliştirme ve iş analizi alanlarına ilgi duyuyorum. YBS
                bölümünü tercih etmek isteyen adaylar ve mevcut öğrenciler için
                şeffaf bir bilgi platformu oluşturmak amacıyla{" "}
                <strong>YBS Kılavuz</strong> projesini geliştirdim. Burada
                üniversitelerin gerçek imkanlarını ve öğrenci deneyimlerini
                bulacaksınız.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* YBS Nedir? Info Section */}
      <section id="ybs-nedir" style={styles.section} className="container">
        <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>
          Yönetim Bilişim Sistemleri Nedir?
        </h2>
        <div className="grid-3">
          {/* Kart 1 */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>💻 Bilişim (IT)</h3>
            <p style={styles.cardText}>
              Yazılım geliştirme, veritabanı yönetimi, ağ sistemleri ve yapay
              zeka gibi teknik konuları kapsar. Kod yazmayı sevenler için geniş
              bir alan sunar.
            </p>
          </div>
          {/* Kart 2 */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>📊 İşletme (Business)</h3>
            <p style={styles.cardText}>
              Muhasebe, pazarlama, yönetim ve organizasyon dersleri ile iş
              dünyasının dinamiklerini öğretir. Sadece kod değil, strateji
              üretmenizi sağlar.
            </p>
          </div>
          {/* Kart 3 */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>🚀 Kariyer İmkanları</h3>
            <p style={styles.cardText}>
              Mezunlar; Yazılım Geliştirici, İş Analisti, Veri Bilimci, Proje
              Yöneticisi veya SEO Uzmanı gibi birçok farklı unvanla
              çalışabilirler.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

const styles = {
  hero: {
    padding: "80px 0",
    background: "linear-gradient(to bottom, #EFF6FF, #F8FAFC)",
  },
  heroTitle: {
    fontSize: "2.5rem",
    fontWeight: "800",
    color: "var(--text-main)",
    marginBottom: "1rem",
    lineHeight: "1.2",
  },
  heroSubtitle: {
    fontSize: "1.2rem",
    color: "var(--text-light)",
    maxWidth: "600px",
    margin: "0 auto",
  },
  section: {
    padding: "60px 20px",
  },
  sectionAlt: {
    padding: "60px 20px",
    backgroundColor: "var(--white)",
    borderTop: "1px solid #eee",
    borderBottom: "1px solid #eee",
  },
  profileCard: {
    backgroundColor: "#EFF6FF", // Light Blue Background
    padding: "2rem",
    borderRadius: "12px",
    borderLeft: "5px solid var(--primary)",
  },
  card: {
    backgroundColor: "var(--white)",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
    border: "1px solid #eee",
    transition: "transform 0.2s",
  },
  cardTitle: {
    color: "var(--primary)",
    marginBottom: "1rem",
    fontSize: "1.3rem",
  },
  cardText: {
    color: "var(--text-light)",
    fontSize: "0.95rem",
  },
};

export default Home;
