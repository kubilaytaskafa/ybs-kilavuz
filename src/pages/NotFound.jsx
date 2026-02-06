import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      {/* 1. Terminal Penceresi */}
      <div style={styles.terminal}>
        {/* Pencere Başlığı (Trafik Işıkları) */}
        <div style={styles.terminalHeader}>
          <div style={{ ...styles.dot, background: "#EF4444" }}></div>
          <div style={{ ...styles.dot, background: "#F59E0B" }}></div>
          <div style={{ ...styles.dot, background: "#10B981" }}></div>
          <span style={styles.terminalTitle}>bash — 80x24</span>
        </div>

        {/* Terminal İçeriği */}
        <div style={styles.terminalBody}>
          <p style={styles.line}>
            <span style={{ color: "#10B981" }}>kubilay@ybs-kilavuz:~$</span> cd
            /aradığın-sayfa
          </p>
          <p style={styles.line}>
            <span style={{ color: "#EF4444" }}>bash: cd: /aradığın-sayfa:</span>{" "}
            No such file or directory
          </p>
          <p style={styles.line}>
            <span style={{ color: "#10B981" }}>kubilay@ybs-kilavuz:~$</span>{" "}
            <span style={styles.cursor}>_</span>
          </p>
        </div>
      </div>

      {/* 2. Mesaj ve Buton */}
      <div style={styles.textContainer}>
        <h2 style={styles.heading}>404 - Sayfa Bulunamadı</h2>
        <p style={styles.subText}>
          Aradığın sayfa silinmiş veya taşınmış olabilir.
        </p>
        <Link to="/" style={styles.button}>
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "70vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "var(--bg-color)",
  },
  terminal: {
    width: "100%",
    maxWidth: "500px",
    backgroundColor: "#1E293B", // Koyu renk terminal arka planı
    borderRadius: "8px",
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)", // Derin gölge
    overflow: "hidden",
    fontFamily: "'Courier New', Courier, monospace",
    marginBottom: "30px",
  },
  terminalHeader: {
    backgroundColor: "#0F172A", // Daha koyu başlık barı
    padding: "12px 16px",
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #334155",
  },
  dot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    marginRight: "8px",
  },
  terminalTitle: {
    color: "#64748B",
    fontSize: "0.8rem",
    marginLeft: "auto", // Sağa yaslar
    fontWeight: "bold",
  },
  terminalBody: {
    padding: "20px",
    color: "#E2E8F0",
    fontSize: "1rem",
    lineHeight: "1.6",
  },
  line: {
    margin: "0 0 8px 0",
    whiteSpace: "nowrap", // Yazılar alt satıra kaymasın
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  cursor: {
    display: "inline-block",
    width: "10px",
    height: "20px",
    backgroundColor: "#E2E8F0",
    verticalAlign: "middle",
    marginLeft: "5px",
    animation: "opacity 1s infinite", // Tarayıcıda varsayılan olarak çalışmayabilir ama statik dursa da şık
  },
  textContainer: {
    textAlign: "center",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "800",
    color: "var(--text-main)",
    margin: "0 0 10px 0",
  },
  subText: {
    color: "var(--text-light)",
    marginBottom: "25px",
    fontSize: "1.1rem",
  },
  button: {
    display: "inline-block",
    backgroundColor: "var(--primary)",
    color: "#fff",
    padding: "12px 32px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
    transition: "background 0.3s ease",
  },
};

export default NotFound;
