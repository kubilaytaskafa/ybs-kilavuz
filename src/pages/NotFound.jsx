import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        
        {/* Büyük 404 Başlığı */}
        <h1 style={styles.errorCode}>404</h1>
        
        {/* YBS Temalı Terminal Görünümü */}
        <div style={styles.terminalBox}>
          <div style={styles.terminalHeader}>
            <span style={styles.dotRed}></span>
            <span style={styles.dotYellow}></span>
            <span style={styles.dotGreen}></span>
            <span style={{marginLeft: '10px', fontSize: '0.8rem', opacity: 0.7}}>system_log.js</span>
          </div>
          <div style={styles.terminalBody}>
            <p style={styles.codeLine}>
              <span style={{color: '#F59E0B'}}>Error:</span> Page_Not_Found
            </p>
            <p style={styles.codeLine}>
              <span style={{color: '#2563EB'}}>Analysis:</span> Aradığın sayfa veritabanında bulunamadı.
            </p>
            <p style={styles.codeLine}>
              <span style={{color: '#10B981'}}>Possible_Reasons:</span> ["Henüz kodlanmadı", "Yanlış URL", "Developer kahve molasında"]
            </p>
            <p style={styles.codeLine} className="blinking-cursor">
              > Lütfen rotanızı yeniden oluşturun..._
            </p>
          </div>
        </div>

        {/* Açıklama ve Buton */}
        <h2 style={styles.title}>Rotanızı mı Kaybettiniz?</h2>
        <p style={styles.text}>
          Görünüşe göre gitmeye çalıştığınız yer haritamızda işaretli değil. 
          Belki de bu sayfa henüz bir Business Analyst tarafından analiz edilmemiştir. 😅
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
    minHeight: '70vh', // Header ve Footer arasında ortalamak için
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    textAlign: 'center',
  },
  content: {
    maxWidth: '600px',
    width: '100%',
  },
  errorCode: {
    fontSize: '6rem',
    fontWeight: '900',
    color: 'var(--primary)', // Projenin ana mavisi
    margin: '0',
    lineHeight: '1',
    opacity: 0.2, // Arka planda silik dursun
  },
  terminalBox: {
    backgroundColor: '#1E293B', // Footer rengi (Koyu Slate)
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    textAlign: 'left',
    margin: '-30px auto 30px', // 404 yazısının üstüne hafif binsin
    position: 'relative',
    maxWidth: '500px',
  },
  terminalHeader: {
    backgroundColor: '#0F172A', // Daha koyu başlık
    padding: '10px 15px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    color: '#fff'
  },
  dotRed: { width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#EF4444' },
  dotYellow: { width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#F59E0B' },
  dotGreen: { width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10B981' },
  
  terminalBody: {
    padding: '20px',
    fontFamily: "'Courier New', Courier, monospace", // Kod fontu
    color: '#E2E8F0',
    fontSize: '0.95rem',
  },
  codeLine: {
    margin: '5px 0',
  },
  title: {
    fontSize: '1.8rem',
    color: 'var(--text-main)',
    marginBottom: '10px',
  },
  text: {
    color: 'var(--text-light)',
    marginBottom: '30px',
    fontSize: '1.1rem',
  },
  button: {
    display: 'inline-block',
    backgroundColor: 'var(--primary)',
    color: '#fff',
    padding: '12px 30px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'background 0.3s',
    boxShadow: '0 4px 6px rgba(37, 99, 235, 0.2)'
  }
};

export default NotFound;