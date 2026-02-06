import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { tumTurkiyeYBS } from "../constants/universiteler"; // Veri kaynağın

const UniversityDetail = () => {
  const { isim } = useParams(); // URL'deki parametreyi al (slug)
  const [uni, setUni] = useState(null);

  // Slug oluşturucu (Eşleştirme için Explore sayfasıyla aynı olmalı)
  const slugify = (text) => {
    const trMap = {
      ç: "c",
      ğ: "g",
      ş: "s",
      ü: "u",
      ö: "o",
      ı: "i",
      İ: "i",
      Ç: "c",
      Ğ: "g",
      Ş: "s",
      Ü: "u",
      Ö: "o",
    };
    return text
      .split("")
      .map((char) => trMap[char] || char)
      .join("")
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");
  };

  useEffect(() => {
    // URL'den gelen slug ile listedeki isimleri eşleştir
    const foundUni = tumTurkiyeYBS.find((u) => slugify(u.universite) === isim);
    setUni(foundUni);
  }, [isim]);

  if (!uni) {
    return (
      <div style={styles.loadingContainer}>
        <h2>Üniversite aranıyor...</h2>
        <Link to="/universite" className="btn btn-primary">
          Listeye Dön
        </Link>
      </div>
    );
  }

  // Google Maps Embed Linki (Adresi URL formatına çeviriyoruz)
  // q=ADRES parametresi ile haritayı oluşturuyoruz.
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(uni.fakulte_adresi)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div style={styles.pageContainer}>
      {/* Hero Section: Başlık ve Temel Bilgiler */}
      <div style={styles.hero}>
        <div className="container">
          <Link to="/kesfet" style={styles.backLink}>
            ← Listeye Dön
          </Link>
          <h1 style={styles.title}>{uni.universite}</h1>
          <div style={styles.badgeContainer}>
            <span style={styles.badge}>{uni.fakulte}</span>
            <span
              style={{
                ...styles.badge,
                backgroundColor: "#FEF3C7",
                color: "#D97706",
              }}
            >
              {uni.bolum}
            </span>
          </div>
        </div>
      </div>

      <div className="container" style={styles.contentGrid}>
        {/* SOL KOLON: Harita ve İletişim */}
        <div style={styles.leftColumn}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>📍 Kampüs Konumu</h3>
            <p style={styles.addressText}>{uni.fakulte_adresi}</p>

            {/* Google Maps Iframe */}
            <div style={styles.mapContainer}>
              <iframe
                width="100%"
                height="300"
                id="gmap_canvas"
                src={mapSrc}
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                title="Google Maps"
              ></iframe>
            </div>

            {/* Harici Yol Tarifi Butonu */}
            <a
              href={`https://www.google.com/maps/dir//${encodeURIComponent(uni.fakulte_adresi)}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              style={{ width: "100%", textAlign: "center", marginTop: "15px" }}
            >
              Yol Tarifi Al 🚀
            </a>
          </div>

          {/* İstatistikler (Fake Data - İleride Backend'den gelecek) */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>📊 Bölüm İstatistikleri</h3>
            <div style={styles.statRow}>
              <span>Memnuniyet Ortalaması:</span>
              <span style={{ fontWeight: "bold", color: "var(--secondary)" }}>
                ⭐ 4.2 / 5
              </span>
            </div>
            <div style={styles.statRow}>
              <span>Yazılım Odaklılık:</span>
              <span style={{ fontWeight: "bold", color: "var(--primary)" }}>
                Yüksek
              </span>
            </div>
          </div>
        </div>

        {/* SAĞ KOLON: Ders Programı */}
        <div style={styles.rightColumn}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>📚 YBS Müfredat Dersleri</h3>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#64748B",
                marginBottom: "20px",
              }}
            >
              Bu üniversitede verilen temel YBS derslerinin listesi aşağıdadır.
            </p>

            <div style={styles.curriculumGrid}>
              {uni.dersler && uni.dersler.length > 0 ? (
                uni.dersler.map((ders, index) => (
                  <div key={index} style={styles.lessonItem}>
                    <span style={styles.checkIcon}>✓</span>
                    {ders}
                  </div>
                ))
              ) : (
                <p>Ders bilgisi girilmemiş.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    backgroundColor: "var(--bg-color)",
    minHeight: "100vh",
    paddingBottom: "4rem",
  },
  loadingContainer: {
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  },
  hero: {
    backgroundColor: "var(--primary)",
    color: "#fff",
    padding: "40px 0 60px",
    marginBottom: "-40px", // Kartların üstüne binmesi için negatif margin
  },
  backLink: {
    color: "rgba(255,255,255,0.8)",
    textDecoration: "none",
    fontSize: "0.9rem",
    marginBottom: "15px",
    display: "inline-block",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "15px",
    fontWeight: "700",
  },
  badgeContainer: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  badge: {
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: "5px 12px",
    borderRadius: "20px",
    fontSize: "0.9rem",
    backdropFilter: "blur(5px)",
  },

  contentGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // Responsive Grid
    gap: "30px",
  },
  leftColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  rightColumn: {
    flex: 1,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "25px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
    border: "1px solid #eee",
  },
  cardTitle: {
    color: "var(--text-main)",
    marginBottom: "20px",
    fontSize: "1.2rem",
    borderBottom: "1px solid #eee",
    paddingBottom: "10px",
  },
  addressText: {
    color: "#64748B",
    marginBottom: "15px",
    lineHeight: "1.5",
    fontSize: "0.95rem",
  },
  mapContainer: {
    borderRadius: "8px",
    overflow: "hidden",
    border: "1px solid #ddd",
  },
  statRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
    borderBottom: "1px dashed #eee",
    color: "#475569",
  },

  // Dersler
  curriculumGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "10px",
  },
  lessonItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "#F8FAFC",
    padding: "10px",
    borderRadius: "6px",
    fontSize: "0.9rem",
    color: "#334155",
  },
  checkIcon: {
    color: "var(--primary)",
    fontWeight: "bold",
  },
};

export default UniversityDetail;
