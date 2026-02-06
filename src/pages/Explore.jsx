import React, { useState } from "react";
import { Link } from "react-router-dom";
import { tumTurkiyeYBS } from "../constants/universities"; // Veriyi buradan çekiyoruz
import { slugify } from "../utils/slug"; // Fonksiyonu buradan çağır

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Türkçe karakterleri İngilizce'ye ve boşlukları tireye çeviren fonksiyon
  // Örn: "Necmettin Erbakan Üniversitesi" -> "necmettin-erbakan-universitesi"

  // Arama filtresi
  const filteredUniversities = tumTurkiyeYBS.filter((uni) =>
    uni.universite.toLowerCase().includes(searchTerm.toLocaleLowerCase("tr")),
  );

  return (
    <div style={styles.pageContainer}>
      {/* Header / Arama Kısmı */}
      <div style={styles.header}>
        <div className="container">
          <h1 style={styles.title}>Üniversiteleri Keşfet</h1>
          <p style={styles.subtitle}>
            YBS bölümü olan üniversiteleri incele, fakülte bilgilerine ulaş ve
            detayları gör.
          </p>

          <div style={styles.searchWrapper}>
            <input
              type="text"
              placeholder="Üniversite ara... (Örn: Necmettin Erbakan)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={styles.searchInput}
            />
            <span style={styles.searchIcon}>🔍</span>
          </div>
        </div>
      </div>

      {/* Liste Kısmı */}
      <div className="container" style={styles.listContainer}>
        {filteredUniversities.length > 0 ? (
          <div style={styles.grid}>
            {filteredUniversities.map((uni) => (
              <div key={uni.id} style={styles.card}>
                <div style={styles.cardIcon}>🎓</div>
                <div style={styles.cardContent}>
                  <h3 style={styles.uniName}>{uni.universite}</h3>
                  <p style={styles.facultyName}>{uni.fakulte}</p>
                  <p style={styles.department}>{uni.bolum}</p>

                  {/* Dinamik Link: /universite/girne-amerikan-universitesi */}
                  <Link
                    to={`/universite/${slugify(uni.universite)}`}
                    style={styles.detailButton}
                  >
                    Detayları Gör →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={styles.notFound}>
            <h3>Sonuç Bulunamadı 😔</h3>
            <p>Aradığınız kriterlere uygun bir üniversite listelenemedi.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    minHeight: "80vh",
    backgroundColor: "var(--bg-color)",
    paddingBottom: "4rem",
  },
  header: {
    backgroundColor: "var(--primary)",
    color: "#fff",
    padding: "60px 0 80px", // Alt kısım biraz geniş ki kartlar üstüne binsin (opsiyonel) veya düz bitirebiliriz.
    textAlign: "center",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "15px",
    fontWeight: "800",
  },
  subtitle: {
    fontSize: "1.1rem",
    opacity: 0.9,
    marginBottom: "30px",
    maxWidth: "600px",
    margin: "0 auto 30px",
  },
  searchWrapper: {
    position: "relative",
    maxWidth: "500px",
    margin: "0 auto",
  },
  searchInput: {
    width: "100%",
    padding: "15px 20px",
    paddingRight: "50px",
    borderRadius: "30px",
    border: "none",
    fontSize: "1rem",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    outline: "none",
  },
  searchIcon: {
    position: "absolute",
    right: "20px",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "1.2rem",
    color: "#94A3B8",
  },

  listContainer: {
    marginTop: "-40px", // Header'ın içine hafif girsin diye
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "25px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "25px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
    transition: "transform 0.2s, box-shadow 0.2s",
    border: "1px solid #eee",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  cardIcon: {
    backgroundColor: "#EFF6FF",
    color: "var(--primary)",
    width: "50px",
    height: "50px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
    marginBottom: "20px",
  },
  cardContent: {
    width: "100%",
  },
  uniName: {
    fontSize: "1.2rem",
    color: "var(--text-main)",
    marginBottom: "5px",
    lineHeight: "1.4",
    fontWeight: "700",
  },
  facultyName: {
    fontSize: "0.95rem",
    color: "var(--text-light)",
    marginBottom: "5px",
    fontWeight: "500",
  },
  department: {
    fontSize: "0.85rem",
    color: "#94A3B8",
    marginBottom: "20px",
    fontStyle: "italic",
  },
  detailButton: {
    display: "block",
    width: "100%",
    padding: "10px",
    backgroundColor: "var(--white)",
    border: "2px solid var(--primary)",
    color: "var(--primary)",
    textAlign: "center",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
    transition: "all 0.3s",
  },
  notFound: {
    textAlign: "center",
    padding: "50px",
    color: "var(--text-light)",
    backgroundColor: "#fff",
    borderRadius: "12px",
    marginTop: "40px", // Search barın altına düşmesi için
  },
};

export default Explore;
