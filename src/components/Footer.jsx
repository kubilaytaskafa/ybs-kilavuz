import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        <div style={styles.column}>
          <h3 style={styles.title}>YBS Kılavuz</h3>
          <p style={styles.text}>
            Yönetim Bilişim Sistemleri öğrencileri ve adayları için
            geliştirilmiş, açık kaynaklı bilgi paylaşım platformu.
          </p>
        </div>

        <div style={styles.column}>
          <h4 style={styles.subtitle}>Bağlantılar</h4>
          <ul style={styles.list}>
            <li>
              <a href="/" style={styles.link}>
                Ana Sayfa
              </a>
            </li>
            <li>
              <a href="/universite" style={styles.link}>
                Üniversiteler
              </a>
            </li>
          </ul>
        </div>

        <div style={styles.column}>
          <h4 style={styles.subtitle}>Geliştirici</h4>
          <p style={styles.text}>
            Bu proje <strong>Kubilay Taşkafa</strong> tarafından
            geliştirilmektedir.
          </p>
          <p style={{ fontSize: "0.8rem", opacity: 0.7, marginTop: "10px" }}>
            &copy; 2026 Tüm Hakları Saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#1E293B", // Koyu renk footer
    color: "#F8FAFC",
    padding: "3rem 0",
    marginTop: "auto", // Footer'ı sayfa kısaysa bile en alta itmek için
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
  },
  title: {
    color: "var(--secondary)",
    marginBottom: "1rem",
  },
  subtitle: {
    color: "var(--white)",
    marginBottom: "1rem",
    fontSize: "1.1rem",
  },
  text: {
    color: "#94A3B8",
    fontSize: "0.9rem",
    lineHeight: "1.6",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  link: {
    color: "#94A3B8",
    textDecoration: "none",
    marginBottom: "0.5rem",
    display: "block",
    transition: "color 0.2s",
  },
  column: {
    padding: "0 10px",
  },
};

export default Footer;
