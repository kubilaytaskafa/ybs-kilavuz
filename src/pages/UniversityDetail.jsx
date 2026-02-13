import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { tumTurkiyeYBS } from "../constants/universities";
import { slugify } from "../utils/slug";
import InfoModal from "../components/InfoModal";

const UniversityDetail = () => {
  const { isim } = useParams();
  const [uni, setUni] = useState(null);
  const [showModal, setShowModal] = useState(false); // Modal state'i

  useEffect(() => {
    const foundUni = tumTurkiyeYBS.find((u) => slugify(u.universite) === isim);
    setUni(foundUni);

    // Üniversite bulunduğunda Modalı aç
    if (foundUni) {
      setShowModal(true);
    }
  }, [isim]);

  if (!uni) {
    return (
      <div style={styles.loadingContainer}>
        <div className="spinner-border text-primary" role="status"></div>
        <h2 style={{ marginTop: "20px", color: "#64748B" }}>
          Üniversite bilgileri yükleniyor...
        </h2>
        <Link to="/universite" style={styles.backButton}>
          Listeye Dön
        </Link>
      </div>
    );
  }

  // Google Maps Embed Linki
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    uni.fakulte_adresi,
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  // Sınıf isimlerini daha kullanıcı dostu hale getirmek için yardımcı obje
  const gradeLabels = {
    grade_1: "1. Sınıf (Temel Düzey)",
    grade_2: "2. Sınıf (Orta Düzey)",
    grade_3: "3. Sınıf (İhtisas)",
    grade_4: "4. Sınıf (Bitirme & Proje)",
  };

  return (
    <div style={styles.pageContainer}>
      {/* --- HERO SECTION --- */}
      <InfoModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        uniName={uni.universite}
        facultyName={uni.fakulte}
        departmentName={uni.bolum}
      />
      <div style={styles.hero}>
        <div className="container">
          <Link to="/universite" style={styles.backLink}>
            ← Listeye Dön
          </Link>
          <h1 style={styles.title}>{uni.universite}</h1>
          <div style={styles.badgeContainer}>
            <span style={styles.badgeWhite}>{uni.fakulte}</span>
            <span style={styles.badgeYellow}>{uni.bolum}</span>
          </div>
        </div>
      </div>

      <div className="container" style={styles.contentGrid}>
        {/* --- SOL KOLON: İletişim & Harita --- */}
        <div style={styles.leftColumn}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>📍 İletişim & Konum</h3>
            <p style={styles.addressText}>{uni.fakulte_adresi}</p>

            <div style={styles.mapContainer}>
              <iframe
                width="100%"
                height="250"
                id="gmap_canvas"
                src={mapSrc}
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                title="Google Maps"
              ></iframe>
            </div>

            <a
              href={`https://maps.google.com/maps?q=${encodeURIComponent(
                uni.fakulte_adresi,
              )}`}
              target="_blank"
              rel="noreferrer"
              style={styles.directionButton}
            >
              Yol Tarifi Al 🚀
            </a>
          </div>

          {/* İstatistik Kartı (Opsiyonel) */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>📊 Genel Bakış</h3>
            <div style={styles.statRow}>
              <span>Eğitim Dili:</span>
              <span style={{ fontWeight: "600" }}>Türkçe / İngilizce</span>
            </div>
            <div style={styles.statRow}>
              <span>Eğitim Türü:</span>
              <span style={{ fontWeight: "600" }}>Örgün Öğretim</span>
            </div>
            {/* Toplam Ders Sayısı Hesabı */}
            <div style={styles.statRow}>
              <span>Toplam Ders:</span>
              <span style={{ fontWeight: "bold", color: "var(--primary)" }}>
                {uni.dersler ? Object.values(uni.dersler).flat().length : 0}{" "}
                Adet
              </span>
            </div>
          </div>
        </div>

        {/* --- SAĞ KOLON: Müfredat (Yıllara Göre) --- */}
        <div style={styles.rightColumn}>
          <div style={styles.curriculumHeader}>
            <h2 style={styles.sectionTitle}>📚 Akademik Müfredat</h2>
            <p style={styles.sectionSubtitle}>
              Yönetim Bilişim Sistemleri bölümü için yıl bazlı ders programı.
            </p>
          </div>

          {uni.dersler ? (
            <div style={styles.yearGrid}>
              {/* Object.entries ile grade_1, grade_2... üzerinde dönüyoruz */}
              {Object.entries(uni.dersler).map(([key, courses]) => (
                <div key={key} style={styles.yearCard}>
                  <div style={styles.yearHeader}>
                    <h3 style={styles.yearTitle}>
                      {gradeLabels[key] || key.toUpperCase()}
                    </h3>
                    <span style={styles.courseCountBadge}>
                      {courses.length} Ders
                    </span>
                  </div>

                  <ul style={styles.courseList}>
                    {courses.map((ders, idx) => (
                      <li key={idx} style={styles.courseItem}>
                        <span style={styles.checkIcon}>🔹</span>
                        {ders}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div style={styles.card}>
              <p>Bu üniversite için henüz ders bilgisi girilmemiştir.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- STYLES ---
const styles = {
  pageContainer: {
    backgroundColor: "#F1F5F9", // Hafif gri arka plan
    minHeight: "100vh",
    paddingBottom: "4rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  loadingContainer: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8FAFC",
  },
  backButton: {
    padding: "10px 20px",
    backgroundColor: "#0d6efd",
    color: "white",
    textDecoration: "none",
    borderRadius: "8px",
    marginTop: "10px",
  },
  // Hero Section
  hero: {
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", // Koyu modern tema
    color: "#fff",
    padding: "60px 0 80px",
    marginBottom: "-50px", // İçeriğin hero'ya girmesi için
  },
  backLink: {
    color: "#94A3B8",
    textDecoration: "none",
    fontSize: "0.95rem",
    marginBottom: "20px",
    display: "inline-block",
    transition: "color 0.2s",
    fontWeight: "500",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    fontWeight: "800",
    lineHeight: "1.2",
  },
  badgeContainer: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },
  badgeWhite: {
    backgroundColor: "rgba(255,255,255,0.1)",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: "30px",
    fontSize: "0.9rem",
    backdropFilter: "blur(4px)",
    border: "1px solid rgba(255,255,255,0.2)",
  },
  badgeYellow: {
    backgroundColor: "#F59E0B", // Amber rengi
    color: "#fff",
    padding: "8px 16px",
    borderRadius: "30px",
    fontSize: "0.9rem",
    fontWeight: "600",
    boxShadow: "0 4px 6px rgba(245, 158, 11, 0.3)",
  },

  // Layout
  contentGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
    position: "relative",
    zIndex: 10,
  },
  leftColumn: {
    flex: "0 0 350px", // Sabit genişlikli yan bar (Desktop)
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  },
  rightColumn: {
    flex: 1, // Kalan alanı kapla
  },

  // Genel Kart Stili
  card: {
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "25px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
    border: "1px solid #e2e8f0",
  },
  cardTitle: {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: "15px",
    paddingBottom: "10px",
    borderBottom: "1px solid #f1f5f9",
  },
  addressText: {
    color: "#64748B",
    fontSize: "0.95rem",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  mapContainer: {
    borderRadius: "12px",
    overflow: "hidden",
    border: "1px solid #e2e8f0",
  },
  directionButton: {
    display: "block",
    width: "100%",
    padding: "12px",
    backgroundColor: "#0d6efd",
    color: "#fff",
    textAlign: "center",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "600",
    marginTop: "15px",
    transition: "background 0.3s",
    boxShadow: "0 4px 10px rgba(13, 110, 253, 0.2)",
  },
  statRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 0",
    borderBottom: "1px dashed #e2e8f0",
    color: "#475569",
    fontSize: "0.95rem",
  },

  // Müfredat Alanı
  curriculumHeader: {
    marginBottom: "25px",
  },
  sectionTitle: {
    marginTop: "4rem",
    fontSize: "1.8rem",
    fontWeight: "700",
    color: "#1e293b", // Koyu lacivert
    marginBottom: "5px",
  },
  sectionSubtitle: {
    color: "#64748B",
    fontSize: "1rem",
  },
  yearGrid: {
    display: "grid",
    gap: "25px",
    gridTemplateColumns: "1fr", // Mobilde tek kolon, aşağıda media query yok ama flex-grow ile halledilebilir
  },
  yearCard: {
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "0", // Header ve body ayrı olduğu için 0
    boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
    border: "1px solid #e2e8f0",
    overflow: "hidden",
    marginBottom: "10px",
  },
  yearHeader: {
    backgroundColor: "#f8fafc",
    padding: "15px 25px",
    borderBottom: "1px solid #e2e8f0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  yearTitle: {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: "#334155",
    margin: 0,
  },
  courseCountBadge: {
    fontSize: "0.8rem",
    backgroundColor: "#e2e8f0",
    padding: "4px 10px",
    borderRadius: "12px",
    color: "#475569",
    fontWeight: "600",
  },
  courseList: {
    listStyle: "none",
    padding: "20px 25px",
    margin: 0,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", // Kart içinde de grid
    gap: "12px",
  },
  courseItem: {
    fontSize: "0.9rem",
    color: "#475569",
    display: "flex",
    alignItems: "flex-start", // Uzun ders isimlerinde üstte kalsın
    gap: "10px",
    padding: "8px",
    backgroundColor: "#fcfcfc",
    borderRadius: "8px",
    border: "1px solid #f1f5f9",
    lineHeight: "1.5",
  },
  checkIcon: {
    color: "#0d6efd",
    fontSize: "0.8rem",
    marginTop: "3px", // İkonu metinle hizalamak için
  },
};

export default UniversityDetail;
