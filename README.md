# 🎓 YBS Kılavuz - Yönetim Bilişim Sistemleri Rehberi

![Project Status](https://img.shields.io/badge/Status-Development-orange)
![License](https://img.shields.io/badge/License-MIT-blue)
![React](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-61DAFB)

**YBS Kılavuz**, Türkiye'deki Yönetim Bilişim Sistemleri (YBS/MIS) bölümünü tercih etmek isteyen adaylara ve mevcut öğrencilere rehberlik etmek amacıyla geliştirilmiş açık kaynaklı bir web platformudur.

Bu proje, üniversitelerin eğitim kalitesi, kampüs imkanları ve teknik odaklılıkları hakkında şeffaf bilgi sağlamayı ve YBS mezunlarının kariyer yollarını aydınlatmayı hedefler.

---

## 📸 Proje Görselleri

_(Buraya projenin ekran görüntülerini ekleyeceksin. `public` veya `assets` klasörüne resimleri atıp aşağıdaki yolları düzenleyebilirsin.)_

|                 Ana Sayfa                  |
| :----------------------------------------: |
|<img width="1898" height="868" alt="Ekran görüntüsü 2026-02-06 142155" src="https://github.com/user-attachments/assets/f24d1e24-ed23-433e-9ec2-d2ae1afcdd57" /> |
|     _Modern ve kullanıcı dostu arayüz_     |

|               Keşfet & Arama               |
| :----------------------------------------: |
| <img width="1898" height="868" alt="Ekran görüntüsü 2026-02-06 142236" src="https://github.com/user-attachments/assets/526dcdc3-7408-4bdf-87a9-3fb8bae4f9b2" />|
|<img width="1222" height="500" alt="Ekran görüntüsü 2026-02-06 142257" src="https://github.com/user-attachments/assets/0bee7385-9e21-41e1-b4c6-5c25e69289a9" />|
|        _Dinamik arama ve listeleme_        |



|              Üniversite Detay               |
| :-----------------------------------------: |
| <img width="1901" height="865" alt="Ekran görüntüsü 2026-02-06 142319" src="https://github.com/user-attachments/assets/f62463bd-0870-47df-8dbf-d256e50c7660" />|
| _Google Maps entegrasyonu ve ders programı_ |

|               Meslek Rehberi               |
| :----------------------------------------: |
| <img width="1900" height="867" alt="Ekran görüntüsü 2026-02-06 142339" src="https://github.com/user-attachments/assets/e9efe54e-61bf-4fc4-9edc-14ea278f53ea" />|
| <img width="1411" height="693" alt="Ekran görüntüsü 2026-02-06 142353" src="https://github.com/user-attachments/assets/eebedb66-c917-4306-ae56-06416f6f3db3" />|
|          _Mezunlar ne iş yapar?_           |


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
- **Styling:** CSS3 (CSS Variables, Responsive Grid & Flexbox) , Bootstrap , Bootstrap-icons
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
