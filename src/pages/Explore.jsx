import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { tumTurkiyeYBS } from "../constants/universities";
import { slugify } from "../utils/slug";
import TurkeyMapFilter from "../components/TurkeyMapFilter";

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState("");

  // --- 1. Adresten Şehir Bilgisini Çıkarma Fonksiyonu ---
  // Örn: "Emniyet Mah... Yenimahalle/Ankara" -> "Ankara"
  const getCityFromAddress = (address) => {
    if (!address) return "Belirtilmemiş";
    // Slash işaretine göre ayır ve sondaki kısmı al (Genelde İlçe/İl formatındadır)
    const parts = address.split("/");
    if (parts.length > 1) {
      return parts[parts.length - 1].trim();
    }
    // Slash yoksa sondaki kelimeyi almayı deneriz
    const words = address.split(" ");
    return words[words.length - 1].trim();
  };

  // --- 2. Filtre Seçeneklerini Dinamik Olarak Oluşturma ---
  // Listede olan tüm şehirleri ve fakülteleri tekil (unique) olarak çekiyoruz.
  const uniqueCities = useMemo(() => {
    const cities = tumTurkiyeYBS.map((uni) =>
      getCityFromAddress(uni.fakulte_adresi),
    );
    return [...new Set(cities)].sort(); // Alfabetik sırala ve tekrarları kaldır
  }, []);

  const uniqueFaculties = useMemo(() => {
    const faculties = tumTurkiyeYBS.map((uni) => uni.fakulte);
    return [...new Set(faculties)].sort();
  }, []);

  // --- 3. Ana Filtreleme Mantığı ---
  const filteredUniversities = tumTurkiyeYBS.filter((uni) => {
    const city = getCityFromAddress(uni.fakulte_adresi);

    // Arama terimi kontrolü (Üniversite adı veya Bölüm)
    const matchesSearch = uni.universite
      .toLowerCase()
      .includes(searchTerm.toLocaleLowerCase("tr"));

    // Şehir seçimi kontrolü
    const matchesCity = selectedCity ? city === selectedCity : true;

    // Fakülte seçimi kontrolü
    const matchesFaculty = selectedFaculty
      ? uni.fakulte === selectedFaculty
      : true;

    return matchesSearch && matchesCity && matchesFaculty;
  });

  // Filtre temizleme
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCity("");
    setSelectedFaculty("");
  };

  return (
    <div style={styles.pageContainer}>
      {/* Header / Arama Kısmı */}
      <div style={styles.header}>
        <div className="container">
          <h1 style={styles.title}>Üniversiteleri Keşfet</h1>
          <p style={styles.subtitle}>
            YBS bölümü olan üniversiteleri şehre ve fakülteye göre filtreleyin,
            detaylı bilgilere ulaşın.
          </p>

          {/* Filtreleme Alanı Container */}
          <div style={styles.filterContainer}>
            {/* 1. Arama Inputu */}
            <div style={styles.searchWrapper}>
              <input
                type="text"
                placeholder="Üniversite ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={styles.searchInput}
              />
              <span style={styles.searchIcon}>🔍</span>
            </div>

            {/* 2. Şehir Seçimi */}
            <div style={styles.selectWrapper}>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                style={styles.selectInput}
              >
                <option value="">Tüm Şehirler</option>
                {uniqueCities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* 3. Fakülte Seçimi */}
            <div style={styles.selectWrapper}>
              <select
                value={selectedFaculty}
                onChange={(e) => setSelectedFaculty(e.target.value)}
                style={styles.selectInput}
              >
                <option value="">Tüm Fakülteler</option>
                {uniqueFaculties.map((fac, index) => (
                  <option key={index} value={fac}>
                    {fac}
                  </option>
                ))}
              </select>
            </div>

            {/* Temizle Butonu (Opsiyonel: Sadece filtre varsa görünür yapılabilir) */}
            {(searchTerm || selectedCity || selectedFaculty) && (
              <button onClick={clearFilters} style={styles.clearButton}>
                Temizle ✕
              </button>
            )}
          </div>
        </div>

        {/* Dinamik Bölüm Sayısı */}
        <div style={styles.countBadgeContainer}>
          <span className="bg-success text-white p-3 rounded shadow-sm">
            Bulunan Bölüm Sayısı: <strong>{filteredUniversities.length}</strong>
          </span>
        </div>
      </div>
      <div className="container mt-5">
        <TurkeyMapFilter onCitySelect={setSelectedCity} />
      </div>

      {/* Liste Kısmı */}
      <div className="container mt-5" style={styles.listContainer}>
        {filteredUniversities.length > 0 ? (
          <div style={styles.grid}>
            {filteredUniversities.map((uni) => (
              <div key={uni.id} style={styles.card}>
                <div style={styles.cardHeader}>
                  <div style={styles.cardIcon}>🎓</div>
                  {/* Şehir bilgisini kartta göstermek iyi olur */}
                  <span style={styles.cityBadge}>
                    📍 {getCityFromAddress(uni.fakulte_adresi)}
                  </span>
                </div>

                <div style={styles.cardContent}>
                  <h3 style={styles.uniName}>{uni.universite}</h3>
                  <p style={styles.facultyName}>{uni.fakulte}</p>
                  <p style={styles.department}>{uni.bolum}</p>

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
            <p>Seçtiğiniz kriterlere uygun üniversite bulunamadı.</p>
            <button onClick={clearFilters} style={styles.resetButton}>
              Filtreleri Temizle
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// --- STYLES ---
const styles = {
  pageContainer: {
    minHeight: "80vh",
    backgroundColor: "var(--bg-color, #f8f9fa)",
    paddingBottom: "4rem",
  },
  header: {
    backgroundColor: "var(--primary, #0d6efd)", // Fallback renk eklendi
    color: "#fff",
    padding: "60px 0 90px",
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
    marginBottom: "40px",
    maxWidth: "600px",
    margin: "0 auto 40px",
  },
  // Yeni Filtre Container Yapısı
  filterContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "15px",
    maxWidth: "900px",
    margin: "0 auto",
    padding: "0 15px",
  },
  searchWrapper: {
    position: "relative",
    flex: "2 1 300px", // Genişler
  },
  searchInput: {
    width: "100%",
    padding: "15px 20px",
    paddingRight: "50px",
    borderRadius: "12px",
    border: "none",
    fontSize: "1rem",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    outline: "none",
    height: "50px",
  },
  searchIcon: {
    position: "absolute",
    right: "15px",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "1.2rem",
    color: "#94A3B8",
  },
  selectWrapper: {
    flex: "1 1 200px", // Mobilde alt alta, masaüstünde yan yana
  },
  selectInput: {
    width: "100%",
    padding: "0 20px",
    borderRadius: "12px",
    border: "none",
    fontSize: "1rem",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    outline: "none",
    height: "50px",
    cursor: "pointer",
    backgroundColor: "#fff",
    color: "#333",
  },
  clearButton: {
    flex: "0 1 auto",
    padding: "0 20px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.4)",
    backgroundColor: "rgba(255,255,255,0.1)",
    color: "white",
    cursor: "pointer",
    height: "50px",
    fontWeight: "600",
    transition: "background 0.3s",
  },
  countBadgeContainer: {
    marginTop: "30px",
  },
  listContainer: {
    marginTop: "-50px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "25px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "25px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
    transition: "transform 0.2s, box-shadow 0.2s",
    border: "1px solid #f0f0f0",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    position: "relative",
    overflow: "hidden",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "flex-start",
    marginBottom: "20px",
  },
  cardIcon: {
    backgroundColor: "#EFF6FF",
    color: "var(--primary, #0d6efd)",
    width: "50px",
    height: "50px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
  },
  cityBadge: {
    fontSize: "0.8rem",
    backgroundColor: "#f8f9fa",
    color: "#6c757d",
    padding: "5px 10px",
    borderRadius: "20px",
    fontWeight: "600",
    border: "1px solid #eee",
  },
  cardContent: {
    width: "100%",
  },
  uniName: {
    fontSize: "1.2rem",
    color: "var(--text-main, #333)",
    marginBottom: "8px",
    lineHeight: "1.4",
    fontWeight: "700",
  },
  facultyName: {
    fontSize: "0.9rem",
    color: "var(--text-light, #666)",
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
    padding: "12px",
    backgroundColor: "transparent",
    border: "2px solid var(--primary, #0d6efd)",
    color: "var(--primary, #0d6efd)",
    textAlign: "center",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "600",
    transition: "all 0.3s",
  },
  notFound: {
    textAlign: "center",
    padding: "50px",
    color: "var(--text-light, #666)",
    backgroundColor: "#fff",
    borderRadius: "16px",
    marginTop: "60px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
  },
  resetButton: {
    marginTop: "15px",
    padding: "10px 20px",
    backgroundColor: "var(--primary, #0d6efd)",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },
};

export default Explore;
