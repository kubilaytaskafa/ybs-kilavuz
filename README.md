# 🎓 YBS Kılavuz - Yönetim Bilişim Sistemleri Rehberi

![Project Status](https://img.shields.io/badge/Status-Development-orange)
![License](https://img.shields.io/badge/License-MIT-blue)
![React](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-61DAFB)

**YBS Kılavuz**, Türkiye'deki Yönetim Bilişim Sistemleri (YBS/MIS) bölümünü tercih etmek isteyen adaylara ve mevcut öğrencilere rehberlik etmek amacıyla geliştirilmiş açık kaynaklı bir web platformudur.

Bu proje, üniversitelerin eğitim kalitesi, kampüs imkanları ve teknik odaklılıkları hakkında şeffaf bilgi sağlamayı ve YBS mezunlarının kariyer yollarını aydınlatmayı hedefler.

---

## 📸 Proje Görselleri

_(Buraya projenin ekran görüntülerini ekleyeceksin. `public` veya `assets` klasörüne resimleri atıp aşağıdaki yolları düzenleyebilirsin.)_

|                       Ana Sayfa                       |                    Keşfet & Arama                    |
| :---------------------------------------------------: | :--------------------------------------------------: |
| ![Ana Sayfa Tasarımı](./screenshots/home-preview.png) | ![Keşfet Sayfası](./screenshots/explore-preview.png) |
|          _Modern ve kullanıcı dostu arayüz_           |             _Dinamik arama ve listeleme_             |

|                  Üniversite Detay                  |                    Meslek Rehberi                    |
| :------------------------------------------------: | :--------------------------------------------------: |
| ![Detay Sayfası](./screenshots/detail-preview.png) | ![Kariyer Sayfası](./screenshots/career-preview.png) |
|    _Google Maps entegrasyonu ve ders programı_     |               _Mezunlar ne iş yapar?_                |

---

## ✨ Özellikler

- **🔍 Üniversite Atlası:** Türkiye'deki YBS bölümlerini listeleme, şehre ve isme göre dinamik arama yapma.
- **📍 Harita Entegrasyonu:** Her üniversite için Google Maps konumu, açık adres ve tek tıkla yol tarifi alma imkanı.
- **📚 Müfredat Bilgisi:** Üniversitelerin güncel YBS ders programlarını (Sistem Analizi, Veri Tabanı, Yazılım vb.) görüntüleme.
- **💼 Kariyer Rehberi:** İş Analisti, Full Stack Developer, Product Owner gibi YBS mesleklerinin detaylı tanımları, maaş skalaları ve gerekli teknoloji yığınları (Tech Stack).
- **📱 Responsive Tasarım:** Mobil, tablet ve masaüstü uyumlu modern arayüz.

---

## 🛠️ Kullanılan Teknolojiler

Bu proje **Modern Frontend Mimarisi** kullanılarak geliştirilmiştir.

- **Core:** [React.js](https://reactjs.org/) (Vite ile)
- **Routing:** React Router DOM v6
- **Styling:** CSS3 (CSS Variables, Responsive Grid & Flexbox)
- **Maps:** Google Maps Embed API
- **Data:** JSON Based Data Management (Backend entegrasyonuna hazır yapı)

---

## 🚀 Kurulum ve Çalıştırma

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1. **Projeyi Klonlayın**

   ```bash
   git clone [https://github.com/kullaniciadi/ybs-kilavuz.git](https://github.com/kullaniciadi/ybs-kilavuz.git)
   cd ybs-kilavuz
   ```

2. **Bağımlılıkları Yükleyin**

   ```bash
   npm install
   ```

3. **Geliştirme Sunucusunu Başlatın**

   ```bash
   npm run dev
   ```

4. Tarayıcıda Açın Terminalde verilen linke (genellikle http://localhost:5173) tıklayın.

---

## Proje Yapısı

```bash
src/
├── components/      # Tekrar kullanılabilir bileşenler (Header, Footer, vb.)
├── constants/       # Sabit veriler (Üniversiteler, Meslekler, Dersler)
├── pages/           # Sayfa bileşenleri (Home, Explore, About, Careers)
├── App.jsx          # Ana uygulama ve Route tanımları
└── index.css        # Global stiller ve renk paleti
```

---

## Geliştirici

Kubilay Taşkafa Yönetim Bilişim Sistemleri Öğrencisi & Full Stack Developer

- LinkedIn: linkedin.com/in/kubilaytaskafa

- GitHub: github.com/kubilaytaskafa

---

## Katkıda Bulunma

Bu proje açık kaynaklıdır ve katkılara açıktır! YBS öğrencisiyseniz veya geliştiriciyseniz:

- Forklayın

- Yeni bir branch oluşturun (git checkout -b feature/yeni-ozellik)

- Commit atın (git commit -m 'Yeni özellik: Karanlık mod eklendi')

- Pushlayın (git push origin feature/yeni-ozellik)

- Bir Pull Request açın
