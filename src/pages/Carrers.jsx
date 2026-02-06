import React, { useState } from "react";
import { CAREERS } from "../constants/meslekler"; // Dosya yolunu kontrol et

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div style={styles.pageContainer}>
      {/* Hero Section */}
      <div style={styles.header}>
        <div className="container">
          <h1 style={styles.title}>YBS Mezunları Ne İş Yapar?</h1>
          <p style={styles.subtitle}>
            Yönetim Bilişim Sistemleri, teknoloji ve işletmenin kesişim
            noktasıdır. İlgi alanına göre seçebileceğin kariyer yollarını senin
            için derledik.
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="container" style={styles.gridContainer}>
        {CAREERS.map((job) => (
          <div
            key={job.id}
            style={styles.card}
            onClick={() => setSelectedJob(job)}
          >
            <div style={styles.icon}>{job.icon}</div>
            <h3 style={styles.cardTitle}>{job.title}</h3>
            <p style={styles.cardDesc}>{job.shortDesc}</p>
            <button style={styles.readMoreBtn}>Detayları İncele →</button>
          </div>
        ))}
      </div>

      {/* Modal (Popup) */}
      {selectedJob && (
        <div style={styles.modalOverlay} onClick={() => setSelectedJob(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              style={styles.closeBtn}
              onClick={() => setSelectedJob(null)}
            >
              ✕
            </button>

            <div style={styles.modalHeader}>
              <span style={{ fontSize: "3rem", marginRight: "15px" }}>
                {selectedJob.icon}
              </span>
              <div>
                <h2 style={{ color: "var(--primary)", margin: 0 }}>
                  {selectedJob.title}
                </h2>
                <span style={styles.badge}>
                  Maaş Skalası: {selectedJob.salaryLevel}
                </span>
              </div>
            </div>

            <div style={styles.modalBody}>
              <h4 style={styles.sectionTitle}>Bu Rol Ne Yapar?</h4>
              <p style={styles.modalText}>{selectedJob.description}</p>

              <div style={styles.flexRow}>
                <div style={{ flex: 1 }}>
                  <h4 style={styles.sectionTitle}>
                    Gerekli Beceriler (Soft Skills)
                  </h4>
                  <ul style={styles.list}>
                    {selectedJob.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ flex: 1 }}>
                  <h4 style={styles.sectionTitle}>Teknolojiler & Araçlar</h4>
                  <div style={styles.tagContainer}>
                    {selectedJob.technologies.map((tech, index) => (
                      <span key={index} style={styles.tag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// CSS-in-JS Styles
const styles = {
  pageContainer: {
    paddingBottom: "4rem",
    minHeight: "80vh",
  },
  header: {
    backgroundColor: "var(--primary)",
    color: "#fff",
    padding: "60px 0",
    textAlign: "center",
    marginBottom: "40px",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.1rem",
    opacity: 0.9,
    maxWidth: "700px",
    margin: "0 auto",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // Responsive Grid
    gap: "30px",
    padding: "0 20px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "30px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
    border: "1px solid #e2e8f0",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  // Hover efekti için CSS dosyasına .card:hover { transform: translateY(-5px) } ekleyebilirsin
  icon: {
    fontSize: "3rem",
    marginBottom: "15px",
    backgroundColor: "#F1F5F9",
    width: "70px",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
  },
  cardTitle: {
    color: "var(--text-main)",
    marginBottom: "10px",
    fontSize: "1.25rem",
  },
  cardDesc: {
    color: "var(--text-light)",
    fontSize: "0.95rem",
    marginBottom: "20px",
    lineHeight: "1.5",
  },
  readMoreBtn: {
    marginTop: "auto",
    backgroundColor: "transparent",
    border: "none",
    color: "var(--primary)",
    fontWeight: "600",
    cursor: "pointer",
    padding: 0,
    fontSize: "1rem",
  },

  // MODAL STYLES
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2000,
    backdropFilter: "blur(3px)",
  },
  modalContent: {
    backgroundColor: "#fff",
    width: "90%",
    maxWidth: "700px",
    borderRadius: "16px",
    padding: "30px",
    position: "relative",
    maxHeight: "90vh",
    overflowY: "auto",
    animation: "fadeIn 0.3s ease",
  },
  closeBtn: {
    position: "absolute",
    top: "15px",
    right: "20px",
    background: "none",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "#64748B",
  },
  modalHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: "25px",
    borderBottom: "1px solid #eee",
    paddingBottom: "20px",
  },
  badge: {
    display: "inline-block",
    backgroundColor: "#FEF3C7",
    color: "#D97706",
    padding: "4px 10px",
    borderRadius: "20px",
    fontSize: "0.8rem",
    fontWeight: "600",
    marginTop: "5px",
  },
  sectionTitle: {
    color: "var(--text-main)",
    fontSize: "1.1rem",
    marginBottom: "10px",
    borderLeft: "4px solid var(--secondary)",
    paddingLeft: "10px",
  },
  modalText: {
    color: "#475569",
    lineHeight: "1.7",
    marginBottom: "25px",
  },
  flexRow: {
    display: "flex",
    gap: "30px",
    flexWrap: "wrap",
  },
  list: {
    paddingLeft: "20px",
    color: "#475569",
  },
  tagContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },
  tag: {
    backgroundColor: "#EFF6FF",
    color: "var(--primary)",
    padding: "6px 12px",
    borderRadius: "6px",
    fontSize: "0.9rem",
    fontWeight: "500",
  },
};

export default Careers;
