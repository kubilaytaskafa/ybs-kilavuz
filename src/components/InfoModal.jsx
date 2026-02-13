import React from "react";

const InfoModal = ({
  isOpen,
  onClose,
  uniName,
  facultyName,
  departmentName = "Yönetim Bilişim Sistemleri",
}) => {
  // Eğer modal kapalıysa hiçbir şey render etme (null döndür)
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modalContent}>
        <div style={styles.iconContainer}>
          <span style={{ fontSize: "2.5rem" }}>👋</span>
        </div>

        <h2 style={styles.title}>Hoş Geldiniz!</h2>

        <p style={styles.text}>
          Şu anda <strong>{uniName}</strong>, <br />
          <span style={styles.facultyText}>{facultyName}</span> <br />
          <span style={styles.facultyText}>{departmentName}</span> <br />
          detaylarını inceliyorsunuz.
        </p>

        <p style={styles.subText}>
          Aşağıda üniversitenin konumu, iletişim bilgileri ve yıllara göre
          ayrılmış ders müfredatını bulabilirsiniz.
        </p>
        <p style={styles.subText}>
          Buradaki veriler {uniName} resmi web sitelerinden derlenmiştir. Ancak
          çoğu üniversite çevrimiçi müfredat paylaşmadığı için, size genel bir
          fikir vermesi adına <strong>standart YBS ders içerikleri</strong>{" "}
          kullanılmıştır. En güncel ve kesin bilgi için lütfen üniversitenin
          resmi web sitesini ziyaret ediniz.
        </p>

        <button onClick={onClose} style={styles.button}>
          Teşekkürler, İncelemeye Başla
        </button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Arkadaki karartma
    backdropFilter: "blur(8px)", // 🔥 BUZLU CAM EFEKTİ BURADA
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999, // Her şeyin üstünde durması için
    animation: "fadeIn 0.3s ease-in-out",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "20px",
    width: "90%",
    maxWidth: "450px",
    textAlign: "center",
    boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
    position: "relative",
    border: "1px solid rgba(255,255,255,0.3)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  iconContainer: {
    marginBottom: "15px",
    animation: "bounce 2s infinite",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: "800",
    color: "#1e293b",
    marginBottom: "15px",
    lineHeight: "1.2",
  },
  text: {
    fontSize: "1.05rem",
    color: "#334155",
    marginBottom: "15px",
    lineHeight: "1.6",
  },
  facultyText: {
    color: "#64748B",
    fontStyle: "italic",
    fontSize: "0.95rem",
  },
  subText: {
    fontSize: "0.9rem",
    color: "#94A3B8",
    marginBottom: "30px",
  },
  button: {
    backgroundColor: "#0d6efd",
    color: "white",
    border: "none",
    padding: "14px 30px",
    fontSize: "1rem",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.2s ease",
    width: "100%",
    boxShadow: "0 4px 15px rgba(13, 110, 253, 0.3)",
  },
};

// Basit bir fade-in animasyonu için style tag'i ekleyelim
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
    40% {transform: translateY(-10px);}
    60% {transform: translateY(-5px);}
  }
`;
document.head.appendChild(styleSheet);

export default InfoModal;
